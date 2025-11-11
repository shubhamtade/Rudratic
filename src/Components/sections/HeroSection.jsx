import React, { useRef } from "react";
import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  Cloud,
  Database,
  Bot,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import ParticleBackground from "../ui/ParticleBackground";

// AuroraCard: glowing motion-reactive card
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
      className={`relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-primary/20 via-transparent to-accent/30 transition-all duration-500 hover:from-primary/40 hover:to-accent/50 ${className}`}
      {...rest}
    >
      <div className="rounded-2xl bg-base-100/80 backdrop-blur-xl">{children}</div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.12),transparent_60%)] pointer-events-none transition-all" />
    </motion.div>
  );
});

const HeroSection = () => {
  const stats = [
    { value: "100+", label: "Global Enterprises" },
    { value: "24/7", label: "Proactive Support" },
    { value: "99.99%", label: "Uptime SLA" },
    { value: "1M+", label: "Identities Secured" },
  ];

  const features = [
    { label: "AI-Native PAM", icon: ShieldCheck },
    { label: "Cloud PAM", icon: Cloud },
    { label: "Database Audit", icon: Database },
    { label: "AI Automation", icon: Bot },
  ];

  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { delay: 0.3, staggerChildren: 0.06 },
    },
  };
  const word = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
  };

  const headlineText = "Enterprise-Grade Security & Intelligence";
  const subHeadline = "Transform Your Enterprise Security & Data Intelligence";

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center pt-36 md:mt-20 lg:mt-0 pb-10 overflow-hidden bg-base-100 text-base-content"
    >
      <ParticleBackground density={70} colorVariable="--p" />

      {/* Aurora & Glow Backgrounds */}
      <div className="absolute top-[-15%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle,hsla(var(--p)/0.25),transparent_70%)] blur-[120px] -z-10" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,hsla(var(--s)/0.25),transparent_70%)] blur-[120px] -z-10" />

      {/* Floating Aurora Light Overlay */}
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,100,255,0.08),transparent_70%)] mix-blend-soft-light"
        style={{ y: y1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center justify-between">
          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <motion.h1
              variants={sentence}
              className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold leading-tight tracking-tighter drop-shadow-lg animate-gradient-x bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #3b82f6, #a21caf, #f59e42, #3b82f6)",
                backgroundSize: "300% auto",
                animation: "gradientMove 8s linear infinite",
                WebkitBackgroundClip: "text",
              }}
            >
              {headlineText.split(" ").map((wordText, i) => (
                <motion.span key={i} variants={word} className="inline-block mr-1">
                  {wordText}
                </motion.span>
              ))}
            </motion.h1>

            <motion.h2
              variants={fadeInUp}
              className="text-xl sm:text-2xl font-semibold text-primary mb-1 tracking-tight drop-shadow animate-fade-in"
            >
              {subHeadline}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-base-content/80 mb-1 max-w-xl font-medium"
            >
              World-class AI-powered solutions for privileged access,
              database monitoring, and intelligent automation.
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-sm text-base-content/60 mb-4 max-w-lg"
            >
              Trusted by enterprises worldwide to secure critical infrastructure
              and unlock real-time intelligence.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-2"
            >
              <motion.button
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="btn btn-primary btn-lg group btn-primary-glow shadow-xl px-8"
              >
                <Calendar size={20} />
                Get Started Now
                <motion.span
                  className="inline-block"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.button>

              <a
                href="#solutions"
                className="btn btn-outline btn-lg px-8 border-primary/60 text-primary hover:bg-primary/10 shadow-md"
              >
                Explore Solutions
              </a>
            </motion.div>

            {/* Floating Feature Chips */}
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-2">
              {features.map(({ label, icon: Icon }) => (
                <motion.span
                  key={label}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-base-content/10 text-xs font-semibold text-base-content/80 border border-base-content/20 hover:bg-primary/10 hover:text-primary transition-all cursor-pointer shadow-sm backdrop-blur-md"
                >
                  <Icon size={15} className="text-primary" />
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 items-center relative">
            {/* Video Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.3,
              }}
              className="relative w-full max-w-lg mx-auto"
            >
              <motion.div
                whileHover={{ rotateY: 3, rotateX: 2, scale: 1.03 }}
                transition={{ type: "spring", stiffness: 120, damping: 12 }}
                className="card bg-base-content/5 backdrop-blur-2xl border border-base-content/10 shadow-2xl p-4 aspect-video rounded-2xl overflow-hidden flex items-center justify-center"
              >
                <video
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                  src="/rutradic.mp4"
                />
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.7, type: "spring" }}
                className="absolute -top-8 right-4 bg-base-100/90 border border-primary/40 rounded-full px-5 py-2 shadow-lg flex items-center gap-2 backdrop-blur-md"
              >
                <ShieldCheck size={18} className="text-primary" />
                <span className="text-xs font-semibold text-primary">
                  Trusted by Global Enterprises
                </span>
              </motion.div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-lg"
            >
              <AnimatePresence>
                {stats.map((stat, idx) => (
                  <AuroraCard
                    key={idx}
                    whileHover={{ y: -6, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 200, damping: 14 }}
                    className="aurora-card bg-base-content/10 backdrop-blur-xl border border-primary/20 hover:border-primary/40 hover:bg-primary/10"
                  >
                    <div className="card-body items-center text-center p-4">
                      <motion.h2
                        className="card-title text-2xl font-bold text-primary drop-shadow-lg"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 * idx }}
                      >
                        {stat.value}
                      </motion.h2>
                      <p className="text-xs text-base-content/60 font-medium tracking-wider uppercase">
                        {stat.label}
                      </p>
                    </div>
                  </AuroraCard>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gradient Animation Keyframe */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
      {/* Business Impact Section */}
      <div className="w-full flex flex-col items-center mt-10">
        <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-base-100/80 rounded-2xl shadow-xl p-6 border border-primary/10">
          {/* 90% Faster Threat Response */}
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl font-extrabold text-primary mb-1">90%</span>
            <span className="text-base font-semibold text-base-content">Faster Threat Response</span>
            <span className="text-xs text-base-content/60 mt-1">AI-powered automation reduces incident response time dramatically</span>
          </div>
          {/* 60% Cost Reduction */}
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl font-extrabold text-primary mb-1">60%</span>
            <span className="text-base font-semibold text-base-content">Cost Reduction</span>
            <span className="text-xs text-base-content/60 mt-1">Eliminate manual processes and reduce security overhead</span>
          </div>
          {/* 99.9% Uptime Guarantee */}
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl font-extrabold text-primary mb-1">99.9%</span>
            <span className="text-base font-semibold text-base-content">Uptime Guarantee</span>
            <span className="text-xs text-base-content/60 mt-1">Enterprise-grade reliability for mission-critical operations</span>
          </div>
          {/* 24/7 Continuous Protection */}
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl font-extrabold text-primary mb-1">24/7</span>
            <span className="text-base font-semibold text-base-content">Continuous Protection</span>
            <span className="text-xs text-base-content/60 mt-1">Always-on AI monitoring and autonomous threat prevention</span>
          </div>
        </div>
        <div className="mt-4 text-center">
          <span className="text-lg font-bold text-base-content">Measurable Business Impact</span>
          <div className="text-base-content/70 text-sm mt-1">Real results that drive ROI and transform security operations</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
