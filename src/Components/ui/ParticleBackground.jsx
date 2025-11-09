import React, { useEffect, useRef } from "react";

const ParticleSparkleBackground = ({ density = 60 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let particles = [];
    let mouse = { x: null, y: null };

    const getThemeColor = () => {
      const style = getComputedStyle(document.documentElement);
      const light = style.getPropertyValue("--p").trim() || "259 92% 60%";
      const isDark = document.documentElement.getAttribute("data-theme")?.includes("dark");
      return isDark ? `hsl(${light})` : `hsl(${light})`;
    };

    let color = getThemeColor();

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.speed = Math.random() * 0.3 + 0.05;
        this.angle = Math.random() * 360;
      }

      draw() {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.6;
        ctx.shadowBlur = 10;
        ctx.shadowColor = color;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.shadowBlur = 0;
      }

      update() {
        this.angle += this.speed;
        this.y += Math.sin(this.angle * 0.05) * 0.3;
        this.x += Math.cos(this.angle * 0.05) * 0.3;

        // Gentle pull toward mouse
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 120) {
          this.x -= dx / 20;
          this.y -= dy / 20;
        }

        // Wrap around
        if (this.x < 0) this.x = width;
        if (this.x > width) this.x = 0;
        if (this.y < 0) this.y = height;
        if (this.y > height) this.y = 0;

        this.draw();
      }
    }

    const init = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      particles = [];
      const numParticles = Math.floor((width * height * density) / (1920 * 1080));
      for (let i = 0; i < numParticles; i++) particles.push(new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => p.update());
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };

    const handleResize = () => init();

    init();
    animate();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Listen for theme change (DaisyUI updates data-theme)
    const observer = new MutationObserver(() => {
      color = getThemeColor();
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full pointer-events-none z-0 transition-opacity duration-700"
    />
  );
};

export default ParticleSparkleBackground;
