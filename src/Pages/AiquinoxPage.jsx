import React, { useState, useEffect } from "react";
import Footer from "../layouts/Footer";
// Removed Framer Motion and Lucide imports as they are no longer used in the new content

// It's good practice to import the Footer component if it exists in your layouts,
// even if this specific page's footer is custom HTML.
// import Footer from "../layouts/Footer"; // Re-add if your project uses a shared Footer component

// Custom CSS for scroll behavior and specific pseudo-elements.
// We'll try to use Tailwind's theme() function for colors within the style tag,
// but for gradients in pseudo-elements, direct hex might be more reliable
// or require PostCSS setup. For simplicity, I'll keep hex for gradients inside <style> for now.
const CustomStyles = () => (
  <style jsx global>{`
    html {
      scroll-behavior: smooth;
      /* Ensure our custom theme is applied, adjust this based on your global layout setup */
      /* For example, if you set data-theme="aiquinoxTheme" on the <html> tag, you don't need this */
      /* But if not, this acts as a fallback or explicit declaration for this page */
      /* Note: this isn't the ideal way to apply DaisyUI themes,
         it's usually done via data-theme on HTML/body or a parent div. */
    }
    body {
        font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        line-height: 1.6;
        color: hsl(var(--bc)); /* Using DaisyUI base-content for general text */
        background: hsl(var(--b1)); /* Using DaisyUI base-100 for general background */
    }
    /* Specific styles for process timeline before pseudo-element */
    .process-timeline::before {
        content: '';
        position: absolute;
        top: 30px;
        left: 0;
        right: 0;
        height: 2px;
        /* Using hex values for gradients within inline style for direct matching */
        background: linear-gradient(90deg, #003366 0%, #7B2CBF 100%);
        z-index: 0;
    }
    /* Specific styles for screen visual before pseudo-element */
    .screen-visual::before {
        content: '';
        display: block;
        width: 100%;
        height: 40px;
        background: linear-gradient(90deg, #e0e0e0 20%, #f0f0f0 50%, #e0e0e0 80%);
        border-bottom: 2px solid #E0E0E0; /* Using hex directly for specific border */
        margin: -20px -20px 20px -20px;
    }
    /* Responsive adjustment for process timeline */
    @media (max-width: 768px) {
        .process-timeline {
            flex-direction: column;
        }
        .process-timeline::before {
            top: 0;
            bottom: 0;
            left: 20px;
            width: 2px;
            height: 100%;
            /* Adjusted gradient for vertical */
            background: linear-gradient(180deg, #003366 0%, #7B2CBF 100%);
        }
        /* Mobile menu hidden */
        .nav-desktop-only {
            display: none;
        }
    }
  `}</style>
);

const AiquinoxPage = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const switchTab = (index) => {
    setActiveTabIndex(index);
  };

  return (
    // Apply the custom theme to this component's root for demonstration.
    // Ideally, this is set higher up in your application (e.g., _app.js or layout.js).
    <div className="font-inter text-base-content bg-base-100" data-theme="aiquinoxTheme">
      <CustomStyles />

      {/* Header */}
      <header className="fixed top-0 w-full bg-base-100 shadow-md z-50 py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-5">
          <a href="#" className="text-2xl font-bold text-primary">
            AIQuinox <span className="text-secondary">.</span>
          </a>
          <nav className="nav-desktop-only">
            <ul className="flex items-center space-x-7">
              <li>
                <a href="#how-it-works" className="text-base-content font-medium hover:text-secondary transition-colors duration-300">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#screen-intelligence" className="text-base-content font-medium hover:text-secondary transition-colors duration-300">
                  Screen Intelligence
                </a>
              </li>
              <li>
                <a href="#uniqueness" className="text-base-content font-medium hover:text-secondary transition-colors duration-300">
                  Why AIQuinox
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-base-content font-medium hover:text-secondary transition-colors duration-300">
                  Use Cases
                </a>
              </li>
              <li>
                <a href="#contact" className="px-6 py-2 rounded-md bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-300 shadow-md">
                  Get Started
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mt-[70px] bg-gradient-to-br from-primary to-secondary text-white py-24 px-5 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-5">
            Screen Intelligence Engine
          </h1>
          <p className="text-2xl mb-7 opacity-95 font-light">
            Real-Time AI That Sees What Your Team Sees
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto opacity-90">
            AIQuinox Screen Intelligence Engine monitors live user interactions in
            real-time, understands context instantly, and delivers proactive AI
            guidance no system switching, no delays.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-8 py-4 rounded-md bg-white text-primary font-semibold text-lg shadow-lg hover:bg-base-200 transition-all duration-300">
              🎬 Watch Demo
            </button>
            <button className="px-8 py-4 rounded-md bg-white text-primary font-semibold text-lg shadow-lg hover:bg-base-200 transition-all duration-300">
              🆓 Start Free Trial
            </button>
            <button className="px-8 py-4 rounded-md bg-primary text-white font-semibold text-lg shadow-lg hover:bg-primary/90 transition-all duration-300 border-2 border-white">
              📅 Schedule Demo
            </button>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - INTERACTIVE SECTION */}
      <section className="bg-base-200 py-20 px-5" id="how-it-works">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            How It Works
          </h2>
          <p className="text-lg text-base-content/70 text-center mb-16 max-w-2xl mx-auto">
            4 simple steps to transform enterprise data into intelligent,
            real-time decisions
          </p>

          {/* Interactive Tabs */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            <button
              className={`px-6 py-3 border-2 border-base-300 bg-base-100 text-base-content rounded-full font-semibold text-base transition-all duration-300 ${
                activeTabIndex === 0
                  ? "bg-primary text-white border-primary scale-105"
                  : "hover:border-secondary hover:text-secondary"
              }`}
              onClick={() => switchTab(0)}
            >
              🔌 Step 1: Integrate
            </button>
            <button
              className={`px-6 py-3 border-2 border-base-300 bg-base-100 text-base-content rounded-full font-semibold text-base transition-all duration-300 ${
                activeTabIndex === 1
                  ? "bg-primary text-white border-primary scale-105"
                  : "hover:border-secondary hover:text-secondary"
              }`}
              onClick={() => switchTab(1)}
            >
              📸 Step 2: Capture
            </button>
            <button
              className={`px-6 py-3 border-2 border-base-300 bg-base-100 text-base-content rounded-full font-semibold text-base transition-all duration-300 ${
                activeTabIndex === 2
                  ? "bg-primary text-white border-primary scale-105"
                  : "hover:border-secondary hover:text-secondary"
              }`}
              onClick={() => switchTab(2)}
            >
              🧠 Step 3: Analyze
            </button>
            <button
              className={`px-6 py-3 border-2 border-base-300 bg-base-100 text-base-content rounded-full font-semibold text-base transition-all duration-300 ${
                activeTabIndex === 3
                  ? "bg-primary text-white border-primary scale-105"
                  : "hover:border-secondary hover:text-secondary"
              }`}
              onClick={() => switchTab(3)}
            >
              ⚡ Step 4: Act
            </button>
          </div>

          {/* Tab Content */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn ${
              activeTabIndex === 0 ? "block" : "hidden"
            }`}
          >
            <div className="bg-base-100 rounded-xl p-10 text-center border-2 border-base-300 shadow-sm">
              <div className="text-7xl mb-5">🔌</div>
              <h4 className="text-primary text-center text-xl font-semibold">
                Zero-Code Deployment
              </h4>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-3xl text-primary mb-3">Integrate</h3>
              <p className="text-base-content/80 text-lg leading-relaxed">
                Connect your enterprise apps in minutes using our browser
                extension or API. Works with Salesforce, SAP, Zendesk, banking
                cores, and any web application.
              </p>
              <ul className="list-none p-0">
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Browser extension (Chrome, Edge, Firefox, Safari)
                </li>
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  No backend code changes required
                </li>
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Deploy in 15 minutes
                </li>
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Works with any enterprise system
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn ${
              activeTabIndex === 1 ? "block" : "hidden"
            }`}
          >
            <div className="step-visual bg-base-100 rounded-xl p-10 text-center border-2 border-base-300 shadow-sm">
              <div className="icon text-7xl mb-5">📸</div>
              <h4 className="text-primary text-center text-xl font-semibold">
                Privacy-First Capture
              </h4>
            </div>
            <div className="step-details flex flex-col gap-4">
              <h3 className="text-3xl text-primary mb-3">Capture</h3>
              <p className="text-base-content/80 text-lg leading-relaxed">
                Securely capture real-time screen context, user interactions,
                and data from your enterprise systems. Your sensitive data is
                always protected.
              </p>
              <ul className="list-none p-0">
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Real-time screen &amp; interaction data
                </li>
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Automatic PII masking
                </li>
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Encrypted transmission (TLS 1.3)
                </li>
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Zero capture of passwords or payment data
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn ${
              activeTabIndex === 2 ? "block" : "hidden"
            }`}
          >
            <div className="step-visual bg-base-100 rounded-xl p-10 text-center border-2 border-base-300 shadow-sm">
              <div className="icon text-7xl mb-5">🧠</div>
              <h4 className="text-primary text-center text-xl font-semibold">
                Multi-Modal AI
              </h4>
            </div>
            <div className="step-details flex flex-col gap-4">
              <h3 className="text-3xl text-primary mb-3">Analyze</h3>
              <p className="text-base-content/80 text-lg leading-relaxed">
                Our AI engines process data instantly using advanced NLP,
                Vision-Language Models, and anomaly detection to extract
                actionable insights.
              </p>
              <ul className="list-none p-0">
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  NLP for intent &amp; sentiment analysis
                </li>
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  VLM for image &amp; document processing
                </li>
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Real-time anomaly detection
                </li>
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Self-learning from outcomes
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeIn ${
              activeTabIndex === 3 ? "block" : "hidden"
            }`}
          >
            <div className="step-visual bg-base-100 rounded-xl p-10 text-center border-2 border-base-300 shadow-sm">
              <div className="icon text-7xl mb-5">⚡</div>
              <h4 className="text-primary text-center text-xl font-semibold">
                Instant Action
              </h4>
            </div>
            <div className="step-details flex flex-col gap-4">
              <h3 className="text-3xl text-primary mb-3">Act</h3>
              <p className="text-base-content/80 text-lg leading-relaxed">
                Surface AI insights instantly via on-screen recommendations,
                chatbot assistance, or automated alerts. Agents get guidance
                immediately.
              </p>
              <ul className="list-none p-0">
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Real-time on-screen guidance
                </li>
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Internal GPT assistant
                </li>
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Automated compliance alerts
                </li>
                <li className="relative pl-7 text-base-content/80 text-lg before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold before:text-xl">
                  Dashboard analytics
                </li>
              </ul>
            </div>
          </div>

          {/* Process Timeline */}
          <div className="bg-base-100 rounded-xl p-10 mt-12 border-2 border-base-300 shadow-sm">
            <h3 className="text-2xl text-primary text-center mb-8">
              The Complete Process (In Milliseconds)
            </h3>
            <div className="process-timeline flex justify-between items-start gap-5 flex-wrap relative">
              <div className="process-step flex-1 min-w-[150px] text-center relative z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary border-4 border-base-100 rounded-full mx-auto mb-4 font-bold text-white flex items-center justify-center text-sm">
                  1-5
                </div>
                <div className="font-semibold text-primary text-sm mb-1">
                  Trigger
                </div>
                <div className="text-base-content/60 text-xs mt-1">Capture</div>
              </div>
              <div className="process-step flex-1 min-w-[150px] text-center relative z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary border-4 border-base-100 rounded-full mx-auto mb-4 font-bold text-white flex items-center justify-center text-sm">
                  6-50
                </div>
                <div className="font-semibold text-primary text-sm mb-1">
                  Transmit
                </div>
                <div className="text-base-content/60 text-xs mt-1">Encrypt &amp; Send</div>
              </div>
              <div className="process-step flex-1 min-w-[150px] text-center relative z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary border-4 border-base-100 rounded-full mx-auto mb-4 font-bold text-white flex items-center justify-center text-sm">
                  50-500
                </div>
                <div className="font-semibold text-primary text-sm mb-1">
                  Analyze
                </div>
                <div className="text-base-content/60 text-xs mt-1">AI Processing</div>
              </div>
              <div className="process-step flex-1 min-w-[150px] text-center relative z-10">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary border-4 border-base-100 rounded-full mx-auto mb-4 font-bold text-white flex items-center justify-center text-sm">
                  500-2K
                </div>
                <div className="font-semibold text-primary text-sm mb-1">
                  Surface
                </div>
                <div className="text-base-content/60 text-xs mt-1">Show Results</div>
              </div>
            </div>
            <p className="text-center text-base-content/70 mt-8 text-lg">
              <strong>All in Real-Time</strong> |{" "}
              <strong>GDPR &amp; HIPAA Compliant</strong> |{" "}
              <strong>Zero Sensitive Data Storage</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Screen Intelligence Showcase */}
      <section className="bg-base-100 py-20 px-5" id="screen-intelligence">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Screen Intelligence Engine in Action
          </h2>
          <p className="text-lg text-base-content/70 text-center mb-16 max-w-2xl mx-auto">
            See how AIQuinox understands your workflow and delivers intelligent
            guidance in real-time
          </p>

          {/* Banking Example */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <div className="screen-visual bg-base-100 rounded-xl p-5 shadow-2xl border-2 border-base-300 relative overflow-hidden">
                {/* Before pseudo-element for top bar is in CustomStyles */}
                <div className="grid grid-cols-[200px_1fr] gap-0 h-[400px] rounded-md overflow-hidden bg-base-200">
                  <div className="bg-gradient-to-br from-primary to-secondary p-5 text-white">
                    <div className="p-3 mb-2 bg-white/10 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-white/20 active">
                      👤 Customer
                    </div>
                    <div className="p-3 mb-2 bg-white/10 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-white/20">
                      📋 Tickets
                    </div>
                    <div className="p-3 mb-2 bg-white/10 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-white/20">
                      🛡️ Fraud Check
                    </div>
                    <div className="p-3 mb-2 bg-white/10 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-white/20">
                      📊 History
                    </div>
                    <div className="p-3 mb-2 bg-white/10 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-white/20">
                      ✅ Actions
                    </div>
                  </div>
                  <div className="p-5 bg-base-100 flex flex-col gap-4">
                    <div className="bg-base-200 p-3 rounded-md font-semibold text-primary text-base">
                      Customer: John Smith #12456
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-3 rounded-md border-l-4 border-secondary">
                        <div className="font-semibold text-primary text-xs">
                          Account Status
                        </div>
                        <div className="text-secondary font-bold mt-1">
                          ACTIVE
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-3 rounded-md border-l-4 border-secondary">
                        <div className="font-semibold text-primary text-xs">
                          KYC Status
                        </div>
                        <div className="text-secondary font-bold mt-1">
                          VERIFIED
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-3 rounded-md border-l-4 border-secondary">
                        <div className="font-semibold text-primary text-xs">
                          Risk Score
                        </div>
                        <div className="text-secondary font-bold mt-1">
                          LOW
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-3 rounded-md border-l-4 border-secondary">
                        <div className="font-semibold text-primary text-xs">
                          Last Activity
                        </div>
                        <div className="text-secondary font-bold mt-1">
                          2 hrs ago
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-success/15 to-warning/15 border-l-4 border-success p-3 rounded-md text-sm text-[#1a5e20]">
                      🤖 AI Suggestion: Customer has 3 declined transactions in
                      24hrs. Recommend verify with customer before processing new
                      request.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <h3 className="text-3xl text-primary mb-3">
                🏦 Banking Support: Unified Context
              </h3>
              <p className="text-base-content/80 text-lg leading-relaxed">
                Agent opens any banking system. AIQuinox Screen Intelligence
                instantly:
              </p>
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border-l-4 border-secondary p-5 rounded-lg mt-4">
                <ul className="list-none p-0">
                  <li className="relative pl-7 text-base-content/90 text-lg py-2 before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold">
                    Maps customer data from 5+ backend systems
                  </li>
                  <li className="relative pl-7 text-base-content/90 text-lg py-2 before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold">
                    Detects real-time transaction anomalies
                  </li>
                  <li className="relative pl-7 text-base-content/90 text-lg py-2 before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold">
                    Flags compliance requirements
                  </li>
                  <li className="relative pl-7 text-base-content/90 text-lg py-2 before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold">
                    Suggests next best action based on history
                  </li>
                  <li className="relative pl-7 text-base-content/90 text-lg py-2 before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold">
                    Provides KYC verification status instantly
                  </li>
                  <li className="relative pl-7 text-base-content/90 text-lg py-2 before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold">
                    Alerts on fraud risk in milliseconds
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Healthcare Example */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-16">
            <div className="flex flex-col gap-5 order-2 lg:order-1">
              <h3 className="text-3xl text-primary mb-3">
                🏥 Healthcare: Clinical Coding Acceleration
              </h3>
              <p className="text-base-content/80 text-lg leading-relaxed">
                Coder opens EHR. AIQuinox Screen Intelligence instantly:
              </p>
              <div className="bg-gradient-to-br from-secondary/10 to-primary/10 border-l-4 border-secondary p-5 rounded-lg mt-4">
                <ul className="list-none p-0">
                  <li className="relative pl-7 text-base-content/90 text-lg py-2 before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold">
                    Extracts diagnoses &amp; procedures via VLM
                  </li>
                  <li className="relative pl-7 text-base-content/90 text-lg py-2 before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold">
                    Suggests correct ICD-10/CPT codes in real-time
                  </li>
                  <li className="relative pl-7 text-base-content/90 text-lg py-2 before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold">
                    Flags missing comorbidities or modifiers
                  </li>
                  <li className="relative pl-7 text-base-content/90 text-lg py-2 before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold">
                    Maintains updated coding compliance rules
                  </li>
                  <li className="relative pl-7 text-base-content/90 text-lg py-2 before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold">
                    Provides reasoning for every suggestion
                  </li>
                  <li className="relative pl-7 text-base-content/90 text-lg py-2 before:content-['→'] before:absolute before:left-0 before:text-secondary before:font-bold">
                    Creates audit trail automatically
                  </li>
                </ul>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="screen-visual bg-base-100 rounded-xl p-5 shadow-2xl border-2 border-base-300 relative overflow-hidden">
                {/* Before pseudo-element for top bar is in CustomStyles */}
                <div className="grid grid-cols-[200px_1fr] gap-0 h-[400px] rounded-md overflow-hidden bg-base-200">
                  <div className="bg-gradient-to-br from-primary to-secondary p-5 text-white">
                    <div className="p-3 mb-2 bg-white/10 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-white/20 active">
                      📋 Chart Review
                    </div>
                    <div className="p-3 mb-2 bg-white/10 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-white/20">
                      💾 Save Draft
                    </div>
                    <div className="p-3 mb-2 bg-white/10 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-white/20">
                      ✅ Submit
                    </div>
                    <div className="p-3 mb-2 bg-white/10 rounded-md text-sm cursor-pointer transition-all duration-300 hover:bg-white/20">
                      📞 Clarify
                    </div>
                  </div>
                  <div className="p-5 bg-base-100 flex flex-col gap-4">
                    <div className="bg-base-200 p-3 rounded-md font-semibold text-primary text-base">
                      Patient: Jane Doe | MRN 4892
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-3 rounded-md border-l-4 border-secondary">
                        <div className="font-semibold text-primary text-xs">
                          Primary Diagnosis
                        </div>
                        <div className="text-secondary font-bold mt-1">
                          Pneumonia (ICD-10: J18.9)
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-3 rounded-md border-l-4 border-secondary">
                        <div className="font-semibold text-primary text-xs">
                          Comorbidities
                        </div>
                        <div className="text-secondary font-bold mt-1">
                          Diabetes, HTN
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-3 rounded-md border-l-4 border-secondary">
                        <div className="font-semibold text-primary text-xs">
                          Severity
                        </div>
                        <div className="text-secondary font-bold mt-1">
                          MODERATE
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-secondary/10 to-primary/10 p-3 rounded-md border-l-4 border-secondary">
                        <div className="font-semibold text-primary text-xs">
                          Accuracy Score
                        </div>
                        <div className="text-secondary font-bold mt-1">
                          97%
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-success/15 to-warning/15 border-l-4 border-success p-3 rounded-md text-sm text-[#1a5e20]">
                      ✅ Code confirmed: J18.9 (Pneumonia), E11.9 (Diabetes), I10
                      (HTN). Recommend severity modifier based on treatment
                      intensity.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AIQuinox is Different */}
      <section className="bg-base-200 py-20 px-5" id="uniqueness">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Why AIQuinox is Fundamentally Different
          </h2>
          <p className="text-lg text-base-content/70 text-center mb-16 max-w-2xl mx-auto">
            No one else is doing real-time screen intelligence + AI the way we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <div className="bg-base-100 border-2 border-base-300 rounded-xl p-8 text-center transition-all duration-300 hover:border-secondary hover:shadow-xl hover:-translate-y-1 relative">
              <h3 className="text-xl font-semibold text-primary mb-4">
                ❌ Traditional BI Tools
              </h3>
              <p className="text-base-content/80 text-base leading-relaxed">
                Report-based, historical data, post-analysis
              </p>
              <ul className="list-none mt-5 p-0">
                <li className="py-2 text-base-content/90 text-base before:content-['✓'] before:text-success before:font-bold before:mr-2">
                  No real-time guidance
                </li>
                <li className="py-2 text-base-content/90 text-base before:content-['✓'] before:text-success before:font-bold before:mr-2">
                  Requires leaving your workflow
                </li>
                <li className="py-2 text-base-content/90 text-base before:content-['✓'] before:text-success before:font-bold before:mr-2">
                  Slow decision-making
                </li>
                <li className="py-2 text-base-content/90 text-base before:content-['✓'] before:text-success before:font-bold before:mr-2">
                  No AI assistance
                </li>
              </ul>
            </div>

            <div className="bg-base-100 border-2 border-base-300 rounded-xl p-8 text-center transition-all duration-300 hover:border-secondary hover:shadow-xl hover:-translate-y-1 relative">
              <h3 className="text-xl font-semibold text-primary mb-4">
                ❌ Generic AI Platforms
              </h3>
              <p className="text-base-content/80 text-base leading-relaxed">
                Generic recommendations, no context awareness
              </p>
              <ul className="list-none mt-5 p-0">
                <li className="py-2 text-base-content/90 text-base before:content-['✓'] before:text-success before:font-bold before:mr-2">
                  No screen understanding
                </li>
                <li className="py-2 text-base-content/90 text-base before:content-['✓'] before:text-success before:font-bold before:mr-2">
                  Miss business context
                </li>
                <li className="py-2 text-base-content/90 text-base before:content-['✓'] before:text-success before:font-bold before:mr-2">
                  Generic suggestions
                </li>
                <li className="py-2 text-base-content/90 text-base before:content-['✓'] before:text-success before:font-bold before:mr-2">
                  Manual data gathering
                </li>
              </ul>
            </div>

            <div className="bg-base-100 border-2 border-base-300 rounded-xl p-8 text-center transition-all duration-300 hover:border-secondary hover:shadow-xl hover:-translate-y-1 relative">
              <div className="absolute -top-4 right-5 bg-secondary text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md">
                🌟 ONLY AIQUINOX
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                ✓ AIQuinox Screen Intelligence
              </h3>
              <p className="text-base-content/80 text-base leading-relaxed">
                Real-time context-aware guidance in your workflow
              </p>
              <ul className="list-none mt-5 p-0">
                <li className="py-2 text-base-content/90 text-base before:content-['✓'] before:text-success before:font-bold before:mr-2">
                  Sees exactly what you see
                </li>
                <li className="py-2 text-base-content/90 text-base before:content-['✓'] before:text-success before:font-bold before:mr-2">
                  Understands your context
                </li>
                <li className="py-2 text-base-content/90 text-base before:content-['✓'] before:text-success before:font-bold before:mr-2">
                  Gives instant suggestions
                </li>
                <li className="py-2 text-base-content/90 text-base before:content-['✓'] before:text-success before:font-bold before:mr-2">
                  In-app AI assistant
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-base-100 py-20 px-5" id="use-cases">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            What AIQuinox Can Do For Your Industry
          </h2>
          <p className="text-lg text-base-content/70 text-center mb-16 max-w-2xl mx-auto">
            Real challenges solved by Screen Intelligence in different industries
          </p>

          {/* Banking Use Case */}
          <div className="bg-base-100 rounded-xl p-10 mb-8 shadow-md transition-all duration-300 border-l-8 border-secondary hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 pb-6 border-b-2 border-base-200">
              <div className="text-center">
                <label className="text-sm text-base-content/70 font-semibold uppercase">
                  Industry
                </label>
                <div className="block text-2xl text-primary font-bold mt-2">
                  🏦 Banking
                </div>
              </div>
              <div className="text-center">
                <label className="text-sm text-base-content/70 font-semibold uppercase">
                  Department
                </label>
                <div className="block text-2xl text-primary font-bold mt-2">
                  Support &amp; Fraud
                </div>
              </div>
              <div className="text-center">
                <label className="text-sm text-base-content/70 font-semibold uppercase">
                  Scale
                </label>
                <div className="block text-2xl text-primary font-bold mt-2">
                  500+ Agents
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-base-200 p-6 rounded-lg border-l-4 border-error">
                <h4 className="text-xl text-error mb-4 flex items-center gap-2">
                  ⚠️ Common Challenges
                </h4>
                <ul className="list-none p-0">
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    System fragmentation (5+ tools)
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    45 min context gathering time
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    2-3% fraud slipping through
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    65% first-contact resolution
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    No real-time compliance monitoring
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    Scaling requires proportional hiring
                  </li>
                </ul>
              </div>

              <div className="bg-base-200 p-6 rounded-lg border-l-4 border-success">
                <h4 className="text-xl text-success mb-4 flex items-center gap-2">
                  ✓ What Screen Intelligence Can Do
                </h4>
                <ul className="list-none p-0">
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Unified real-time context dashboard
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Real-time anomaly &amp; fraud detection
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Internal AI assistant for policy answers
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Auto-document verification (VLM)
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Real-time compliance enforcement
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    30-50% volume scaling without hiring
                  </li>
                </ul>
              </div>

              <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-success/10 to-warning/10 border-2 border-success p-5 rounded-lg mt-5">
                <strong className="text-success">📊 Potential Impact:</strong>{" "}
                40-50% resolution time savings | +20% first-contact improvement |
                95%+ fraud detection capability
              </div>
            </div>
          </div>

          {/* Healthcare Use Case */}
          <div className="bg-base-100 rounded-xl p-10 mb-8 shadow-md transition-all duration-300 border-l-8 border-secondary hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 pb-6 border-b-2 border-base-200">
              <div className="text-center">
                <label className="text-sm text-base-content/70 font-semibold uppercase">
                  Industry
                </label>
                <div className="block text-2xl text-primary font-bold mt-2">
                  🏥 Healthcare
                </div>
              </div>
              <div className="text-center">
                <label className="text-sm text-base-content/70 font-semibold uppercase">
                  Function
                </label>
                <div className="block text-2xl text-primary font-bold mt-2">
                  Clinical Coding
                </div>
              </div>
              <div className="text-center">
                <label className="text-sm text-base-content/70 font-semibold uppercase">
                  Scale
                </label>
                <div className="block text-2xl text-primary font-bold mt-2">
                  100+ Coders
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-base-200 p-6 rounded-lg border-l-4 border-error">
                <h4 className="text-xl text-error mb-4 flex items-center gap-2">
                  ⚠️ Common Challenges
                </h4>
                <ul className="list-none p-0">
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    15-20 min per chart (manual review)
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    8-12% coding error rates
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    Outdated SOP documentation
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    30%+ staff turnover (burnout)
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    2x patient volume, no hiring capacity
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    No audit trail for compliance
                  </li>
                </ul>
              </div>

              <div className="bg-base-200 p-6 rounded-lg border-l-4 border-success">
                <h4 className="text-xl text-success mb-4 flex items-center gap-2">
                  ✓ What Screen Intelligence Can Do
                </h4>
                <ul className="list-none p-0">
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Auto-extract diagnoses &amp; procedures (VLM)
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Intelligent ICD-10/CPT code suggestions
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Real-time accuracy &amp; compliance checks
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Updated coding library via AI assistant
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Automatic decision audit trail
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Continuous improvement from audits
                  </li>
                </ul>
              </div>

              <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-success/10 to-warning/10 border-2 border-success p-5 rounded-lg mt-5">
                <strong className="text-success">📊 Potential Impact:</strong>{" "}
                60%+ speed improvement | 97-98% accuracy potential | 2-3x
                volume capacity
              </div>
            </div>
          </div>

          {/* MSP Use Case */}
          <div className="bg-base-100 rounded-xl p-10 mb-8 shadow-md transition-all duration-300 border-l-8 border-secondary hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 pb-6 border-b-2 border-base-200">
              <div className="text-center">
                <label className="text-sm text-base-content/70 font-semibold uppercase">
                  Industry
                </label>
                <div className="block text-2xl text-primary font-bold mt-2">
                  🔧 MSP/SaaS
                </div>
              </div>
              <div className="text-center">
                <label className="text-sm text-base-content/70 font-semibold uppercase">
                  Challenge
                </label>
                <div className="block text-2xl text-primary font-bold mt-2">
                  Support Escalations
                </div>
              </div>
              <div className="text-center">
                <label className="text-sm text-base-content/70 font-semibold uppercase">
                  Scale
                </label>
                <div className="block text-2xl text-primary font-bold mt-2">
                  200+ Support Reps
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-base-200 p-6 rounded-lg border-l-4 border-error">
                <h4 className="text-xl text-error mb-4 flex items-center gap-2">
                  ⚠️ Common Challenges
                </h4>
                <ul className="list-none p-0">
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    40-60% escalation rate
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    2-3 day escalation resolution
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    Knowledge bottleneck (senior only)
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    SLA violations (8%+ miss)
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    6+ months new hire ramp
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    15% customer churn
                  </li>
                </ul>
              </div>

              <div className="bg-base-200 p-6 rounded-lg border-l-4 border-success">
                <h4 className="text-xl text-success mb-4 flex items-center gap-2">
                  ✓ What Screen Intelligence Can Do
                </h4>
                <ul className="list-none p-0">
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Customer context at a glance
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Intelligent first-level resolution
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Smart escalation routing
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Real-time SLA risk alerts
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Knowledge democratization
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Rapid onboarding (2 months)
                  </li>
                </ul>
              </div>

              <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-success/10 to-warning/10 border-2 border-success p-5 rounded-lg mt-5">
                <strong className="text-success">📊 Potential Impact:</strong>{" "}
                -50% escalations | -85% escalation time | +6% SLA compliance |
                +20% CSAT
              </div>
            </div>
          </div>

          {/* Enterprise Use Case */}
          <div className="bg-base-100 rounded-xl p-10 shadow-md transition-all duration-300 border-l-8 border-secondary hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-6 pb-6 border-b-2 border-base-200">
              <div className="text-center">
                <label className="text-sm text-base-content/70 font-semibold uppercase">
                  Industry
                </label>
                <div className="block text-2xl text-primary font-bold mt-2">
                  🏢 Enterprise
                </div>
              </div>
              <div className="text-center">
                <label className="text-sm text-base-content/70 font-semibold uppercase">
                  Function
                </label>
                <div className="block text-2xl text-primary font-bold mt-2">
                  HR/Finance/Ops
                </div>
              </div>
              <div className="text-center">
                <label className="text-sm text-base-content/70 font-semibold uppercase">
                  Scale
                </label>
                <div className="block text-2xl text-primary font-bold mt-2">
                  Global HQ
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-base-200 p-6 rounded-lg border-l-4 border-error">
                <h4 className="text-xl text-error mb-4 flex items-center gap-2">
                  ⚠️ Common Challenges
                </h4>
                <ul className="list-none p-0">
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    Fragmented data (4+ systems)
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    2-5 day approval cycles
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    Policy violations undetected
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    Manual data entry errors
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    50-60% HR time on admin work
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['⚠️'] before:absolute before:left-0">
                    Poor new hire experience
                  </li>
                </ul>
              </div>

              <div className="bg-base-200 p-6 rounded-lg border-l-4 border-success">
                <h4 className="text-xl text-success mb-4 flex items-center gap-2">
                  ✓ What Screen Intelligence Can Do
                </h4>
                <ul className="list-none p-0">
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Unified process dashboard
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Intelligent approval routing
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Auto-extract from forms (VLM)
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Real-time compliance monitoring
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Predictive process alerts
                  </li>
                  <li className="relative pl-6 text-base-content/90 text-base py-1 before:content-['✓'] before:text-success before:font-bold before:absolute before:left-0">
                    Employee self-service portal
                  </li>
                </ul>
              </div>

              <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-success/10 to-warning/10 border-2 border-success p-5 rounded-lg mt-5">
                <strong className="text-success">📊 Potential Impact:</strong>{" "}
                70% faster onboarding | 95% faster approvals | 100% compliance
                potential | -50% admin time
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-base-200 py-20 px-5">
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold text-primary text-center mb-12">
            Why Screen Intelligence Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-md">
              <span className="text-5xl font-bold block mb-3">Real-Time</span>
              <span className="text-lg opacity-95">Context Delivery</span>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-md">
              <span className="text-5xl font-bold block mb-3">Zero-Code</span>
              <span className="text-lg opacity-95">Deployment</span>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-md">
              <span className="text-5xl font-bold block mb-3">40-70%</span>
              <span className="text-lg opacity-95">Efficiency Gains</span>
            </div>
            <div className="bg-gradient-to-br from-primary to-secondary text-white p-8 rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-md">
              <span className="text-5xl font-bold block mb-3">95%+</span>
              <span className="text-lg opacity-95">Accuracy</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="bg-gradient-to-br from-primary to-secondary text-white py-20 px-5 text-center"
        id="contact"
      >
        <div className="max-w-screen-xl mx-auto">
          <h2 className="text-4xl font-bold mb-5">
            Experience Screen Intelligence Firsthand
          </h2>
          <p className="text-lg mb-10 opacity-95 max-w-2xl mx-auto">
            AIQuinox Screen Intelligence Engine is unlike anything else. See how
            it transforms your workflow in real-time.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="px-8 py-4 rounded-md bg-white text-primary font-semibold text-lg shadow-lg hover:bg-base-200 transition-all duration-300">
              🎬 Watch Full Demo (5 min)
            </button>
            <button className="px-8 py-4 rounded-md bg-white text-primary font-semibold text-lg shadow-lg hover:bg-base-200 transition-all duration-300">
              📊 Custom ROI Analysis
            </button>
            <button className="px-8 py-4 rounded-md bg-white text-primary font-semibold text-lg shadow-lg hover:bg-base-200 transition-all duration-300">
              🆓 Start Free Trial
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default AiquinoxPage;