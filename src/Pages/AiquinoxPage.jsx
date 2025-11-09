import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Cpu,
  Layers,
  Eye,
  BarChart3,
  Settings,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import Footer from "../layouts/Footer";

// Custom CSS for scroll behavior.
const CustomStyles = () => (
  <style jsx global>{`
    html {
      scroll-behavior: smooth;
    }
  `}</style>
);

const AiquinoxPage = () => {
  // --- Page Specific Data ---
  const badgeText = "Aiquinox Performance Monitoring";
  const title = "Discover Impactful Performance Issues with AI Analytics";
  const subtitle =
    "Cut through the noise of traditional analytics and monitoring with powerful AI that redefines how teams identify, analyze, and resolve digital performance challenges.";
  const videoSrc = "/products-video.mp4";
  const aboutTitle = "About Aiquinox";
  const aboutText =
    "Aiquinox is a next-gen AI monitoring platform unifying analytics, issue detection, and user experience tracking. It helps teams isolate critical issues, eliminate false positives, and understand the true impact of performance anomalies.";

  const navItems = [
    { id: "overview", label: "Overview", icon: Shield },
    { id: "mdes", label: "MDES", icon: Layers },
    { id: "product-analytics", label: "Analytics", icon: BarChart3 },
    { id: "session-replay", label: "Replay", icon: Eye },
    { id: "issue-monitoring", label: "Monitoring", icon: AlertTriangle },
    { id: "esfn", label: "Signal", icon: Cpu },
  ];

  const content = {
    overview: {
      title: "Aiquinox – Redefining Performance Monitoring",
      items: [
        {
          icon: Shield,
          text: "AI-Powered Performance Insights",
          desc: "Discover impactful performance issues with AI-driven analytics. Cut through the noise of traditional monitoring with the intelligence of Aiquinox AI.",
        },
        {
          icon: Layers,
          text: "Modern Digital Experience",
          desc: "Aiquinox unifies monitoring, analytics, and session replay to deliver clear insights into your application's user experience and performance.",
        },
        {
          icon: CheckCircle2,
          text: "Continuous Optimization",
          desc: "Built for teams deploying fast and iterating faster, Aiquinox empowers continuous optimization and real-time visibility across modern digital stacks.",
        },
      ],
    },
    mdes: {
      title: "Modern Digital Experience Stack (MDES)",
      items: [
        {
          icon: Layers,
          text: "Understanding the MDES Challenge",
          desc: "Product teams now ship updates multiple times per day and personalize content. This complexity increases the risk of undetected user experience issues.",
        },
        {
          icon: BarChart3,
          text: "The Growing Data Problem",
          desc: "With multiple monitoring tools and fragmented data, teams struggle to efficiently identify and resolve experience-impacting issues.",
        },
        {
          icon: Cpu,
          text: "The Aiquinox Advantage",
          desc: "Aiquinox brings together analytics, replay, and issue detection into a unified platform to streamline digital experience management.",
        },
      ],
    },
    "product-analytics": {
      title: "Product Analytics (Beyond the 'What')",
      items: [
        {
          icon: BarChart3,
          text: "Quantitative Insights",
          desc: "Traditional analytics reveal surface-level metrics such as conversion drop-offs but rarely explain the underlying reasons or the 'why'.",
        },
        {
          icon: Eye,
          text: "Qualitative Context",
          desc: "Aiquinox goes beyond static analytics by correlating data points with user behaviors to uncover the real story behind performance issues.",
        },
        {
          icon: CheckCircle2,
          text: "AI-Powered Clarity",
          desc: "By combining user behavior analytics with performance data, Aiquinox ensures you know not just what happened, but precisely why it did.",
        },
      ],
    },
    "session-replay": {
      title: "Session Replay (Finding the Signal)",
      items: [
        {
          icon: Eye,
          text: "The Session Overload Problem",
          desc: "Teams often collect thousands of user sessions, making it nearly impossible to find the ones that truly matter or contain valuable insights.",
        },
        {
          icon: Settings,
          text: "Intelligent Prioritization",
          desc: "Aiquinox AI automatically highlights meaningful sessions based on engagement, anomalies, and frustration signals, saving countless hours.",
        },
        {
          icon: BarChart3,
          text: "Contextual Understanding",
          desc: "By combining replay data with analytics, teams can see exactly how users experience performance issues or conversion drop-offs.",
        },
      ],
    },
    "issue-monitoring": {
      title: "Issue Monitoring & Frustration Signals",
      items: [
        {
          icon: AlertTriangle,
          text: "Reducing Alert Fatigue",
          desc: "Conventional monitoring tools flood teams with low-impact alerts. Aiquinox minimizes noise by filtering out irrelevant events.",
        },
        {
          icon: CheckCircle2,
          text: "Impact-Based Prioritization",
          desc: "Focus on what truly matters. Aiquinox identifies low-frequency, high-impact errors that affect the real user experience.",
        },
        {
          icon: Cpu,
          text: "A Unified View",
          desc: "By integrating performance, behavioral, and technical signals, Aiquinox ensures critical issues are surfaced efficiently and with context.",
        },
      ],
    },
    esfn: {
      title: "Extracting Signal from the Noise",
      items: [
        {
          icon: Cpu,
          text: "Unified AI-Driven Platform",
          desc: "Aiquinox integrates session replay, analytics, and issue monitoring to extract meaningful insights from massive data volumes.",
        },
        {
          icon: BarChart3,
          text: "Faster Root-Cause Analysis",
          desc: "Reduce investigation time from days to minutes by letting AI correlate signals and identify the root cause automatically.",
        },
        {
          icon: Shield,
          text: "Redefining Performance Monitoring",
          desc: "Aiquinox transforms how digital teams monitor, analyze, and act — turning data noise into clear, actionable intelligence.",
        },
      ],
    },
  };

  // --- State & Logic for Scroll-Spy Navigation ---
  const [activeSection, setActiveSection] = useState(navItems[0].id);
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -70% 0px" }
    );
    navItems.forEach((nav) => {
      const el = document.getElementById(nav.id);
      if (el) {
        sectionRefs.current[nav.id] = el;
        observer.observe(el);
      }
    });
    return () => {
      Object.values(sectionRefs.current).forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  return (
    <div className="bg-base-100 text-base-content">
      <CustomStyles />

      <main className="container mx-auto px-4 pt-36 pb-24 relative z-10">
        {/* --- Hero Section --- */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-24 text-center flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="badge badge-lg border-secondary/50 bg-secondary/10 text-secondary p-4 mb-6 font-semibold shadow-sm"
          >
            {badgeText}
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed mb-10"
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px -5px hsl(var(--s)/0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary btn-lg shadow"
            >
              Get Started Free
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-ghost btn-lg"
            >
              Book a Demo
            </motion.button>
          </motion.div>
        </motion.div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* --- Sticky Left Column --- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 lg:sticky lg:top-24 flex flex-col gap-8"
          >
            {/* --- Scroll-Spy Navigation --- */}
            <div className="card bg-base-200/60 backdrop-blur-md border border-base-content/10">
              <nav className="p-4 space-y-1">
                {navItems.map((nav) => (
                  <a
                    key={nav.id}
                    href={`#${nav.id}`}
                    className={`group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                      activeSection === nav.id
                        ? "bg-secondary/10 text-secondary"
                        : "text-base-content/60 hover:bg-base-content/5 hover:text-base-content"
                    }`}
                  >
                    <nav.icon size={20} />
                    <span className="font-semibold">{nav.label}</span>
                    <span
                      className={`ml-auto text-secondary transition-opacity duration-300 ${
                        activeSection === nav.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <ArrowRight size={16} />
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* --- Combined Video + About Card --- */}
            <div className="card bg-base-200/60 backdrop-blur-md border border-base-content/10 overflow-hidden">
              <figure className="aspect-video group">
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
              <div className="card-body">
                <h3 className="card-title text-2xl font-bold text-secondary">
                  {aboutTitle}
                </h3>
                <p className="text-base-content/80 leading-relaxed">
                  {aboutText}
                </p>
              </div>
            </div>
          </motion.div>

          {/* --- Expanded Right Column --- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <div className="space-y-20">
              {/* --- All Content Sections Rendered --- */}
              {navItems.map((nav) => {
                const sectionContent = content[nav.id];
                return (
                  <motion.section
                    key={nav.id}
                    id={nav.id}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                    className="scroll-mt-24"
                  >
                    <motion.h3
                      variants={itemVariants}
                      className="text-3xl font-bold mb-8 text-base-content"
                    >
                      {sectionContent.title}
                    </motion.h3>
                    <motion.div
                      className="space-y-4"
                      variants={containerVariants}
                    >
                      {sectionContent.items.map((item, index) => (
                        <motion.div
                          key={index}
                          variants={itemVariants}
                          className="card bg-base-200/60 border border-base-content/10 p-5 flex items-start gap-5 transition-all duration-300 hover:border-secondary/30 hover:-translate-y-1 hover:shadow-xl"
                        >
                          <div className="flex-shrink-0 mt-1 p-3 bg-secondary/10 rounded-lg">
                            <item.icon size={24} className="text-secondary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg text-base-content">
                              {item.text}
                            </h4>
                            <p className="text-base-content/70 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.section>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* --- Final CTA --- */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={itemVariants}
          className="mt-28"
        >
          <div className="relative rounded-2xl p-10 md:p-16 text-center overflow-hidden bg-gradient-to-r from-secondary to-purple-500 text-secondary-content shadow-2xl shadow-secondary/20">
            <h2 className="text-3xl font-bold mb-4">
              Find the Signal in Your Data
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-secondary-content/80">
              Stop guessing. Start knowing. See how Aiquinox can transform your
              performance monitoring and deliver actionable insights in minutes.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px -5px hsl(var(--sc))",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-neutral btn-lg"
            >
              Request a Live Demo <ArrowRight className="ml-2" />
            </motion.button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default AiquinoxPage;
