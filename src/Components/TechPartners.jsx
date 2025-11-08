import React from 'react';
import { motion } from 'framer-motion';

const TechPartnersSection = () => {
  const partners = ['Microsoft', 'Amazon', 'Google', 'Oracle', 'IBM', 'Dell', 'SAP', 'Cisco', 'VMware', 'Red Hat'];

  return (
    <section className="py-12 md:py-20 bg-base-100 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <h3 className="text-2xl md:text-3xl font-semibold text-base-content text-center md:text-left flex-shrink-0">
            Trusted by Leading
            <br />
            <span className="text-base-content/70">Enterprises & Partners</span>
          </h3>

          {/* Scrolling Partners Marquee */}
          <div className="relative w-full flex-1 overflow-hidden mask-image-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <motion.div
              animate={{ x: [0, -2000] }}
              transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
              className="flex items-center gap-16"
            >
              {[...partners, ...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="text-2xl font-semibold text-base-content/40 whitespace-nowrap"
                >
                  {partner}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPartnersSection;