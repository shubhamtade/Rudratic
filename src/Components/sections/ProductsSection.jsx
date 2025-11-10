import React, { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  Shield,
  Cloud,
  AlertTriangle,
  Box,
  Zap,
  TrendingUp,
  LayoutGrid,
  Calendar,
} from "lucide-react";
import {
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "../../utils/animations";
import { Link } from "react-router-dom";
import productsData from "../../features/products/data/products";

const ProductsSection = () => {
  const products = productsData;
  const [activeGroup, setActiveGroup] = useState("All");
  const [selected, setSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const iconMap = {
    Shield,
    Cloud,
    AlertTriangle,
    Box,
    Zap,
    TrendingUp,
    LayoutGrid,
  };

  const goToNext = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, Math.ceil(filtered.length / 2) - 1)
    );
  };

  const goToPrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
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
      className="relative py-24 sm:py-32 overflow-hidden bg-linear-to-b from-base-100 to-base-200"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-40 left-1/4 w-[800px] h-[800px] bg-linear-to-r from-primary/20 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[700px] h-[700px] bg-linear-to-t from-secondary/20 via-secondary/10 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="mb-6"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <motion.div
                variants={fadeInRight}
                className="relative inline-block"
              >
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-base-content mb-1 relative z-10">
                  Our Products
                </h2>
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 rounded-full -skew-x-6"></div>
              </motion.div>
              <motion.p
                className="text-base-content/80 text-lg max-w-2xl mt-3"
                variants={fadeInLeft}
              >
                Explore our comprehensive suite of enterprise solutions designed
                to secure, automate, and transform your business.
              </motion.p>
            </div>

            <motion.div
              className="flex items-center justify-center sm:justify-start gap-2 flex-wrap"
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
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-12">
          {filtered.map((product, i) => {
            const Icon = iconMap[product.icon] || null;
            return (
              <motion.article
                key={product.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.12, type: "spring" }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-white/70 dark:bg-base-200/80 backdrop-blur-2xl rounded-3xl border border-base-300 shadow-xl hover:shadow-2xl hover:border-primary/60 transition-all duration-300 p-6 sm:p-8 flex flex-col items-stretch min-h-[500px] sm:min-h-[600px] overflow-hidden"
              >
                {/* Group badge */}
                <span className="absolute top-6 left-6 bg-gradient-to-r from-primary/20 to-accent/20 text-primary px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide z-20 shadow backdrop-blur border border-primary/10">
                  {product.group}
                </span>

                {/* Icon area with gradient ring */}
                {/* Icon area removed */}

                {/* Product image */}
                <Link to={product.href} className="w-full block relative mb-4">
                  <motion.div
                    whileHover={{ scale: 1.04 }}
                    className="relative overflow-hidden rounded-2xl border border-base-200 shadow-lg group-hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className={`absolute inset-0 ${product.gradient} opacity-60 group-hover:opacity-80 transition-opacity`}
                    />
                    <img
                      src={product.imagePath}
                      alt={product.title}
                      className="w-full h-36 sm:h-48 object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
                    />
                  </motion.div>
                </Link>

                {/* Title & description */}
                <h3
                  className="text-xl sm:text-2xl font-bold mb-2 mt-1 text-base-content"
                  style={{ color: product.color }}
                >
                  {product.title}
                </h3>
                <p className="text-base-content/80 text-sm mb-4 line-clamp-3 max-w-xs sm:max-w-sm mx-auto">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6 text-left w-full max-w-xs mx-auto">
                  {product.features.slice(0, 3).map((f, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center gap-3 text-base-content/90 text-sm group-hover:translate-x-1 transition-transform"
                    >
                      <span className="shrink-0">
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

                {/* CTA button */}
                <div className="w-full mt-auto flex flex-col items-center">
                  <Link to={product.href} className="w-full block">
                    <motion.button
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400 }}
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

        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
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
                className="relative z-10 w-full max-w-3xl mx-4 bg-base-100 rounded-2xl shadow-2xl overflow-hidden border border-base-200"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-4 sm:p-6 max-h-[90vh] overflow-y-auto">
                  <div className="w-full sm:w-48 h-48 sm:h-32 relative rounded-lg overflow-hidden shrink-0">
                    <img
                      src={selected.imagePath}
                      alt={selected.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
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
