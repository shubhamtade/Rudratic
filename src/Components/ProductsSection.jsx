import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { fadeInLeft, fadeInRight, staggerContainer } from "../utils/animations";
import { Link } from "react-router-dom";

// Enhanced Products Section (below hero)
const ProductsSection = () => {
  const products = [
    {
      title: "SWOT - Privileged Access Management",
      imagePath: "product1.jpg",
      description:
        "Comprehensive PAM solution with secure credential vaulting, granular access controls, approval workflows, and continuous monitoring.",
      features: [
        "Role-based Access Control",
        "Just-in-Time Privileges",
        "Password Vaulting",
        "Session Recording",
      ],
      href: "/products/pam",
      color: "hsl(var(--p))",
      gradient: "from-primary/20 via-primary/10 to-transparent",
    },
    {
      title: "AIquinox - Performance Monitoring",
      imagePath: "product2.jpg",
      description:
        "AI-powered monitoring that detects impactful issues using advanced analytics, cutting through the noise of traditional tools.",
      features: [
        "AI-Driven Analytics",
        "Automated Issue Discovery",
        "Real-Time Tracking",
        "Predictive Insights",
      ],
      href: "/products/AiquinoxPage",
      color: "hsl(var(--s))",
      gradient: "from-secondary/20 via-secondary/10 to-transparent",
    },
    {
      title: "SWOT CLOUD PAM - Cloud Privileged Access",
      imagePath: "product4.jpg",
      description:
        "Cloud-native security for privileged accounts across multi-cloud and hybrid environments with zero-trust architecture.",
      features: [
        "Secure Cloud Vaulting",
        "Just-in-Time Access",
        "Multi-factor Authentication",
        "Real-time Session Recording",
      ],
      href: "/products/SWOTCloudPAMPage",
      color: "hsl(var(--p))",
      gradient: "from-primary/20 via-primary/10 to-transparent",
    },
    {
      title: "SWOT DAM - Digital Asset Management",
      imagePath: "product3.jpg",
      description:
        "A comprehensive platform for organizing, managing, and distributing digital assets with powerful search and version control.",
      features: [
        "Centralized Asset Storage",
        "AI-powered Search",
        "Version Control & Audit Trails",
        "Permission Management",
      ],
      href: "/products/SWOTDAMPage",
      color: "hsl(var(--a))",
      gradient: "from-accent/20 via-accent/10 to-transparent",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 overflow-hidden bg-base-100">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-t from-secondary/10 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-20"
        >
          <motion.p
            className="text-sm font-semibold tracking-widest uppercase text-primary mb-4"
            variants={fadeInLeft}
          >
            Our Products
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content"
            variants={fadeInRight}
          >
            Innovative Enterprise Solutions
          </motion.h2>
        </motion.div>

        {/* Product Cards */}
        <div className="space-y-28">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative`}
            >
              {/* Image Side */}
              <motion.div
                variants={index % 2 === 0 ? fadeInLeft : fadeInRight}
                className={`relative group order-1 ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Link to={product.href}>
                  <motion.div
                    whileHover={{
                      scale: 1.04,
                      rotateY: 5,
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.3)",
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="relative overflow-hidden rounded-3xl border border-base-300 backdrop-blur-xl shadow-xl bg-gradient-to-br from-base-200/40 via-base-100/60 to-base-100"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-70 group-hover:opacity-90 transition-all`}
                    ></div>
                    <img
                      src={product.imagePath}
                      alt={product.title}
                      className="w-full h-auto aspect-[4/3] object-cover rounded-3xl transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                </Link>
              </motion.div>

              {/* Text Side */}
              <motion.div
                variants={index % 2 === 0 ? fadeInRight : fadeInLeft}
                className={`order-2 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <h3
                  className="text-2xl sm:text-3xl font-bold mb-5"
                  style={{ color: product.color }}
                >
                  {product.title}
                </h3>
                <p className="text-base-content/70 text-lg leading-relaxed mb-7">
                  {product.description}
                </p>

                <ul className="space-y-3 mb-10">
                  {product.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3 text-base-content/80"
                    >
                      <Check size={20} style={{ color: product.color }} />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Link to={product.href}>
                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      x: 6,
                      boxShadow: `0 0 20px ${product.color}40`,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="px-6 py-3 rounded-full font-semibold border bg-transparent backdrop-blur-md flex items-center gap-2 group"
                    style={{
                      color: product.color,
                      borderColor: product.color,
                    }}
                  >
                    Learn More{" "}
                    <ArrowRight
                      size={18}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
