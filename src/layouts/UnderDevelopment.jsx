import React from "react";
import { motion } from "framer-motion";
import { Wrench, Cog, AlertTriangle, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const UnderDevelopment = () => {
  return (
   <div>
     <div className="relative flex flex-col items-center justify-center h-screen mx-auto px-6 py-16 text-center overflow-hidden bg-gradient-to-br from-base-200/60 to-base-300/80 backdrop-blur-lg rounded-3xl border border-primary/20 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
      {/* Background Glow Animation */}
      <motion.div
        className="absolute inset-0 -z-10 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 30% 30%, hsla(var(--p)/0.4), transparent 70%)",
            "radial-gradient(circle at 70% 70%, hsla(var(--s)/0.4), transparent 70%)",
            "radial-gradient(circle at 50% 50%, hsla(var(--p)/0.4), transparent 70%)",
          ],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Animated Icons */}
      <div className="flex items-center justify-center mb-8 relative">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="text-primary"
        >
          <Cog size={80} />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-secondary opacity-70"
        >
          <Wrench size={50} />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute -right-8 text-warning"
        >
          <AlertTriangle size={38} />
        </motion.div>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold text-base-content mb-4 tracking-wide"
      >
        Page Under <span className="text-primary">Development</span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="max-w-xl text-base md:text-lg text-base-content/70 leading-relaxed mb-8"
      >
        We’re working hard to bring you something amazing.  
        Check back soon or get in touch with us for more information.
      </motion.p>

      {/* Contact Button */}
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
        <Link
          to="/contact"
          className="btn btn-primary gap-2 text-lg font-semibold shadow-[0_0_25px_hsla(var(--p)/0.5)] hover:shadow-[0_0_40px_hsla(var(--p)/0.7)] transition-all duration-300"
        >
          <Mail size={20} />
          Contact Us
        </Link>
      </motion.div>

      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-primary/10 via-transparent to-transparent rounded-b-3xl" />
    </div>
      <Footer/>

   </div>
  );
};

export default UnderDevelopment;
