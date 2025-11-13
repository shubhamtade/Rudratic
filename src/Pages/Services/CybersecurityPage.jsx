import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Eye, AlertTriangle, FileText, Check, ArrowRight } from 'lucide-react';
import Footer from '../../layouts/Footer';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: { type: 'spring', damping: 12, stiffness: 100 },
    },
  };
  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight gradient-text-secondary"
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: '0.5rem' }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
};

const PageHero = ({ badge, title, subtitle, buttonText }) => (
  <div className="relative isolate overflow-hidden py-24 sm:py-32 text-center bg-base-100">
     <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_45rem_at_top,theme(colors.base-200),transparent)] opacity-30" />
    <motion.div initial="hidden" animate="visible" variants={sectionVariants} className="max-w-4xl mx-auto px-4">
      <motion.div variants={itemVariants} className="badge badge-lg badge-outline border-secondary/50 bg-secondary/10 text-secondary p-4 mb-6 font-semibold">{badge}</motion.div>
      <AnimatedTitle text={title} />
      <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed mb-10">{subtitle}</motion.p>
      <motion.div variants={itemVariants}>
        <motion.button
          whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 20px -5px hsl(var(--s)/0.4)' }}
          whileTap={{ scale: 0.98 }}
          className="btn btn-secondary btn-lg gap-2 shadow-lg shadow-secondary/20"
        >
          {buttonText}
          <ArrowRight size={20} />
        </motion.button>
      </motion.div>
    </motion.div>
  </div>
);

const Section = ({ title, subtitle, children, isAlternateBg = false }) => (
  <section className={` ${isAlternateBg ? 'bg-base-200/50' : ''}`}>
    <div className="container mx-auto px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-base-content mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-base-content/70 max-w-2xl mx-auto">{subtitle}</p>}
        <div className="mt-4 h-1 w-24 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
      </motion.div>
      {children}
    </div>
  </section>
);

const CybersecurityPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: Target, title: "Penetration Testing & Red Teaming", description: "Simulate real-world attacks to identify and remediate vulnerabilities before attackers do." },
    { icon: Eye, title: "Managed SOC & Threat Hunting", description: "24/7 monitoring, detection, and response powered by our expert security operations center." },
    { icon: ShieldCheck, title: "Virtual CISO (vCISO)", description: "Get executive-level security leadership and strategic guidance without the full-time cost." },
    { icon: FileText, title: "Governance, Risk & Compliance (GRC)", description: "Achieve and maintain compliance with standards like ISO 27001, SOC 2, HIPAA, and GDPR." },
    { icon: AlertTriangle, title: "Incident Response & Forensics", description: "Rapidly contain and investigate security incidents to minimize damage and ensure recovery." },
    { icon: ShieldCheck, title: "Security Architecture Review", description: "Assess and harden your cloud and on-premise infrastructure against modern threats." },
  ];

  const benefits = ["Proactively Reduce Attack Surface", "Achieve & Maintain Compliance", "24/7 Threat Monitoring & Response", "Minimize Breach Impact & Cost", "Expert Security Leadership", "Strengthen Overall Security Posture"];

  const process = [
    { step: "01", title: "Assess", description: "Comprehensive evaluation of your current security posture, policies, and infrastructure." },
    { step: "02", title: "Protect", description: "Implementing robust security controls, policies, and technologies to harden your defenses." },
    { step: "03", title: "Detect", description: "Deploying advanced monitoring and threat intelligence to identify suspicious activity in real-time." },
    { step: "04", title: "Respond", description: "Executing a rapid and effective incident response plan to contain threats and recover quickly." },
  ];

  return (
    <div className="bg-base-100 text-base-content">
      <PageHero
        badge="Security & Compliance"
        title="Proactive Cybersecurity for the Modern Enterprise"
        subtitle="Protect your critical assets, achieve compliance, and build a resilient security posture with our comprehensive cybersecurity services."
        buttonText="Get a Security Consultation"
      />

      <Section title="Our Cybersecurity Services" subtitle="A 360-degree approach to protecting your organization.">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card bg-base-200/30 backdrop-blur-lg border border-base-content/10 p-8 text-center items-center shadow-lg hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300 group hover:-translate-y-2"
                >
                    <div className="p-4 bg-secondary/10 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                      <feature.icon size={32} className="text-secondary" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-base-content/70">{feature.description}</p>
                </motion.div>
            ))}
        </motion.div>
      </Section>

      <Section title="Our Security Methodology" isAlternateBg>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-secondary/20" aria-hidden="true"></div>
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className={`mb-12 flex items-center ${index % 2 === 0 ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
              >
                <div className="flex-1">
                  <div className="p-8 bg-base-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 relative">
                    <div className={`absolute top-4 text-5xl font-bold text-base-content/10 ${index % 2 === 0 ? 'left-4' : 'right-4'}`}>{item.step}</div>
                    <h3 className="text-xl font-bold mb-2 text-secondary">{item.title}</h3>
                    <p className="text-base-content/70">{item.description}</p>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-4 h-4 bg-secondary rounded-full ring-4 ring-base-100"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Your Security Partner">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="card bg-base-200/30 backdrop-blur-lg border border-secondary/20 shadow-xl rounded-2xl p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-4 p-3"
                  >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center">
                        <Check size={18} className="text-secondary-content" />
                      </div>
                      <span className="font-medium text-base-content/90">{benefit}</span>
                  </motion.div>
              ))}
          </div>
        </motion.div>
      </Section>

      <Footer />
    </div>
  );
};

export default CybersecurityPage;