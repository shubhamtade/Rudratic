import React from "react";
import { motion } from "framer-motion";
import { Banknote, Stethoscope, Building2, ShoppingCart, Factory, Landmark, Shield, Cpu, Users, Zap } from "lucide-react";

const industries = [
  { 
    title: "Financial Services", 
    description: "SOX compliance, trading systems, risk management, fraud prevention", 
    icon: Banknote,
    gradient: "from-blue-500 via-blue-600 to-cyan-500",
    features: ["SOX Compliance", "Risk Management", "Fraud Detection"],
    stats: "99.9% Uptime"
  },
  { 
    title: "Healthcare", 
    description: "HIPAA compliance, EHR systems, patient data protection, telemedicine", 
    icon: Stethoscope,
    gradient: "from-emerald-500 via-emerald-600 to-green-500",
    features: ["HIPAA Compliance", "EHR Systems", "Data Protection"],
    stats: "HIPAA Certified"
  },
  { 
    title: "Technology & SaaS", 
    description: "DevOps security, API management, cloud-native architecture, scalability", 
    icon: Building2,
    gradient: "from-purple-500 via-purple-600 to-indigo-500",
    features: ["DevOps Security", "API Management", "Cloud Native"],
    stats: "Scalable AF"
  },
  { 
    title: "Retail & E-commerce", 
    description: "PCI DSS compliance, payment systems, inventory management, analytics", 
    icon: ShoppingCart,
    gradient: "from-orange-500 via-orange-600 to-amber-500",
    features: ["PCI DSS", "Payment Systems", "Analytics"],
    stats: "Zero Fraud"
  },
  { 
    title: "Manufacturing", 
    description: "Production systems, supply chain, predictive maintenance, IoT/Edge", 
    icon: Factory,
    gradient: "from-cyan-500 via-cyan-600 to-teal-500",
    features: ["Supply Chain", "Predictive Maintenance", "IoT/Edge"],
    stats: "24/7 Monitoring"
  },
  { 
    title: "Government", 
    description: "FedRAMP, classified systems, public sector compliance, security clearances", 
    icon: Landmark,
    gradient: "from-slate-600 via-slate-700 to-gray-600",
    features: ["FedRAMP", "Classified Systems", "Security Clearances"],
    stats: "Top Secret"
  },
];

const IndustriesSection = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8  text-base-content overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-blue-400/20"
        >
          <Shield size={40} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 text-emerald-400/20"
        >
          <Cpu size={30} />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-20 text-purple-400/20"
        >
          <Users size={35} />
        </motion.div>
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-40 right-10 text-orange-400/20"
        >
          <Zap size={25} />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
       {/* Section Header */}
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-center max-w-3xl mx-auto mb-20"
               >
                 <div className="inline-block mb-4 px-6 py-2 bg-primary backdrop-blur-sm rounded-full">
                   <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-white font-semibold">
                     INDUSTRY EXPERTISE
                   </span>
                 </div>
       
                 <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6  bg-gradient-to-r from-primary  to-accent bg-clip-text text-transparent">
                   TRUSTED ACROSS INDUSTRIES
                 </h2>
       
                 <p className="text-lg sm:text-xl text-base-content/70">
                   Enterprise-grade security solutions built for the unique demands of every sector.
                 </p>
               </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="group relative"
            >
              {/* Main Card */}
              <div className="relative bg-linear-to-br backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 h-full overflow-hidden">
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-sm`} />
                
                {/* Content Container */}
                <div className="relative z-10">
                  {/* Icon & Stats Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 group-hover:bg-white/20 transition-colors">
                      <industry.icon className="h-8 w-8 text-base-content" />
                    </div>
                    <motion.div
                      className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-base-content backdrop-blur-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {industry.stats}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-base-content mb-4">
                    {industry.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base-content/60 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {industry.features.map((feature, idx) => (
                      <motion.div
                        key={feature}
                        className="flex items-center gap-3 text-base-content/70 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl font-bold text-white shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore All Solutions
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;