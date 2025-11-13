import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  Shield, // Example icon for Security
  Cloud, // Example icon for Cloud Solutions
  AlertTriangle, // Example icon for Compliance/Monitoring
  Box, // Example icon for Integrations/Packages
  Zap, // Example icon for Automation/Performance
  TrendingUp, // Example icon for Analytics/Growth
  LayoutGrid, // Example icon for Platform/Dashboards
  Calendar, // For Book Demo
  // Add any other Lucide icons used in your productsData
} from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
} from "../../utils/animations";
import { Link } from "react-router-dom";
// Assuming productsData is an array of objects, where each object
// now represents a product without an imagePath, but with an icon string,
// a color, and optionally a gradient string.
import productsData from "../../features/products/data/products";

const ProductsSection = () => {
  // Example productsData structure (make sure your actual data matches this for best results)
  // [
  //   {
  //     title: "Cyber Shield Pro",
  //     group: "Security",
  //     description: "Advanced AI-driven threat detection and real-time incident response.",
  //     features: ["Real-time threat monitoring", "AI-powered detection", "Automated incident response", "Compliance reporting"],
  //     color: "#1E88E5", // A valid CSS color string (e.g., #RRGGBB, rgb(), hsl(), etc.)
  //     icon: "Shield", // Name of the Lucide icon
  //     href: "/products/cyber-shield-pro",
  //     gradient: "linear-gradient(to bottom right, #1E88E5, #0D47A1)", // Optional: specific gradient string
  //   },
  //   {
  //     title: "CloudFlow Automate",
  //     group: "Automation",
  //     description: "Streamline your workflows with intelligent cloud automation solutions.",
  //     features: ["Workflow orchestration", "Resource auto-scaling", "Cost optimization", "Serverless deployment"],
  //     color: "#FFD54F",
  //     icon: "Cloud",
  //     href: "/products/cloudflow-automate",
  //     gradient: "linear-gradient(to bottom right, #FFD54F, #FFC107)",
  //   },
  //   // ... more products
  // ]
  const products = productsData;
  const [activeGroup, setActiveGroup] = useState("All");
  const [selected, setSelected] = useState(null);

  const iconMap = {
    Shield,
    Cloud,
    AlertTriangle,
    Box,
    Zap,
    TrendingUp,
    LayoutGrid,
    // Ensure all icon names used in productsData.icon are mapped here
  };

  const groups = useMemo(() => {
    const s = new Set(products.map((p) => p.group));
    return ["All", ...Array.from(s)];
  }, [products]);

  const filtered = useMemo(
    () =>
      activeGroup === "All"
        ? products
        : products.filter((p) => p.group === activeGroup),
    [products, activeGroup]
  );

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setSelected(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="products"
      className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-base-100 to-base-200"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-gradient-to-t from-secondary/20 via-secondary/10 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <motion.div variants={fadeInUp}>
              <div className="inline-block bg-primary backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-semibold tracking-wider mb-4">
                OUR PRODUCTS
              </div>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl  font-bold mb-6 bg-gradient-to-r from-primary via-gray to-accent bg-clip-text text-transparent"
            >
              Enterprise Security & Intelligence Platforms
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-base-content/80"
            >
              AI-powered products designed for modern enterprises facing complex
              security and data challenges
            </motion.p>

             <motion.div
              className="flex items-center justify-center mt-5 gap-2 flex-wrap"
              variants={fadeInLeft}
            >
              {groups.map((g) => (
                <button
                  key={g}
                  onClick={() => setActiveGroup(g)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105
                    ${
                      activeGroup === g
                        ? "bg-primary text-primary-content shadow-lg shadow-primary/25"
                        : "bg-base-content/5 text-base-content/70 hover:bg-base-content/10 hover:text-base-content"
                    }`}
                >
                  {g}
                </button>
              ))}
            </motion.div>
          </motion.div>
        
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 ">
          {filtered.map((product, i) => {
            const Icon = iconMap[product.icon] || null;
            return (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }} // Animation triggers when 10% of element is visible
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-white/70 dark:bg-base-200/80 backdrop-blur-2xl rounded-3xl border border-base-300 shadow-xl hover:shadow-2xl hover:border-primary/60 transition-all duration-300 p-6 sm:p-8 flex flex-col items-stretch"
              >
                {/* Group badge */}
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide z-20 shadow backdrop-blur border border-primary/10">
                  {product.group}
                </span>

                {/* New Prominent Icon Area */}
                {/* <div
                  className={`relative w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-3xl mb-6 sm:mb-8 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl`}
                  style={{
                    background:
                      product.gradient ||
                      `linear-gradient(to bottom right, ${product.color}aa, ${product.color}66)`,
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 150,
                    }}
                    className="absolute inset-0 bg-white/10 dark:bg-black/10 mix-blend-overlay rounded-3xl"
                  />
                  {Icon && (
                    <Icon
                      size={48} // Larger icon size
                      className="text-white relative z-10 drop-shadow-lg"
                      style={{ color: "white" }} // Ensure icon color is white for contrast with gradient background
                    />
                  )}
                </div> */}

                {/* Title & description */}
                <h3
                  className="text-2xl sm:text-3xl font-bold mb-3 text-center text-base-content leading-tight"
                  style={{ color: product.color }}
                >
                  {product.title}
                </h3>
                <p className="text-base-content/80 text-sm mb-6 text-center line-clamp-3 max-w-xs sm:max-w-sm mx-auto flex-grow">
                  {product.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-8 text-left w-full max-w-[280px] mx-auto">
                  {product.features.map((f, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }} // Features animate as they enter view
                      transition={{ delay: 0.05 * idx }}
                      className="flex items-center gap-3 text-base-content/90 text-sm group-hover:translate-x-1 transition-transform"
                    >
                      <span className="shrink-0 p-0.5 rounded-full bg-primary/10">
                        {" "}
                        {/* Subtle background for checkmark */}
                        <Check
                          size={16}
                          style={{ color: product.color }}
                          className="transform transition-transform group-hover:scale-110"
                        />
                      </span>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                {/* Call to Action Button */}
                <div className="w-full mt-auto flex flex-col items-center">
                  <Link to={product.href} className="w-full block">
                    <motion.button
                      whileHover={{
                        scale: 1.04,
                        boxShadow:
                          "0 10px 20px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.05)",
                      }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      onClick={() => setSelected(product)} // Added onClick to open modal for details
                      className="w-full px-6 py-3 rounded-full font-semibold border-2 bg-primary/10 text-primary border-primary/30 flex items-center justify-center gap-3 group transition-all duration-300 hover:bg-primary/20 hover:text-primary-content text-sm relative overflow-hidden shadow-md"
                    >
                      <span className="relative z-10">Learn More</span>
                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-primary" />
                    </motion.button>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Product Detail Modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              />
              <motion.div
                initial={{ y: 20, scale: 0.98 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 20, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative z-10 w-full max-w-3xl mx-auto bg-base-100 rounded-2xl shadow-2xl overflow-hidden border border-base-200"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
                  {/* Icon in modal (replaces image) */}
                  <div
                    className={`w-24 h-24 sm:w-32 sm:h-32 relative rounded-xl overflow-hidden shrink-0 flex items-center justify-center`}
                    style={{
                      background:
                        selected.gradient ||
                        `linear-gradient(to bottom right, ${selected.color}aa, ${selected.color}66)`,
                    }}
                  >
                    {iconMap[selected.icon] &&
                      React.createElement(iconMap[selected.icon], {
                        size: 56, // Larger icon in modal
                        className: "text-white relative z-10 drop-shadow-md",
                      })}
                    <div className="absolute inset-0 bg-white/10 dark:bg-black/10 mix-blend-overlay rounded-xl"></div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="flex items-start sm:items-center justify-between gap-2">
                      <h3
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: selected.color }}
                      >
                        {selected.title}
                      </h3>
                      <button
                        onClick={() => setSelected(null)}
                        aria-label="Close"
                        className="btn btn-ghost btn-sm sm:btn-md btn-circle"
                      >
                        <X />
                      </button>
                    </div>
                    <p className="text-base-content/80 mt-2 text-sm sm:text-base">
                      {selected.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {selected.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check
                            size={16}
                            style={{ color: selected.color }}
                            className="mt-1 shrink-0"
                          />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2 sm:gap-3">
                      <button
                        onClick={() =>
                          window.openDemoModal ? window.openDemoModal() : null
                        }
                        className="btn btn-primary btn-sm sm:btn-md gap-2"
                      >
                        <Calendar className="hidden sm:inline" /> Book Demo
                      </button>
                      <Link
                        to={selected.href}
                        className="btn btn-ghost btn-sm sm:btn-md"
                      >
                        View Product
                      </Link>
                      <button
                        onClick={() => setSelected(null)}
                        className="btn btn-outline btn-sm sm:btn-md sm:hidden"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View All Products Button */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link to="/solutions" className="inline-block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="btn btn-primary btn-lg px-8 gap-3 relative overflow-hidden group"
            >
              <span>View All Products</span>
              <ArrowRight className="transform transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
