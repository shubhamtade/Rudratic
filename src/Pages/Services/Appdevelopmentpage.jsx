import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Smartphone, Globe, Zap, Shield, Users, Check, ArrowRight } from 'lucide-react';
import Footer from '../../Components/Footer';


// --- Reusable Components (Defined in-page for convenience) ---

const sectionTitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AnimatedTitle = ({ text }) => {
  const words = text.split(" ");
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({ opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.04 * i } }),
  };
  const child = {
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 20, transition: { type: "spring", damping: 12, stiffness: 100 } },
  };

  return (
    <motion.h1 variants={container} initial="hidden" animate="visible" className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight gradient-text">
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.5rem", display: "inline-block" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const PageHero = ({ badge, title, subtitle, buttonText }) => (
  <section className="relative text-center container mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden">
    <div className="animated-grid-background"></div>
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
      <motion.div variants={sectionTitleVariants} className="badge badge-lg badge-outline border-primary/50 bg-primary/10 text-primary p-4 mb-6 font-semibold">{badge}</motion.div>
      <AnimatedTitle text={title} />
      <motion.p variants={sectionTitleVariants} className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed mb-10">{subtitle}</motion.p>
      <motion.div variants={sectionTitleVariants}>
        <motion.button whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 20px -5px hsl(var(--p)/0.4)' }} whileTap={{ scale: 0.98 }} className="btn btn-primary btn-lg gap-2 shadow-lg shadow-primary/20">{buttonText} <ArrowRight size={20} /></motion.button>
      </motion.div>
    </motion.div>
  </section>
);

const Section = ({ title, subtitle, children, isAlternateBg = false }) => (
  <section className={`py-16 md:py-24 ${isAlternateBg ? 'bg-base-200/50' : ''}`}>
    <div className="container mx-auto px-4">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionTitleVariants} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
        {subtitle && <p className="text-lg text-base-content/60 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </motion.div>
      {children}
    </div>
  </section>
);

const FeatureCard = ({ feature, index, isHighlighted = false }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const color = feature.color || 'primary';
  const colorStyles = {
    primary: { text: "text-primary", bg: "bg-primary/10" },
    secondary: { text: "text-secondary", bg: "bg-secondary/10" },
  };
  const styles = colorStyles[color];

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      ref={ref}
      variants={itemVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      className={`boder border-base-content feature-item ${isHighlighted ? 'feature-item-highlight' : ''}`}
    >
      <div className={`icon-chip ${styles.bg}`}>
        <feature.icon size={28} className={styles.text} />
      </div>
      <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
      <p className="text-base-content/70 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
};

const ProcessCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="process-card relative bg-base-100/50 rounded-2xl border border-base-content/10 p-8"
    >
      <div className="step-number gradient-text">{item.step}</div>
      <div className="timeline-marker">
        <h3 className="text-xl font-bold text-primary">{item.step}</h3>
      </div>
      <div className="relative z-10">
        <h3 className="card-title text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-base-content/70">{item.description}</p>
      </div>
    </motion.div>
  );
};


// --- Main Page Component ---
const Appdevelopmentpage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: Code, title: "Custom Development", description: "Tailored solutions built with .NET, Java, and modern frameworks", color: "primary" },
    { icon: Smartphone, title: "Mobile Applications", description: "Native and cross-platform apps for iOS and Android", color: "secondary" },
    { icon: Globe, title: "Web Applications", description: "Responsive, scalable web solutions with modern architecture", color: "primary" },
    { icon: Zap, title: "API Development", description: "RESTful and GraphQL APIs for seamless integrations", color: "secondary" },
    { icon: Shield, title: "Security First", description: "Built-in security protocols and compliance standards", color: "primary" },
    { icon: Users, title: "Agile Methodology", description: "Iterative development with continuous client collaboration", color: "secondary" }
  ];

  const benefits = ["Reduce development time by 40%", "Scalable architecture for future growth", "24/7 technical support & maintenance", "Cross-platform compatibility", "Cloud-native deployment options", "Comprehensive documentation"];

  const process = [
    { step: "01", title: "Discovery & Planning", description: "We analyze your requirements and create a detailed roadmap." },
    { step: "02", title: "Design & Prototyping", description: "UI/UX design and interactive prototypes for validation." },
    { step: "03", title: "Development & Testing", description: "Agile development with continuous testing and integration." },
    { step: "04", title: "Deployment & Support", description: "Smooth launch with ongoing maintenance and updates." }
  ];

  return (
    <div className="bg-base-100 relative min-h-screen overflow-x-hidden">
      <div className="relative z-10 pt-24">
        <PageHero
          badge="Enterprise Solutions"
          title="Application Development That Transforms Business"
          subtitle="Custom software solutions built with .NET, Java, and cutting-edge mobile technologies to accelerate your digital transformation."
          buttonText="Request a Demo"
        />
        
        <Section title="Comprehensive Development Services" subtitle="Full-stack expertise across multiple platforms and technologies.">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index} 
                feature={feature} 
                index={index} 
                isHighlighted={feature.title === "Web Applications"}
              />
            ))}
          </div>
        </Section>
        
        <Section title="Our Development Process" subtitle="A proven methodology that delivers results." isAlternateBg>
          <div className="process-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => <ProcessCard key={index} item={item} index={index} />)}
          </div>
        </Section>

        <Section title="Why Choose Our Services">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="card bg-base-200/50 backdrop-blur-xl border border-primary/20 shadow-xl rounded-2xl p-8 md:p-12"
          >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, amount: 0.5 }} 
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }} 
                    className="flex items-center gap-4"
                  >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                          <Check size={18} className="text-primary-content" />
                      </div>
                      <span className="text-base-content/90 text-lg">{benefit}</span>
                  </motion.div>
                  ))}
              </div>
          </motion.div>
        </Section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Appdevelopmentpage;