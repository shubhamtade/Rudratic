import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Cpu,
  FileText,
  Network,
  Cloud,
  CheckCircle2,
  Settings,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Footer from "../layouts/Footer";

// Custom CSS for scroll behavior. The rest is handled by Tailwind.
const CustomStyles = () => (
  <style jsx global>{`
    html {
      scroll-behavior: smooth;
    }
  `}</style>
);

const BPMAutomationPage = () => {
  // --- Page Specific Data (Unchanged) ---
  const badgeText = "Business Process & IT Automation";
  const title = "Streamline Operations with Intelligent Automation";
  const subtitle =
    "Automate repetitive tasks, coordinate cross-system processes, and enable 24/7 operational resilience with our unified BPM and IT Automation suite.";
  const videoSrc = "/products-video.mp4";
  const aboutTitle = "Unified Process Orchestration";
  const aboutText =
    "A single platform that manages both business and IT processes. From scheduled jobs to data extraction and secure file transfers, we deliver consistent, auditable operations across your entire enterprise.";

  const navItems = [
    { id: "overview", label: "Overview", icon: Briefcase },
    { id: "workflow", label: "Workflow", icon: Cpu },
    { id: "browser", label: "Browser", icon: FileText },
    { id: "scheduler", label: "Scheduler", icon: Calendar },
    { id: "file-transfer", label: "File Mgmt", icon: Cloud },
    { id: "benefits", label: "Benefits", icon: CheckCircle2 },
  ];
  const content = {
    overview: {
      title: "Unified Business Process & IT Automation",
      items: [
        {
          icon: Briefcase,
          text: "Unified Control Plane",
          desc: "Orchestrate batch jobs, EOD tasks, disaster recovery, and BPM workflows from a single, powerful control plane for complete lifecycle automation.",
        },
        {
          icon: Settings,
          text: "Reliable, Auditable Orchestration",
          desc: "Coordinate tasks, enforce business rules, and ensure consistency across cross-department processes with built-in auditability and retry logic.",
        },
        {
          icon: CheckCircle2,
          text: "Faster Time to Value",
          desc: "Reduce manual intervention, eliminate human error, and speed up operational tasks so your teams can focus on higher-value initiatives.",
        },
      ],
    },
    workflow: {
      title: "Intelligent Workflow Automation Engine",
      items: [
        {
          icon: Cpu,
          text: "Batch Jobs & EOD Automation",
          desc: "Automate scheduled batch jobs and end-of-day processes with advanced dependency management, retries, and alerts, ensuring consistent results.",
        },
        {
          icon: Cpu,
          text: "Disaster Recovery Automation",
          desc: "Automate failover, backup orchestration, and recovery workflows so critical systems recover reliably with minimal human intervention.",
        },
        {
          icon: Settings,
          text: "Full Process Lifecycle Management",
          desc: "Design, execute, monitor, and optimize both business and IT processes from a unified engine that supports complex branching and approval flows.",
        },
      ],
    },
    browser: {
      title: "Browser Automation & Data Extraction",
      items: [
        {
          icon: FileText,
          text: "UI Automation for Repetitive Tasks",
          desc: "Automate manual back-office operations like data entry, form submissions, and data reconciliation across any web application.",
        },
        {
          icon: Network,
          text: "Robust Data Extraction",
          desc: "Extract structured data from web portals, legacy UIs, and documents, then normalize the results and feed downstream systems automatically.",
        },
        {
          icon: Settings,
          text: "Built-in Validation & Error Handling",
          desc: "Ensure data quality with built-in validation rules and error handling that can trigger alerts or compensating workflows when issues occur.",
        },
      ],
    },
    scheduler: {
      title: "Centralized Task Scheduler",
      items: [
        {
          icon: Calendar,
          text: "Centralized Job Scheduling",
          desc: "Manage scheduled jobs across Windows, Linux, cloud platforms, and enterprise applications from a single, unified scheduler.",
        },
        {
          icon: Cloud,
          text: "Cross-Platform Orchestration",
          desc: "Our platform supports on-prem, cloud, and hybrid landscapes, allowing you to schedule and coordinate jobs across them seamlessly.",
        },
        {
          icon: CheckCircle2,
          text: "Event & Rule-Based Triggers",
          desc: "Define sophisticated rule-based triggers and conditional flows so automations react to business signals in real time, not just on a schedule.",
        },
      ],
    },
    "file-transfer": {
      title: "Secure Output File Management",
      items: [
        {
          icon: FileText,
          text: "Automated Inbound & Outbound Transfers",
          desc: "Automate secure file transfers using schedulers and rule sets for routing, validation, encryption, and processing.",
        },
        {
          icon: Cloud,
          text: "Policy-Based File Handling",
          desc: "Apply policies for renaming, archiving, encryption, and retention to keep file workflows auditable and compliant with regulations.",
        },
        {
          icon: Network,
          text: "Multi-Protocol & Cloud Support",
          desc: "Native support for FTP, SFTP, API-based transfers, and cloud storage connectors (S3, Azure Blob) to integrate file movement across all systems.",
        },
      ],
    },
    benefits: {
      title: "Key Business & Operational Benefits",
      items: [
        {
          icon: CheckCircle2,
          text: "Drastically Reduce Manual Effort",
          desc: "Eliminate repetitive tasks and the risk of human error, freeing your operations teams to focus on strategic innovation.",
        },
        {
          icon: Briefcase,
          text: "Improve Operational Productivity",
          desc: "Accelerate process turnaround times, minimize costly downtime, and standardize critical operational procedures across the board.",
        },
        {
          icon: BarChart3,
          text: "Gain Real-Time Visibility & Control",
          desc: "Unified dashboards provide real-time insight into job schedules, workflow status, and SLA adherence for proactive management.",
        },
        {
          icon: Cpu,
          text: "Seamless End-to-End Integration",
          desc: "Connect to any system—ERP, CRM, databases, legacy applications, and modern APIs—for true end-to-end process automation.",
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
            className="badge badge-lg border-accent/50 bg-accent/10 text-accent p-4 mb-6 font-semibold shadow-sm"
          >
            {badgeText}
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl bg-gradient-to-r from-accent to-teal-400 bg-clip-text text-transparent"
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
                boxShadow: "0px 10px 20px -5px hsl(var(--a)/0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-accent btn-lg shadow"
            >
              Schedule a Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-ghost btn-lg"
            >
              Explore Features
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
                        ? "bg-accent/10 text-accent"
                        : "text-base-content/60 hover:bg-base-content/5 hover:text-base-content"
                    }`}
                  >
                    <nav.icon size={20} />
                    <span className="font-semibold">{nav.label}</span>
                    <span
                      className={`ml-auto text-accent transition-opacity duration-300 ${
                        activeSection === nav.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <ArrowRight size={16} />
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* ============================================================= */}
            {/* ========== MODIFIED: COMBINED VIDEO + ABOUT CARD ========== */}
            {/* ============================================================= */}
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
                <h3 className="card-title text-2xl font-bold text-accent">
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
                          className="card bg-base-200/60 border border-base-content/10 p-5 flex items-start gap-5 transition-all duration-300 hover:border-accent/30 hover:-translate-y-1 hover:shadow-xl"
                        >
                          <div className="flex-shrink-0 mt-1 p-3 bg-accent/10 rounded-lg">
                            <item.icon size={24} className="text-accent" />
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
          <div className="relative rounded-2xl p-10 md:p-16 text-center overflow-hidden bg-gradient-to-r from-accent to-teal-500 text-accent-content shadow-2xl shadow-accent/20">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Automate Your Enterprise?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-accent-content/80">
              Discover how our unified automation platform can reduce costs,
              eliminate errors, and accelerate your business.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px -5px hsl(var(--ac))",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-neutral btn-lg"
            >
              Get a Custom Demo <ArrowRight className="ml-2" />
            </motion.button>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default BPMAutomationPage;
