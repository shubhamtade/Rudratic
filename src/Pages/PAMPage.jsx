// src/pages/PAMPage.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../layouts/Footer";
import {
  Shield,
  Zap,
  Target,
  Brain,
  Users,
  CheckCircle2,
  ArrowRight,
  Gem,
  LockKeyhole,
  Speech,
  Eye,
  ShieldCheck,
  Clock,
  FileText,
  DollarSign,
  Menu,
  X,
} from "lucide-react";

/**
 * PAMPage - Enhanced, animated, Tailwind-themed version with floating dot navigation.
 *
 * Drop this file in place of your existing PAMPage component.
 * Requires: tailwindcss, framer-motion, lucide-react
 */

// Global helper styles for effects difficult with Tailwind alone
const CustomStyles = () => (
  <style jsx global>{`
    /* Subtle particle layer (SVG) */
    .particle-wrap {
      position: absolute;
      inset: 0;
      pointer-events: none;
      z-index: 0;
      overflow: hidden;
      opacity: 0.12;
      mix-blend-mode: screen;
    }

    /* Animated glowing gradient under hero */
    .hero-glow {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 120%;
      height: 120%;
      z-index: -1;
      filter: blur(80px);
      opacity: 0.55;
      background: radial-gradient(circle at 20% 30%, rgba(99, 102, 241, 0.9), transparent 18%),
                  radial-gradient(circle at 80% 70%, rgba(16, 185, 129, 0.85), transparent 18%);
      transition: opacity 0.5s ease;
    }

    /* Soft glass card border gradient */
    .glass-border {
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
    }
    .glass-border::before {
      content: "";
      position: absolute;
      inset: -1px;
      background: linear-gradient(135deg, rgba(96,165,250,0.12), rgba(234,88,12,0.10));
      z-index: -1;
      filter: blur(8px);
      transform: translateZ(0);
    }

    /* tilt effect fallback (smooth) */
    .tilt-3d {
      transform-style: preserve-3d;
      backface-visibility: hidden;
      will-change: transform;
    }

    /* small device adjustments */
    @media (max-width: 640px) {
      .hero-glow {
        filter: blur(56px);
        opacity: 0.4;
      }
    }
  `}</style>
);

// Motion variants
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const floatUp = {
  hidden: { y: 6 },
  visible: {
    y: -6,
    transition: { repeat: Infinity, repeatType: "reverse", duration: 3, ease: "easeInOut" },
  },
};

const cardHover = {
  whileHover: { scale: 1.025, y: -6, transition: { duration: 0.18 } },
  whileTap: { scale: 0.995 },
};

// --- New Navigation Components ---

// Mobile-specific navigation (button + overlay menu)
const MobileSectionNav = ({ sections, activeSection, scrollToSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-3 rounded-full bg-base-100 shadow-lg text-base-content"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-base-300/95 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)} // Close when clicking overlay
          >
            <motion.nav
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              exit={{ x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute left-0 top-0 h-full w-64 bg-base-100 p-6 shadow-xl" // Slide-in from left
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside nav
            >
              <h3 className="text-xl font-bold mb-6 text-primary">Sections</h3>
              <ul className="space-y-3">
                {sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => {
                        scrollToSection(section.id);
                        setIsMobileMenuOpen(false); // Close menu after navigating
                      }}
                      className={`w-full text-left py-2 px-4 rounded-lg transition-all duration-200 ease-in-out flex items-center gap-2
                        ${activeSection === section.id
                          ? "bg-primary/10 text-primary font-semibold shadow-sm"
                          : "text-base-content/70 hover:bg-base-200 hover:text-base-content"
                        }`
                      }
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Desktop-specific navigation (floating dots with always-visible names)
const DotsNavigation = ({ sections, activeSection, scrollToSection }) => {
  return (
    <motion.nav
      className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:block" // Only show dots on large screens
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
    >
      <ul className="space-y-4">
        {sections.map((section, index) => (
          <motion.li
            key={section.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.05 }}
          >
            <button
              onClick={() => scrollToSection(section.id)}
              // Use flexbox to arrange dot and text side-by-side
              className="flex items-center gap-3 py-2 px-3 rounded-md transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary/50 group"
              aria-label={`Jump to ${section.title} section`}
            >
              <span
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out ${
                  activeSection === section.id
                    ? "bg-primary scale-125 shadow-md shadow-primary/30"
                    : "bg-base-content/40 group-hover:bg-primary/80 group-hover:scale-110"
                }`}
              />
              {/* Text is now a direct child in the flex layout and always visible */}
              <span
                className={`whitespace-nowrap text-sm transition-colors duration-200 ease-in-out
                  ${activeSection === section.id
                    ? "text-primary font-semibold"
                    : "text-base-content/70 group-hover:text-base-content"
                  }`}
              >
                {section.title}
              </span>
            </button>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
};


const PAMPage = () => {
  // Data arrays kept similar to your original but slightly reorganized for animation
  const stats = [
    { number: "1st", description: "AI-Native PAM Platform" },
    { number: "2-4", description: "Weeks to Deploy" },
    { number: "70%", description: "Lower Total Cost of Ownership" },
    { number: "50+", description: "Pre-Built Integrations" },
  ];

  const pillars = [
    {
      icon: Shield,
      title: "Proactive Threat Defense",
      desc: "Unlike legacy tools that react to threats, our AI detects and prevents malicious behavior in real-time by analyzing context, intent, and user behavior.",
      metric: "Real-time threat detection in <15 minutes",
    },
    {
      icon: Zap,
      title: "Automated Intent-Aware Approvals",
      desc: "Our VLP technology automates access requests by understanding the reason for the request, reducing approval times from hours to seconds while maintaining Zero Trust security.",
      metric: "Approval time: Hours → Seconds",
    },
    {
      icon: Target,
      title: "Reduced Attack Surface",
      desc: "Our Just-in-Time privilege and continuous session monitoring remove standing privileges, reducing your exposure to insider threats and external attacks by up to 70%.",
      metric: "70% reduction in attack surface",
    },
  ];

  const features = [
    {
      badge: "Exclusive Technology",
      badgeStyle: "bg-[#FBE8CA] text-[#A66F00]",
      icon: Speech,
      title: "Vision Language Processing (VLP)",
      desc: "Multimodal AI combining vision + NLP. Understands context, intent, and meaning of access patterns. Detects zero-day threats and sophisticated attacks.",
      highlight: "90%+ accuracy in intent detection",
    },
    {
      badge: "Exclusive Technology",
      badgeStyle: "bg-[#FBE8CA] text-[#A66F00]",
      icon: LockKeyhole,
      title: "Offline Large Language Model",
      desc: "Proprietary LLM runs on-premise without cloud dependencies. Complete data privacy. Real-time threat analysis without data exfiltration concerns. Enterprise-grade security built-in.",
      highlight: "100% data control - nothing leaves your infrastructure",
    },
    {
      badge: "Core Feature",
      badgeStyle: "bg-[#DFE5F5] text-[#264082]",
      icon: Eye,
      title: "User Behavior Analytics (UBA)",
      desc: "Real-time anomaly detection with peer-group comparisons. Adaptive baselines detect insider threats, compromised accounts, and privilege abuse.",
      highlight: "Real-time anomaly detection",
    },
    {
      badge: "Zero Trust",
      badgeStyle: "bg-[#DFE5F5] text-[#264082]",
      icon: ShieldCheck,
      title: "Conditional Access Policies",
      desc: "Dynamic risk-based access control. Evaluates device health, location, behavior, network. Impossible travel detection, device compliance enforcement.",
      highlight: "Risk-based decisions",
    },
    {
      badge: "Core Feature",
      badgeStyle: "bg-[#DFE5F5] text-[#264082]",
      icon: Clock,
      title: "Just-in-Time (JIT) Access",
      desc: "Grant access exactly when needed with automatic revocation. Time-limited credentials eliminate standing privileges. Complete audit trail.",
      highlight: "Zero standing privileges",
    },
    {
      badge: "Enterprise",
      badgeStyle: "bg-[#DFE5F5] text-[#264082]",
      icon: LockKeyhole,
      title: "Bring Your Own Key (BYOK)",
      desc: "Full encryption key control. Comply with data residency. Private keys never reach SWOT infrastructure. Zero-trust encryption model.",
      highlight: "100% encryption control",
    },
  ];

  // Simple inline particle SVG (decorative)
  const ParticleSVG = () => (
    <svg
      className="w-full h-full"
      preserveAspectRatio="none"
      viewBox="0 0 800 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      focusable="false"
    >
      <g fill="none" stroke="currentColor" strokeOpacity="0.07">
        <circle cx="50" cy="80" r="2" />
        <circle cx="120" cy="140" r="3" />
        <circle cx="220" cy="30" r="2.5" />
        <circle cx="320" cy="200" r="2" />
        <circle cx="420" cy="90" r="3" />
        <circle cx="620" cy="140" r="2.2" />
        <circle cx="720" cy="40" r="2" />
        <circle cx="760" cy="300" r="2" />
        <circle cx="180" cy="420" r="2.4" />
        <circle cx="540" cy="480" r="2.2" />
      </g>
    </svg>
  );

  // Define sections for navigation
  const sections = [
    { id: "hero", title: "Overview" },
    { id: "why-swot", title: "Why SWOT PAM" },
    { id: "pillars", title: "Pillars" },
    { id: "capabilities", title: "Capabilities" },
    { id: "outcomes", title: "Business Outcomes" },
    { id: "cta", title: "Ready for Demo?" },
  ];

  // Create refs for each section
  const sectionRefs = useRef(
    sections.reduce((acc, section) => {
      acc[section.id] = React.createRef();
      return acc;
    }, {})
  );

  const [activeSection, setActiveSection] = useState(null);

  const handleScroll = () => {
    let currentActive = null;
    const scrollBuffer = 150; // Pixels from top of viewport to consider a section active

    // Iterate backwards to prioritize sections higher up that are currently in view
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      // Access .current of sectionRefs first to get the object of refs,
      // then .current again to get the DOM element from the individual ref.
      const element = sectionRefs.current[section.id]?.current;
      if (element) {
        const rect = element.getBoundingClientRect();
        // A section is active if its top edge is above the scrollBuffer
        // and its bottom edge is still visible in the viewport.
        if (rect.top <= scrollBuffer && rect.bottom > 0) {
          currentActive = section.id;
          break; // Found the highest active section
        }
      }
    }
    setActiveSection(currentActive);
  };

  const scrollToSection = (id) => {
    // Access .current of sectionRefs first
    const element = sectionRefs.current[id]?.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const initialCheckTimeout = setTimeout(handleScroll, 100); // Give DOM a moment to render and populate refs

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(initialCheckTimeout);
    };
  }, [sections]); // Depend on sections to re-run if sections array changes (unlikely here)

  return (
    <div className="relative bg-base-100 text-base-content overflow-x-hidden">
      <CustomStyles />

      {/* Mobile Navigation (button + overlay menu) */}
      <MobileSectionNav
        sections={sections}
        // sectionRefs={sectionRefs} // Not directly needed by MobileSectionNav as scrollToSection is passed
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Desktop Dots Navigation */}
      <DotsNavigation
        sections={sections}
        // sectionRefs={sectionRefs} // Not directly needed by DotsNavigation as scrollToSection is passed
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Content Wrapper */}
      <div className="relative z-10">

        {/* Particle / background layer */}
        <div className="particle-wrap" aria-hidden>
          <ParticleSVG />
        </div>

        {/* HERO */}
        <header id="hero" ref={sectionRefs.current.hero} className="relative container mx-auto px-6 pt-36 pb-20 z-10">
          <div className="hero-glow" aria-hidden />
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-5xl mx-auto text-center relative z-10"
          >
            <motion.div variants={fadeInUp}>
              <div className=" badge badge-lg border-accent/40 bg-accent/10 text-accent rounded-xl p-3 mb-6 font-semibold">
                🚀 World's First AI-Native PAM
              </div>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto"
                aria-label="The Future of Privileged Access is Here"
              >
                The Future of{" "}
                <motion.span
                  variants={floatUp}
                  className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent"

                >
                  Privileged Access Management
                </motion.span>{" "}
                is Here
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-lg text-base-content/70 mt-6 max-w-2xl mx-auto">
                SWOT PAM is the world's first AI-native Privileged Access Management platform, built from the ground up to address the new and evolving cyber threat landscape. Our core innovation combines Vision Language Processing (VLP) and Offline LLM to understand, predict, and proactively secure privileged access like no other solution on the market.
              </motion.p>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                {...cardHover}
                className="btn btn-primary btn-lg shadow-lg flex items-center gap-3 px-6"
                aria-label="Schedule a demo"
              >
                Schedule a Demo
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                {...cardHover}
                className="btn btn-ghost btn-lg px-6"
                aria-label="Explore Innovation"
              >
                Explore Innovation
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-10 mx-auto max-w-3xl card bg-base-200/50 p-6 border-l-4 border-accent shadow-lg backdrop-blur-md glass-border"
              role="region"
              aria-label="Core Innovation"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
                  <Brain size={22} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-accent">Core Innovation: VLP + Offline LLM</h3>
                  <p className="text-base-content/70 mt-1">
                    Our unique combination enables us to understand context, intent, and behavior patterns with unprecedented accuracy all while maintaining complete data privacy and security. This is not an add-on; it's the foundation of everything we build.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </header>

        {/* WHY */}
        <motion.section
          id="why-swot"
          ref={sectionRefs.current["why-swot"]}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={staggerContainer}
          className="container mx-auto px-6 py-12 relative z-10"
        >
          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: "#264082" }}>
            Why Organizations Choose SWOT PAM
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ translateY: -6, boxShadow: "0 18px 32px -18px rgba(38,64,130,0.22)" }}
                className="relative p-6 rounded-xl tilt-3d text-white shadow-xl"
                style={{ background: "linear-gradient(180deg,#264082,#1F3B6D)" }}
              >
                <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: "#F7CB32" }}>
                  {s.number}
                </div>
                <div className="text-sm opacity-90">{s.description}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <main className="container mx-auto px-6 pb-28 space-y-24 relative z-10">
          {/* PILLARS */}
          <motion.section
            id="pillars"
            ref={sectionRefs.current.pillars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Three Pillars of SWOT PAM
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.article
                    key={i}
                    variants={fadeInUp}
                    {...cardHover}
                    className="pillar-card card p-8 text-center flex flex-col glass-border tilt-3d"
                  >
                    <motion.div variants={floatUp} className="mx-auto mb-6 inline-block p-4 rounded-full bg-accent/10">
                      <Icon size={36} className="text-accent" />
                    </motion.div>

                    <h3 className="font-bold text-xl mb-3">{p.title}</h3>
                    <p className="text-base-content/70 mb-6 flex-grow">{p.desc}</p>

                    <div className="mt-auto badge badge-lg bg-success/10 text-success font-semibold p-3 rounded-md">{p.metric}</div>
                  </motion.article>
                );
              })}
            </div>
          </motion.section>

          {/* FEATURES */}
          <motion.section
            id="capabilities"
            ref={sectionRefs.current.capabilities}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: "#264082" }}>
              Exclusive SWOT PAM Capabilities
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-base-content/70 mb-10 max-w-2xl mx-auto">
              Advanced AI features not found in legacy PAM solutions — purpose-built for enterprise privacy, performance and control.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, idx) => {
                const Icon = f.icon;
                // parse badge color strings to inline styles (we kept the original approach)
                const bgColorMatch = f.badgeStyle.match(/bg-\[([^\]]+)\]/);
                const fgColorMatch = f.badgeStyle.match(/text-\[([^\]]+)\]/);
                const bgColor = bgColorMatch ? bgColorMatch[1] : "#E6EEF8";
                const fgColor = fgColorMatch ? fgColorMatch[1] : "#264082";
                return (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="card bg-base-100 p-6 border border-base-content/10 flex flex-col glass-border"
                  >
                    <div className="mb-3">
                      <span className="text-xs font-semibold px-3 py-1.5 rounded-full" style={{ backgroundColor: bgColor, color: fgColor }}>
                        {f.badge}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mb-4">
                      <Icon size={22} className={`${f.iconColor ?? "text-[#5872A5]"}`} />
                      <h3 className="font-bold text-lg" style={{ color: "#1F3B6D" }}>{f.title}</h3>
                    </div>

                    <p className="text-sm text-base-content/70 mb-4 flex-grow">{f.desc}</p>

                    <div className="w-full">
                      <div className="flex items-center gap-2 text-sm font-medium p-2 rounded-lg" style={{ backgroundColor: "#E8F5E9", color: "#388E3C" }}>
                        <div className="w-1 h-5 rounded-sm" style={{ backgroundColor: "#388E3C" }} />
                        {f.highlight}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* BUSINESS BENEFITS (TIERS) */}
          <motion.section
            id="outcomes"
            ref={sectionRefs.current.outcomes}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Strategic Business Outcomes
            </motion.h2>

            {/* Tier cards simplified and animated */}
            <div className="space-y-10">
              {[
                {
                  tier: "TIER 1",
                  title: "Risk Reduction & Breach Prevention",
                  titleColor: "#388E3C",
                  icon: Shield,
                  benefits: [
                    {
                      title: "Enhanced Cyber Resilience",
                      shortDesc: "Detect and respond to threats in minutes instead of months, reducing breach impact window by 95%.",
                      highlights: ["80% of breaches involve privileged accounts", "94% reduction in privilege abuse", "MTTR: 206+ days → <15 minutes"],
                    },
                    {
                      title: "Insider Threat Prevention",
                      shortDesc: "Real-time behavior analytics detects malicious activities before data loss.",
                      highlights: ["68% of breaches involve human element", "100% session recording", "Immediate revocation"],
                    },
                    {
                      title: "Reduced Attack Surface",
                      shortDesc: "Zero standing privileges and least-privilege enforcement eliminate vectors.",
                      highlights: ["50% reduction in cyberattacks", "87% reduction in lateral movement", "Zero standing privileges"],
                    },
                  ],
                },
                {
                  tier: "TIER 2",
                  title: "Compliance & Operational Efficiency",
                  titleColor: "#5872A5",
                  icon: FileText,
                  benefits: [
                    {
                      title: "Regulatory Compliance & Governance",
                      shortDesc: "Automated compliance with NIST, HIPAA, GDPR, SOX, and PCI-DSS.",
                      highlights: ["80% faster audits: 3 weeks → 2 days", "$1.9M annual penalties avoided", "Board-level visibility"],
                    },
                    {
                      title: "Improved Operational Efficiency",
                      shortDesc: "Automation reduces IT manual effort by 60-70%.",
                      highlights: ["5 weeks/year saved per admin", "60% reduction in errors", "8 FTE → 2 FTE staffing"],
                    },
                    {
                      title: "Business Continuity",
                      shortDesc: "Zero standing privileges ensure uninterrupted operations.",
                      highlights: ["99.99% uptime SLA", "Automatic containment", "Disaster recovery ready"],
                    },
                  ],
                },
                {
                  tier: "TIER 3",
                  title: "Cost Savings & Strategic Advantage",
                  titleColor: "#E65239",
                  icon: DollarSign,
                  benefits: [
                    {
                      title: "Cost Savings & Efficiency",
                      shortDesc: "70% lower TCO with rapid deployment.",
                      highlights: ["$650K-950K vs $2.0M-2.4M over 3 years", "$480K annual labor savings", "ROI in 6-12 months"],
                    },
                    {
                      title: "Insurance Premium Reduction",
                      shortDesc: "Robust security lowers cyber insurance costs.",
                      highlights: ["20-30% reduction in premiums", "$50K-200K annual savings", "Better risk rating"],
                    },
                    {
                      title: "Competitive Advantage",
                      shortDesc: "Move 80% faster with cloud-native AI architecture.",
                      highlights: ["2-4 week deployment", "95% user adoption", "DevOps-friendly"],
                    },
                  ],
                },
              ].map((tier, ti) => {
                const Icon = tier.icon;
                return (
                  <motion.div key={ti} variants={fadeInUp}>
                    <div className="flex items-center border-b pb-4 mb-6 border-base-content/20">
                      <div className="inline-block p-2 rounded-full mr-3" style={{ backgroundColor: `${tier.titleColor}1A` }}>
                        <Icon size={22} style={{ color: tier.titleColor }} />
                      </div>
                      <h3 className="text-2xl font-bold flex items-center" style={{ color: tier.titleColor }}>
                        <span className="font-light text-base-content/50 mr-3 text-lg">{tier.tier}</span>
                        {tier.title}
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {tier.benefits.map((b, bi) => (
                        <motion.div
                          key={bi}
                          variants={fadeInUp}
                          whileHover={{ y: -6, boxShadow: "0 18px 30px -18px rgba(16,185,129,0.10)" }}
                          className="card bg-base-100 p-6 border border-base-content/10 flex flex-col glass-border"
                        >
                          <h4 className="font-bold mb-2 text-lg" style={{ color: "#264082" }}>
                            {b.title}
                          </h4>
                          <p className="text-sm text-base-content/70 mb-4 flex-grow">{b.shortDesc}</p>

                          <div className="mt-auto space-y-3">
                            {b.highlights.map((h, hi) => (
                              <div key={hi} className="flex items-center gap-2 text-sm font-medium p-2 rounded-lg" style={{ backgroundColor: "#E8F5E9", color: "#388E3C" }}>
                                <div className="w-1 h-5 rounded-sm" style={{ backgroundColor: "#388E3C" }} />
                                {h}
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* FINAL CTA */}
          <motion.section
            id="cta"
            ref={sectionRefs.current.cta}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUp}
            className="mt-12"
          >
            <div className="relative rounded-2xl p-10 md:p-16 text-center overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-content shadow-2xl shadow-primary/30">
              <h2 className="text-3xl font-bold mb-4">Ready to See the Future of PAM?</h2>
              <p className="max-w-2xl mx-auto mb-8 text-primary-content/85">Stop chasing threats and start preventing them. Schedule a personalized demo to see how SWOT's AI-native PAM can secure your organization.</p>

              <div className="flex justify-center gap-4">
                <motion.button
                  {...cardHover}
                  className="btn btn-neutral btn-lg px-6"
                  aria-label="Request your free demo"
                >
                  Request Your Free Demo
                </motion.button>

                <motion.a
                  href="#contact"
                  className="btn btn-ghost btn-lg px-6"
                  {...cardHover}
                  aria-label="Contact sales"
                >
                  Contact Sales
                </motion.a>
              </div>
            </div>
          </motion.section>
        </main>

        <Footer />
      </div> {/* End main content wrapper */}
    </div>
  );
};

export default PAMPage;