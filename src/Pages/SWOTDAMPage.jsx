// src/pages/SWOTDAMPage.jsx
import React, { useState, useEffect, useRef } from "react"; // Added useEffect, useRef
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../layouts/Footer"; // Assuming Footer path is correct
import {
  Search,
  Shield,
  FileText,
  CheckCircle2,
  Code,
  MessageSquare,
  ArrowRight,
  Menu, // Added Menu for mobile nav
  X, // Added X for mobile nav close
} from "lucide-react";

// ==================================================================
// ========================= DATA DEFINITIONS =======================
// ==================================================================

const nextSteps = [
  {
    title: "Option 1",
    heading: "FREE Assessment",
    details: [
      {
        label: "What Happens:",
        value:
          "Our security experts analyze your current posture, identify risks, and show how SWOT DAM 3.0 solves your problems.",
      },
      { label: "Time:", value: "30 minutes" },
      { label: "Cost:", value: "Free" },
    ],
    cta: "Schedule Your Free Assessment",
  },
  {
    title: "Option 2",
    heading: "FREE POC",
    details: [
      {
        label: "What Happens:",
        value:
          "Deploy SWOT DAM 3.0 on 2-3 critical databases. See threats detected, queries run, reports generated with your own data.",
      },
      { label: "Time:", value: "14 days" },
      { label: "Cost:", value: "Free" },
    ],
    cta: "Start Your Free POC",
  },
  {
    title: "Option 3",
    heading: "Full Deployment",
    details: [
      {
        label: "What Happens:",
        value:
          "Expert implementation team. Phased rollout. Live in 2-4 weeks. Dedicated success manager.",
      },
      { label: "Time:", value: "2-4 weeks" },
      { label: "Cost:", value: "Contact Sales" },
    ],
    cta: "Contact Sales Team",
  },
];

const aboutData = {
  mission:
    "Eliminate database breaches, automate compliance, democratize data access, and empower organizations to leverage their data with complete confidence.",
  developedBy:
    "Cybersecurity experts with 200+ years combined experience in privileged access management and insider threat prevention",
  usedBy: [
    "Fortune 500 financial institutions",
    "Healthcare systems protecting millions of patient records",
    "E-commerce platforms serving millions of customers",
    "Government agencies managing classified databases",
    "Technology companies protecting intellectual property",
  ],
  backedBy: [
    "Advanced AI and machine learning research",
    "Industry partnerships (AWS, Azure, Google Cloud)",
    "Compliance certifications (SOC 2, ISO 27001)",
    "99.99% uptime SLA",
  ],
};

const customerStories = [
  {
    title: "Financial Services - $4.5B Asset Manager",
    challenge:
      "Need SOX compliance for DBA auditing while maintaining performance on critical trading systems.",
    solution:
      "Deployed SWOT DAM 3.0 across 400+ database instances across three data centers.",
    results: [
      "Zero performance impact on critical trading systems",
      "Audit findings: 23 → 0 in first year",
      "DBA activity fully tamper-proof and auditable",
      "Audit prep time: 6 weeks → 3 days",
      "ROI achieved in 4 months",
    ],
    quote:
      "SWOT DAM gave us the visibility we needed for SOX compliance without impacting trading performance. The compliance team went from dreading audits to having everything ready in hours.",
    author: "VP of Compliance",
  },
  {
    title: "Healthcare - 500-Bed Hospital Network",
    challenge:
      "HIPAA audit found insufficient PHI access monitoring. Facing $500K+ in fines if not resolved within 6 months.",
    solution:
      "Deployed SWOT DAM 3.0 to monitor all databases containing patient data.",
    results: [
      "HIPAA audit: 0 findings (vs. 4+ previously)",
      "Insider threat detected and prevented (employee accessing records outside scope)",
      "PHI access fully automated and auditable",
      "Compliance team saves 2 hours/day on manual reporting",
      "Breach risk reduced by 95%; fines avoided",
    ],
    quote:
      "We went from audit violations to zero findings. SWOT DAM's automatic PHI detection gave us complete HIPAA compliance confidence.",
    author: "Chief Compliance Officer",
  },
  {
    title: "E-Commerce - $300M Revenue Company",
    challenge:
      "Previous database breach exposed customer payment data. Need to prevent recurrence and restore market confidence.",
    solution:
      "Deployed SWOT DAM 3.0 for real-time threat detection and insider threat prevention.",
    results: [
      "Zero insider threats detected and prevented before damage",
      "Compromised service account caught within 2 minutes",
      "No additional breaches in 2+ years",
      "Security incident response time: 6 hours → 45 minutes",
      "Customer churn eliminated; brand trust restored",
    ],
    quote:
      "SWOT DAM's AI caught a compromised service account in minutes. That early detection prevented what could have been another catastrophic breach.",
    author: "Chief Security Officer",
  },
];

const useCases = [
  {
    title: "Shadow Data Discovery",
    desc: "Compliance teams spend weeks searching for sensitive data → SWOT DAM 3.0 discovers all PII, PHI, financial data in seconds → Unauthorized access patterns prevented before damage",
  },
  {
    title: "Real-Time Fraud Detection",
    desc: "Fraud investigators discover fraud days after it occurs → SWOT DAM 3.0 identifies suspicious patterns in real-time → Fraud prevented before money moves",
  },
  {
    title: "Insider Threat Prevention",
    desc: "Insider threats detected after data is stolen (90+ days) → SWOT DAM 3.0 detects unusual patterns within days → Insider threats prevented before exfiltration",
  },
  {
    title: "DBA & Privileged Access Monitoring",
    desc: "DBAs can modify their own logs → SWOT DAM 3.0 monitors independently with tamper-proof trails → SOX, HIPAA, PCI DSS compliance proven",
  },
];

const realWorldImpacts = [
  {
    title: "Sales Intelligence & Churn Prevention",
    before: "Sales manager waits 3+ days while analyst writes queries to identify at-risk accounts",
    after: "Sales manager asks 'Which accounts are at churn risk and why?' → AI returns answer in 30 minutes with risk scores and mitigation strategies",
    impact: "Sales team prevents $1M+ in churn; identifies expansion opportunities",
  },
  {
    title: "Finance Month-End Close",
    before: "Finance team spends 10 days pulling, validating, consolidating data from multiple systems",
    after: "Finance asks 'Generate our month-end dashboard' → AI auto-pulls data, validates accuracy, consolidates, flags variances → Reports ready in 1 day",
    impact: "Finance saves 20+ hours/month; decisions made 9 days faster; near-zero errors",
  },
  {
    title: "Compliance Data Discovery",
    before: "Compliance team spends 2-3 weeks searching for all instances of PII, PHI, credit card data across dozens of databases",
    after: "Compliance asks 'Find all customer PII and PHI' → AI scans all databases instantly, identifies all sensitive data locations, shows access patterns → Complete inventory in 2 hours",
    impact: "Shadow data discovered; unauthorized access prevented; compliance audit prep automated",
  },
  {
    title: "Fraud Detection & Prevention",
    before: "Fraud analysts discover fraudulent patterns days or weeks after transactions occur",
    after: "Fraud team asks 'Show unusual transaction patterns in last 24 hours' → AI identifies impossible geographic patterns, new beneficiary accounts, collusion indicators → Real-time fraud alerts",
    impact: "Fraud prevented before money moves; organized fraud rings detected",
  },
  {
    title: "Supply Chain Optimization",
    before: "Operations team lacks visibility into supplier performance—takes 6+ weeks to manually analyze data",
    after: "Ops director asks 'Which suppliers have quality issues and what's the cost impact?' → AI correlates supplier, quality, shipment, and cost data → Complete analysis in 4 hours",
    impact: "$2M+ in annual cost savings identified; supplier optimization plan created",
  },
  {
    title: "Customer Success Account Health",
    before: "CS team manually tracks usage, tickets, and billing across spreadsheets—incomplete picture",
    after: "VP Success asks 'Score all accounts for health and growth potential' → AI correlates usage, support tickets, billing, feedback → All accounts scored with risk/opportunity",
    impact: "Proactive upsell to 25 high-growth accounts; churn prevention for 15 at-risk accounts",
  },
  {
    title: "HR Workforce Analytics",
    before: "HR data scattered across systems—analysis takes weeks and multiple analysts",
    after: "HR director asks 'Which departments have turnover issues and at-risk employees?' → AI correlates employee, payroll, performance, and retention data → Strategic HR dashboard",
    impact: "High-turnover departments identified; at-risk employees flagged; targeted retention strategies deployed",
  },
  {
    title: "Insider Threat Prevention",
    before: "Insider threats detected after data is stolen or deleted (90+ days)",
    after: "Security asks 'Flag unusual data access patterns' → AI identifies employees accessing data outside job scope, bulk downloads before resignations, credential sharing → Insider threats caught within days",
    impact: "Insider threats prevented before exfiltration; data loss prevented",
  },
];

// ==================================================================
// ======================= PAGE COMPONENTS ==========================
// ==================================================================

// Custom CSS
const CustomStyles = () => (
  <style jsx global>{`
    body::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background-image: radial-gradient(
        hsl(var(--bc) / 0.1) 1px,
        transparent 0
      );
      background-size: 20px 20px;
      animation: pan-background 40s linear infinite;
    }
    @keyframes pan-background {
      0% {
        background-position: 0% 0%;
      }
      100% {
        background-position: 100% 100%;
      }
    }
    body::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -2;
      background: radial-gradient(
          circle at 10% 80%,
          hsl(var(--p) / 0.1),
          transparent 40%
        ),
        radial-gradient(
          circle at 90% 20%,
          hsl(200, 80%, 50%, 0.1),
          transparent 40%
        );
      animation: move-glow 25s infinite alternate ease-in-out;
    }
    @keyframes move-glow {
      from {
        transform: scale(1) translate(0, 0);
      }
      to {
        transform: scale(1.3) translate(-5vw, 5vh);
      }
    }
    .feature-card {
      position: relative;
      background-color: hsl(var(--b2) / 0.5);
      border: 1px solid hsl(var(--bc) / 0.1);
      backdrop-filter: blur(8px);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .feature-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 30px -10px hsl(var(--p) / 0.2);
      border-color: hsl(var(--p) / 0.3);
    }
    .animate-gradient-x {
      background-size: 200% 200%;
      animation: gradient-x 5s ease infinite;
    }
    @keyframes gradient-x {
      0%,
      100% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
    }
    .animate-pulse-slow {
      animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    .animate-pulse-slower {
      animation: pulse 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
  `}</style>
);

const BeforeComponent = () => (
  <div className="p-6 md:p-8 space-y-4">
    <h3 className="text-xl font-bold text-neutral-focus">
      The Old Way: Complex & Slow
    </h3>
    <p className="text-base-content/70">
      An analyst spends hours writing, testing, and running a complex query,
      creating a bottleneck for the business.
    </p>
    <div className="mockup-code text-sm bg-base-200 text-base-content/60 border border-base-content">
      <pre data-prefix=" ">
        <code>-- 3+ hours of work...</code>
      </pre>
      <pre data-prefix=" ">
        <code>SELECT c.customer_name, SUM(o.order_value)</code>
      </pre>
      <pre data-prefix=" ">
        <code>FROM customers c JOIN orders o ...</code>
      </pre>
      <pre data-prefix=" ">
        <code>WHERE c.signup_date {"<"} NOW() ...</code>
      </pre>
      <pre data-prefix=" ">
        <code>GROUP BY c.customer_name ...</code>
      </pre>
    </div>
  </div>
);

const AfterComponent = () => (
  <div className="p-6 md:p-8 space-y-6">
    <div>
      <h3 className="text-xl font-bold text-green-600">
        The SWOT Way: Simple & Instant
      </h3>
      <p className="text-base-content/70">
        Anyone on your team can ask a simple question and get an immediate,
        actionable answer.
      </p>
    </div>
    <div className="relative w-full">
      <input
        type="text"
        readOnly
        value="Show me our top 10 customers by lifetime value who haven't purchased in 90 days"
        className="input input-bordered w-full h-14 pl-6 pr-16 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
      />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="btn btn-circle bg-orange-400 hover:bg-orange-500 border-none absolute top-1/2 right-2 transform -translate-y-1/2"
      >
        <ArrowRight size={24} className="text-white" />
      </motion.button>
    </div>
    <div className="p-4 bg-green-500/10 rounded-xl text-green-700 flex items-center gap-4">
      <div className="bg-white p-1 rounded-full shadow-sm">
        <CheckCircle2 size={24} />
      </div>
      <div>
        <h5 className="font-bold">Result Generated in 12 Seconds</h5>
        <p className="text-sm text-green-600/80">
          Report delivered to your inbox with full customer breakdown and churn
          risk analysis.
        </p>
      </div>
    </div>
  </div>
);

const ROITable = () => (
  <div className="roi-section bg-blue-50/50 dark:bg-base-200/50 rounded-xl p-8 my-12 shadow-lg backdrop-blur-sm border border-base-content/10">
    <h3 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-6">
      The Numbers That Matter
    </h3>
    <div className="overflow-x-auto">
      <table className="roi-table w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="bg-blue-700 text-white px-4 py-3 font-semibold rounded-tl-lg">
              Benefit
            </th>
            <th className="bg-blue-700 text-white px-4 py-3 font-semibold rounded-tr-lg">
              Impact
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Table rows from original code */}
          <tr>
            <td className="px-4 py-3 font-bold border-b border-base-content/10">
              Breach Prevention
            </td>
            <td className="px-4 py-3 border-b border-base-content/10">
              $4.45M average breach prevented
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-bold border-b border-base-content/10">
              Compliance Fine Avoidance
            </td>
            <td className="px-4 py-3 border-b border-base-content/10">
              $250K+ regulatory violations avoided
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-bold border-b border-base-content/10">
              Analyst Time Savings
            </td>
            <td className="px-4 py-3 border-b border-base-content/10">
              500+ hours/year saved on reports
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-bold border-b border-base-content/10">
              Fraud Prevention
            </td>
            <td className="px-4 py-3 border-b border-base-content/10">
              $500K+ fraudulent transactions prevented
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-bold border-b border-base-content/10">
              Revenue Churn Prevention
            </td>
            <td className="px-4 py-3 border-b border-base-content/10">
              $1M+ customer retention
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-bold">Operational Optimization</td>
            <td className="px-4 py-3">$2M+ cost savings identified</td>
          </tr>
          <tr className="bg-blue-700/80 text-white font-bold">
            <td className="px-4 py-3 rounded-bl-lg">TOTAL ANNUAL BENEFIT</td>
            <td className="px-4 py-3 rounded-br-lg">$6.7M+</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const ComparisonTable = () => (
  <div className="comparison-section my-12">
    <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-6 text-center">
      SWOT DAM 3.0 vs. What You're Using Now
    </h3>
    <div className="overflow-x-auto">
      <table className="comparison-table w-full border-collapse text-left shadow-lg">
        {/* Table content from original code */}
        <thead>
          <tr>
            <th className="bg-blue-700 text-white px-4 py-3 font-semibold">
              What You Need
            </th>
            <th className="bg-blue-700 text-white px-4 py-3 font-semibold">
              What You Have Now
            </th>
            <th className="bg-blue-700 text-white px-4 py-3 font-semibold">
              SWOT DAM 3.0
            </th>
            <th className="bg-blue-700 text-white px-4 py-3 font-semibold">
              Difference
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3 font-bold">Threat Detection</td>
            <td className="px-4 py-3">Rule-based (misses new threats)</td>
            <td className="px-4 py-3">AI behavioral (catches everything)</td>
            <td className="px-4 py-3">AI learns your environment</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-bold">Insider Threats</td>
            <td className="px-4 py-3">Detected months later</td>
            <td className="px-4 py-3">Detected in days</td>
            <td className="px-4 py-3">90+ day improvement</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-bold">False Alerts</td>
            <td className="px-4 py-3">70-80% noise</td>
            <td className="px-4 py-3">&lt;20% noise</td>
            <td className="px-4 py-3">80% less alert fatigue</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-bold">DBA Monitoring</td>
            <td className="px-4 py-3">DBAs control their own logs</td>
            <td className="px-4 py-3">Independent, tamper-proof</td>
            <td className="px-4 py-3">Complete separation of duties</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-bold">Report Generation</td>
            <td className="px-4 py-3">Weeks of manual work</td>
            <td className="px-4 py-3">Minutes of automation</td>
            <td className="px-4 py-3">95% faster</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-bold">Data Discovery</td>
            <td className="px-4 py-3">Manual (SQL expertise needed)</td>
            <td className="px-4 py-3">AI-powered (natural language)</td>
            <td className="px-4 py-3">No IT bottleneck</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-bold">Performance Impact</td>
            <td className="px-4 py-3">5-15% slowdown</td>
            <td className="px-4 py-3">&lt;2% overhead</td>
            <td className="px-4 py-3">DBAs actually like it</td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-bold">Deployment</td>
            <td className="px-4 py-3">6-12 months</td>
            <td className="px-4 py-3">2-4 weeks</td>
            <td className="px-4 py-3">8x faster</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const CustomerStories = () => (
  <section className="my-20">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
      Customer Realtime Usecase
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {customerStories.map((story, idx) => (
        <motion.div
          key={story.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: idx * 0.1 }}
          className="bg-white dark:bg-base-200 rounded-2xl shadow-xl border-l-4 border-primary p-8 flex flex-col justify-between"
        >
          <div>
            <h4 className="text-xl font-bold text-primary mb-2">
              {story.title}
            </h4>
            <div className="mb-2">
              <span className="font-semibold text-blue-900 dark:text-blue-300">
                Challenge:
              </span>
              <p className="text-base-content/80 mb-2">{story.challenge}</p>
              <span className="font-semibold text-blue-900 dark:text-blue-300">
                Solution:
              </span>
              <p className="text-base-content/80 mb-2">{story.solution}</p>
              <span className="font-semibold text-blue-900 dark:text-blue-300">
                Results:
              </span>
              <ul className="list-disc ml-6 mb-2">
                {story.results.map((r, i) => (
                  <li key={i} className="text-base-content/80">
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </motion.div>
      ))}
    </div>
  </section>
);

const UseCases = () => (
  <section className="my-20">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-primary">
      Core Security & Compliance Use Cases
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {useCases.map((uc, idx) => (
        <motion.div
          key={uc.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: idx * 0.1 }}
          className="bg-blue-50 dark:bg-base-200 rounded-2xl shadow-lg border-l-4 border-primary p-8"
        >
          <h4 className="text-xl font-bold text-primary mb-2">{uc.title}</h4>
          <p className="text-base-content/80">{uc.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

const NextSteps = () => (
  <section className="my-20">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
      Your Next Steps
    </h2>
    <p className="text-center text-base-content/80 mb-10 text-lg">
      Three ways to get started with SWOT DAM 3.0:
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {nextSteps.map((step, idx) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: idx * 0.1 }}
          className="path-box bg-blue-50 dark:bg-base-200 rounded-2xl shadow-lg border-t-4 border-primary p-8 text-center flex flex-col"
        >
          <h4 className="text-lg font-bold text-primary mb-2">{step.title}</h4>
          <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-4">
            {step.heading}
          </h3>
          {step.details.map((d, i) => (
            <div
              key={i}
              className="metric bg-white dark:bg-base-300 rounded p-3 mb-2 text-sm"
            >
              <strong className="block text-blue-700 dark:text-blue-400 mb-1">
                {d.label}
              </strong>
              <span>{d.value}</span>
            </div>
          ))}
          <button className="btn btn-primary mt-auto">{step.cta}</button>
        </motion.div>
      ))}
    </div>
  </section>
);

const AboutSection = () => (
  <section className="my-20">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">
      About SWOT DAM
    </h2>
    <div className="w-full bg-blue-50 dark:bg-base-200 rounded-2xl shadow-lg px-4 md:px-10 xl:px-24 py-12 flex flex-col md:flex-row items-center md:items-stretch gap-10">
      <div className="flex flex-col items-center md:items-start justify-center flex-1 min-w-0">
        <FileText className="text-blue-400 mb-6 md:mb-8" size={72} />
        <div className="bg-primary/10 rounded-xl p-5 mb-6 w-full max-w-md">
          <h4 className="text-lg font-bold text-primary mb-1">Mission</h4>
          <p className="text-base-content/90 font-semibold">
            {aboutData.mission}
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center text-center md:text-left min-w-0">
        <p className="mb-6 text-base-content/90 text-lg font-medium">
          SWOT DAM is a next-generation, AI-powered database operations and
          security platform built for modern enterprises.
        </p>
        <ul className="space-y-4 text-base-content/80 w-full">
          <li className="flex items-center gap-2">
            <Shield className="text-primary" size={22} />{" "}
            <span>{aboutData.developedBy}</span>
          </li>
          <li className="flex items-center gap-2">
            <CheckCircle2 className="text-green-600" size={20} />{" "}
            <span>
              Trusted by: {aboutData.usedBy.slice(0, 3).join(", ")}, ...
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Search className="text-cyan-500" size={20} />{" "}
            <span>
              Backed by: {aboutData.backedBy.slice(0, 2).join(", ")}, ...
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="footer-cta bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center py-16 px-4 mt-20 rounded-t-2xl">
    <div className="max-w-3xl mx-auto">
      <h3 className="text-3xl font-bold mb-4">
        Ready to Transform Your Database Operations?
      </h3>
      <p className="mb-2">
        Database security is broken. Data operations are inefficient. Compliance
        is a nightmare.
      </p>
      <p className="mb-4 font-semibold">SWOT DAM 3.0 fixes all three.</p>
      <p className="mb-4">
        The result? Threats prevented. Compliance achieved. Teams empowered.
      </p>
      <p className="mb-8 font-semibold">
        Your next step is simple: Let's talk about your specific situation.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button className="btn btn-secondary bg-white/20 border-white text-white hover:bg-white/30">
          Schedule Your Free Assessment
        </button>
        <button className="btn btn-secondary bg-white/20 border-white text-white hover:bg-white/30">
          Start Your Free POC
        </button>
        <button className="btn btn-secondary bg-white/20 border-white text-white hover:bg-white/30">
          Contact Sales Team
        </button>
      </div>
    </div>
  </section>
);

// New component for SWOT DAM Capabilities
const SWOTDAMCapabilities = ({ fadeInUp }) => (
  <section className="my-20">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
      The SWOT DAM 3.0 Difference
    </h2>
    <p className="text-center text-base-content/70 mb-12 max-w-3xl mx-auto">
      SWOT DAM 3.0 isn't just a monitoring tool—it's a complete database
      operations platform combining three breakthrough capabilities:
    </p>

    {/* Capability 1 */}
    <motion.div
      variants={fadeInUp}
      className="capability-card bg-blue-50 dark:bg-base-200 rounded-2xl shadow-lg p-8 mb-10 border-l-4 border-primary"
    >
      <h3 className="text-2xl font-bold text-primary mb-4">
        Capability 1: Advanced AI-Powered Threat Detection
      </h3>
      <p className="mb-4 text-base-content/80">
        <strong className="text-blue-700 dark:text-blue-300">
          How It Works:
        </strong>{" "}
        Our AI learns what "normal" database activity looks like in YOUR
        environment—query patterns, access times, data volumes—creating a
        personalized baseline. The moment activity deviates, you're alerted
        instantly.
      </p>
      <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
        What You Get:
      </p>
      <ul className="list-disc ml-6 space-y-2 text-base-content/80">
        <li>
          ✓ Insider threats detected in {"<"}7 days (vs. 90+ days industry
          average)
        </li>
        <li>
          ✓ 80% fewer false positives than traditional rule-based tools
        </li>
        <li>
          ✓ DBA monitoring that doesn't rely on their logs (tamper-proof)
        </li>
        <li>
          ✓ Automated incident response integration with your SIEM/SOAR
        </li>
        <li>✓ 28% faster threat detection than legacy systems</li>
        <li>✓ 22% faster recovery from incidents</li>
      </ul>
      <p className="mt-4 text-base-content/70 italic">
        <strong className="text-blue-700 dark:text-blue-300">
          Why This Matters:
        </strong>{" "}
        Traditional rule-based monitoring catches threats AFTER damage occurs.
        SWOT DAM 3.0's AI catches them BEFORE.
      </p>
    </motion.div>

    {/* Capability 2 */}
    <motion.div
      variants={fadeInUp}
      className="capability-card bg-blue-50 dark:bg-base-200 rounded-2xl shadow-lg p-8 mb-10 border-l-4 border-secondary"
    >
      <h3 className="text-2xl font-bold text-secondary mb-4">
        Capability 2: Semantic Data Intelligence (The Game-Changer)
      </h3>
      <p className="mb-4 text-base-content/80">
        <strong className="text-blue-700 dark:text-blue-300">
          How It Works:
        </strong>{" "}
        When you configure SWOT DAM 3.0, our AI immediately analyzes your entire
        database—tables, columns, relationships, business meaning. Then it
        enables non-technical users to query data using plain English instead of
        SQL.
      </p>
      <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
        What You Get:
      </p>
      <ul className="list-disc ml-6 space-y-2 text-base-content/80">
        <li>
          ✓ Natural language querying - "Show me customers at churn risk in
          California"
        </li>
        <li>✓ Reports created in minutes instead of weeks (90%+ faster)</li>
        <li>
          ✓ 95% of queries self-served by business users (no analyst bottleneck)
        </li>
        <li>
          ✓ Sensitive data automatically classified (PII, PHI, financial, IP) -
          99%+ accuracy
        </li>
        <li>✓ Compliance audit prep: 2 hours instead of 10 days</li>
        <li>
          ✓ AI automatically generates insights, dashboards, and recommendations
        </li>
      </ul>
      <p className="mt-4 text-base-content/70 italic">
        <strong className="text-blue-700 dark:text-blue-300">
          Why This Matters:
        </strong>{" "}
        90% of business intelligence work is searching for and cleaning data.
        SWOT DAM 3.0's AI does this automatically.
      </p>
    </motion.div>

    {/* Capability 3 */}
    <motion.div
      variants={fadeInUp}
      className="capability-card bg-blue-50 dark:bg-base-200 rounded-2xl shadow-lg p-8 border-l-4 border-accent"
    >
      <h3 className="text-2xl font-bold text-accent mb-4">
        Capability 3: Automated Compliance Intelligence
      </h3>
      <p className="mb-4 text-base-content/80">
        <strong className="text-blue-700 dark:text-blue-300">
          How It Works:
        </strong>{" "}
        SWOT DAM 3.0 automatically collects evidence for compliance
        requirements, generates audit-ready reports, and maintains continuous
        compliance (not just at audit time).
      </p>
      <p className="font-semibold text-blue-700 dark:text-blue-300 mb-2">
        What You Get:
      </p>
      <ul className="list-disc ml-6 space-y-2 text-base-content/80">
        <li>
          ✓ One-click compliance reports for GDPR, HIPAA, PCI DSS, SOX, CCPA
        </li>
        <li>✓ 95% reduction in compliance report generation time</li>
        <li>✓ Real-time compliance dashboard showing your posture</li>
        <li>✓ Automatic evidence collection (no manual documentation)</li>
        <li>
          ✓ Zero audit findings related to database controls (vs. 3-4 per year)
        </li>
        <li>✓ $250K+ annually in avoided compliance fines</li>
      </ul>
      <p className="mt-4 text-base-content/70 italic">
        <strong className="text-blue-700 dark:text-blue-300">
          Why This Matters:
        </strong>{" "}
        Compliance isn't about passing audits anymore—it's about avoiding $50M+
        fines.
      </p>
    </motion.div>
  </section>
);

// New component for Semantic Data Intelligence: Real-World Impact
const SemanticDataIntelligenceImpact = () => (
  <section className="my-20">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
      Semantic Data Intelligence: Real-World Impact
    </h2>
    <p className="text-center text-base-content/70 mb-12 max-w-3xl mx-auto">
      When SWOT DAM 3.0's AI learns your database, it transforms how your
      organization operates. Here's what becomes possible:
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {realWorldImpacts.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: idx * 0.1 }}
          className="bg-white dark:bg-base-200 rounded-2xl shadow-lg p-6 border-t-4 border-blue-400 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300 mb-3">
              {item.title}
            </h3>
            <div className="mb-4 text-sm">
              <p className="text-base-content/80">
                <strong className="text-orange-500">Before:</strong>{" "}
                {item.before}
              </p>
              <p className="text-base-content/80 mt-2">
                <strong className="text-green-500">After:</strong>{" "}
                {item.after}
              </p>
            </div>
          </div>
          <p className="font-semibold mt-4 text-sm">
            <span className="font-bold text-blue-700 dark:text-blue-300">
              Impact:
            </span>{" "}
            {item.impact}
          </p>
        </motion.div>
      ))}
    </div>
  </section>
);

// New component for Pricing & Investment
const PricingAndInvestment = () => (
  <section className="my-20 bg-gradient-to-br from-base-200 to-base-100 dark:from-base-300 dark:to-base-200 rounded-3xl p-8 md:p-12 shadow-2xl border border-base-content/10">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary">
      Pricing & Investment
    </h2>
    <p className="text-center text-base-content/80 mb-12 text-lg max-w-2xl mx-auto">
      Flexible Models for Your Situation
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="price-card bg-white dark:bg-base-100 rounded-2xl shadow-xl p-8 border-t-8 border-primary flex flex-col"
      >
        <h3 className="text-2xl font-bold text-primary mb-4">
          Base Platform{" "}
          <span className="text-sm font-normal text-base-content/70">
            (All Plans Include)
          </span>
        </h3>
        <ul className="list-disc ml-6 space-y-3 text-base-content/80 flex-grow">
          <li>✓ Unlimited database monitoring (AI threat detection)</li>
          <li>✓ Insider threat prevention & DBA monitoring</li>
          <li>✓ Automated compliance (GDPR, HIPAA, PCI DSS, SOX, CCPA)</li>
          <li>✓ Cloud-native, multi-cloud support</li>
          <li>✓ 24/7/365 support with SLAs</li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="price-card bg-white dark:bg-base-100 rounded-2xl shadow-xl p-8 border-t-8 border-secondary flex flex-col"
      >
        <h3 className="text-2xl font-bold text-secondary mb-4">
          Semantic Data Intelligence{" "}
          <span className="text-sm font-normal text-base-content/70">
            (Add-On)
          </span>
        </h3>
        <ul className="list-disc ml-6 space-y-3 text-base-content/80 flex-grow">
          <li>✓ Natural language querying</li>
          <li>✓ Automatic database understanding</li>
          <li>✓ Interactive report generation</li>
          <li>✓ AI-powered data discovery</li>
        </ul>
      </motion.div>
    </div>

    <p className="text-center text-base-content/70 mb-10 text-lg max-w-3xl mx-auto">
      For custom pricing tailored to your specific environment and needs,
      contact our sales team.
    </p>

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="expected-benefits-card bg-primary/10 rounded-2xl p-8 md:p-10 text-center shadow-inner"
    >
      <h3 className="text-2xl font-bold text-primary mb-4">Expected Benefits</h3>
      <ul className="list-none space-y-3 text-base-content/80 font-medium max-w-md mx-auto">
        <li>
          <CheckCircle2 size={20} className="inline-block mr-2 text-green-600" />{" "}
          750-2,400% annual ROI
        </li>
        <li>
          <CheckCircle2 size={20} className="inline-block mr-2 text-green-600" />{" "}
          Payback period: 1-2 months
        </li>
        <li>
          <CheckCircle2 size={20} className="inline-block mr-2 text-green-600" />{" "}
          $6.7M+ annual benefit from breach prevention, compliance, operations,
          and analytics
        </li>
      </ul>
      <p className="mt-8 text-lg font-semibold text-primary">
        Ready to understand your specific ROI and investment?
      </p>
      <button className="btn btn-primary btn-lg mt-6 px-10 shadow-lg">
        Contact Our Sales Team
      </button>
    </motion.div>
  </section>
);

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

const SWOTDAMPage = () => {
  const [activeTab, setActiveTab] = useState("ai"); // Kept from original code

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  // Define sections for navigation
  const sections = [
    { id: "hero", title: "Overview" },
    { id: "modern-crisis", title: "Modern Crisis" },
    { id: "dam-difference", title: "DAM Difference" },
    { id: "roi-table", title: "ROI & Benefits" },
    { id: "comparison", title: "Comparison" },
    { id: "real-world-impact", title: "Real-World Impact" },
    { id: "customer-stories", title: "Customer Stories" },
    { id: "use-cases", title: "Core Use Cases" },
    { id: "next-steps", title: "Next Steps" },
    { id: "pricing", title: "Pricing" },
    { id: "about", title: "About SWOT DAM" },
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
    <div className="bg-base-100 text-base-content overflow-x-hidden relative">
      <CustomStyles />
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-tr from-blue-400/30 via-cyan-300/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-1/2 translate-x-1/2 w-[100vw] h-[40vh] bg-gradient-to-tl from-primary/20 via-blue-300/10 to-transparent rounded-full blur-3xl animate-pulse-slower" />
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


      <div className="relative text-center container mx-auto px-4 pt-36 pb-24 z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-3 badge badge-lg border-primary/50 bg-gradient-to-r from-primary/20 to-cyan-400/20 text-primary p-4 mb-6 font-semibold shadow-lg shadow-primary/10"
          >
            <Shield className="text-primary" size={28} />
            SWOT DAM 3.0
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-extrabold mb-6 max-w-5xl drop-shadow-lg"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-cyan-400 animate-gradient-x">
              Detect Threats in Milliseconds.
            </span>
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-primary to-blue-500 animate-gradient-x">
              Understand Your Data Instantly.
            </span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-xl text-base-content/80 leading-relaxed mb-10 font-medium"
          >
            <span className="inline-block bg-gradient-to-r from-primary/10 to-cyan-400/10 px-4 py-2 rounded-xl shadow-sm">
              SWOT DAM 3.0 is an AI-driven, cloud-native database platform that
              combines advanced threat detection with intelligent data
              discovery. Unlike legacy monitoring solutions, SWOT DAM 3.0 uses
              machine learning to automatically understand your database, detect
              insider threats before they happen, and enable any user to
              discover and analyze data using natural language no SQL required.
            </span>
            <span className="py-3 text-base-content/50 block">
              Stop reacting to breaches. Start preventing them. Stop waiting for
              reports. Start making decisions instantly.
            </span>
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.07,
                boxShadow: "0px 10px 30px -5px hsl(var(--p)/0.3)",
              }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary btn-lg shadow-xl px-8 text-lg tracking-wide"
            >
              <ArrowRight className="mr-2" /> Book Your 30-Minute Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-outline btn-lg border-primary text-primary px-8 text-lg tracking-wide shadow"
            >
              <CheckCircle2 className="mr-2" /> Take the 2-Minute Risk
              Assessment
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pb-24 space-y-28 z-10 relative">
        <motion.section
          id="modern-crisis" // Added ID
          ref={sectionRefs.current["modern-crisis"]} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            The Modern Database Crisis
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="card bg-base-200/50 p-8 border-l-4 border-error transition-transform"
            >
              <h3 className="text-2xl font-bold mb-4 text-error">
                Your Security Reality
              </h3>
              <ul className="space-y-4 list-disc list-inside text-base-content/80">
                <li>
                  <strong>40% of breaches</strong> involve insider threats or
                  credential abuse.
                </li>
                <li>
                  Average cost of a database breach:{" "}
                  <strong>$4.45 million</strong> (yet detection takes 90+ days)
                </li>
                <li>
                  <strong>70% of enterprises</strong> report alert fatigue from
                  false positives.
                </li>
                <li>
                  <strong>Compliance violations</strong> can result in fines
                  exceeding <strong>$50</strong> million per incident
                </li>
                <li>
                  <strong>Your DBAs have unlimited access</strong> and control
                  their own audit logs
                </li>
              </ul>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="card bg-base-200/50 p-8 border-l-4 border-info transition-transform"
            >
              <h3 className="text-2xl font-bold mb-4 text-info">
                Your Operations Reality
              </h3>
              <ul className="space-y-4 list-disc list-inside text-base-content/80">
                <li>
                  <strong>Business analysts spend 40% of time</strong>{" "}
                  searching for the right data instead of analyzing it
                </li>
                <li>
                  Only <strong>5-10% of employees</strong> can write SQL,
                  creating a huge bottleneck.
                </li>
                <li>
                  Compliance audit prep takes <strong>10+ days</strong> of
                  manual, error-prone work.
                </li>
                <li>Reports that take weeks should take hours.</li>
                <li>
                  Sensitive data is scattered, and you don't know where it is.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* Replaced 'The SWOT DAM 3.0 Difference' section with the new detailed component */}
        <motion.section
          id="dam-difference" // Added ID
          ref={sectionRefs.current["dam-difference"]} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <SWOTDAMCapabilities fadeInUp={fadeInUp} />
        </motion.section>


        <motion.section
          id="roi-table" // Added ID
          ref={sectionRefs.current["roi-table"]} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <ROITable />
        </motion.section>

        <motion.section
          id="comparison" // Added ID
          ref={sectionRefs.current.comparison} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <ComparisonTable />
        </motion.section>

        {/* New section for Semantic Data Intelligence: Real-World Impact */}
        <motion.section
          id="real-world-impact" // Added ID
          ref={sectionRefs.current["real-world-impact"]} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <SemanticDataIntelligenceImpact />
        </motion.section>

        <motion.section
          id="customer-stories" // Added ID
          ref={sectionRefs.current["customer-stories"]} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <CustomerStories />
        </motion.section>

        <motion.section
          id="use-cases" // Added ID
          ref={sectionRefs.current["use-cases"]} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <UseCases />
        </motion.section>

        <motion.section
          id="next-steps" // Added ID
          ref={sectionRefs.current["next-steps"]} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <NextSteps />
        </motion.section>

        {/* New section for Pricing & Investment */}
        <motion.section
          id="pricing" // Added ID
          ref={sectionRefs.current.pricing} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <PricingAndInvestment />
        </motion.section>

        <motion.section
          id="about" // Added ID
          ref={sectionRefs.current.about} // Added Ref
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <AboutSection />
        </motion.section>
      </div>

      <FinalCTA />
      <Footer />
    </div>
  );
};

export default SWOTDAMPage;