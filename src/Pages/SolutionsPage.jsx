import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Footer from "../layouts/Footer";

const SolutionsPage = () => {
  const solutions = [
    {
      title: "Identity & Access Management",
      subtitle: "Fortify Your Digital Gates with Advanced Identity Security",
      description:
        "Protect your organization's most critical assets with comprehensive Privileged Access Management (PAM). Our solutions provide real-time credential vaulting, just-in-time access, and complete session recording to ensure compliance with industry regulations.",
      features: [
        "Privileged Account Discovery & Onboarding",
        "Password Vaulting with Auto-Rotation",
        "Session Recording & Monitoring",
        "Multi-Factor Authentication (MFA)",
        "Compliance & Audit Reporting",
      ],
      color: "hsl(var(--in))", // DaisyUI Indigo
      btnGradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
      image:
        "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2787&auto=format&fit=crop", // Using a placeholder
    },
    {
      title: "Monitoring & Performance",
      subtitle:
        "Gain Real-Time Visibility, Optimize Performance, Prevent Outages",
      description:
        "Never be blindsided by IT issues again. Our comprehensive monitoring solutions provide real-time insights into your infrastructure, applications, and network performance. Predictive analytics and intelligent alerting help you identify and resolve issues.",
      features: [
        "Infrastructure & Network Monitoring",
        "Application Performance Monitoring (APM)",
        "Log Management & Analytics",
        "Custom Dashboards & Visualizations",
        "Predictive Alerting & AI Insights",
      ],
      color: "hsl(var(--s))", // DaisyUI Secondary (Purple)
      btnGradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop", // Using a placeholder
    },
    {
      title: "IT & Business Automation",
      subtitle: "Automate for Agility: Streamline Operations, Boost Efficiency",
      description:
        "Transform manual, time-consuming tasks into automated workflows. Our BPM and automation solutions reduce human error, accelerate processes, and free your team to focus on strategic initiatives, from simple tasks to complex orchestration.",
      features: [
        "Visual Workflow Designer",
        "Intelligent Task Orchestration",
        "Process Analytics & Optimization",
        "API-First Integration Framework",
        "Self-Service IT Portal",
      ],
      color: "hsl(var(--p))", // DaisyUI Primary (Pink)
      btnGradient: "bg-gradient-to-r from-pink-500 to-purple-500",
      image:
        "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=2787&auto=format&fit=crop", // Using a placeholder
    },
  ];

  const benefits = [
    "End-to-end security and compliance",
    "Reduced operational costs",
    "Faster incident resolution",
    "Scalable cloud-ready architecture",
    "Expert implementation and support",
    "24/7 monitoring and maintenance",
  ];

  // Framer Motion variants for staggered list animation
  const listContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <div className="bg-base-100 relative min-h-screen overflow-x-hidden">
      {" "}
      {/* Changed overflow to overflow-x-hidden */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, hsla(var(--p)/0.15) 0%, transparent 40%)",
            "radial-gradient(circle at 80% 70%, hsla(var(--s)/0.15) 0%, transparent 40%)",
            "radial-gradient(circle at 50% 50%, hsla(var(--a)/0.15) 0%, transparent 40%)",
            "radial-gradient(circle at 20% 80%, hsla(var(--in)/0.15) 0%, transparent 40%)",
            "radial-gradient(circle at 20% 30%, hsla(var(--p)/0.15) 0%, transparent 40%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none z-0"
      />
      <div className="relative z-10">
        <div className="pt-36 pb-16 md:pb-20 text-center container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="hero-badge badge badge-lg badge-outline border-primary/50 bg-primary/10 text-primary p-4 mb-6 font-semibold"
          >
            Our Expertise
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight animated-gradient-text"
          >
            Featured Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive solutions designed to secure, automate, and optimize
            your enterprise IT operations
          </motion.p>
        </div>

        <div className="container mx-auto px-4 lg:px-8 pb-16 md:pb-24 space-y-24">
          {solutions.map((solution, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`solution-card-wrapper grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
              >
                <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="p-4 md:p-6 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, ${solution.color}1A, transparent)`,
                      border: `1px solid ${solution.color}4D`,
                    }}
                  >
                    <div
                      className="solution-image-container shadow-2xl"
                      style={{
                        boxShadow: `0 20px 40px -15px ${solution.color}33`,
                      }}
                    >
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover aspect-[16/10]"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                  <div
                    className="badge badge-lg p-3 mb-5"
                    style={{
                      background: `${solution.color}33`,
                      border: `1px solid ${solution.color}4D`,
                      color: solution.color,
                    }}
                  >
                    Key Capabilities
                  </div>
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-3 leading-tight"
                    style={{ color: solution.color }}
                  >
                    {solution.title}
                  </h2>
                  <p className="text-lg font-semibold text-base-content/90 mb-5 leading-snug">
                    {solution.subtitle}
                  </p>
                  <p className="text-base-content/70 leading-relaxed mb-8">
                    {solution.description}
                  </p>
                  <motion.div
                    className="space-y-3 mb-8"
                    variants={listContainerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    {solution.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3"
                        variants={listItemVariants}
                      >
                        <CheckCircle2
                          size={20}
                          style={{ color: solution.color }}
                        />
                        <span className="font-medium text-base-content/80">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      boxShadow: `0 10px 30px -5px ${solution.color}55`,
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`btn btn-lg text-white border-none ${solution.btnGradient} transition-shadow duration-300`}
                  >
                    Learn More
                    <motion.span
                      variants={{ hover: { x: 5 } }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="card-pulse-glow card bg-base-200/50 backdrop-blur-xl border border-primary/20 shadow-2xl p-8 md:p-12">
            <div className="relative z-10">
              {" "}
              {/* Content needs to be above the glow pseudo-element */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 animated-gradient-text">
                  Why Choose Our Solutions
                </h2>
                <p className="text-lg text-base-content/70 max-w-3xl mx-auto">
                  Trusted by 500+ enterprises across 150+ countries
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="benefit-item flex items-center gap-3 p-4 bg-primary/5 border border-primary/10 rounded-xl"
                  >
                    <CheckCircle2
                      size={22}
                      className="text-primary flex-shrink-0"
                    />
                    <span className="font-medium text-base-content/80">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default SolutionsPage;
