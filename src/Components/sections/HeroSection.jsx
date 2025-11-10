import React, { useRef } from "react";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { Calendar, Play, Zap, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import ParticleBackground from "../ui/ParticleBackground";

// A more robust, forward-ref ready AuroraCard component that is also a motion component
const AuroraCard = React.forwardRef(({ children, className, ...rest }, ref) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const internalRef = cardRef.current || ref?.current;
    if (!internalRef) return;
    const rect = internalRef.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    internalRef.style.setProperty("--x", `${x}px`);
    internalRef.style.setProperty("--y", `${y}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
});

const HeroSection = () => {
  const stats = [
    { value: "100%", label: "Success Rate" },
    { value: "500+", label: "Clients" },
    { value: "24/7", label: "Support" },
    { value: "99.9%", label: "Uptime" },
  ];

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Create parallax effects for the right-side visuals
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  // Animation variants for the headline
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.06, // Slightly faster stagger
      },
    },
  };

  const word = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const headlineText =
    "Transform Your Business with Integrated IT Security & Automation";

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen bg-base-100 flex items-center pt-36 pb-16 sm:pb-0 overflow-hidden"
    >
      <ParticleBackground density={50} colorVariable="--p" />

      {/* Decorative Gradient Blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,hsla(var(--p)/0.1),transparent_70%)] blur-3xl -z-1" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,hsla(var(--s)/0.1),transparent_70%)] blur-3xl -z-1" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2.5 bg-primary/10 backdrop-blur-xl border border-primary/20 rounded-full px-4 py-2 mb-6 cursor-pointer hover:bg-primary/20 transition-all"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Zap size={16} className="text-primary" />
              </motion.div>
              <span className="text-base-content/90 text-xs font-semibold tracking-wider">
                LEADING IT SECURITY & AUTOMATION
              </span>
            </motion.div>

            <motion.h1
              variants={sentence}
              className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-tight mb-3 text-base-content tracking-tighter"
            >
              {headlineText.split(" ").map((char, index) => {
                const isGradient =
                  char.toLowerCase().includes("security") ||
                  char.toLowerCase().includes("automation");
                return (
                  <motion.span
                    key={char + "-" + index}
                    variants={word}
                    className="inline-block mr-[0.25em]"
                  >
                    {char === "Business" ? (
                      <>
                        {char}
                        <br />
                      </>
                    ) : (
                      ""
                    )}
                    {char === "Integrated" ? (
                      <>
                        <span className="text-base-content/70">{char}</span>
                        <br />
                      </>
                    ) : (
                      ""
                    )}
                    {!["Business", "Integrated"].includes(char) && (
                      <span
                        className={
                          isGradient
                            ? "gradient-text-animated"
                            : "text-base-content"
                        }
                      >
                        {char}
                      </span>
                    )}
                  </motion.span>
                );
              })}
            </motion.h1>

            {/* Tagline for clarity */}
            <motion.p
              variants={fadeInUp}
              className="text-xl text-primary font-semibold mb-2 max-w-xl"
            >
              Secure. Automate. Empower. Your trusted partner for IT security
              and digital transformation.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-base-content/60 mb-10 leading-relaxed max-w-lg"
            >
              We empower organizations to achieve secure, efficient, and agile
              operations through expert consulting, implementation, and
              management of advanced IT solutions.
            </motion.p>
            {/* Scroll cue at bottom of hero */}
            <div className="absolute left-1/2 bottom-8 -translate-x-1/2 z-20 flex flex-col items-center">
              <span className="text-base-content/60 text-xs mb-1">
                Scroll Down
              </span>
              <span className="animate-bounce text-primary">
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-chevron-down"
                  viewBox="0 0 24 24"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                onClick={() => window.openDemoModal && window.openDemoModal()}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary btn-lg group btn-primary-glow"
              >
                <Calendar size={18} />
                Schedule a Demo
                <motion.span
                  className="inline-block"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  animate={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-ghost btn-lg"
              >
                <Play size={18} /> Watch Demo Video
              </motion.button>
              {/* Quick jump to Products on the homepage */}
              <a
                href="#products"
                className="btn btn-outline btn-lg hidden sm:inline-flex items-center justify-center"
              >
                Explore Products
              </a>
            </motion.div>

            {/* --- FIX APPLIED HERE --- */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <AnimatePresence>
                {stats.map((stat, idx) => (
                  <AuroraCard
                    key={idx}
                    variants={fadeInUp}
                    whileHover={{ y: -8, scale: 1.05 }}
                    className="aurora-card card bg-base-content/5 backdrop-blur-xl border border-base-content/10 shadow-lg hover:bg-base-content/10 hover:border-primary/20 transition-all duration-300"
                  >
                    <div className="card-body items-center text-center p-4">
                      {/* Added fallback text-primary class here */}
                      <h2 className="card-title text-3xl font-bold gradient-text-animated text-primary">
                        {stat.value}
                      </h2>
                      <p className="text-xs text-base-content/50 font-medium tracking-wider uppercase">
                        {stat.label}
                      </p>
                    </div>
                  </AuroraCard>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Right Visuals Column with Parallax and Floating effects */}
          <motion.div
            style={{ y: y1 }}
            className="hidden lg:block relative floating-container"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="card bg-base-content/5 backdrop-blur-2xl border border-base-content/10 shadow-xl p-4 mb-5"
            >
              <div className="w-full h-auto aspect-video rounded-box overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/rutradic.mp4"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>

            <motion.div style={{ y: y2 }} className="grid grid-cols-2 gap-5">
              {["/map_image.png", "/hero1.png"].map((imagePath, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.8 + idx * 0.2,
                  }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  className="card bg-base-content/5 backdrop-blur-2xl border border-base-content/10 h-40 shadow-lg"
                >
                  <figure className="w-full h-full bg-base-content/10 m-0">
                    {/* Changed to object-cover and removed padding */}
                    <img
                      src={imagePath}
                      alt={`Image ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </figure>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
