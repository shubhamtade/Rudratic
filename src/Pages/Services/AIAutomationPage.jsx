import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bot, BrainCircuit, FileText, Zap, Sliders, Check, ArrowRight } from 'lucide-react';
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
      className="text-center text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 tracking-tight gradient-text"
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: '0.5rem' }} key={index}  className="inline-block mr-2">
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
      <motion.div variants={itemVariants} className="badge badge-lg badge-outline border-primary/50 bg-primary/10 text-primary p-4 mb-6 font-semibold">{badge}</motion.div>
      <AnimatedTitle text={title} />
      <motion.p variants={itemVariants} className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed mb-10">{subtitle}</motion.p>
      <motion.div variants={itemVariants}>
        <motion.button
          whileHover={{ scale: 1.05, y: -2, boxShadow: '0 10px 20px -5px hsl(var(--p)/0.4)' }}
          whileTap={{ scale: 0.98 }}
          className="btn btn-primary btn-lg gap-2 shadow-lg shadow-primary/20"
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
        <div className="mt-4 h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      </motion.div>
      {children}
    </div>
  </section>
);

const AIAutomationPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    { icon: Bot, title: "Robotic Process Automation (RPA)", description: "Automate repetitive, rule-based tasks across applications to eliminate manual effort and errors." },
    { icon: BrainCircuit, title: "Machine Learning Solutions", description: "Develop predictive models for forecasting, anomaly detection, and personalized user experiences." },
    { icon: FileText, title: "Intelligent Document Processing", description: "Extract, classify, and validate data from unstructured documents like invoices and contracts." },
    { icon: Zap, title: "Workflow Automation", description: "Design and orchestrate complex business processes that connect systems, data, and people." },
    { icon: Sliders, title: "Process Mining & Discovery", description: "Analyze your existing processes to identify bottlenecks and discover prime opportunities for automation." },
    { icon: Bot, title: "Conversational AI & Chatbots", description: "Build intelligent chatbots and virtual agents to enhance customer service and internal support." },
  ];

  const benefits = ["Reduce Operational Costs by up to 60%", "Increase Accuracy and Reduce Human Error", "24/7 Productivity with Automated Agents", "Free Up Employees for Strategic Work", "Improve Customer Satisfaction", "Gain Actionable Insights from Data"];

  const process = [
    { step: "01", title: "Assess & Identify", description: "Analyzing your current workflows to pinpoint high-impact automation opportunities." },
    { step: "02", title: "Design & Strategize", description: "Creating a detailed automation roadmap and designing the AI-powered solution." },
    { step: "03", title: "Develop & Implement", description: "Building and integrating the automation, including AI model training and testing." },
    { step: "04", title: "Monitor & Optimize", description: "Providing continuous monitoring and refinement to maximize ROI and performance." },
  ];

  return (
    <div className="bg-base-100 text-base-content">
      <PageHero
        badge="Intelligent Systems"
        title="Unlock Efficiency with AI & Automation"
        subtitle="Leverage the power of Artificial Intelligence and Robotic Process Automation (RPA) to streamline operations, reduce costs, and drive intelligent business decisions."
        buttonText="Automate Your Business"
      />

      <Section title="Our AI & Automation Capabilities" subtitle="A complete suite of services to build your intelligent enterprise.">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} variants={sectionVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card bg-base-200/30 backdrop-blur-lg border border-base-content/10 p-8 text-center items-center shadow-lg hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group hover:-translate-y-2"
            >
              <div className="p-4 bg-primary/10 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                <feature.icon size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-base-content/70">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section title="Our Implementation Approach" isAlternateBg>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-primary/20" aria-hidden="true"></div>
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
                    <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                    <p className="text-base-content/70">{item.description}</p>
                  </div>
                </div>
                <div className="w-1/2 flex justify-center">
                  <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-base-100"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section title="Tangible Business Outcomes">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariants}
          className="card bg-base-200/30 backdrop-blur-lg border border-primary/20 shadow-xl rounded-2xl p-8 md:p-12 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4 p-3"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Check size={18} className="text-primary-content" />
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

export default AIAutomationPage;