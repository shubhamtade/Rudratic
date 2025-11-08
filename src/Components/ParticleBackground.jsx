import React, { useEffect, useRef, useState } from 'react';

// A more robust way to get a CSS variable that might not be available on first render.
const useThemeColor = (variableName, fallbackHsl = '259 92% 60%') => {
  const [colorHsl, setColorHsl] = useState(null);

  useEffect(() => {
    let observer;
    let timeoutId;

    const checkAndSetColor = () => {
      if (typeof window === 'undefined') return false;
      const computedStyle = getComputedStyle(document.documentElement);
      const hslValue = computedStyle.getPropertyValue(variableName).trim();

      if (hslValue) {
        setColorHsl(hslValue);
        return true;
      }
      return false;
    };

    // 1. Try to get the color immediately.
    if (checkAndSetColor()) {
      return;
    }

    // 2. If it fails, set up a MutationObserver to listen for theme changes
    //    (e.g., when DaisyUI adds the data-theme attribute).
    observer = new MutationObserver(() => {
      if (checkAndSetColor()) {
        observer.disconnect(); // Stop observing once we have the color.
        clearTimeout(timeoutId);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class'], // Watch for theme/class changes
    });

    // 3. As a final fallback, set a default color after a short delay.
    //    This handles cases where the observer might not fire.
    timeoutId = setTimeout(() => {
      if (!colorHsl) {
        console.warn(`[ParticleBackground] CSS variable '${variableName}' not found. Using fallback.`);
        setColorHsl(fallbackHsl);
      }
    }, 1000); // 1-second timeout as a safety net

    // Cleanup function to prevent memory leaks
    return () => {
      if (observer) observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [variableName, fallbackHsl, colorHsl]); // re-run if variableName changes

  return colorHsl;
};

const ParticleBackground = ({ density = 50, colorVariable = '--p' }) => {
  const canvasRef = useRef(null);
  const primaryColorHSL = useThemeColor(colorVariable); // Use the custom hook

  useEffect(() => {
    // Wait until we have a color before initializing the canvas animation
    if (!primaryColorHSL || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.4 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x <= 0 || this.x >= canvas.width) this.speedX *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = `hsla(${primaryColorHSL} / ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    
    const init = () => {
      canvas.width = canvas.clientWidth;
      canvas.height = canvas.clientHeight;
      particles = [];
      const numParticles = Math.floor(density * (canvas.width * canvas.height) / (1920 * 1080));
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle, index) => {
        particle.update();
        particle.draw();

        for (let i = index + 1; i < particles.length; i++) {
          const otherParticle = particles[i];
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const lineOpacity = (1 - distance / 150) * 0.25;
            ctx.strokeStyle = `hsla(${primaryColorHSL} / ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);

    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    };
  }, [density, primaryColorHSL]); // The animation now depends on the resolved color

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleBackground;