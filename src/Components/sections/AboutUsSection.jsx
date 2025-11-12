import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Phone } from "lucide-react";
import { fadeInUp, staggerContainer, fadeInRight } from "../../utils/animations";
import { Link } from "react-router-dom";

const AboutUsSection = () => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-base-200 overflow-hidden aboutus-section">
      {/* Animated floating glow blobs */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[15%] left-[10%] w-[250px] h-[250px] bg-gradient-to-br from-primary/40 to-secondary/30 rounded-full blur-3xl opacity-20"
      />
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-gradient-to-tr from-secondary/30 to-primary/20 rounded-full blur-3xl opacity-15"
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.p
              variants={fadeInUp}
              className="text-sm font-semibold tracking-widest text-primary uppercase mb-4"
            >
              About Us
            </motion.p>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content mb-6 leading-tight"
            >
              Making IT Easy for Modern Businesses
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base-content/80 text-lg leading-relaxed mb-8 text-justify"
            >
              At <span className="text-primary font-semibold">Rudratic Technologies</span>, our vision is simple:
              <strong> "Make IT Easy"</strong>   even for the most complex business processes.
              <br /><br />
              Our spirited team delivers efficient, secure, and scalable solutions in audit,
              monitoring, and automation   ensuring compliance with security, risk, and regulatory standards.
              We proudly provide consulting services across global leaders like{" "}
              <span className="font-medium text-secondary">Oracle</span>,{" "}
              <span className="font-medium text-secondary">IBM</span>, and{" "}
              <span className="font-medium text-secondary">SAP</span>.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary btn-lg gap-2 glowing-btn"
                >
                  <Phone size={18} />
                  Contact Us
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Image Card */}
          <motion.div
            ref={cardRef}
            style={{ rotateX, rotateY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="transform-gpu"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden border border-base-content/10 shadow-2xl hover:shadow-primary/20 transition-all duration-500 backdrop-blur-sm card-tilt"
            >
              <img
                src="/map_image.png"
                alt="Global Map"
                className="w-full h-full object-cover floating-image"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
