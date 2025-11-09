import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Activity, Settings, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import ParticleBackground from "../ui/ParticleBackground";

const AuroraCard = ({ children, color, className }) => {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    ref.current.style.setProperty("--x", `${x}px`);
    ref.current.style.setProperty("--y", `${y}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`relative overflow-hidden rounded-2xl group ${className}`}
      style={{
        "--aurora": color,
        background: `linear-gradient(135deg, ${color}15 0%, transparent 100%)`,
      }}
    >
      {/* Subtle animated glow following cursor */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[120%] h-[120%] bg-[radial-gradient(circle_at_var(--x)_var(--y),var(--aurora)_0%,transparent_60%)] opacity-0 group-hover:opacity-25 transition-opacity duration-500"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>
      {children}
    </div>
  );
};

const WhatWeDoSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      icon: Shield,
      title: "Secure",
      description:
        "Protect critical assets with advanced identity & access management.",
      image: "/What we do/whatwedo5.jpg",
      color: "hsl(217, 91%, 60%)",
    },
    {
      icon: Activity,
      title: "Monitor",
      description:
        "Gain real-time visibility into your IT infrastructure performance.",
      image: "/What we do/whatwedo2.jpg",
      color: "hsl(142, 71%, 45%)",
    },
    {
      icon: Settings,
      title: "Automate",
      description:
        "Streamline operations and eliminate manual, repetitive tasks.",
      image: "/What we do/whatwedo3.jpg",
      color: "hsl(35, 92%, 55%)",
    },
  ];

  const headline = "Seamlessly Unifying Your IT Security & Operations";

  return (
    <section
      className="relative py-20 lg:py-28 bg-base-100 overflow-hidden border-t border-base-content/10"
      id="what-we-do"
    >
      {/* Smooth transition from hero background */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-base-100/70 to-base-100 pointer-events-none" />

      {/* Floating ambient gradients for cinematic depth */}
      <motion.div
        className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-24 -left-24 opacity-60"
        animate={{ x: [0, 50, -50, 0], y: [0, 30, -30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-secondary/10 rounded-full blur-3xl bottom-0 right-0 opacity-50"
        animate={{ x: [0, -40, 40, 0], y: [0, -40, 40, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold tracking-widest text-primary uppercase mb-4"
            >
              What We Do
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-base-content mb-6 leading-tight"
            >
              {headline.split(" ").map((word, i) => (
                <motion.span
                  key={i}
                  className={`inline-block mr-2 ${
                    ["Security", "&", "Operations"].includes(word)
                      ? "gradient-text-animated"
                      : ""
                  }`}
                  initial={{ y: 25, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: i * 0.05,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-base-content/70 leading-relaxed mb-8"
            >
              In today’s digital landscape, security and efficiency can no
              longer exist in silos. We design, implement, and manage integrated
              solutions that fortify your defenses and optimize operations.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.openDemoModal?.()}
                className="btn btn-primary btn-lg group btn-primary-glow"
              >
                Free Consultation
                <ArrowRight
                  className="ml-2 transition-transform group-hover:translate-x-1"
                  size={20}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Feature Cards */}
          <div style={{ perspective: "1000px" }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="flex flex-col gap-8"
            >
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <AuroraCard
                    key={i}
                    color={f.color}
                    className="p-[1px] bg-gradient-to-tr from-transparent via-transparent to-transparent hover:via-[var(--aurora)] transition-all duration-700"
                  >
                    <motion.div
                      onMouseEnter={() => setHoveredIndex(i)}
                      onMouseLeave={() => setHoveredIndex(null)}
                      variants={{
                        hidden: { opacity: 0, x: 100 },
                        visible: {
                          opacity: 1,
                          x: 0,
                          transition: { duration: 0.6, ease: "easeOut" },
                        },
                      }}
                      whileHover={{
                        y: -10,
                        scale: 1.03,
                        rotateX: 5,
                        boxShadow: `0px 25px 50px -12px ${f.color}40`,
                      }}
                      className="relative card bg-base-200/60 backdrop-blur-xl border border-transparent p-6 rounded-2xl shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      {/* Dynamic background (like subtle motion video) */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                        style={{
                          background: `url(${f.image}) center/cover no-repeat`,
                          filter: "blur(6px)",
                        }}
                        animate={{
                          scale: hoveredIndex === i ? [1, 1.05, 1] : 1,
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                      />

                      <div className="relative flex items-center gap-6">
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: -5 }}
                          className="p-4 rounded-xl flex-shrink-0"
                          style={{
                            background: `linear-gradient(145deg, ${f.color}33, transparent)`,
                            boxShadow: `0 0 20px ${f.color}30`,
                          }}
                        >
                          <Icon size={32} style={{ color: f.color }} />
                        </motion.div>

                        <div className="flex-1">
                          <h3
                            className="text-xl font-semibold mb-1"
                            style={{ color: f.color }}
                          >
                            {f.title}
                          </h3>
                          <p className="text-base-content/70 text-sm leading-snug">
                            {f.description}
                          </p>
                        </div>

                        <div className="w-24 h-16 rounded-lg overflow-hidden hidden sm:block ml-auto shadow-inner">
                          <motion.img
                            src={f.image}
                            alt={f.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          />
                        </div>

                        <AnimatePresence>
                          {hoveredIndex === i && (
                            <motion.div
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              exit={{ opacity: 0, x: -10 }}
                              className="absolute top-4 right-4"
                            >
                              <ArrowRight
                                size={20}
                                className="text-base-content/50"
                              />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  </AuroraCard>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
