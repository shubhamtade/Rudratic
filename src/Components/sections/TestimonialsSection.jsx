import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { fadeInUp, staggerContainer } from "../../utils/animations";

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "I have been extremely happy with the results of working with the creative agency and I would highly recommend them to anyone.",
      name: "Lewis Herrin",
      position: "CEO, SSI",
      rating: 5,
    },
    {
      text: "The team delivered exceptional results that exceeded our expectations. Their professionalism and expertise are unmatched.",
      name: "Sarah Johnson",
      position: "CTO, TechCorp",
      rating: 5,
    },
    {
      text: "Outstanding service and support throughout the entire project. We couldn't be happier with the outcome.",
      name: "Michael Chen",
      position: "Director, GlobalTech",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 bg-base-100 overflow-hidden testimonials-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-base-content mb-4 floating-title"
          >
            What Our Clients Say About Us
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-base-content/60 max-w-2xl mx-auto"
          >
            Real feedback from partners who have transformed their business with our solutions.
          </motion.p>
        </motion.div>

        {/* Animated Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              className="card bg-base-200/50 border border-base-content/10 shadow-xl hover:shadow-primary/20 transition-all duration-500 glowing-card"
            >
              <div className="card-body p-10 text-center floating-card">
                <Quote size={48} className="text-primary/40 mx-auto mb-6 animate-quote" />
                <p className="text-base-content/80 leading-relaxed mb-6 italic">
                  "{testimonials[currentSlide].text}"
                </p>
                <div className="flex justify-center gap-1 mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={22}
                      className="text-yellow-400 fill-current animate-star"
                    />
                  ))}
                </div>
                <div className="mt-auto">
                  <h4 className="font-bold text-lg text-base-content">
                    {testimonials[currentSlide].name}
                  </h4>
                  <p className="text-sm text-base-content/60">
                    {testimonials[currentSlide].position}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="btn btn-outline btn-circle glowing-btn"
              onClick={prevSlide}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <span className="font-semibold text-base-content/70 text-lg">
              {currentSlide + 1} / {testimonials.length}
            </span>

            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              className="btn btn-outline btn-circle glowing-btn"
              onClick={nextSlide}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
