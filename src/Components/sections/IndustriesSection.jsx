import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Building2,
  ShoppingCart,
  Factory,
  Landmark,
  LandmarkIcon,
  Banknote,
} from "lucide-react";

const industries = [
  {
    title: "Financial Services",
    description:
      "SOX compliance, trading systems, risk management, and fraud prevention.",
    icon: Banknote,
    color: "from-blue-600 via-sky-400 to-blue-300",
    shadow: "shadow-blue-500/70",
    glow: "drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]",
  },
  {
    title: "Healthcare",
    description:
      "HIPAA compliance, EHR systems, patient data protection, and telemedicine.",
    icon: Stethoscope,
    color: "from-pink-500 via-rose-400 to-pink-300",
    shadow: "shadow-pink-500/70",
    glow: "drop-shadow-[0_0_12px_rgba(244,114,182,0.5)]",
  },
  {
    title: "Technology & SaaS",
    description:
      "DevOps security, API management, cloud-native architecture, and scalability.",
    icon: Building2,
    color: "from-purple-500 via-indigo-400 to-purple-300",
    shadow: "shadow-purple-500/70",
    glow: "drop-shadow-[0_0_12px_rgba(167,139,250,0.5)]",
  },
  {
    title: "Retail & E-commerce",
    description:
      "PCI DSS compliance, payment systems, inventory management, and analytics.",
    icon: ShoppingCart,
    color: "from-orange-400 via-yellow-300 to-orange-200",
    shadow: "shadow-orange-500/70",
    glow: "drop-shadow-[0_0_12px_rgba(251,191,36,0.5)]",
  },
  {
    title: "Manufacturing",
    description:
      "Production systems, supply chain security, predictive maintenance, and IoT/Edge.",
    icon: Factory,
    color: "from-green-500 via-lime-400 to-green-200",
    shadow: "shadow-green-500/70",
    glow: "drop-shadow-[0_0_12px_rgba(132,204,22,0.5)]",
  },
  {
    title: "Government",
    description:
      "FedRAMP, classified systems, public sector compliance, and security clearances.",
    icon: Landmark,
    color: "from-gray-600 via-slate-400 to-gray-300",
    shadow: "shadow-gray-500/70",
    glow: "drop-shadow-[0_0_12px_rgba(156,163,175,0.5)]",
  },
];

const tooltipVariants = {
  initial: { opacity: 0, y: 10, scale: 0.9 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  exit: { opacity: 0, y: 10, scale: 0.9, transition: { duration: 0.15 } },
};

const InteractiveIndustriesCircle = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const numIcons = industries.length;
  const radiusPercent = 46; // slightly larger radius for visual spacing
  const activeIndustry = activeIndex !== null ? industries[activeIndex] : null;

  return (
    <div className="relative w-full aspect-square max-w-2xl mx-auto">
      {/* Background rotating SVG */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <motion.svg
          viewBox="0 0 500 500"
          className="w-full h-full text-primary/10 dark:text-primary/50"
        >
          <motion.circle
            cx="250"
            cy="250"
            r="240"
            stroke="currentColor"
            strokeWidth="0.7"
            strokeDasharray="6 10"
            fill="none"
            animate={{ rotate: 360 }}
            transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          />
          <motion.circle
            cx="250"
            cy="250"
            r={radiusPercent * 2.3}
            stroke="currentColor"
            strokeWidth="0.5"
            strokeDasharray="2 4"
            fill="none"
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />
        </motion.svg>
      </div>

      {/* Center content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center text-center p-10 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex ?? "default"}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            {activeIndustry ? (
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  {activeIndustry.title}
                </h3>
                <p className="text-base md:text-lg text-base-content/80 max-w-md mx-auto leading-relaxed">
                  {activeIndustry.description}
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold text-base-content/90 mb-2">
                  Industry Expertise
                </h3>
                <p className="text-base text-base-content/60">
                  Hover over an icon to learn more.
                </p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Rotating icons layer */}
      <motion.div
        className="absolute inset-0 z-10"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        {industries.map(({ icon: Icon, color, glow, title }, index) => {
          const angle = (index / numIcons) * 2 * Math.PI - Math.PI / 2;
          const x = 50 + radiusPercent * Math.cos(angle);
          const y = 50 + radiusPercent * Math.sin(angle);

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ top: `${y}%`, left: `${x}%` }}
            >
              <motion.div
                className="relative flex items-center justify-center"
                style={{ transform: "translate(-50%, -50%)" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      className="absolute bottom-full mb-3 whitespace-nowrap bg-gray-900/90 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-lg backdrop-blur-sm"
                      variants={tooltipVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                    >
                      {title}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-gradient-to-br ${color} ${glow} cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary`}
                  aria-label={title}
                  animate={{
                    scale: activeIndex === index ? 1.3 : 1,
                    rotate: activeIndex === index ? 10 : 0,
                  }}
                  whileHover={{
                    scale: 1.4,
                    boxShadow: "0 0 25px rgba(255,255,255,0.4)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Icon size={34} className="text-white" />
                </motion.button>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

const IndustriesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-base-100 relative overflow-hidden">
      {/* Gradient background glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[85vw] h-[40rem] bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 blur-3xl opacity-60 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
          <motion.span
            className="inline-block mb-4 px-6 py-2 bg-primary text-white font-semibold rounded-full tracking-wider text-xs md:text-sm shadow-md"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            INDUSTRY EXPERTISE
          </motion.span>
          <motion.h2
            className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Trusted Across Industries
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-base-content/80 max-w-2xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our solutions are meticulously crafted to meet the unique security
            and compliance challenges of every sector.
          </motion.p>
        </div>

        <InteractiveIndustriesCircle />
      </div>
    </section>
  );
};

export default IndustriesSection;
