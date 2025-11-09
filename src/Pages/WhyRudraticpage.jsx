import React from 'react';
import { motion, useInView, useAnimation, animate  } from 'framer-motion';
import { Layers, Users2, Target, Sparkles, CheckCircle2, Search, Puzzle, Code, Rocket, Star, Quote } from 'lucide-react';
import { useEffect, useRef, useState  } from 'react';
import Footer from '../layouts/Footer';

// Animation Variants for reusability
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

// Section Wrapper for consistent padding
const Section = ({ children, className = '' }) => (
  <section className={`container mx-auto px-4 lg:px-8 py-20 md:py-28 ${className}`}>
    {children}
  </section>
);

// Animated Counter Component
const AnimatedCounter = ({ value, label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);
  const isNumber = !isNaN(parseInt(value));

  useEffect(() => {
    if (isInView && isNumber) {
      const numberValue = parseInt(value);
      
      // Use the standalone `animate` function
      const controls = animate(0, numberValue, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) => {
          // Update the state with the latest animated value
          setDisplayValue(Math.round(latest));
        },
        // Ensure the final value is precise
        onComplete: () => {
            setDisplayValue(numberValue);
        }
      });

      // Return a cleanup function to stop the animation if the component unmounts
      return () => controls.stop();
    }
  }, [isInView, isNumber, value]);

  // Handle non-numeric values like "98%" directly
  const finalDisplay = isNumber ? displayValue : value;

  return (
    <div ref={ref} className="text-center">
      <p className="text-5xl md:text-6xl font-bold mb-2 gradient-text">
        {finalDisplay}
        {isNumber && '+'}
      </p>
      <p className="text-base font-medium text-base-content/70">{label}</p>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => (
  <div className="relative text-center pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
     <motion.div
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, hsla(var(--p)/0.15) 0%, transparent 40%)',
            'radial-gradient(circle at 80% 70%, hsla(var(--s)/0.15) 0%, transparent 40%)',
            'radial-gradient(circle at 50% 50%, hsla(var(--a)/0.15) 0%, transparent 40%)',
            'radial-gradient(circle at 20% 30%, hsla(var(--p)/0.15) 0%, transparent 40%)'
          ]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 z-0 pointer-events-none"
      />
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      className="relative z-10 container mx-auto px-4"
    >
      <h2 className="text-lg font-semibold text-primary mb-4">Why Rudratic</h2>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight gradient-text">
        Your Trusted Partner for<br />Intelligent IT Solutions
      </h1>
      <p className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed">
        We go beyond technology, building long-term partnerships that empower your business to grow smarter, faster, and stronger.
      </p>
    </motion.div>
  </div>
);

// Core Pillars Section
const CorePillarsSection = () => {
  const pillars = [
    { icon: Layers, title: 'Seamless Integration', subtitle: 'Everything Works Together — Effortlessly', description: 'We unify your systems—security, monitoring, and automation—into one cohesive ecosystem, ensuring smooth, reliable operations that save time and fuel growth.', color: "hsl(var(--in))" },
    { icon: Users2, title: 'Proven Expertise', subtitle: '15+ Years of Real-World Experience', description: 'Our expert team has guided hundreds of organizations through complex challenges. With deep industry knowledge, we deliver clear outcomes and lasting success.', color: "hsl(var(--s))" },
    { icon: Target, title: 'Client-Centric Partnership', subtitle: 'Solutions Built Around You', description: 'We listen, understand, and tailor our support to your unique goals. From day one, we\'re here to guide, support, and grow alongside you as a dedicated partner.', color: "hsl(var(--p))" }
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pillars.map((pillar, index) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.2 } }}
              className="card bg-base-200/50 backdrop-blur-xl border border-primary/20 shadow-lg p-6 rounded-2xl transition-all duration-300 flex flex-col"
            >
              <div className="flex-grow card-body p-2">
                <div className="inline-flex items-center justify-center p-4 mb-6 rounded-xl border" style={{ background: `${pillar.color}1A`, borderColor: `${pillar.color}33` }}>
                  <Icon size={32} style={{ color: pillar.color }} />
                </div>
                <h3 className="card-title text-2xl font-bold mb-2" style={{ color: pillar.color }}>
                  {pillar.title}
                </h3>
                <p className="font-semibold text-base-content/90 mb-4">{pillar.subtitle}</p>
                <p className="text-base-content/70 leading-relaxed">{pillar.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

// Impact Section with Animated Stats
const ImpactSection = () => {
  const stats = [
    { number: '500', label: 'Happy Clients' },
    { number: '15', label: 'Years of Excellence' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '150', label: 'Countries Served' }
  ];
  return (
    <div className="bg-base-200/40">
        <Section>
            <div className="text-center mb-12 md:mb-16">
                <motion.h2 variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
                    Our Impact in Numbers
                </motion.h2>
                <motion.p variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="max-w-2xl mx-auto text-lg text-base-content/70">
                    We're proud of the results we've driven for businesses around the globe.
                </motion.p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                    <AnimatedCounter key={stat.label} value={stat.number} label={stat.label} />
                ))}
            </div>
        </Section>
    </div>
  );
};

// "Our Process" Section
const OurProcessSection = () => {
  const processSteps = [
    {
      icon: Search,
      title: "Discovery & Strategy",
      description: "We start by understanding your goals, challenges, and vision.",
    },
    {
      icon: Puzzle,
      title: "Solution Design",
      description: "Our experts craft a tailored solution architecture just for you.",
    },
    {
      icon: Code,
      title: "Implementation & Integration",
      description: "We build and integrate your solution with precision and care.",
    },
    {
      icon: Rocket,
      title: "Launch & Optimization",
      description: "We deploy, monitor, and continuously optimize for peak performance.",
    },
  ];

  return (
    <Section>
      {/* Section Heading */}
      <div className="text-center mb-16">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-3 gradient-text"
        >
          Our Collaborative Process
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-lg md:text-xl text-base-content/70 max-w-2xl mx-auto"
        >
          A proven path to success, designed for clarity, efficiency, and outstanding results.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/20 transform -translate-x-1/2"></div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-24"
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isRight = index % 2 === 0;

            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`flex flex-col md:flex-row items-center md:justify-between relative ${
                  isRight ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="md:w-5/12 bg-base-200 rounded-xl p-6 shadow-lg border border-primary/20 relative z-10"
                >
                  <h3 className="text-xl font-bold text-primary mb-2">{step.title}</h3>
                  <p className="text-base-content/70">{step.description}</p>
                </motion.div>

                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-primary text-white border-4 border-base-200 shadow-lg absolute left-1/2 transform -translate-x-1/2 md:static md:mx-4 z-20"
                >
                  <Icon size={28} />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </Section>
  );
};

// Testimonial Section
const TestimonialSection = () => (
    <div className="bg-gradient-to-br from-primary/5 to-secondary/5">
        <Section className="text-center">
            <motion.div
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="max-w-3xl mx-auto"
            >
                <Quote className="text-primary/40 mx-auto mb-6" size={48} />
                <p className="text-2xl md:text-3xl font-medium italic text-base-content/90 mb-8 leading-relaxed">
                    "Working with Rudratic was a game-changer. Their expertise in seamless integration and their commitment to our success have been invaluable. They're not just a vendor; they're a true partner."
                </p>
                <div className="flex items-center justify-center gap-4">
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Jane Doe" />
                        </div>
                    </div>
                    <div>
                        <p className="font-bold text-lg">Jane Doe</p>
                        <p className="text-base-content/60">CTO, Innovatech Global</p>
                    </div>
                </div>
            </motion.div>
        </Section>
    </div>
);


// Benefits and CTA Section
const BenefitsSection = () => {
    const benefits = [
        'Comprehensive end-to-end solutions',
        'Dedicated support and consultation',
        'Industry-leading security standards',
        'Scalable and flexible architecture',
        'Continuous innovation and updates',
        'Cost-effective implementation'
      ];

  return (
    <Section>
      <div className="card bg-base-200/50 backdrop-blur-xl border border-primary/20 shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
                <motion.h2 
                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold mb-4 leading-tight gradient-text">
                    The Rudratic Advantage
                </motion.h2>
                <motion.p 
                    variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.1 }}
                    className="text-lg text-base-content/70 mb-8 leading-relaxed">
                    Join hundreds of organizations that trust us for reliable, future-ready IT solutions.
                </motion.p>
                <motion.div 
                     variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
                     className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                    {benefits.map((benefit) => (
                    <motion.div
                        key={benefit}
                        variants={fadeInUp}
                        className="flex items-center gap-3"
                    >
                        <CheckCircle2 size={22} className="text-primary flex-shrink-0" />
                        <span className="font-medium text-base-content/80">{benefit}</span>
                    </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className="bg-base-300/50 p-8 md:p-12 text-center flex flex-col items-center justify-center min-h-[400px] lg:min-h-full">
                <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <h3 className="text-2xl font-bold mb-4">Ready to Build Smarter?</h3>
                    <p className="text-base-content/70 mb-8 max-w-sm">
                        Let's discuss how Rudratic can elevate your business. Schedule a free, no-obligation consultation with our experts today.
                    </p>
                    <motion.button
                        onClick={() => window.openDemoModal && window.openDemoModal()}
                        whileHover={{ scale: 1.05, y: -2, boxShadow: '0 15px 40px hsla(var(--p)/0.4)' }}
                        whileTap={{ scale: 0.98 }}
                        className="btn btn-primary btn-lg shadow-lg gap-3"
                        >
                        <Sparkles size={20} />
                        Talk to Our Team
                    </motion.button>
                </motion.div>
            </div>
        </div>
      </div>
    </Section>
  );
};

const WhyRudraticPage = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <HeroSection />
      <main>
        <CorePillarsSection />
        <ImpactSection />
        <OurProcessSection />
        <TestimonialSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default WhyRudraticPage;