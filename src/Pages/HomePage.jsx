import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/sections/HeroSection";
import ProductsSection from "../components/sections/ProductsSection";
import ServicesSection from "../components/sections/ServicesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import AboutUsSection from "../components/sections/AboutUsSection";
import CTASection from "../components/sections/CTASection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import WhatWeDoSection from "../components/sections/WhatWeDoSection";
import IntegratedApproach from "../components/sections/IntegratedApproach";
import Footer from "../layouts/Footer";
import TechPartners from "../components/sections/TechPartners";

const HomePage = () => {
  // Animation for scroll reveal
  const sectionFade = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <>
      <HeroSection />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
      >
        <ProductsSection />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
      >
        <HowItWorksSection />
      </motion.section>

      {/* <TechPartners /> */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
      >
        <WhatWeDoSection />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
      >
        <ServicesSection />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
      >
        <IntegratedApproach />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
      >
        <TestimonialsSection />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
      >
        <AboutUsSection />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
      >
        <CTASection />
      </motion.section>

      <Footer />
    </>
  );
};

export default HomePage;
