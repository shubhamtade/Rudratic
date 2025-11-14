import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import ParticleBackground from "../ui/ParticleBackground";
import {
  Shield,
  Cloud,
  AlertTriangle,
  Box,
  Zap,
  TrendingUp,
} from "lucide-react";

// Imported Product List
const getProductsContent = () => [
  {
    title: "SWOT-PAM",
    subtitle: "Privileged Access Management",
    color: "hsl(var(--p))",
    href: "/products/pam",
    icon: Shield,
    group: "Security & Access",
  },
  {
    title: "SWOTCloudPAM",
    subtitle: "Cloud PAM Solution",
    color: "hsl(var(--p))",
    href: "/products/SWOTCloudPAMPage",
    icon: Cloud,
    group: "Security & Access",
  },
  {
    title: "RBVM",
    subtitle: "Risk-Based Vulnerability Management",
    color: "hsl(var(--s))",
    href: "/products/rbvm",
    icon: AlertTriangle,
    group: "Security & Access",
  },
  {
    title: "SWOTDAM",
    subtitle: "Digital Asset Management",
    color: "hsl(var(--s))",
    href: "/products/SWOTDAMPage",
    icon: Box,
    group: "Enterprise Platforms",
  },
  {
    title: "BPMAutomation",
    subtitle: "Business Process Management",
    color: "hsl(var(--p))",
    href: "/products/BPMAutomationPage",
    icon: Zap,
    group: "Enterprise Platforms",
  },
  {
    title: "AIquinox",
    subtitle: "Performance Monitoring Platform",
    color: "hsl(var(--s))",
    href: "/products/AiquinoxPage",
    icon: TrendingUp,
    group: "Platforms & Analytics",
  },
];

const HeroSection = () => {
  const products = getProductsContent(); // <-- Now used in UI

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

  const headlineText = "Secure. Intelligent. Reliable.";
  const subHeadline =
    "Transforming Enterprise IT with AI-Powered Security, Cloud Solutions, and Next-Generation Software Development";

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col items-center pt-36 md:mt-20 lg:mt-0 pb-10 overflow-hidden bg-base-100 text-base-content"
    >
      <ParticleBackground density={70} colorVariable="--p" />

      {/* Aurora background */}
      <div className="absolute top-[-15%] left-[-10%] w-[70%] h-[70%] bg-[radial-gradient(circle,hsla(var(--p)/0.25),transparent_70%)] blur-[120px] -z-10" />
      <div className="absolute bottom-[-15%] right-[-10%] w-[60%] h-[60%] bg-[radial-gradient(circle,hsla(var(--s)/0.25),transparent_70%)] blur-[120px] -z-10" />

      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(100,100,255,0.08),transparent_70%)] mix-blend-soft-light"
        style={{ y: y1 }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-12 items-center justify-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full max-w-4xl mx-auto flex flex-col gap-6 items-center text-center"
          >
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7, type: "spring" }}
              className="mt-2 bg-base-100/90 border border-primary/40 rounded-full px-5 py-2 shadow-lg flex items-center gap-2 backdrop-blur-md"
            >
              <span className="text-xs font-semibold text-primary">
                Enterprise Technology Leader
              </span>
            </motion.div>

            {/* Heading */}
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
                <motion.span
                  key={i}
                  variants={word}
                  className="inline-block mr-1"
                >
                  {wordText}
                </motion.span>
              ))}
            </motion.h1>

            {/* Subheadline */}
            <motion.h2
              variants={fadeInUp}
              className="text-xl sm:text-2xl font-semibold text-primary mb-1 tracking-tight drop-shadow"
            >
              {subHeadline}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-base-content/80 mb-1 max-w-xl font-medium"
            >
              Trusted by global enterprises for privileged access management,
              database security, cloud infrastructure, and comprehensive IT
              services.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-2 justify-center"
            >
              {/* Products Button */}
              <motion.button
                whileHover={{ scale: 1.06, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const section = document.querySelector("#products");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-primary btn-lg group btn-primary-glow shadow-xl px-8"
              >
                Explore Our Products
                <motion.span
                  className="inline-block"
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ x: 5 }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.button>

              {/* Services Button */}
              <button
                onClick={() => {
                  const section = document.querySelector("#services");
                  if (section) section.scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-outline btn-lg px-8 border-primary/60 text-primary hover:bg-primary/10 shadow-md"
              >
                View Services
              </button>
            </motion.div>

            {/* ⭐ PRODUCT CLICKABLE CHIPS */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-2 justify-center"
            >
              {products.map(({ title, href, icon: Icon }) => (
                <Link
                  key={title}
                  to={href}
                  className="flex items-center gap-2 px-3 py-1 rounded-full bg-base-content/10 text-xs font-semibold text-base-content/80 border border-base-content/20 hover:bg-primary/10 hover:text-primary transition-all shadow-sm backdrop-blur-md cursor-pointer"
                >
                  <Icon size={15} className="text-primary" />
                  {title}
                </Link>
              ))}
            </motion.div>

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.7, type: "spring" }}
              className="mt-8 bg-base-100/90 border border-primary/40 rounded-full px-5 py-2 shadow-lg flex items-center gap-2 backdrop-blur-md"
            >
              <ShieldCheck size={18} className="text-primary" />
              <span className="text-xs font-semibold text-primary">
                Trusted by Global Enterprises
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated gradient keyframe */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* Metrics Section */}
      <div className="w-full flex flex-col items-center mt-10">
        <div className="max-w-4xl w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 bg-base-100/80 rounded-2xl shadow-xl p-6 border border-primary/10">
          <div className="flex flex-col items-center text-center">
            <span className="text-4xl font-extrabold text-primary mb-1">
              90%
            </span>
            <span className="text-base font-semibold text-base-content">
              Faster Threat Response
            </span>
            <span className="text-xs text-base-content/60 mt-1">
              AI-powered automation reduces incident response time dramatically
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-4xl font-extrabold text-primary mb-1">
              60%
            </span>
            <span className="text-base font-semibold text-base-content">
              Cost Reduction
            </span>
            <span className="text-xs text-base-content/60 mt-1">
              Eliminate manual processes
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-4xl font-extrabold text-primary mb-1">
              99.9%
            </span>
            <span className="text-base font-semibold text-base-content">
              Uptime Guarantee
            </span>
            <span className="text-xs text-base-content/60 mt-1">
              Enterprise-grade reliability
            </span>
          </div>

          <div className="flex flex-col items-center text-center">
            <span className="text-4xl font-extrabold text-primary mb-1">
              24/7
            </span>
            <span className="text-base font-semibold text-base-content">
              Continuous Protection
            </span>
            <span className="text-xs text-base-content/60 mt-1">
              Autonomous threat prevention
            </span>
          </div>
        </div>

        <div className="mt-4 text-center">
          <span className="text-lg font-bold text-base-content">
            Measurable Business Impact
          </span>
          <div className="text-base-content/70 text-sm mt-1">
            Real results that drive ROI and transform security operations
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
