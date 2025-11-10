import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    {
      icon: "🏦",
      title: "Financial Services",
      description:
        "SOX compliance, trading systems, risk management, fraud prevention",
      metrics: ["99.99% Uptime", "0.001% Fraud Rate"],
      solutions: [
        "Real-time Fraud Detection",
        "Automated Trading Systems",
        "Risk Analytics",
        "Regulatory Compliance",
      ],
      gradient: "from-blue-600/20 to-cyan-500/20",
      clients: "Top 10 Banks",
    },
    {
      icon: "🏥",
      title: "Healthcare",
      description:
        "HIPAA compliance, EHR systems, patient data protection, telemedicine",
      metrics: ["100% HIPAA", "5M+ Records"],
      solutions: [
        "Patient Data Security",
        "Telehealth Platform",
        "Clinical Analytics",
        "Healthcare IoT",
      ],
      gradient: "from-emerald-600/20 to-teal-500/20",
      clients: "Major Hospitals",
    },
    {
      icon: "🛒",
      title: "Retail & E-Commerce",
      description:
        "PCI DSS compliance, payment systems, inventory management, analytics",
      metrics: ["2ms Latency", "1B+ Orders"],
      solutions: [
        "Payment Security",
        "Inventory Analytics",
        "Customer 360",
        "Omnichannel",
      ],
      gradient: "from-purple-600/20 to-pink-500/20",
      clients: "Global Retailers",
    },
    {
      icon: "🏭",
      title: "Manufacturing",
      description:
        "Production systems, supply chain, predictive maintenance, IoT/Edge",
      metrics: ["40% Cost ↓", "85% Uptime ↑"],
      solutions: [
        "Smart Factory",
        "Predictive AI",
        "Supply Chain",
        "Digital Twin",
      ],
      gradient: "from-amber-600/20 to-orange-500/20",
      clients: "Industry Leaders",
    },
    {
      icon: "💻",
      title: "Technology & SaaS",
      description:
        "DevOps security, API management, cloud-native architecture, scalability",
      metrics: ["99.99% SLA", "<10ms API"],
      solutions: [
        "Cloud Security",
        "API Gateway",
        "Microservices",
        "DevSecOps",
      ],
      gradient: "from-indigo-600/20 to-blue-500/20",
      clients: "Tech Giants",
    },
    {
      icon: "🏛️",
      title: "Government",
      description:
        "FedRAMP, classified systems, public sector compliance, security clearances",
      metrics: ["FedRAMP", "IL5 Ready"],
      solutions: ["Secure Cloud", "Zero Trust", "Compliance", "Cyber Defense"],
      gradient: "from-slate-600/20 to-gray-500/20",
      clients: "Federal Agencies",
    },
  ];

  return (
    <section
      id="industries"
      className="relative py-24 sm:py-32 overflow-hidden bg-base-100"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(var(--primary-rgb),0.05)_25%,transparent_50%)] animate-wave-slow"></div>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-primary/5 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
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
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold tracking-wider">
              INDUSTRIES WE SERVE
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-base-content via-base-content/80 to-base-content bg-clip-text text-transparent">
            Trusted Across Critical Industries
          </h2>

          <p className="text-lg sm:text-xl text-base-content/70">
            Deep expertise in regulated, compliance-heavy, and mission-critical
            environments
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
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
                  className={`p-6 relative bg-gradient-to-br ${industry.gradient}`}
                >
                  {/* Metrics Badge */}
                  <div className="flex gap-2 mb-4">
                    {industry.metrics.map((metric, idx) => (
                      <div
                        key={idx}
                        className="bg-base-100/90 backdrop-blur-sm px-3 py-1 rounded-full"
                      >
                        <span className="text-xs font-bold text-primary">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-start gap-4">
                    <div className="text-4xl sm:text-5xl transform transition-transform group-hover:scale-110 duration-300">
                      {industry.icon}
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-base-content mb-2">
                        {industry.title}
                      </h3>
                      <p className="text-base-content/70 text-sm">
                        {industry.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Bottom Section */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-xs font-semibold text-primary mb-2">
                      KEY SOLUTIONS
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {industry.solutions.map((solution, idx) => (
                        <span
                          key={idx}
                          className="inline-block px-3 py-1 bg-base-content/5 rounded-full text-xs text-base-content/70"
                        >
                          {solution}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs text-base-content/60">
                      {industry.clients}
                    </span>
                    <motion.a
                      href="#"
                      className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                      whileHover={{ x: 5 }}
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </motion.a>
                  </div>
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
            className="inline-flex items-center gap-3 bg-primary/10 hover:bg-primary/20 text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300"
          >
            Explore Industry Solutions
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;
