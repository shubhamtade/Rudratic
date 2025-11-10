import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../layouts/Footer";
import {
  Search,
  Shield,
  FileText,
  CheckCircle2,
  Code,
  MessageSquare,
  ArrowRight,
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
    <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-300 mb-6">
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
      Customer Success Stories
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
          <div className="mt-4 italic text-blue-700 dark:text-blue-400 border-l-4 border-blue-300 pl-4">
            "{story.quote}"<br />
            <span className="block mt-2 font-semibold text-blue-900 dark:text-blue-200">
              - {story.author}
            </span>
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

// ==================================================================
// ========================= MAIN PAGE ==============================
// ==================================================================

const SWOTDAMPage = () => {
  const [activeTab, setActiveTab] = useState("ai");

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

  return (
    <div className="bg-base-100 text-base-content overflow-x-hidden relative">
      <CustomStyles />
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-gradient-to-tr from-blue-400/30 via-cyan-300/20 to-transparent rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-1/2 translate-x-1/2 w-[100vw] h-[40vh] bg-gradient-to-tl from-primary/20 via-blue-300/10 to-transparent rounded-full blur-3xl animate-pulse-slower" />
      </div>

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
              AI-driven database monitoring + semantic intelligence — built to
              predict, protect, and empower your entire organization.
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
                  <strong>$4.45 million</strong>.
                </li>
                <li>
                  <strong>70% of enterprises</strong> report alert fatigue from
                  false positives.
                </li>
                <li>
                  DBAs have unlimited access and can control their own audit
                  logs.
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
                  Analysts spend <strong>40% of their time</strong> just
                  searching for the right data.
                </li>
                <li>
                  Only <strong>5-10% of employees</strong> can write SQL,
                  creating a huge bottleneck.
                </li>
                <li>
                  Compliance audit prep takes <strong>10+ days</strong> of
                  manual, error-prone work.
                </li>
                <li>
                  Sensitive data is scattered, and you don't know where it is.
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            The SWOT DAM 3.0 Difference
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "AI-Powered Threat Detection",
                desc: "Our AI learns normal behavior to detect insider threats in 7 days and reduces false positives by 80%.",
              },
              {
                icon: Search,
                title: "Semantic Data Intelligence",
                desc: "Ask questions in plain English, not SQL. Our AI understands business context, creating reports in minutes.",
              },
              {
                icon: FileText,
                title: "Automated Compliance",
                desc: "Get one-click, audit-ready reports for GDPR, HIPAA, PCI DSS & SOX. Reduce prep time from 10 days to 2 hours.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="feature-card card p-8 text-center flex flex-col"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="inline-block p-4 bg-primary/10 rounded-full mb-6 mx-auto"
                >
                  <item.icon size={40} className="text-primary" />
                </motion.div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-base-content/70 flex-grow">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            From SQL to English: The AI Revolution
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto"
          >
            Stop waiting on analysts. Empower your entire team to get instant
            insights from your most valuable asset: your data.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="card bg-base-100 border border-base-content/10 shadow-xl overflow-hidden"
          >
            <div className="lg:hidden">
              <div className="p-4 border-b border-base-content/10 flex justify-center gap-2">
                <button
                  onClick={() => setActiveTab("sql")}
                  className={`btn btn-sm rounded-full gap-2 transition-all ${
                    activeTab === "sql" ? "bg-base-300" : "btn-ghost"
                  }`}
                >
                  <Code size={16} /> Before
                </button>
                <button
                  onClick={() => setActiveTab("ai")}
                  className={`btn btn-sm rounded-full gap-2 transition-all ${
                    activeTab === "ai"
                      ? "bg-teal-400/20 text-teal-600"
                      : "btn-ghost"
                  }`}
                >
                  <MessageSquare size={16} /> After
                </button>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {activeTab === "sql" ? (
                    <BeforeComponent />
                  ) : (
                    <AfterComponent />
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="hidden lg:grid lg:grid-cols-2 lg:divide-x lg:divide-base-content/10">
              <BeforeComponent />
              <AfterComponent />
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <ROITable />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <ComparisonTable />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <CustomerStories />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <UseCases />
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <NextSteps />
        </motion.section>

        <motion.section
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
