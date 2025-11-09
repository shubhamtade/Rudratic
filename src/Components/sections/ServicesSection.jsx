import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Settings,
  ArrowRight,
  Server,
  HardDrive,
  Headphones,
  Code,
  Users,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import ParticleBackground from "../ui/ParticleBackground";

const ServicesSection = () => {
  const [showAll, setShowAll] = useState(false);

  const services = [
    {
      title: "Oracle Services",
      icon: Briefcase,
      items: [
        { icon: GraduationCap, text: "Oracle Training" },
        { icon: Briefcase, text: "Oracle Consulting" },
        { icon: Settings, text: "Oracle Implementation" },
      ],
      color: "hsl(var(--p))",
      gradient: "from-primary/30 via-primary/10 to-transparent",
    },
    {
      title: "IBM Services",
      icon: Server,
      items: [
        { icon: GraduationCap, text: "IBM Training" },
        { icon: Briefcase, text: "IBM Consulting" },
        { icon: Settings, text: "IBM Implementation" },
      ],
      color: "hsl(var(--s))",
      gradient: "from-secondary/30 via-secondary/10 to-transparent",
    },
    {
      title: "Virtualization & VMware",
      icon: HardDrive,
      items: [
        { icon: Settings, text: "VMware Solutions" },
        { icon: Briefcase, text: "Virtualization Support" },
      ],
      color: "hsl(var(--a))",
      gradient: "from-accent/30 via-accent/10 to-transparent",
    },
    {
      title: "IT Infrastructure Support",
      icon: Headphones,
      items: [
        { icon: Settings, text: "Infrastructure Management" },
        { icon: Headphones, text: "24/7 Technical Support" },
      ],
      color: "hsl(var(--p))",
      gradient: "from-primary/30 via-primary/10 to-transparent",
    },
    {
      title: "Application Development",
      icon: Code,
      items: [
        { icon: Code, text: ".NET/C# Development" },
        { icon: Code, text: "Java Development" },
        { icon: Code, text: "Mobile Applications" },
      ],
      color: "hsl(var(--s))",
      gradient: "from-secondary/30 via-secondary/10 to-transparent",
    },
    {
      title: "SAP Consulting",
      icon: Server,
      items: [{ icon: Users, text: "SAP Solutions" }],
      color: "hsl(var(--a))",
      gradient: "from-accent/30 via-accent/10 to-transparent",
    },
  ];

  const visibleServices = showAll ? services : services.slice(0, 4);

  return (
    <section className="relative py-14 bg-base-100 overflow-hidden">
      {/* Soft Animated Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-32 left-1/3 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-gradient-to-t from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      {/* Particles Layer */}
      <ParticleBackground density={30} color="hsla(var(--s)/0.25)" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-semibold tracking-widest text-secondary uppercase mb-4"
          >
            Our Services
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content"
          >
            Comprehensive IT Solutions
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          <AnimatePresence>
            {visibleServices.map((service, index) => (
              <motion.div
                key={service.title}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  boxShadow: `0 0 30px ${service.color}40`,
                }}
                className="relative p-[2px] rounded-3xl overflow-hidden group"
              >
                {/* Animated Border Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-80 blur-xl group-hover:opacity-100 transition-all`}
                ></div>

                {/* Glass Card */}
                <div className="relative bg-base-100/50 backdrop-blur-xl border border-base-content/10 rounded-3xl p-6 h-full shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col">
                  {/* Icon */}
                  <div
                    className="mb-4 p-4 bg-gradient-to-br from-base-200/50 to-base-100/80 rounded-2xl inline-block group-hover:scale-110 transition-transform"
                    style={{ boxShadow: `0 0 20px ${service.color}20` }}
                  >
                    <service.icon
                      size={36}
                      className="text-primary transition-colors"
                      style={{ color: service.color }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-base-content group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-3 mb-6 flex-grow">
                    {service.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 text-base-content/80"
                      >
                        <item.icon
                          size={18}
                          className="flex-shrink-0"
                          style={{ color: service.color }}
                        />
                        <span className="text-sm">{item.text}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto">
                    <motion.button
                      whileHover={{
                        x: 6,
                        color: service.color,
                      }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="text-sm font-semibold flex items-center gap-2 text-secondary group-hover:text-primary transition-colors"
                    >
                      Learn More
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
                boxShadow: "0 0 25px hsla(var(--s)/0.4)",
              }}
              onClick={() => setShowAll(true)}
              className="btn btn-secondary btn-lg rounded-full shadow-xl backdrop-blur-md"
            >
              View All Services
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
