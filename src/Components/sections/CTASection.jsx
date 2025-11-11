import React from "react";
import { motion } from "framer-motion";
import { Calendar, PlayCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "../../utils/animations";
import ParticleBackground from "../ui/ParticleBackground";

const CTASection = () => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-base-100 via-base-200 to-base-300 overflow-hidden cta-section">
      {/* Background particle field */}
      <ParticleBackground density={50} color="hsla(var(--p)/0.25)" />

      {/* Floating aurora blobs */}
      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-10 left-[15%] w-[300px] h-[300px] bg-[radial-gradient(circle,hsla(var(--p)/0.3),transparent)] blur-3xl opacity-30"
      />
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-[radial-gradient(circle,hsla(var(--s)/0.3),transparent)] blur-3xl opacity-25"
      />

      {/* Glass panel content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="backdrop-blur-xl bg-base-100/20 border border-base-content/10 rounded-3xl shadow-2xl p-10 sm:p-14 md:p-20 text-center glassy-panel"
        >
          {/* Headline */}
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-5xl font-bold text-base-content mb-6 leading-tight drop-shadow-md"
          >
            Let’s Secure &amp; <span className="text-primary">Empower</span> Your IT Future
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-base-content/70 max-w-3xl mx-auto mb-12"
          >
            Collaborate with <span className="font-semibold text-secondary">Rudratic Technologies</span> to streamline, safeguard, and scale your IT infrastructure with unmatched reliability.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center "
          >
            <motion.button
              whileHover={{ scale: 1.07, y: -3 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="btn btn-primary btn-lg shadow-lg hover:shadow-primary/40 magnetic-btn"
              onClick={() => window.openDemoModal && window.openDemoModal()}
            >
              <Calendar size={20} />
              Schedule a Consultation
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.07, y: -3 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="btn btn-outline btn-lg border-base-content/30 hover:border-primary hover:text-primary magnetic-btn"
              onClick={() => window.openDemoModal && window.openDemoModal()}
            >
              <PlayCircle size={20} />
              Request a Demo
            </motion.button>
          </motion.div>

          
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
