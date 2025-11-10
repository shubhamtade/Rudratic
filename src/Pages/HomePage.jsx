import React from "react";
import { motion } from "framer-motion";
import HeroSection from "../Components/sections/HeroSection.jsx";
import ProductsSection from "../Components/sections/ProductsSection.jsx";
import ServicesSection from "../Components/sections/ServicesSection.jsx";
import TestimonialsSection from "../Components/sections/TestimonialsSection.jsx";
import CTASection from "../Components/sections/CTASection.jsx";
import HowItWorksSection from "../Components/sections/HowItWorksSection.jsx";
import WhatWeDoSection from "../Components/sections/WhatWeDoSection.jsx";
import IntegratedApproach from "../Components/sections/IntegratedApproach.jsx";
import Footer from "../layouts/Footer.jsx";
import TechPartners from "../Components/sections/TechPartners.jsx";
import StatsBar from "../Components/sections/StatsBar.jsx";
import IndustriesSection from "../Components/sections/IndustriesSection.jsx";
import WhyChooseUs from "../Components/sections/WhyChooseUs.jsx";

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
      {/* <StatsBar /> */}
      <ProductsSection />

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
        <HowItWorksSection />
      </motion.section>

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
        <WhyChooseUs />
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionFade}
      >
        <IndustriesSection />
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
        <CTASection />
      </motion.section>

      <Footer />
    </>
  );
};

export default HomePage;
