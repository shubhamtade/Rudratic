import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WhyChooseUs = () => {
  const valueProps = [
    {
      icon: "🚀",
      title: "Rapid Implementation",
      description:
        "Deploy in weeks, not months. 50-70% faster than traditional consultants while maintaining enterprise quality.",
      gradient: "from-blue-600/20 to-cyan-500/20",
      stats: "50-70% Faster",
      highlight: "Deployment",
    },
    {
      icon: "🎯",
      title: "Outcome-Based Pricing",
      description:
        "Fees tied to your success metrics. ROI guarantees mean we don't get paid until you hit targets.",
      gradient: "from-purple-600/20 to-pink-500/20",
      stats: "100% ROI",
      highlight: "Guaranteed",
    },
    {
      icon: "🔒",
      title: "Security-First DNA",
      description:
        "ISO 27001 certified. Security built into every solution from day one, not retrofitted.",
      gradient: "from-emerald-600/20 to-teal-500/20",
      stats: "ISO 27001",
      highlight: "Certified",
    },
    {
      icon: "💡",
      title: "AI & Innovation Leadership",
      description:
        "World's first AI-native PAM. Proprietary VLP + Offline LLM technology unavailable elsewhere.",
      gradient: "from-amber-600/20 to-yellow-500/20",
      stats: "Industry",
      highlight: "First",
    },
    {
      icon: "🤝",
      title: "Dedicated Partnership",
      description:
        "Same team throughout. Former Big Four partners personally leading your engagements.",
      gradient: "from-red-600/20 to-orange-500/20",
      stats: "Big Four",
      highlight: "Experience",
    },
    {
      icon: "📊",
      title: "Transparent Accountability",
      description:
        "Fixed timelines, measurable ROI, regular updates. No surprises, no scope creep.",
      gradient: "from-indigo-600/20 to-blue-500/20",
      stats: "100%",
      highlight: "Transparency",
    },
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-base-100">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-4 px-6 py-2 bg-accent/10 backdrop-blur-sm rounded-full">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-base-content via-base-content/80 to-base-content bg-clip-text text-transparent">
            Why Global Enterprises Choose Rudratic
          </h2>

          <p className="text-lg sm:text-xl text-base-content/70">
            Enterprise expertise meets startup agility. Former Big Four
            consultants delivering boutique-level service.
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full bg-base-100/50 backdrop-blur-md rounded-2xl border border-base-300 overflow-hidden transition-all duration-300 hover:shadow-2xl"
              >
                {/* Card Top Section */}
                <div
                  className={`p-6 relative bg-gradient-to-br ${prop.gradient}`}
                >
                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-base-100/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-bold text-primary">
                      {prop.stats}
                    </span>
                    <span className="text-xs ml-1 text-base-content/70">
                      {prop.highlight}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="text-5xl sm:text-6xl mb-4 transform transition-transform group-hover:scale-110 duration-300">
                    {prop.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-base-content">
                    {prop.title}
                  </h3>
                </div>

                {/* Card Bottom Section */}
                <div className="p-6">
                  <p className="text-base-content/70 mb-4">
                    {prop.description}
                  </p>

                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-primary text-primary-content font-semibold px-8 py-4 rounded-full shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 transition-shadow"
          >
            Schedule a Consultation
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
