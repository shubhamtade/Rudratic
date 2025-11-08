import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Database, BookOpen, Settings, BarChart3, Target, Award, Check, ArrowRight } from 'lucide-react';
import Footer from '../../Components/Footer';

// --- Reusable Components (Defined in-page) ---

const sectionTitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const PageHero = ({ badge, title, subtitle, buttonText }) => (
  <section className="relative text-center container mx-auto px-4 pt-20 pb-16 md:pt-28 md:pb-24">
    <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}>
      <motion.div variants={sectionTitleVariants} className="badge badge-lg badge-outline border-primary/50 bg-primary/10 text-primary p-4 mb-6 font-semibold">{badge}</motion.div>
      <motion.h1 variants={sectionTitleVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight gradient-text">{title}</motion.h1>
      <motion.p variants={sectionTitleVariants} className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed mb-10">{subtitle}</motion.p>
      <motion.div variants={sectionTitleVariants}>
        <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.98 }} className="btn btn-primary btn-lg gap-2 shadow-lg shadow-primary/20">{buttonText} <ArrowRight size={20} /></motion.button>
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

const FeatureCard = ({ feature, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const color = feature.color || 'primary';
  const colorStyles = {
    primary: { border: "border-primary/20 hover:border-primary/50", shadow: "hover:shadow-primary/10", text: "text-primary", gradientFrom: "from-primary/20" },
    secondary: { border: "border-secondary/20 hover:border-secondary/50", shadow: "hover:shadow-secondary/10", text: "text-secondary", gradientFrom: "from-secondary/20" },
  };
  const styles = colorStyles[color];
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -8, scale: 1.02 }} className={`card bg-base-200/30 backdrop-blur-xl border ${styles.border} shadow-lg hover:shadow-xl ${styles.shadow} transition-all duration-300 group`}>
      <div className="card-body p-8">
        <div className={`mb-5 p-4 bg-gradient-to-br ${styles.gradientFrom} to-transparent rounded-box inline-block self-start`}><feature.icon size={32} className={`${styles.text} transition-transform duration-300 group-hover:scale-110`} /></div>
        <h3 className="card-title text-xl font-bold">{feature.title}</h3>
        <p className="text-base-content/70 mt-2">{feature.description}</p>
      </div>
    </motion.div>
  );
};

const ProcessCard = ({ item, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.15 }} className="card bg-base-100/50 border border-base-content/10 p-8 text-center sm:text-left relative">
      <div className="absolute top-8 right-8 text-6xl font-bold opacity-10 gradient-text">{item.step}</div>
      <h3 className="card-title text-xl font-bold mb-2">{item.title}</h3>
      <p className="text-base-content/70">{item.description}</p>
    </motion.div>
  );
};

// --- Main Page Component ---

const Oracleservicespage = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const features = [
    { icon: Database, title: "Oracle Database", description: "Expert administration, optimization, and migration services", color: "secondary" },
    { icon: BookOpen, title: "Training Programs", description: "Comprehensive Oracle certification and skill development", color: "primary" },
    { icon: Settings, title: "Implementation", description: "End-to-end Oracle solution deployment and configuration", color: "secondary" },
    { icon: BarChart3, title: "Performance Tuning", description: "Database optimization for maximum efficiency", color: "primary" },
    { icon: Target, title: "Consulting", description: "Strategic guidance for Oracle technology adoption", color: "secondary" },
    { icon: Award, title: "Certified Experts", description: "Oracle-certified professionals with proven expertise", color: "primary" }
  ];

  const services = ["Oracle Database Administration (11g-21c)", "Oracle Cloud Infrastructure (OCI)", "Oracle E-Business Suite", "Oracle Fusion Middleware", "Oracle RAC & Data Guard", "Oracle APEX Development", "PL/SQL Programming", "Oracle GoldenGate Replication"];

  const process = [
    { step: "01", title: "Assessment", description: "Analyze current Oracle infrastructure and identify opportunities." },
    { step: "02", title: "Strategy", description: "Design customized solutions aligned with business goals." },
    { step: "03", title: "Implementation", description: "Deploy and configure Oracle systems with minimal disruption." },
    { step: "04", title: "Training & Support", description: "Empower your team with knowledge and ongoing assistance." }
  ];

  return (
    <div className="bg-base-100 relative min-h-screen overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent -z-0"></div>
      <div className="relative z-10 pt-24">
        <PageHero
          badge="Oracle Certified Partner"
          title="Oracle Services, Training & Consulting"
          subtitle="Comprehensive Oracle solutions delivered by certified experts to maximize your database performance and enterprise potential."
          buttonText="Request Consultation"
        />

        <Section title="Complete Oracle Solutions" subtitle="From training to implementation, we cover all aspects of Oracle technology.">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <FeatureCard key={index} feature={feature} index={index} />)}
          </div>
        </Section>

        <Section title="Our Consulting Process" subtitle="A structured approach to ensure success." isAlternateBg>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => <ProcessCard key={index} item={item} index={index} />)}
          </div>
        </Section>

        <Section title="What We Offer">
            <div className="card bg-base-200/50 backdrop-blur-xl border border-primary/20 shadow-xl p-8 md:p-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                    {services.map((service, index) => (
                    <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"><Check size={18} className="text-primary-content" /></div>
                        <span className="text-base-content/90 text-lg">{service}</span>
                    </motion.div>
                    ))}
                </div>
            </div>
        </Section>
        
        <Footer />
      </div>
    </div>
  );
};

export default Oracleservicespage;