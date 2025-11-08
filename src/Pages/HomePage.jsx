import React from 'react';
import HeroSection from "../Components/HeroSection";
import TechPartners from "../Components/TechPartners";
import WhatWeDoSection from "../Components/WhatWeDoSection";
import ServicesSection from "../Components/ServicesSection";
import ProductsSection from "../Components/ProductsSection";
import IntegratedApproach from "../Components/IntegratedApproach";
import TestimonialsSection from "../Components/TestimonialsSection";
import AboutUsSection from '../Components/AboutUsSection';
import CTASection from "../Components/CTASection";
import Footer from "../Components/Footer";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* <TechPartners /> */}
      <WhatWeDoSection />
      <ProductsSection />
      <ServicesSection />
      <IntegratedApproach />
      <TestimonialsSection />
      <AboutUsSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default HomePage;