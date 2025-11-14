import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Network, HardDrive, Monitor, Wifi, Shield, Clock, Check, ArrowRight } from 'lucide-react';
import Footer from '../../layouts/Footer';

// --- Reusable Components (Defined in-page) ---

const sectionTitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const AnimatedTitle = ({ text }) => {
  const words = text.split(' ');
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };
  const child = {
    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 100 } },
    hidden: { opacity: 0, y: 20, transition: { type: 'spring', damping: 12, stiffness: 100 } },
  };

  return (
    <motion.h1 variants={container} initial="hidden" animate="visible" className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight gradient-text">
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: '0.5rem', display: 'inline-block' }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};


const PageHero = ({ badge, title, subtitle, buttonText }) => (
  <section className="relative text-center container mx-auto px-4 pt-36 pb-16 md:pt-40 md:pb-24">
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
      <motion.div variants={sectionTitleVariants} className="badge badge-lg badge-outline border-primary/50 bg-primary/10 text-primary p-4 mb-6 font-semibold">{badge}</motion.div>
      <AnimatedTitle text={title} />
      <motion.p variants={sectionTitleVariants} className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed mb-10">{subtitle}</motion.p>
      <motion.div variants={sectionTitleVariants}>
        <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="btn btn-primary btn-lg gap-2 shadow-lg shadow-primary/20">{buttonText} <ArrowRight size={20} /></motion.button>
      </motion.div>
    </motion.div>
  </section>
);

const Section = ({ title, subtitle, children, isAlternateBg = false }) => (
  <section className={` ${isAlternateBg ? 'bg-base-200/50' : ''}`}>
    <div className="container mx-auto px-4  py-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={sectionTitleVariants} className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold">{title}</h2>
        {subtitle && <p className="text-lg text-base-content/70 mt-4 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </motion.div>
      {children}
    </div>
  </section>
);

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const color = feature.color || 'primary';
  const colorStyles = {
    primary: { text: "text-primary", bg: "bg-primary/10", shadow: "hover:shadow-primary/10" },
    secondary: { text: "text-secondary", bg: "bg-secondary/10", shadow: "hover:shadow-secondary/10" },
  };
  const styles = colorStyles[color];
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="card bg-base-200/30 backdrop-blur-lg border border-base-content/10 p-8 shadow-lg transition-all duration-300 group hover:-translate-y-2">
      <div className={`mb-5 p-4 ${styles.bg} rounded-box inline-block self-start transition-transform duration-300 group-hover:scale-110`}>
        <feature.icon size={32} className={`${styles.text}`} />
      </div>
      <h3 className="card-title text-xl font-bold">{feature.title}</h3>
      <p className="text-base-content/70 mt-2">{feature.description}</p>
    </motion.div>
  );
};

const ProcessCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  return (
     <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.15 }}
        className="relative pl-16"
      >
        <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary text-primary-content font-bold text-xl">
          {item.step}
        </div>
        <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-primary/20"></div>
        <div className="ml-4">
            <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
            <p className="text-base-content/70">{item.description}</p>
        </div>
    </motion.div>
  );
};

// --- Main Page Component ---

const ITinfrastructurepage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: Network, title: "Network Management", description: "Complete network design, implementation, and monitoring.", color: "primary" },
    { icon: HardDrive, title: "Server Administration", description: "Windows, Linux, and Unix server support and maintenance.", color: "secondary" },
    { icon: Monitor, title: "Help Desk Support", description: "24/7 technical support for end-users and systems.", color: "primary" },
    { icon: Wifi, title: "Cloud Infrastructure", description: "AWS, Azure, and GCP infrastructure management.", color: "secondary" },
    { icon: Shield, title: "Security Management", description: "Firewall, VPN, and security infrastructure services.", color: "primary" },
    { icon: Clock, title: "Disaster Recovery", description: "Business continuity planning and disaster recovery solutions.", color: "secondary" }
  ];

  const services = ["24/7 Infrastructure Monitoring", "Proactive Maintenance & Patching", "Network Security & Firewall", "Backup & Disaster Recovery", "Storage Area Network (SAN)", "Active Directory & Identity", "Email & Collaboration Services", "IT Asset Management"];

  const process = [
    { step: "01", title: "Assessment", description: "Comprehensive infrastructure audit and analysis." },
    { step: "02", title: "Planning", description: "Strategic roadmap for infrastructure optimization." },
    { step: "03", title: "Implementation", description: "Deploy solutions with minimal downtime." },
    { step: "04", title: "Ongoing Support", description: "24/7 monitoring and proactive maintenance." }
  ];

  return (
    <div className="bg-base-100 relative min-h-screen overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent -z-0"></div>
      <div className="relative z-10">
        <PageHero
          badge="24/7 Support Services"
          title="IT Infrastructure Support"
          subtitle="Reliable, scalable, and secure IT infrastructure management to keep your business running at peak performance."
          buttonText="Get Started"
        />
        
        <Section title="Complete Infrastructure Solutions" subtitle="Comprehensive support for all your IT infrastructure needs.">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <FeatureCard key={index} feature={feature} index={index} />)}
          </div>
        </Section>
        
        <Section title="Our Support Process" subtitle="A proactive and strategic approach to IT management." isAlternateBg>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {process.map((item, index) => <ProcessCard key={index} item={item} index={index} />)}
          </div>
        </Section>

        <Section title="What We Provide">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="card bg-base-200/30 backdrop-blur-lg border border-primary/20 shadow-xl rounded-2xl p-8 md:p-12"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {services.map((service, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }} className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"><Check size={18} className="text-primary-content" /></div>
                        <span className="text-base-content/90 text-lg">{service}</span>
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

export default ITinfrastructurepage;