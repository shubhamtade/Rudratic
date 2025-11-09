import React from "react";
import { Lightbulb, ShieldCheck, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <Lightbulb size={36} className="text-primary" />,
    title: "Consult & Discover",
    desc: "We analyze your needs and design a tailored IT security and automation roadmap.",
  },
  {
    icon: <ShieldCheck size={36} className="text-secondary" />,
    title: "Implement & Secure",
    desc: "Our experts deploy robust solutions, ensuring seamless integration and maximum protection.",
  },
  {
    icon: <Rocket size={36} className="text-accent" />,
    title: "Empower & Support",
    desc: "We empower your team and provide ongoing support for continuous growth and security.",
  },
];

const HowItWorksSection = () => (
  <section className="py-20 relative overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 -z-1 animate-gradient-x bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-2xl opacity-80" />
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-base-content relative inline-block">
          How It Works
          <span className="block h-1 w-16 mx-auto mt-2 bg-gradient-to-r from-primary via-secondary to-accent rounded-full animate-pulse"></span>
        </h2>
        <p className="text-base-content/70 max-w-xl mx-auto text-lg">
          Our proven process ensures your business is secure, automated, and
          ready for the future.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-base-100 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center border border-base-300 hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <div className="mb-4 animate-float-slow">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-base-content">
              {step.title}
            </h3>
            <p className="text-base-content/70">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
