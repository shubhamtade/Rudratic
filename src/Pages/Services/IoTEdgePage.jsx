import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings2, Cpu, Wifi, Shield, BarChart, Check, ArrowRight } from 'lucide-react';
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
      <motion.div variants={itemVariants} className="badge badge-lg badge-outline border-secondary/50 bg-secondary/10 text-primary p-4 mb-6 font-semibold">{badge}</motion.div>
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
    <div className="container mx-auto px-4  py-10">
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

const IoTEdgePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: Settings2, title: "IoT Device Management", description: "Securely provision, monitor, and manage your fleet of IoT devices at scale." },
    { icon: Cpu, title: "Edge Computing Solutions", description: "Deploy applications and process data directly on edge devices for low-latency response." },
    { icon: Wifi, title: "Connectivity & Protocols", description: "Expertise in MQTT, CoAP, LoRaWAN, and other IoT connectivity standards." },
    { icon: BarChart, title: "Real-Time Data Processing", description: "Build data pipelines to stream, process, and analyze IoT data for immediate insights." },
    { icon: Shield, title: "IoT Security", description: "End-to-end security for devices, networks, and data, from the edge to the cloud." },
    { icon: Settings2, title: "Custom IoT Solutions", description: "Design and build bespoke IoT applications for industrial, commercial, and consumer use cases." },
  ];

  const benefits = ["Enable Real-Time Decision Making", "Reduce Cloud & Bandwidth Costs", "Improve Operational Efficiency", "Enhance Security at the Edge", "Unlock New Revenue Streams", "Scalable from Pilot to Production"];

  const process = [
    { step: "01", title: "Strategy & Use Case Definition", description: "Identifying how IoT and edge computing can create business value for you." },
    { step: "02", title: "Architecture & Technology Selection", description: "Designing the optimal architecture and choosing the right hardware and software stack." },
    { step: "03", title: "Prototyping & Development", description: "Building and testing a proof-of-concept to validate the solution before full-scale deployment." },
    { step: "04", title: "Deployment & Management", description: "Rolling out the solution and providing ongoing management and support." },
  ];

  return (
    <div className="bg-base-100 text-base-content">
      <PageHero
        badge="Intelligent Systems"
        title="IoT & Edge Computing Solutions"
        subtitle="Bring intelligence to the edge. We build and manage scalable IoT solutions that connect your physical assets, enabling real-time data processing and decision-making."
        buttonText="Connect Your World"
      />

      <Section title="Our IoT & Edge Capabilities" subtitle="From device to cloud, we provide a complete IoT service portfolio.">
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

      <Section title="Our Development Lifecycle" isAlternateBg>
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

      <Section title="Why Invest in IoT & Edge">
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

export default IoTEdgePage;