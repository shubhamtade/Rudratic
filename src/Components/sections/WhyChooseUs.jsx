
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  Users,
  Shield,
  Award,
  Zap,
  ArrowRight,
} from "lucide-react";

const WhyChooseUs = () => {
  const valueProps = [
    {
      icon: Sparkles,
      title: "AI-First Innovation",
      description:
        "Built from the ground up with artificial intelligence at the core. Our solutions don't just use AI—they think, learn, and evolve autonomously.",
      gradient: "from-fuchsia-600/20 to-pink-500/20",
      borderGradient: "from-fuchsia-500 to-pink-400",
      iconBg: "from-fuchsia-500/20 to-pink-500/20",
      stats: "Revolutionary",
      highlight: "AI-Driven",
      iconColor: "text-fuchsia-400",
    },
    {
      icon: TrendingUp,
      title: "Proven Enterprise Success",
      description:
        "Trusted by Fortune 500 companies and government agencies worldwide. Battle-tested in the most demanding environments.",
      gradient: "from-blue-600/20 to-cyan-500/20",
      borderGradient: "from-blue-500 to-cyan-400",
      iconBg: "from-blue-500/20 to-cyan-500/20",
      stats: "Trusted",
      highlight: "Enterprise",
      iconColor: "text-blue-400",
    },
    {
      icon: Users,
      title: "Expert Support",
      description:
        "24/7 dedicated security experts, rapid response times, and personalized implementation support. Your success is our mission.",
      gradient: "from-emerald-600/20 to-teal-500/20",
      borderGradient: "from-emerald-500 to-teal-400",
      iconBg: "from-emerald-500/20 to-teal-500/20",
      stats: "World-Class",
      highlight: "Support",
      iconColor: "text-emerald-400",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Award-winning solutions recognized by leading analysts. Consistently ranked as a top security vendor.",
      gradient: "from-amber-600/20 to-yellow-500/20",
      borderGradient: "from-amber-500 to-yellow-400",
      iconBg: "from-amber-500/20 to-yellow-500/20",
      stats: "Award-Winning",
      highlight: "Recognition",
      iconColor: "text-amber-400",
    },
    {
      icon: Zap,
      title: "Rapid Deployment",
      description:
        "Go from zero to secure in hours, not months. Our solutions integrate seamlessly with your existing infrastructure.",
      gradient: "from-purple-600/20 to-pink-500/20",
      borderGradient: "from-purple-500 to-pink-400",
      iconBg: "from-purple-500/20 to-pink-500/20",
      stats: "Fast",
      highlight: "Deployment",
      iconColor: "text-purple-400",
    },
    {
      icon: Shield,
      title: "Zero-Trust Security",
      description:
        "Built on modern zero-trust principles with defense-in-depth. Never trust, always verify, continuously adapt.",
      gradient: "from-indigo-600/20 to-blue-500/20",
      borderGradient: "from-indigo-500 to-blue-400",
      iconBg: "from-indigo-500/20 to-blue-500/20",
      stats: "Secure",
      highlight: "Zero-Trust",
      iconColor: "text-indigo-400",
    },
  ];

  return (
    <section className="relative py-10  overflow-hidden bg-base-100">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/10 via-secondary/5 to-transparent rounded-full blur-3xl animate-pulse-slower"></div>
        <div className="absolute bottom-0 left-20 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 via-primary/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-block mb-4 px-6 py-2 bg-accent/10 backdrop-blur-sm rounded-full">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-semibold">
              OUR EDGE IN INDUSTRY
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-base-content via-base-content/80 to-base-content bg-clip-text text-transparent">
            Why Choose Rudratic?
          </h2>

          <p className="text-lg sm:text-xl text-base-content/70">
            More than just security software—a strategic partner in your digital transformation
          </p>
        </motion.div>

        {/* Value Props Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.6 }}
              >
                <motion.div
                  whileHover={{ 
                    y: -12, 
                    scale: 1.03,
                    boxShadow: "0 20px 60px rgba(0,0,0,0.2)"
                  }}
                  transition={{ duration: 0.3 }}
                  className="group h-full relative rounded-2xl overflow-hidden transition-all duration-300"
                >
                  {/* Gradient Border Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div 
                      className={`absolute inset-0 bg-linear-to-br ${prop.borderGradient}`}
                      style={{ padding: '1px' }}
                    >
                      <div className="absolute inset-0 bg-base-100/95 backdrop-blur-md rounded-[15px]" />
                    </div>
                  </div>

                  {/* Background Glow */}
                  <div className="absolute -inset-1 bg-linear-to-br opacity-25 group-hover:opacity-40 transition-opacity rounded-2xl blur-2xl" 
                    style={{ 
                      backgroundImage: `linear-gradient(135deg, ${prop.borderGradient === 'from-blue-500 to-cyan-400' ? '#3b82f6' : ''}, ${prop.borderGradient === 'from-blue-500 to-cyan-400' ? '#06b6d4' : ''})`
                    }} 
                  />

                  {/* Card Content */}
                  <div className="relative bg-base-100/50 backdrop-blur-md rounded-2xl border border-base-300/50 group-hover:border-base-300 transition-all duration-300 h-full">
                    {/* Card Top Section with Icon */}
                    <div className={`p-8 relative bg-linear-to-br ${prop.gradient} transition-all duration-300`}>
                      {/* Animated Background Shape */}
                      <motion.div
                        className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          background: `linear-gradient(135deg, ${prop.iconBg})`,
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />

                      {/* Stats Badge */}
                      <motion.div 
                        className="absolute top-6 right-6 bg-base-100/90 backdrop-blur-md px-4 py-2 rounded-full border border-base-300/50 shadow-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-sm font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                          {prop.stats}
                        </span>
                        <span className="text-xs ml-1 text-base-content/70">
                          {prop.highlight}
                        </span>
                      </motion.div>

                      {/* Icon Container */}
                      <motion.div 
                        className={`relative z-10 w-16 h-16 rounded-xl bg-linear-to-br ${prop.iconBg} flex items-center justify-center mb-6 transform transition-all duration-300 group-hover:shadow-lg`}
                        whileHover={{ rotate: [0, -5, 5, -2, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={32} className={`${prop.iconColor} transition-all duration-300`} />
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-bold text-base-content relative z-10 group-hover:text-primary transition-colors">
                        {prop.title}
                      </h3>
                    </div>

                    {/* Card Bottom Section */}
                    <div className="p-6 sm:p-8">
                      <p className="text-base-content/70 mb-6 leading-relaxed text-sm sm:text-base group-hover:text-base-content/80 transition-colors">
                        {prop.description}
                      </p>

                      {/* Learn More link removed as requested */}
                    </div>

                    {/* Shine Effect on Hover */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-50 pointer-events-none rounded-2xl"
                      style={{
                        background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)',
                        backgroundSize: '200% 200%',
                      }}
                      animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

       
      </div>
    </section>
  );
};

export default WhyChooseUs;
