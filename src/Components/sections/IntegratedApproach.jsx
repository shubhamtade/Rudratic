import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

const IntegratedApproach = () => {
  const [activeTab, setActiveTab] = useState("PAM");

  const tabs = [
    {
      id: "PAM",
      label: "PAM",
      icon: Shield,
      description:
        "Protect and control access to critical systems by managing privileged accounts. Strengthen compliance, reduce risk, and enhance enterprise security posture.",
      imagePath: "product1.jpg",
    },
    {
      id: "MONITORING",
      label: "MONITORING",
      icon: Zap,
      description:
        "Gain real-time visibility into your IT infrastructure, applications, and networks. Proactive monitoring ensures performance, reliability, and business continuity.",
      imagePath: "product2.jpg",
    },
    {
      id: "AUTOMATION",
      label: "AUTOMATION",
      icon: Sparkles,
      description:
        "Eliminate repetitive manual tasks with intelligent automation. Drive operational efficiency, accuracy, and scalability across your organization.",
      imagePath: "product3.jpg",
    },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="relative py-24 sm:py-32 bg-base-200 overflow-hidden">
      {/* Subtle Glow & Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-50" />
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(hsla(var(--p)/0.3)_1px,transparent_1px)] opacity-20"
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4">
            Integrated Intelligence
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-base-content leading-tight">
            Our Integrated <span className="text-primary">Approach</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left: Tabs and Dynamic Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Custom Tab Buttons */}
            <div className="flex flex-wrap gap-4 bg-base-100/20 backdrop-blur-lg p-3 rounded-2xl border border-base-content/10 shadow-md">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-primary to-secondary text-primary-content shadow-primary/40"
                      : "bg-base-100/30 hover:bg-primary/10 text-base-content/70"
                  }`}
                >
                  <tab.icon
                    size={22}
                    className={`${
                      activeTab === tab.id ? "text-primary-content" : "text-primary"
                    }`}
                  />
                  {tab.label}
                </motion.button>
              ))}
            </div>

            {/* Animated Content Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative card bg-base-100/40 backdrop-blur-xl border border-base-content/10 shadow-2xl overflow-hidden group"
              >
                {/* Image with Hover Motion */}
                <motion.figure
                  className="overflow-hidden h-64 sm:h-80"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.img
                    key={activeTabData.imagePath}
                    src={activeTabData.imagePath}
                    alt={activeTabData.label}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </motion.figure>
                <div className="absolute inset-0 bg-gradient-to-t from-base-200/90 via-base-200/40 to-transparent pointer-events-none" />
                <div className="card-body relative z-10 p-8">
                  <p className="text-base-content/80 text-lg leading-relaxed">
                    {activeTabData.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: IT Challenges Block */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2 lg:sticky lg:top-32 card bg-gradient-to-br from-primary/10 to-secondary/10 border border-base-content/10 backdrop-blur-xl shadow-xl"
          >
            <div className="card-body p-8 space-y-6">
              <h3 className="card-title text-3xl font-bold text-base-content">
                Solving IT Challenges
              </h3>
              <p className="text-base-content/70 leading-relaxed">
                In today’s fast-paced digital world, IT security and operational
                efficiency can no longer function in isolation. Our integrated
                approach blends security, automation, and monitoring   empowering
                organizations to operate smarter, faster, and safer.
              </p>
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="btn btn-primary btn-lg gap-2 group"
                >
                  Learn Our Approach
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedApproach;
