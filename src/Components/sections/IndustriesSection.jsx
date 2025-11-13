import React from "react";
import { motion } from "framer-motion";
import { Banknote, Stethoscope, Building2, ShoppingCart, Factory, Landmark, LandmarkIcon } from "lucide-react";

const industries = [
  {
    title: "Financial Services",
    description: "SOX compliance, trading systems, risk management, fraud prevention",
    icon: LandmarkIcon,
    color: "from-gray-600 via-slate-400 to-gray-300",
    iconBg: "bg-blue-100/60",
  },
  {
    title: "Healthcare",
    description: "HIPAA compliance, EHR systems, patient data protection, telemedicine",
    icon: Stethoscope,
    color: "from-pink-500 via-rose-400 to-pink-300",
    iconBg: "bg-pink-100/60",
  },
  {
    title: "Technology & SaaS",
    description: "DevOps security, API management, cloud-native architecture, scalability",
    icon: Building2,
    color: "from-purple-500 via-indigo-400 to-purple-300",
    iconBg: "bg-purple-100/60",
  },
  {
    title: "Retail & E-commerce",
    description: "PCI DSS compliance, payment systems, inventory management, analytics",
    icon: ShoppingCart,
    color: "from-orange-400 via-yellow-300 to-orange-200",
    iconBg: "bg-orange-100/60",
  },
  {
    title: "Manufacturing",
    description: "Production systems, supply chain, predictive maintenance, IoT/Edge",
    icon: Factory,
    color: "from-green-500 via-lime-400 to-green-200",
    iconBg: "bg-green-100/60",
  },
  {
    title: "Government",
    description: "FedRAMP, classified systems, public sector compliance, security clearances",
    icon: Landmark,
    color: "from-gray-600 via-slate-400 to-gray-300",
    iconBg: "bg-gray-100/60",
  },
];


const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.25, duration: 0.8 } },
};

const IndustriesSection = () => {
  return (
    <section className="py-10 md:py-16 bg-base-100 relative overflow-hidden">
      {/* Decorative blurred background */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[80vw] h-96 bg-linear-to-r from-primary/10 via-accent/10 to-secondary/10 blur-2xl opacity-40 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-10">
          <span className="inline-block mb-4 px-6 py-2 bg-primary text-white font-semibold rounded-full tracking-wider text-xs md:text-sm shadow-sm backdrop-blur">
            INDUSTRY EXPERTISE
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-center  bg-gradient-to-r from-primary  to-accent bg-clip-text text-transparent drop-shadow-lg">
            Trusted Across Industries
          </h2>
          <p className="text-lg text-center max-w-2xl mx-auto text-base-content/80">
            Tailored solutions for every sector's unique security challenges
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {industries.map(({ title, description, icon: Icon, color, iconBg }, idx) => (
            <motion.div
              key={title}
              className="group rounded-3xl p-8 bg-white/60 dark:bg-base-200/80 shadow-xl border border-base-300/60 backdrop-blur-lg flex flex-col items-start relative overflow-hidden hover:scale-[1.04] hover:shadow-2xl transition-all duration-300"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <div className={`mb-5 rounded-full p-4 ${iconBg} shadow-lg flex items-center justify-center transition-transform group-hover:scale-110`}>
                <span className={`bg-linear-to-tr ${color} p-2 rounded-full block`}>
                  <Icon size={38} className="text-primary drop-shadow" />
                </span>
              </div>
              <h3 className="text-xl font-bold mb-2 text-base-content group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-base-content/80 mb-2">
                {description}
              </p>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-linear-to-br from-primary/10 to-accent/10 rounded-full blur-2xl opacity-30 pointer-events-none" />
            </motion.div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default IndustriesSection;
