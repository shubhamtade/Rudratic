import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      icon: "💻",
      title: "Software Development",
      description:
        "Enterprise applications delivered 50% faster using proven patterns. Production-ready, scalable, secure.",
      gradient: "from-blue-600/20 via-blue-600/5 to-transparent",
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      description:
        "iOS, Android, cross-platform solutions. User-validated apps with 5x higher adoption rates.",
      gradient: "from-purple-600/20 via-purple-600/5 to-transparent",
    },
    {
      icon: "🤖",
      title: "AI & Automation",
      description:
        "AI agents, ML models, RPA, hyperautomation. Measurable ROI with 60-80% cost reduction.",
      gradient: "from-green-600/20 via-green-600/5 to-transparent",
    },
    {
      icon: "🛡️",
      title: "Cybersecurity",
      description:
        "Penetration testing, managed SOC, IAM, ISO 27001, GRC. Enterprise-grade security that prevents attacks.",
      gradient: "from-red-600/20 via-red-600/5 to-transparent",
    },
    {
      icon: "☁️",
      title: "Cloud Infrastructure",
      description:
        "AWS, Azure, GCP expertise. Strategic placement saves 35-40% while optimizing performance.",
      gradient: "from-cyan-600/20 via-cyan-600/5 to-transparent",
    },
    {
      icon: "🔐",
      title: "Private Cloud Consulting",
      description:
        "Compliance-ready infrastructure. 12-month ROI for regulated industries vs. 24 months public cloud.",
      gradient: "from-amber-600/20 via-amber-600/5 to-transparent",
    },
    {
      icon: "🗄️",
      title: "Database Services",
      description:
        "99.99% uptime guaranteed. 50%+ performance improvement, 35-40% cost reduction.",
      gradient: "from-indigo-600/20 via-indigo-600/5 to-transparent",
    },
    {
      icon: "⚙️",
      title: "IoT & Edge Computing",
      description:
        "Real-time processing at the source. 70-80% bandwidth reduction, millisecond latency.",
      gradient: "from-emerald-600/20 via-emerald-600/5 to-transparent",
    },
    {
      icon: "🌐",
      title: "Digital Twin Solutions",
      description:
        "Virtual replicas for predictive maintenance. Asset-intensive industries see 40%+ efficiency gains.",
      gradient: "from-rose-600/20 via-rose-600/5 to-transparent",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section
      id="services"
      className="relative py-24 sm:py-32 bg-base-100 overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-accent/10 via-secondary/5 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/5 via-transparent to-transparent opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.div variants={fadeInUp}>
            <div className="inline-block bg-accent/10 backdrop-blur-sm px-6 py-2 rounded-full text-accent text-sm font-semibold tracking-wider mb-4">
              OUR SERVICES
            </div>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          >
            Comprehensive IT Services Portfolio
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-base-content/80"
          >
            From enterprise software development to advanced cybersecurity—we
            deliver excellence across the technology spectrum
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full bg-base-100/50 backdrop-blur-md rounded-2xl border border-base-300 overflow-hidden p-6 relative transition-all duration-300 hover:shadow-2xl"
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="text-4xl sm:text-5xl mb-4 transform transition-transform group-hover:scale-110 duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-base-content group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base-content/70 mb-6 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Explore Link */}
                  <motion.a
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold group/link"
                    whileHover={{ x: 5 }}
                  >
                    Explore
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
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
          >
            View All Services
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
