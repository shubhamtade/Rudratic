import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Building2,
  Award,
  Globe,
} from "lucide-react";
import Footer from "../layouts/Footer";

const ClientSuccessPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Rudratic Technologies transformed our security infrastructure. Their PAM solution not only secured our privileged accounts but also streamlined our compliance reporting. We achieved SOC 2 Type II certification in record time.",
      author: "Sarah Johnson",
      position: "Chief Information Officer",
      company: "Global Financial Technology",
      rating: 5,
      color: "hsl(var(--in))",
    },
    {
      quote:
        "The monitoring platform Rudratic implemented revolutionized our patient data security. What used to take hours now has zero errors. Their team understood our unique healthcare compliance requirements and delivered a perfect solution.",
      author: "Emily Rodriguez",
      position: "Director of Operations",
      company: "Healthcare Plus",
      rating: 5,
      color: "hsl(var(--s))",
    },
    {
      quote:
        "We partnered with Rudratic for our Oracle integration, and they delivered excellence. Their expertise in both the technology and our industry needs made the transition seamless. The manufacturing solutions they provided have improved our efficiency by 40%.",
      author: "David Kumar",
      position: "IT Director",
      company: "Manufacturing Solutions Inc",
      rating: 5,
      color: "hsl(var(--p))",
    },
    {
      quote:
        "Rudratic's automation platform has been a game-changer for our operations. We've reduced manual processing time by 60% and our team can now focus on strategic initiatives instead of repetitive tasks. The ROI was evident within the first quarter.",
      author: "Michael Chen",
      position: "VP of Operations",
      company: "Enterprise Logistics Corp",
      rating: 5,
      color: "hsl(var(--in))",
    },
    {
      quote:
        "The real-time monitoring and predictive analytics from Rudratic have prevented costly downtime on multiple occasions. Their 24/7 support team is incredibly responsive, and the platform's insights have helped us optimize our infrastructure.",
      author: "Lisa Anderson",
      position: "CTO",
      company: "Cloud Services International",
      rating: 5,
      color: "hsl(var(--s))",
    },
  ];

  const stats = [
    { number: "500+", label: "Happy Clients", icon: Building2 },
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: Star },
    { number: "150+", label: "Countries Served", icon: Globe },
  ];

  const nextTestimonial = () =>
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentTestimonial = testimonials[activeTestimonial];

  // Floating background orbs
  const orbs = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    size: 250 + Math.random() * 150,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: i % 2 === 0 ? "var(--p)" : "var(--s)",
  }));

  return (
    <div className="bg-base-100 relative min-h-screen overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              background: `radial-gradient(circle, hsla(${orb.color}/0.4) 0%, transparent 70%)`,
              width: orb.size,
              height: orb.size,
            }}
            animate={{
              x: [`${orb.x}%`, `${(orb.x + 30) % 100}%`],
              y: [`${orb.y}%`, `${(orb.y + 40) % 100}%`],
            }}
            transition={{
              duration: 25 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="container mx-auto px-4 pt-36 pb-16 md:pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="badge badge-lg border-primary/50 bg-primary/10 text-primary p-4 mb-6 font-semibold shadow-md shadow-primary/20"
            >
              Client Success Stories
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
              Trusted by Industry Leaders <br /> Delivering Real Results
            </h1>
            <p className="max-w-4xl mx-auto text-lg text-base-content/70 leading-relaxed">
              From startups to Fortune 500 companies, organizations worldwide
              trust Rudratic to overcome complex IT challenges, enhance
              security, and drive operational excellence.
            </p>
          </motion.div>
        </div>

        {/* Testimonial Card */}
        <div className="container mx-auto px-4 lg:px-8 mb-20">
          <div className="relative max-w-4xl mx-auto card bg-base-200/40 backdrop-blur-2xl border border-primary/20 shadow-2xl overflow-hidden p-6 md:p-12">
            <motion.div
              className="absolute inset-0 opacity-10 bg-gradient-to-tr from-pink-500 via-purple-500 to-indigo-500"
              animate={{ opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 text-center"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="inline-block p-4 rounded-box mb-6 shadow-md"
                  style={{
                    background: `${currentTestimonial.color}20`,
                    border: `1px solid ${currentTestimonial.color}30`,
                  }}
                >
                  <Quote
                    size={36}
                    style={{ color: currentTestimonial.color }}
                  />
                </motion.div>

                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className="fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <motion.p
                  className="text-lg md:text-xl italic text-base-content/90 leading-relaxed max-w-3xl mx-auto mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  “{currentTestimonial.quote}”
                </motion.p>

                <div>
                  <h3
                    className="text-xl font-bold"
                    style={{ color: currentTestimonial.color }}
                  >
                    {currentTestimonial.author}
                  </h3>
                  <p className="text-base-content/70">
                    {currentTestimonial.position}
                  </p>
                  <p className="text-sm text-base-content/50">
                    {currentTestimonial.company}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={prevTestimonial}
                className="btn btn-circle bg-primary/10 border-primary/20"
              >
                <ChevronLeft size={24} className="text-primary" />
              </motion.button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial ? "w-8" : "w-2"
                    }`}
                    style={{
                      backgroundColor:
                        index === activeTestimonial
                          ? currentTestimonial.color
                          : "hsla(var(--bc)/0.2)",
                    }}
                    whileHover={{ scale: 1.2 }}
                  />
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={nextTestimonial}
                className="btn btn-circle bg-primary/10 border-primary/20"
              >
                <ChevronRight size={24} className="text-primary" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="container mx-auto px-4 lg:px-8 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{
                    scale: 1.08,
                    boxShadow: "0 10px 35px rgba(168,85,247,0.3)",
                  }}
                  className="card text-center bg-base-200/40 backdrop-blur-md border border-primary/20 shadow-lg"
                >
                  <div className="card-body items-center p-8">
                    <Icon size={36} className="text-primary mb-4" />
                    <motion.div
                      className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.05 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-base font-medium text-base-content/70">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default ClientSuccessPage;
