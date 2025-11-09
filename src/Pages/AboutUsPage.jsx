import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users, Target, TrendingUp, Shield } from "lucide-react";
import Footer from "../layouts/Footer";

// A reusable component for the animated number counter
function Counter({ to }) {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;
      const controls = animate(0, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          node.textContent = Math.round(value).toLocaleString();
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  // We add the '+' manually after the number
  return <span ref={nodeRef} />;
}

const AboutUsPage = () => {
  const stats = [
    { number: 500, label: "Happy Clients" },
    { number: 15, label: "Years of Excellence" },
    { number: 98, label: "Client Satisfaction", suffix: "%" },
    { number: 150, label: "Countries Served" },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and ethical practices in everything we do.",
      color: "text-indigo-400",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We believe in working together with our clients as partners to achieve shared success.",
      color: "text-purple-400",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality solutions and services.",
      color: "text-pink-400",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description:
        "We continuously evolve and adopt cutting-edge technologies to stay ahead.",
      color: "text-sky-400",
    },
  ];

  const heroTitle = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const heroTitleLine = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-base-100">
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 30%, hsla(var(--p)/0.1) 0%, transparent 40%)",
            "radial-gradient(circle at 80% 70%, hsla(var(--s)/0.1) 0%, transparent 40%)",
            "radial-gradient(circle at 50% 50%, hsla(var(--a)/0.1) 0%, transparent 40%)",
            "radial-gradient(circle at 20% 30%, hsla(var(--p)/0.1) 0%, transparent 40%)",
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 z-0 pointer-events-none"
      />

      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-36 pb-16 md:pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="badge badge-lg badge-outline border-primary/50 bg-primary/10 text-primary p-4 mb-6 font-semibold">
              About Rudratic
            </div>
            <motion.h1
              variants={heroTitle}
              initial="hidden"
              animate="show"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight animated-gradient-text"
            >
              <motion.span className="block" variants={heroTitleLine}>
                Empowering Businesses Through
              </motion.span>
              <motion.span className="block" variants={heroTitleLine}>
                Integrated IT Excellence
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed"
            >
              We combine strategy, technology, and support to help businesses
              operate smarter and achieve more.
            </motion.p>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 pb-16 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [-5, 5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
              className="relative overflow-hidden aspect-video rounded-3xl border border-primary/20 bg-base-200/30 backdrop-blur-md shadow-2xl p-2"
            >
              <video
                src="/Swot Explainer Video V6.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight animated-gradient-text">
              Our Story
            </h2>
            <div className="space-y-5 text-base-content/80 leading-relaxed">
              <p>
                <span className="text-primary font-semibold">Rudratic</span> is
                a leading provider of enterprise IT solutions, specializing in{" "}
                <span className="text-secondary font-medium">
                  Privileged Access Management
                </span>
                ,{" "}
                <span className="text-secondary font-medium">
                  IT Monitoring
                </span>
                , and{" "}
                <span className="text-secondary font-medium">Automation</span>.
              </p>
              <p>
                With over <strong>15 years of experience</strong>, we serve{" "}
                <strong>500+ global enterprises</strong> across{" "}
                <strong>150+ countries</strong>, delivering innovative solutions
                that secure, optimize, and transform IT operations.
              </p>
              <p>
                Our certified experts provide comprehensive training,
                consulting, and implementation for{" "}
                <span className="text-accent font-medium">Oracle</span>,{" "}
                <span className="text-accent font-medium">IBM</span>,{" "}
                <span className="text-accent font-medium">SAP</span>, and custom
                application development.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 10px 30px -10px hsla(var(--p)/0.3)",
                }}
                className="card text-center bg-base-200/30 backdrop-blur-md border border-primary/20 shadow-lg"
              >
                <div className="card-body items-center p-8">
                  <div className="text-5xl font-bold mb-2 animated-gradient-text">
                    <Counter to={stat.number} />
                    {stat.suffix || "+"}
                  </div>
                  <div className="text-base font-medium text-base-content/70">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animated-gradient-text">
              Our Core Values
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-base-content/70">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ scale: 1.03, y: -8 }}
                  className="value-card card bg-base-200/30 backdrop-blur-md border border-primary/20 shadow-lg"
                >
                  <div className="card-body p-8 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`inline-flex p-4 mb-6 rounded-xl border border-primary/20 bg-primary/10`}
                    >
                      <Icon size={32} className="text-primary" />
                    </motion.div>
                    <h3
                      className={`card-title text-2xl font-bold mb-3 ${value.color}`}
                    >
                      {value.title}
                    </h3>
                    <p className="text-base text-base-content/70 leading-relaxed">
                      {value.description}
                    </p>
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

export default AboutUsPage;
