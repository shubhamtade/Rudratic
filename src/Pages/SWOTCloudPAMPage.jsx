import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion"; // Added AnimatePresence
import Footer from "../layouts/Footer"; // Keeping Footer import as it's from ../layouts/Footer now
import {
  Shield,
  Cpu,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Globe2,
  Lock,
  BarChart3,
  ArrowRight,
  Key, // For Zero Standing Privilege
  Brain, // For AI Behavioral Anomaly Detection
  Video, // For Intelligent Session Recording & Analysis
  Cloud, // For Unified Multi-Cloud Platform, AWS, Azure, GCP
  Settings, // For Native Kubernetes & Container Security
  Bot, // For Service Account & CI/CD Security
  Clock, // For Just-In-Time Access
  Building, // For Financial Services
  Hospital, // For Healthcare
  Laptop, // For Technology/SaaS
  Wrench, // For MSP/Managed Services
  Search, // For SIEM
  Ticket, // For ITSM
  User, // For Identity & Access Management (Active Directory, Okta)
  Mail, // For Contact Email
  Phone, // For Contact Phone
  CalendarDays, // For Schedule Demo
  XCircle, // For comparison table 'no'
  MinusCircle, // For comparison table 'partial'
  Lightbulb, // For Free Security Assessment
  MonitorPlay, // For Live AI Demo
  Scale, // For Custom ROI Analysis
  Map, // For Implementation Plan
  Speech, // For Vision Language Processing (from PAMPage ref)
  LockKeyhole, // For Offline LLM and BYOK (from PAMPage ref)
  Eye, // For UBA (from PAMPage ref)
  ShieldCheck, // For Conditional Access (from PAMPage ref)
  FileText, // For Compliance (from PAMPage ref)
  DollarSign, // For Cost Savings (from PAMPage ref)
  Target, // For Reduced Attack Surface (from PAMPage ref)
  Users,
  ArrowDownIcon, // Just for variety if needed
  Menu, // Added Menu for mobile nav
  X, // Added X for mobile nav close
} from "lucide-react";

// Helper for animated number count-up
const AnimatedNumber = ({ value }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const isNumber = !isNaN(parseFloat(String(value).replace(/[^0-9.]/g, ""))); // Handle strings like "3.1M" or "50"

  useEffect(() => {
    if (inView && isNumber) {
      const numericValue = parseFloat(String(value).replace(/[^0-9.]/g, ""));
      controls.start({
        opacity: 1,
        transition: {
          duration: 0.1, // Small delay for initial opacity before counting
          onComplete: () => {
            controls.set({ innerHTML: 0 });
            const animation = controls.start({
              innerHTML: numericValue,
              transition: {
                duration: 1.5,
                ease: "easeOut",
                onUpdate: (latest) => {
                  if (ref.current) {
                    const displayValue = Math.round(latest);
                    let formattedValue = displayValue.toLocaleString();

                    // Special handling for "M" suffix
                    if (String(value).includes("M")) {
                      formattedValue = (latest / 1000000).toFixed(1) + "M";
                    } else if (String(value).includes("%")) {
                      formattedValue = displayValue + "%";
                    }

                    ref.current.innerHTML = formattedValue;
                  }
                },
              },
            });
            return () => animation.stop();
          },
        },
      });
    } else if (inView && !isNumber) {
      controls.start({ opacity: 1, transition: { duration: 0.5 } });
    }
  }, [inView, controls, value, isNumber]);

  // For non-numeric values, just render them
  if (!isNumber) {
    return (
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
        {value}
      </motion.div>
    );
  }

  // For numbers, start with 0 and let the animation fill it in
  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
      0
    </motion.div>
  );
};

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
      mix-blend-mode: screen; /* Makes particles blend nicely */
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
      background: radial-gradient(
          circle at 20% 30%,
          hsl(var(--p) / 0.9),
          transparent 18%
        ),
        radial-gradient(
          circle at 80% 70%,
          hsl(var(--a) / 0.85),
          transparent 18%
        ); /* Using DaisyUI primary and accent */
      transition: opacity 0.5s ease;
    }

    /* Soft glass card border gradient */
    .glass-border {
      position: relative;
      overflow: hidden;
      border-radius: 0.75rem;
      background-color: hsl(
        var(--b1) / 0.6
      ); /* Slightly transparent background */
      backdrop-filter: blur(8px); /* Blur effect */
    }
    .glass-border::before {
      content: "";
      position: absolute;
      inset: -1px;
      background: linear-gradient(
        135deg,
        hsl(var(--in) / 0.12),
        hsl(var(--p) / 0.1)
      ); /* Blueish gradient border */
      z-index: -1;
      filter: blur(8px);
      transform: translateZ(0); /* For better rendering */
      border-radius: inherit; /* Inherit parent border-radius */
    }
    /* Specific adjustment for cards already having borders in SWOT code */
    .feature-card.glass-border::before {
      display: none; /* Hide the pseudo-element if a specific border is already handled by Tailwind */
    }

    /* tilt effect fallback (smooth) */
    .tilt-3d {
      transform-style: preserve-3d;
      backface-visibility: hidden;
      will-change: transform;
    }

    /* --- Original Header pseudo-elements - adapted to Tailwind color vars --- */
    .header-bg-gradient {
      background: linear-gradient(
        135deg,
        hsl(var(--b3)) 0%,
        hsl(var(--p)) 50%,
        hsl(var(--in)) 100%
      );
    }

    .header-bg-gradient::before {
      content: "";
      position: absolute;
      top: -50%;
      right: -10%;
      width: 500px;
      height: 500px;
      background: radial-gradient(
        circle,
        hsl(var(--in) / 0.1) 0%,
        transparent 70%
      );
      border-radius: 50%;
    }

    .header-bg-gradient::after {
      content: "";
      position: absolute;
      bottom: -30%;
      left: -5%;
      width: 400px;
      height: 400px;
      background: radial-gradient(
        circle,
        hsl(var(--p) / 0.2) 0%,
        transparent 70%
      );
      border-radius: 50%;
    }

    /* Custom styles for the comparison table checks/crosses */
    .checkmark-lg {
      color: hsl(var(--su)); /* success */
      font-weight: bold;
      font-size: 1.3em;
    }
    .partial-lg {
      color: hsl(var(--wa)); /* warning */
      font-weight: bold;
      font-size: 1.3em;
    }
    .no-lg {
      color: hsl(var(--er)); /* error */
      font-weight: bold;
      font-size: 1.3em;
    }

    /* Original feature card icon styling - adjusted colors */
    .feature-card .icon {
      font-size: 2.5em; /* From original CSS */
      margin-bottom: 15px;
      display: inline-block;
      color: hsl(var(--in)); /* Using info for consistent blue */
    }

    /* Original use case card icon styling - adjusted colors */
    .usecase-card .icon {
      font-size: 1.8em; /* From original CSS */
      color: hsl(var(--in));
    }

    /* Custom scrollbar for better aesthetics */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: hsl(var(--b1));
    }
    ::-webkit-scrollbar-thumb {
      background: hsl(var(--in));
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: hsl(var(--p));
    }

    /* small device adjustments from reference */
    @media (max-width: 640px) {
      .hero-glow {
        filter: blur(56px);
        opacity: 0.4;
      }
    }

    /* Responsive adjustments from original SWOT CSS */
    @media (max-width: 768px) {
      .header-hero h1 {
        font-size: 2.5em;
      }

      section h2 {
        font-size: 1.8em;
      }

      section h3 {
        font-size: 1.4em;
      }

      section {
        padding: 30px 20px;
      }

      .comparison-table {
        font-size: 0.9em;
      }

      .comparison-table th,
      .comparison-table td {
        padding: 12px;
      }
    }
  `}</style>
);

// Particle SVG for background
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

// Motion variants
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatUp = {
  hidden: { y: 6 },
  visible: {
    y: -6,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 3,
      ease: "easeInOut",
    },
  },
};

const cardHover = {
  whileHover: { scale: 1.025, y: -6, transition: { duration: 0.18 } },
  whileTap: { scale: 0.995 },
};


// ==================================================================
// ==================== NEW NAVIGATION COMPONENTS ===================
// ==================================================================

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

// ==================================================================
// ========================= MAIN PAGE ==============================
// ==================================================================

const SWOTCloudPAMPage = () => {
  const navRef = useRef(null);
  const isInView = useInView(navRef, { margin: "-100px 0px 0px 0px" }); // Make nav sticky after scrolling past it

  // Define sections for navigation
  const sections = [
    { id: "hero", title: "Overview" },
    { id: "why-swot", title: "Why SWOT Cloud PAM?" },
    { id: "capabilities", title: "Core Capabilities" },
    { id: "use-cases", title: "Real-World Use Cases" },
    { id: "roi-metrics", title: "ROI & Metrics" },
    { id: "comparison", title: "Comparison" },
    { id: "integrations", title: "Integrations" },
    { id: "cta-section", title: "Transform PAM" },
    { id: "contact", title: "Contact Us" },
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
    <div className="relative bg-base-100 text-base-content overflow-x-hidden min-h-screen ">
      <CustomStyles />

      {/* Particle / background layer */}
      <div className="particle-wrap" aria-hidden>
        <ParticleSVG />
      </div>

      {/* Mobile Navigation (button + overlay menu) */}
      <MobileSectionNav
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Desktop Dots Navigation */}
      <DotsNavigation
        sections={sections}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Header Hero Section */}
      <motion.header
        id="hero" // Added ID
        ref={sectionRefs.current.hero} // Added Ref
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative overflow-hidden text-center pb-28 pt-32 md:pt-[20%] header-hero bg-gradient-to-b from-base-100 via-base-200 to-base-100"
      >
        {/* Decorative Background Glow and Animated Shapes */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-20 right-[-120px] w-[400px] h-[400px] bg-info/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05),transparent_70%)]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary to-info drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]"
          >
            SWOT Cloud PAM
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-2xl md:text-3xl mt-4 mb-6 font-medium text-info/90 leading-snug"
          >
            The Only{" "}
            <span className="text-primary font-semibold">
              AI-Native Platform
            </span>{" "}
            Designed to Eliminate Privilege Abuse Before It Happens
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-base-content/90 max-w-5xl mx-auto mb-12 leading-relaxed italic"
          >
            Stop reacting to security threats.{" "}
            <span className="font-semibold text-primary">SWOT Cloud PAM</span>
            predicts, prevents, and automatically responds to privilege abuse in
            real-time. From detecting insider threats to securing{" "}
            <span className="text-info">multi-cloud infrastructure</span>,{" "}
            <span className="text-primary">
              SWOT combines zero standing privileges
            </span>
            , and <span className="text-accent">behavioral intelligence,</span>{" "}
            and autonomous response in one platform that learns and adapts to
            your organization's unique security landscape.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center gap-5 mt-8"
          >
            <motion.button
              {...cardHover}
              onClick={() =>
                scrollToSection("contact") // Updated to use scrollToSection
              }
              className="btn btn-info btn-lg shadow-xl hover:shadow-info/50 hover:scale-105 transition-transform duration-300"
            >
              🚀 Request Demo
            </motion.button>

            <motion.button
              {...cardHover}
              onClick={() => alert("Downloading ROI Report...")}
              className="btn btn-outline btn-info btn-lg shadow-lg hover:bg-info hover:text-base-100 transition-all duration-300"
            >
              📄 Download ROI Report
            </motion.button>
          </motion.div>
        </div>

        {/* Floating Animated Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-info/60 text-sm"
        >
          <ArrowDownIcon className="mx-auto animate-bounce" size={24} />
        </motion.div>
      </motion.header>

      <div className="container mx-auto px-4">
        {/* Introduction / Why SWOT Cloud PAM? */}
        <motion.section
          id="why-swot" // Added ID
          ref={sectionRefs.current["why-swot"]} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="bg-base-100 my-8 p-10 md:p-12 rounded-xl shadow-lg glass-border" // Added glass-border
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-8 text-primary border-b-4 border-info pb-4 tracking-tight"
          >
            Why SWOT Cloud PAM?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="stat-box border relative p-6 rounded-xl tilt-3d text-accent shadow-xl" // Apply tilt-3d
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--p)), hsl(var(--in)))",
              }} // Specific gradient
            >
              <div
                className="text-4xl md:text-5xl font-extrabold mb-2"
                style={{ color: "hsl(var(--a))" }}
              >
                77%
              </div>
              <div className="text-sm opacity-90">
                of orgs attacked due to overprivileged users & standing
                privileges
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="stat-box border relative p-6 rounded-xl tilt-3d text-accent shadow-xl" // Apply tilt-3d
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--p)), hsl(var(--in)))",
              }} // Specific gradient
            >
              <div
                className="text-4xl md:text-5xl font-extrabold mb-2"
                style={{ color: "hsl(var(--a))" }}
              >
                $4.88M
              </div>
              <div className="text-sm opacity-90">
                Average cost of a data breach in 2024
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="stat-box border relative p-6 rounded-xl tilt-3d text-accent shadow-xl" // Apply tilt-3d
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--p)), hsl(var(--in)))",
              }} // Specific gradient
            >
              <div
                className="text-4xl md:text-5xl font-extrabold mb-2"
                style={{ color: "hsl(var(--a))" }}
              >
                68%
              </div>
              <div className="text-sm opacity-90">
                of breaches involve human error or insider actions
              </div>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="stat-box border relative p-6 rounded-xl tilt-3d text-accent shadow-xl" // Apply tilt-3d
              style={{
                background:
                  "linear-gradient(180deg, hsl(var(--p)), hsl(var(--in)))",
              }} // Specific gradient
            >
              <div
                className="text-4xl md:text-5xl font-extrabold mb-2"
                style={{ color: "hsl(var(--a))" }}
              >
                3-4 Weeks
              </div>
              <div className="text-sm opacity-90">
                SWOT deployment time (vs 3-6 months traditional)
              </div>
            </motion.div>
          </div>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-semibold text-info mt-10 mb-4"
          >
            The Problem: Traditional PAM Can't Keep Up
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="mb-4 text-base-content leading-relaxed"
          >
            Traditional Privileged Access Management solutions were built for
            static, on-premises data centers. They fail in today's cloud-first
            world where:
          </motion.p>
          <motion.ul
            variants={staggerContainer}
            className="ml-10 mb-8 text-base-content text-lg leading-relaxed list-disc"
          >
            <motion.li variants={fadeInUp} className="my-2">
              <strong>Infrastructure is dynamic</strong> - Cloud resources spin
              up and down by the minute, but PAM policies stay static
            </motion.li>
            <motion.li variants={fadeInUp} className="my-2">
              <strong>Threats are sophisticated</strong> - Insider threats and
              compromised accounts hide within normal behavior patterns
            </motion.li>
            <motion.li variants={fadeInUp} className="my-2">
              <strong>Compliance is constant</strong> - Manual audit preparation
              costs thousands in labor while missing threats
            </motion.li>
            <motion.li variants={fadeInUp} className="my-2">
              <strong>Multi-cloud is mandatory</strong> - AWS, Azure, GCP, plus
              on-premises requires fragmented tools and inconsistent controls
            </motion.li>
            <motion.li variants={fadeInUp} className="my-2">
              <strong>Speed matters</strong> - Developers need fast access, but
              security can't compromise. Traditional PAM creates bottlenecks
            </motion.li>
          </motion.ul>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-semibold text-info mt-10 mb-4"
          >
            The SWOT Solution: AI-Native from the Ground Up
          </motion.h3>
          <motion.p
            variants={fadeInUp}
            className="text-base-content leading-relaxed"
          >
            SWOT Cloud PAM was built for the modern security landscape. Unlike
            bolted-on AI additions to legacy platforms, SWOT's intelligence is
            woven into every component from credential management to threat
            response. The result: a platform that{" "}
            <strong className="text-primary">
              understands your security environment, predicts emerging threats,
              and responds autonomously
            </strong>{" "}
            in milliseconds.
          </motion.p>
        </motion.section>

        {/* Core Capabilities Section */}
        <motion.section
          id="capabilities" // Added ID
          ref={sectionRefs.current.capabilities} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="bg-base-100 my-8 p-10 md:p-12 rounded-xl shadow-lg glass-border" // Added glass-border
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-8 text-base-content border-b-4 border-info pb-4 tracking-tight"
          >
            SWOT's Core Capabilities
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <Key size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                Zero Standing Privilege (ZSP)
              </h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                Every access is temporary and context-aware. Privileges
                automatically expire. Even stolen credentials provide no value
                after sessions end.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <Brain size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                AI Behavioral Anomaly Detection
              </h4>
              <p className className="text-base-content/70 text-sm leading-relaxed">
                Deep learning models baseline user behavior, detect deviations
                in real-time, and flag insider threats before damage occurs.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <Zap size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                Autonomous Threat Response
              </h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                When threats are detected, SWOT responds instantly revoking
                access, enforcing MFA, or terminating sessions without human
                delay.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <Cloud size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                Unified Multi-Cloud Platform
              </h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                Single interface managing AWS, Azure, GCP, on-premises, and
                hybrid environments. One policy. One audit trail. Complete
                control.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <BarChart3 size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                Automated Compliance Reporting
              </h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                One-click compliance reports for HIPAA, PCI-DSS, GDPR, SOX,
                NIST, FedRAMP with automatic evidence collection.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <Video size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                Intelligent Session Recording & Analysis
              </h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                AI analyzes session videos for anomalies, not just rule
                violations. Identify sophisticated attacks humans would miss.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <Settings size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                Native Kubernetes & Container Security
              </h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                Direct integration with EKS, AKS, GKE, OpenShift. Ephemeral
                credentials for containers. No complex workarounds.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <Bot size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                Service Account & CI/CD Security
              </h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                AI manages API keys, Lambda functions, CI/CD pipelines, and AI
                agents with dynamic credential vending. No hardcoded secrets.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <Clock size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                Just-In-Time Access (JIT)
              </h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                Self-service via Slack, Teams, CLI, or API. Automatic approval
                routing based on risk. Developers get access in seconds.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Use Cases Section */}
        <motion.section
          id="use-cases" // Added ID
          ref={sectionRefs.current["use-cases"]} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="bg-base-100 my-8 p-10 md:p-12 rounded-xl shadow-lg glass-border" // Added glass-border
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-8 text-base-content border-b-4 border-info pb-4 tracking-tight"
          >
            Real-World Use Cases
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg mb-8 text-base-content/80"
          >
            How organizations are transforming security with SWOT Cloud PAM
          </motion.p>

          {/* Use Case 1: Financial Services */}
          <motion.div
            variants={fadeInUp}
            {...cardHover} // Apply cardHover animation
            className="usecase-card bg-gradient-to-br from-info/10 to-info/5 border-l-4 border-info p-8 my-5 rounded-lg transition-all duration-300 glass-border"
          >
            <h4 className="text-info text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="icon">
                <Building size={28} />
              </span>
              Financial Services: Insider Threat Detection & Regulatory
              Compliance
            </h4>
            <div className="challenge bg-base-100 p-4 rounded-md my-3 border-l-4 border-error">
              <strong className="text-error block mb-2">Challenge:</strong>
              <p className="text-base-content/80 leading-relaxed">
                A major financial institution had no visibility into privileged
                user activities. Manual compliance audits took 4 weeks and cost
                $200K+ in consulting fees. They couldn't detect insider threats
                until damage occurred.
              </p>
            </div>
            <div className="solution bg-base-100 p-4 rounded-md my-3 border-l-4 border-success">
              <strong className="text-success block mb-2">
                SWOT Solution:
              </strong>
              <p className="text-base-content/80 leading-relaxed">
                Deployed SWOT's AI-powered UBA to establish behavior baselines
                for all 2,000 privileged users. Automated compliance reporting
                eliminated manual evidence collection. AI detected a junior
                analyst attempting unusual data access patterns flagging insider
                threat weeks before they could exfiltrate data.
              </p>
            </div>
            <div className="roi bg-gradient-to-br from-warning/10 to-orange-200/50 p-4 rounded-md mt-3 border-l-4 border-warning-content">
              <strong className="text-warning-content block mb-2">
                Results:
              </strong>
              <p className="text-base-content/80 leading-relaxed">
                ✓ Compliance audit time reduced from 4 weeks to 2 days
                <br />✓ $180K annual cost savings (consulting + internal labor)
                <br />✓ Insider threat detected and prevented (potential $50M+
                loss avoided)
                <br />✓ Regulatory fines avoided through continuous compliance
              </p>
            </div>
          </motion.div>

          {/* Use Case 2: Healthcare */}
          <motion.div
            variants={fadeInUp}
            {...cardHover} // Apply cardHover animation
            className="usecase-card bg-gradient-to-br from-info/10 to-info/5 border-l-4 border-info p-8 my-5 rounded-lg transition-all duration-300 glass-border"
          >
            <h4 className="text-info text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="icon">
                <Hospital size={28} />
              </span>
              Healthcare: HIPAA Compliance & Patient Data Protection
            </h4>
            <div className="challenge bg-base-100 p-4 rounded-md my-3 border-l-4 border-error">
              <strong className="text-error block mb-2">Challenge:</strong>
              <p className="text-base-content/80 leading-relaxed">
                A healthcare provider managed patient records across legacy
                on-premises systems and cloud storage. No unified access
                control. HIPAA auditors couldn't verify who accessed patient
                data or when. Manual password management was error-prone.
              </p>
            </div>
            <div className="solution bg-base-100 p-4 rounded-md my-3 border-l-4 border-success">
              <strong className="text-success block mb-2">
                SWOT Solution:
              </strong>
              <p className="text-base-content/80 leading-relaxed">
                Implemented SWOT's unified multi-cloud PAM covering on-premises
                EMR systems, AWS healthcare records, and backup systems.
                Automated password rotation eliminated manual errors. AI
                behavioral analytics detected a nurse accessing patient records
                outside their normal shift patterns.
              </p>
            </div>
            <div className="roi bg-gradient-to-br from-warning/10 to-orange-200/50 p-4 rounded-md mt-3 border-l-4 border-warning-content">
              <strong className="text-warning-content block mb-2">
                Results:
              </strong>
              <p className="text-base-content/80 leading-relaxed">
                ✓ HIPAA audit passed on first attempt (saved $120K in
                remediation costs)
                <br />✓ Suspicious access patterns detected (prevented potential
                HIPAA violation)
                <br />✓ Password rotation automated (20 hours/week admin time
                freed)
                <br />✓ Zero standing privileges: 8,000+ administrator
                credentials no longer permanently active
              </p>
            </div>
          </motion.div>

          {/* Use Case 3: Technology/SaaS */}
          <motion.div
            variants={fadeInUp}
            {...cardHover} // Apply cardHover animation
            className="usecase-card bg-gradient-to-br from-info/10 to-info/5 border-l-4 border-info p-8 my-5 rounded-lg transition-all duration-300 glass-border"
          >
            <h4 className="text-info text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="icon">
                <Laptop size={28} />
              </span>
              Technology Companies: Secure DevOps & Rapid Development
            </h4>
            <div className="challenge bg-base-100 p-4 rounded-md my-3 border-l-4 border-error">
              <strong className="text-error block mb-2">Challenge:</strong>
              <p className="text-base-content/80 leading-relaxed">
                A SaaS company with 500+ developers needed quick access to
                production systems for debugging. Traditional PAM created
                30-minute approval bottlenecks. Developers worked around
                security by sharing credentials, creating massive risk.
              </p>
            </div>
            <div className="solution bg-base-100 p-4 rounded-md my-3 border-l-4 border-success">
              <strong className="text-success block mb-2">
                SWOT Solution:
              </strong>
              <p className="text-base-content/80 leading-relaxed">
                Deployed SWOT with Slack integration for JIT access requests.
                Developers request access through Slack, AI risk scoring
                automatically approves low-risk requests (30 second approval).
                Service account management replaced hardcoded API keys in
                repositories with ephemeral credentials.
              </p>
            </div>
            <div className="roi bg-gradient-to-br from-warning/10 to-orange-200/50 p-4 rounded-md mt-3 border-l-4 border-warning-content">
              <strong className="text-warning-content block mb-2">
                Results:
              </strong>
              <p className="text-base-content/80 leading-relaxed">
                ✓ Access provisioning time reduced from 30 minutes to 30 seconds
                <br />✓ Developer productivity increased 15% (no security
                bottlenecks)
                <br />✓ 2,000 hardcoded API keys removed from code repositories
                <br />✓ Incident response time improved 50% (faster production
                debugging)
              </p>
            </div>
          </motion.div>

          {/* Use Case 4: MSP/Managed Services */}
          <motion.div
            variants={fadeInUp}
            {...cardHover} // Apply cardHover animation
            className="usecase-card bg-gradient-to-br from-info/10 to-info/5 border-l-4 border-info p-8 my-5 rounded-lg transition-all duration-300 glass-border"
          >
            <h4 className="text-info text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="icon">
                <Wrench size={28} />
              </span>
              Managed Service Providers (MSPs): Third-Party Access Control
            </h4>
            <div className="challenge bg-base-100 p-4 rounded-md my-3 border-l-4 border-error">
              <strong className="text-error block mb-2">Challenge:</strong>
              <p className="text-base-content/80 leading-relaxed">
                An MSP managed 500+ customer environments with 2,000+ support
                staff needing varying levels of access. No centralized control
                of third-party access. Difficult to audit which MSP staff
                accessed which customer systems.
              </p>
            </div>
            <div className="solution bg-base-100 p-4 rounded-md my-3 border-l-4 border-success">
              <strong className="text-success block mb-2">
                SWOT Solution:
              </strong>
              <p className="text-base-content/80 leading-relaxed">
                Deployed SWOT's unified platform for third-party access
                management. JIT access for MSP staff. Automatic expiration
                ensures access revoked when ticket closes. Complete audit trails
                showing which staff accessed which systems when.
              </p>
            </div>
            <div className="roi bg-gradient-to-br from-warning/10 to-orange-200/50 p-4 rounded-md mt-3 border-l-4 border-warning-content">
              <strong className="text-warning-content block mb-2">
                Results:
              </strong>
              <p className="text-base-content/80 leading-relaxed">
                ✓ Centralized third-party access control across all 500 customer
                environments
                <br />✓ Support ticket automation access auto-revoked when
                tickets close
                <br />✓ Customer confidence improved (verifiable access audit
                trails)
                <br />✓ Support staff productivity increased 20% (no manual
                access provisioning)
              </p>
            </div>
          </motion.div>

          {/* Use Case 5: Enterprise Multi-Cloud */}
          <motion.div
            variants={fadeInUp}
            {...cardHover} // Apply cardHover animation
            className="usecase-card bg-gradient-to-br from-info/10 to-info/5 border-l-4 border-info p-8 my-5 rounded-lg transition-all duration-300 glass-border"
          >
            <h4 className="text-info text-2xl font-semibold mb-4 flex items-center gap-3">
              <span className="icon">
                <Cloud size={28} />
              </span>
              Enterprise: Multi-Cloud Unified Security
            </h4>
            <div className="challenge bg-base-100 p-4 rounded-md my-3 border-l-4 border-error">
              <strong className="text-error block mb-2">Challenge:</strong>
              <p className="text-base-content/80 leading-relaxed">
                A Fortune 500 company used AWS, Azure, GCP, plus on-premises
                data centers. Each cloud used different IAM models. Different
                PAM tools for each environment. Inconsistent security policies.
                Reconciliation was a nightmare.
              </p>
            </div>
            <div className="solution bg-base-100 p-4 rounded-md my-3 border-l-4 border-success">
              <strong className="text-success block mb-2">
                SWOT Solution:
              </strong>
              <p className="text-base-content/80 leading-relaxed">
                SWOT's unified platform handles all cloud providers natively.
                Single policy engine applies consistent ZSP across all
                environments. One audit trail for all privileged activities
                globally.
              </p>
            </div>
            <div className="roi bg-gradient-to-br from-warning/10 to-orange-200/50 p-4 rounded-md mt-3 border-l-4 border-warning-content">
              <strong className="text-warning-content block mb-2">
                Results:
              </strong>
              <p className="text-base-content/80 leading-relaxed">
                ✓ Consolidated 4 separate PAM tools into one platform
                <br />✓ $500K+ annual licensing and maintenance cost savings
                <br />✓ Security team reduced from 15 to 10 FTEs
                <br />✓ Consistent security posture across all clouds and
                on-premises
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* ROI & Metrics Section */}
        <motion.section
          id="roi-metrics" // Added ID
          ref={sectionRefs.current["roi-metrics"]} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="bg-base-100 my-8 p-10 md:p-12 rounded-xl shadow-lg glass-border" // Added glass-border
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-8 text-base-content border-b-4 border-info pb-4 tracking-tight"
          >
            SWOT Cloud PAM ROI & Business Metrics
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            className="roi-metrics bg-gradient-to-br from-warning/10 to-orange-200/50 border-2 border-warning border-l-4 border-warning-content p-8 rounded-lg my-8 glass-border" // Added glass-border
          >
            <h3 className="text-2xl font-semibold text-warning mt-0 mb-6">
              Quantified Business Impact
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-5">
              <motion.div
                variants={fadeInUp}
                {...cardHover} // Apply cardHover animation
                className="metric-item bg-base-100 p-5 rounded-lg text-center shadow-sm glass-border" // Added glass-border
              >
                <span className="metric-value text-4xl font-extrabold text-info block mb-2">
                   $3.1M
                </span>
                <span className="metric-label text-base-content font-medium text-sm">
                  Average annual benefit per organization
                </span>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                {...cardHover} // Apply cardHover animation
                className="metric-item bg-base-100 p-5 rounded-lg text-center shadow-sm glass-border" // Added glass-border
              >
                <span className="metric-value text-4xl font-extrabold text-info block mb-2">
                  <AnimatedNumber value="50%" />
                </span>
                <span className="metric-label text-base-content font-medium text-sm">
                  Reduction in IT admin labor costs
                </span>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                {...cardHover} // Apply cardHover animation
                className="metric-item bg-base-100 p-5 rounded-lg text-center shadow-sm glass-border" // Added glass-border
              >
                <span className="metric-value text-4xl font-extrabold text-info block mb-2">
                  <AnimatedNumber value="80%" />
                </span>
                <span className="metric-label text-base-content font-medium text-sm">
                  Time saved on compliance audits
                </span>
              </motion.div>
              <motion.div
                variants={fadeInUp}
                {...cardHover} // Apply cardHover animation
                className="metric-item bg-base-100 p-5 rounded-lg text-center shadow-sm glass-border" // Added glass-border
              >
                <span className="metric-value text-4xl font-extrabold text-info block mb-2">
                  $623K
                </span>
                <span className="metric-label text-base-content font-medium text-sm">
                  Annual savings in incident response
                </span>
              </motion.div>
            </div>
          </motion.div>

          <h3 className="text-2xl font-semibold text-info mt-10 mb-6">
            Key ROI Drivers
          </h3>

          <motion.div
            variants={fadeInUp}
            className="highlight-box bg-gradient-to-br from-info/10 to-info/5 border-2 border-info border-l-4 border-primary p-8 rounded-lg my-6 glass-border" // Added glass-border
          >
            <strong className="text-info block mb-4 text-lg">
              1. Operational Efficiency & Cost Savings
            </strong>
            <ul className="ml-5 list-disc text-base-content leading-relaxed">
              <li className="my-2">
                <strong>Automated Password Rotation:</strong> Eliminates manual
                password resets saves 20+ hours per week per admin
              </li>
              <li className="my-2">
                <strong>Self-Service Access Requests:</strong> JIT reduces IT
                support burden by 70%, freeing teams for strategic work
              </li>
              <li className="my-2">
                <strong>Automated Provisioning/De-provisioning:</strong> Reduces
                onboarding time from 2 weeks to 30 minutes, offboarding from
                weeks to seconds
              </li>
              <li className="my-2">
                <strong>Infrastructure Cost Avoidance:</strong> Cloud-native
                platform eliminates expensive on-premises PAM appliances and
                maintenance
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="highlight-box bg-gradient-to-br from-info/10 to-info/5 border-2 border-info border-l-4 border-primary p-8 rounded-lg my-6 glass-border" // Added glass-border
          >
            <strong className="text-info block mb-4 text-lg">
              2. Compliance & Risk Reduction
            </strong>
            <ul className="ml-5 list-disc text-base-content leading-relaxed">
              <li className="my-2">
                <strong>Automated Compliance Reporting:</strong> Reduces audit
                prep time from 4 weeks to 2 days, saving $180K+ annually
              </li>
              <li className="my-2">
                <strong>Regulatory Fine Avoidance:</strong> Continuous
                compliance ensures you never get hit with million-dollar
                regulatory penalties
              </li>
              <li className="my-2">
                <strong>Insurance Premium Reduction:</strong> Demonstrated PAM
                controls lower cyber insurance premiums 10-20% annually
              </li>
              <li className="my-2">
                <strong>Breach Risk Reduction:</strong> Zero standing privilege
                and behavioral analytics reduce breach risk by 50%, saving
                $4.88M potential cost per incident
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="highlight-box bg-gradient-to-br from-info/10 to-info/5 border-2 border-info border-l-4 border-primary p-8 rounded-lg my-6 glass-border" // Added glass-border
          >
            <strong className="text-info block mb-4 text-lg">
              3. Enhanced Productivity & Revenue
            </strong>
            <ul className="ml-5 list-disc text-base-content leading-relaxed">
              <li className="my-2">
                <strong>Developer Productivity:</strong> JIT access eliminates
                approval bottlenecks, increasing developer productivity 15%+
              </li>
              <li className="my-2">
                <strong>Faster Incident Resolution:</strong> Quick access to
                production systems accelerates debugging and MTTR by 50%
              </li>
              <li className="my-2">
                <strong>Business Continuity:</strong> Real-time threat
                prevention keeps systems running, avoiding revenue loss from
                downtime
              </li>
              <li className="my-2">
                <strong>Support Team Efficiency:</strong> Automated access
                management for MSPs increases support staff productivity 20%+
              </li>
            </ul>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="highlight-box bg-gradient-to-br from-info/10 to-info/5 border-2 border-info border-l-4 border-primary p-8 rounded-lg my-6 glass-border" // Added glass-border
          >
            <strong className="text-info block mb-4 text-lg">
              4. Risk Mitigation & Threat Prevention
            </strong>
            <ul className="ml-5 list-disc text-base-content leading-relaxed">
              <li className="my-2">
                <strong>Insider Threat Detection:</strong> AI catches
                compromised accounts and insider threats before data is stolen
              </li>
              <li className="my-2">
                <strong>Ransomware Prevention:</strong> Behavioral analytics
                detects unusual admin activity before systems are encrypted
              </li>
              <li className="my-2">
                <strong>Lateral Movement Prevention:</strong> Zero standing
                privilege eliminates attack paths used for lateral movement
              </li>
              <li className="my-2">
                <strong>Regulatory Violations Prevented:</strong> Continuous
                monitoring ensures compliance, avoiding multi-million-dollar
                fines
              </li>
            </ul>
          </motion.div>

          <h3 className="text-2xl font-semibold text-info mt-10 mb-6">
            Sample ROI Calculation
          </h3>
          <motion.p
            variants={fadeInUp}
            className="font-semibold text-info text-lg my-5"
          >
            For a Mid-Market Enterprise (500 employees, 50 privileged users):
          </motion.p>
          <motion.table
            variants={fadeInUp}
            className="w-full border-collapse my-5 border border-base-content/20 rounded-lg overflow-hidden shadow-xl" // Added rounded-lg, overflow-hidden, shadow-xl
          >
            <tbody className="text-base-content">
              <tr className="bg-info/10">
                <td className="p-3 border border-base-content/20">
                  <strong>Cost Category</strong>
                </td>
                <td className="p-3 border border-base-content/20">
                  <strong>Annual Savings</strong>
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-base-content/20">
                  Admin labor automation (30% savings)
                </td>
                <td className="p-3 border border-base-content/20">
                  <strong>$90,000</strong>
                </td>
              </tr>
              <tr className="bg-base-200">
                <td className="p-3 border border-base-content/20">
                  Compliance audit cost reduction
                </td>
                <td className="p-3 border border-base-content/20">
                  <strong>$180,000</strong>
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-base-content/20">
                  Infrastructure & legacy PAM retirement
                </td>
                <td className="p-3 border border-base-content/20">
                  <strong>$150,000</strong>
                </td>
              </tr>
              <tr className="bg-base-200">
                <td className="p-3 border border-base-content/20">
                  Insurance premium reduction (15%)
                </td>
                <td className="p-3 border border-base-content/20">
                  <strong>$45,000</strong>
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-base-content/20">
                  Incident response cost reduction
                </td>
                <td className="p-3 border border-base-content/20">
                  <strong>$100,000</strong>
                </td>
              </tr>
              <tr className="bg-info/20 font-semibold">
                <td className="p-3 border border-base-content/20">
                  Total Annual ROI
                </td>
                <td className="p-3 border border-base-content/20">
                  <strong>$565,000</strong>
                </td>
              </tr>
            </tbody>
          </motion.table>
        </motion.section>

        {/* Comparison Section */}
        <motion.section
          id="comparison" // Added ID
          ref={sectionRefs.current.comparison} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="bg-base-100 my-8 p-10 md:p-12 rounded-xl shadow-lg glass-border" // Added glass-border
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-8 text-base-content border-b-4 border-info pb-4 tracking-tight"
          >
            SWOT Cloud PAM vs Other PAM Solutions
          </motion.h2>

          <motion.table
            variants={fadeInUp}
            className="comparison-table w-full border-collapse my-8 shadow-xl rounded-lg overflow-hidden"
          >
            <thead>
              <tr className="bg-gradient-to-br from-info to-primary text-accent">
                <th className="p-4 text-left font-semibold text-lg border-none">
                  Capability
                </th>
                <th className="p-4 text-left font-semibold text-lg border-none bg-info/80">
                  SWOT Cloud PAM
                </th>
                <th className="p-4 text-left font-semibold text-lg border-none">
                  Traditional PAM (On-Prem)
                </th>
                <th className="p-4 text-left font-semibold text-lg border-none">
                  Other Cloud PAM Solutions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>AI-Powered Behavioral Analytics</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Deep learning based
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <XCircle className="inline-block text-error mr-2 no-lg" />{" "}
                  Limited
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <MinusCircle className="inline-block text-warning mr-2 partial-lg" />{" "}
                  Basic/Limited
                </td>
              </tr>
              <tr className="bg-base-200 text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>Autonomous Threat Response</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Millisecond response
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <XCircle className="inline-block text-error mr-2 no-lg" />{" "}
                  Manual only
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <MinusCircle className="inline-block text-warning mr-2 partial-lg" />{" "}
                  Partial automation
                </td>
              </tr>
              <tr className="text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>Zero Standing Privilege</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  By design
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <MinusCircle className="inline-block text-warning mr-2 partial-lg" />{" "}
                  Additional module
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Yes
                </td>
              </tr>
              <tr className="bg-base-200 text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>Multi-Cloud Unified (AWS/Azure/GCP)</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Native support all
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <XCircle className="inline-block text-error mr-2 no-lg" />{" "}
                  Limited/Fragmented
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Yes
                </td>
              </tr>
              <tr className="text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>Native Kubernetes Integration</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Full support
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <XCircle className="inline-block text-error mr-2 no-lg" />{" "}
                  None
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Yes
                </td>
              </tr>
              <tr className="bg-base-200 text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>Service Accounts & CI/CD Security</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Comprehensive
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <XCircle className="inline-block text-error mr-2 no-lg" />{" "}
                  Poor support
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Good
                </td>
              </tr>
              <tr className="text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>MSP Third-Party Access Management</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Built in
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <XCircle className="inline-block text-error mr-2 no-lg" />{" "}
                  Manual/Complex
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <MinusCircle className="inline-block text-warning mr-2 partial-lg" />{" "}
                  Add-on module
                </td>
              </tr>
              <tr className="bg-base-200 text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>SIEM Integration</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Native + API
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Yes
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Yes
                </td>
              </tr>
              <tr className="text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>ITSM Integration (ServiceNow/Jira)</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Native + API
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Yes
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Yes
                </td>
              </tr>
              <tr className="bg-base-200 text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>Automated Compliance Reporting</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Full automation
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <MinusCircle className="inline-block text-warning mr-2 partial-lg" />{" "}
                  Manual heavy
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Yes
                </td>
              </tr>
              <tr className="text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>Just-In-Time Access (JIT)</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Full support
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <MinusCircle className="inline-block text-warning mr-2 partial-lg" />{" "}
                  Limited/Added cost
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <CheckCircle2 className="inline-block text-success mr-2 checkmark-lg" />{" "}
                  Yes
                </td>
              </tr>
              <tr className="bg-base-200 text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>Deployment Time</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>2-4 weeks</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  3-6 months
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  3-6 weeks
                </td>
              </tr>
              <tr className="text-base-content">
                <td className="p-4 border-b border-base-200 text-base">
                  <strong>Infrastructure Investment</strong>
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  None (Cloud SaaS)
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  $200K-500K hardware
                </td>
                <td className="p-4 border-b border-base-200 text-base">
                  None (Cloud SaaS)
                </td>
              </tr>
              <tr className="bg-base-200 text-base-content">
                <td className="p-4 border-b-0 text-base">
                  <strong>Total Cost of Ownership</strong>
                </td>
                <td className="p-4 border-b-0 text-base">
                  <strong>Lowest (SaaS)</strong>
                </td>
                <td className="p-4 border-b-0 text-base">
                  Highest (CapEx + OpEx)
                </td>
                <td className="p-4 border-b-0 text-base">Moderate</td>
              </tr>
              <tr className="text-base-content">
                <td className="p-4 border-b-0 text-base">
                  <strong>Admin Complexity</strong>
                </td>
                <td className="p-4 border-b-0 text-base">Low (Managed)</td>
                <td className="p-4 border-b-0 text-base">High (On-prem)</td>
                <td className="p-4 border-b-0 text-base">Moderate</td>
              </tr>
            </tbody>
          </motion.table>
        </motion.section>

        {/* Integrations Section -- ENHANCED */}
        <motion.section
          id="integrations" // Added ID
          ref={sectionRefs.current.integrations} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="bg-base-100 my-8 p-10 md:p-12 rounded-xl shadow-lg glass-border"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4 text-center text-base-content border-b-4 border-info pb-4 tracking-tight"
          >
            SWOT Integrates with Your Entire Infrastructure
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg text-center max-w-3xl mx-auto text-base-content/80 mb-16"
          >
            SWOT provides seamless, out-of-the-box integrations for the tools
            you already use, ensuring a unified security posture with zero
            friction.
          </motion.p>

        <div className="flex flex-col lg:flex-row gap-5 justify-center">
  {/* Card Component */}
  {[
    {
      title: "Cloud Platforms & Vendors",
      icon: Cloud,
      items: [
        "AWS",
        "Microsoft Azure",
        "Google Cloud",
        "On-Premises",
        "Private Cloud",
        "Hybrid Environments",
      ],
    },
    {
      title: "SIEM & Security Tools",
      icon: Search,
      items: [
        "Splunk",
        "Elastic SIEM",
        "Sumo Logic",
        "IBM QRadar",
        "Microsoft Sentinel",
        "ArcSight",
      ],
    },
    {
      title: "ITSM & Ticketing Platforms",
      icon: Ticket,
      items: [
        "ServiceNow",
        "Jira",
        "Atlassian",
        "BMC Remedy",
        "Freshservice",
        "Zendesk",
      ],
    },
    {
      title: "Identity & Access Management",
      icon: User,
      items: [
        "Active Directory",
        "Azure AD",
        "Okta",
        "Ping Identity",
        "OneLogin",
        "LDAP / Kerberos",
      ],
    },
  ].map((category, index) => (
    <motion.div
      key={index}
      variants={fadeInUp}
      whileHover={{ scale: 1.01 }}
      className="p-5 rounded-xl border border-base-content/20
                 bg-base-200/40 backdrop-blur-md shadow-sm
                 hover:border-info hover:shadow-lg transition-all "
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <category.icon size={24} className="text-primary" />
        <h3 className="text-lg font-semibold text-info">{category.title}</h3>
      </div>

      {/* Items */}
      <motion.div
        variants={staggerContainer}
        className="flex flex-col  gap-2"
      >
        {category.items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeInUp}
            whileHover={{ scale: 1.05, x: 3 }}
            className="px-3 py-2 text-xs rounded-md text-base-content
                       bg-base-300/40 border border-base-content/10
                       hover:bg-info/10 hover:border-info transition-all"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  ))}
</div>


          <motion.p
            variants={fadeInUp}
            className="text-center mt-16 font-semibold text-lg text-info"
          >
            And 500+ more via native connectors and open REST APIs
          </motion.p>
        </motion.section>

        {/* Call to Action Section */}
        <motion.div
          id="cta-section" // Added ID
          ref={sectionRefs.current["cta-section"]} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="cta-section relative rounded-xl p-10 md:p-16 text-center overflow-hidden bg-gradient-to-r from-primary to-info text-primary-content shadow-2xl shadow-primary/30 my-10 glass-border" // Added glass-border
        >
          <h2 className="text-3xl font-bold mb-4 text-accent border-b-2 border-white/30 pb-4 inline-block">
            Ready to Transform Privileged Access Management?
          </h2>
          <p className="max-w-2xl mx-auto mb-4 text-info text-lg">
            Organizations that adopt AI-native PAM are securing their future.
            Those that delay are betting their company on outdated security.
          </p>
          <p className="text-xl mt-5 font-semibold text-info">
            Experience how SWOT Cloud PAM eliminates standing privileges,
            prevents threats before they happen, and automates compliance across
            your entire infrastructure.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              {...cardHover} // Apply cardHover animation
              onClick={() =>
                scrollToSection("contact") // Updated to use scrollToSection
              }
              className="btn btn-warning btn-lg shadow-lg"
            >
              Request Demo Today
            </motion.button>
            <motion.button
              {...cardHover} // Apply cardHover animation
              onClick={() => alert("Downloading whitepaper...")}
              className="btn btn-outline btn-warning btn-lg"
            >
              Download Technical Whitepaper
            </motion.button>
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.section
          id="contact" // Added ID
          ref={sectionRefs.current.contact} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="bg-base-100 my-8 p-10 md:p-12 rounded-xl shadow-lg glass-border" // Added glass-border
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-8 text-primary border-b-4 border-info pb-4 tracking-tight"
          >
            Contact SWOT Cloud PAM
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg intro-text mb-8 text-base-content/80"
          >
            Let our security experts show you how SWOT's AI-powered PAM platform
            can transform your organization's security posture and deliver
            immediate ROI.
          </motion.p>

          <motion.h3
            variants={fadeInUp}
            className="text-2xl font-semibold text-info mt-10 mb-6"
          >
            Why Contact SWOT Today?
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <Lightbulb size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                Free Security Assessment
              </h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                Evaluate your current PAM gaps and security risks. Understand
                your ROI potential.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <MonitorPlay size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                Live AI Demo
              </h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                See behavioral analytics, threat detection, and autonomous
                response in action
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <Scale size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                Custom ROI Analysis
              </h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                Personalized ROI report based on your infrastructure and
                compliance needs
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              {...cardHover} // Apply cardHover animation
              className="feature-card bg-gradient-to-br from-base-100 to-base-200 border-2 border-info/20 p-6 rounded-lg shadow-sm cursor-pointer transition-all duration-400 glass-border"
            >
              <div className="icon">
                <Map size={36} />
              </div>
              <h4 className="text-info text-xl font-semibold mb-2">
                Implementation Plan
              </h4>
              <p className="text-base-content/70 text-sm leading-relaxed">
                Fast-track deployment with timeline and resource requirements
              </p>
            </motion.div>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default SWOTCloudPAMPage;