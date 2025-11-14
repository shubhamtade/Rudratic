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
  KeyRound, // For identity
  Cloud, // For cloud platforms
  BarChart, // For SIEM
  RefreshCcw, // For CI/CD
  Database, // For databases
  Ticket, // For ticketing
  Mail, // For communication/email
  Server, // For infrastructure
  Globe, // For network
  Code, // For API/SDK
  Settings, // For custom integration
  Lightbulb, // For why AI is better sections
  FlaskConical, // For innovation
  SquareCheckBig, // For checkmarks in comparison
  Ban, // For negative in comparison
  UserCircle2, // For User Behavior Analytics
  Laptop, // For Device compliance
  MapPin, // For Location
  Fingerprint, // For Authentication
  Building2, // For Company in form
  Phone, // For Phone in form
  MessageSquareText, // For Message in form
  DollarSignIcon,
  Search,
  Link, // For cost savings
  Lock
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

  // This is the new, more detailed 'features' data from the HTML, organized by category.
  const advancedFeatures = [
    {
      category: "AI Vision Language Processing (VLP)",
      icon: Speech,
      description: "Revolutionary technology built from the ground up for privileged access management",
      items: [
        {
          title: "Multimodal AI Understanding",
          desc: "Combines visual access patterns with linguistic analysis. Understands not just 'what' happened, but 'why' and with what 'intent.' Fundamental to detecting sophisticated, targeted attacks that rules-based systems cannot.",
        },
        {
          title: "Context-Aware Threat Detection",
          desc: "Analyzes the full context of access: who is accessing, what they're accessing, when, from where, and critically—why they're accessing it. Legacy systems miss this context entirely, resulting in false negatives against insider threats.",
        },
        {
          title: "Zero-Day Attack Prevention",
          desc: "Doesn't rely on signatures. Detects malicious behavior patterns even when the specific attack is new. Understands attacker intent regardless of technique. Future-proof security that adapts to new threats automatically.",
        },
        {
          title: "Semantic Analysis Engine",
          desc: "Understands meaning and intent behind user actions. A developer accessing code during deployment is different from accessing code at 3am on a weekend. SWOT PAM recognizes this distinction; legacy systems don't.",
        },
      ],
    },
    {
      category: "Offline Large Language Model",
      icon: LockKeyhole,
      items: [
        {
          title: "On-Premise Processing",
          desc: "All AI processing happens within your infrastructure. No API calls to external services. No data leaves your environment. Complete compliance with data residency requirements (GDPR, HIPAA, etc.). Your data stays yours.",
        },
        {
          title: "Real-Time Threat Analysis",
          desc: "Immediate threat response without cloud latency. Your LLM is always available. No network dependencies. Enterprise-grade reliability without relying on external services that may be unavailable.",
        },
        {
          title: "Proprietary Model Training",
          desc: "Trained specifically for PAM threat patterns. Unlike generic LLMs, ours understands privilege abuse, lateral movement, and insider threats with precision. Specialized knowledge for specialized problems.",
        },
        {
          title: "Privacy-First Architecture",
          desc: "Complete data isolation. No sharing of your data with cloud AI services. No data mining. Cryptographic isolation between tenants. Enterprise security from the ground up.",
        },
      ],
    },
    {
      category: "How VLP + Offline LLM Work Together",
      icon: FlaskConical, // Representing innovation/synergy
      items: [
        {
          title: "Intent-Aware Access Automation",
          desc: "VLP analyzes the reason for an access request. Offline LLM validates the request context. Result: approvals in seconds instead of hours, with stronger security than manual approvals. Faster AND safer.",
        },
        {
          title: "Behavior-Based Threat Detection",
          desc: "VLP creates visual access pattern baselines. Offline LLM analyzes linguistic patterns in access requests. Any deviation suggests threat. Together, they catch insider threats legacy systems miss.",
        },
        {
          title: "Continuous Security Monitoring",
          desc: "Every access request flows through VLP + LLM analysis. Risk scores adjust in real-time. No more binary 'approve/deny'—access levels adapt to current risk. Always-on security that's always learning.",
        },
        {
          title: "Predictive Threat Intelligence",
          desc: "VLP predicts intent based on patterns. Offline LLM forecasts threat probability. System becomes proactive instead of reactive. Threats are prevented before they happen, not detected after.",
        },
      ],
    },
    {
        category: "User Behavior Analytics (UBA)",
        icon: UserCircle2,
        items: [
            { title: "Peer-Group Comparisons", desc: "Baseline behavior against similar users. Detects anomalies relative to peers, reducing false positives." },
            { title: "Adaptive Learning Baselines", desc: "System learns and adapts to legitimate behavior changes. Continuous refinement as organization evolves." },
            { title: "Real-Time Anomaly Detection", desc: "Immediate alerts when behavior deviates from baselines. Includes unusual file access, data downloads, off-hours activity." },
            { title: "Insider Threat Investigation", desc: "Complete historical activity records for forensic analysis. Timeline reconstruction of all user actions." },
        ]
    },
    {
        category: "Conditional Access Policies",
        icon: ShieldCheck,
        items: [
            { title: "Risk-Based Access Decisions", desc: "Real-time evaluation of multiple signals: user, device, location, network, behavior. Access adjusted based on risk." },
            { title: "Impossible Travel Detection", desc: "Blocks geographic impossibilities (NYC 9am → Tokyo 10am). Prevents account takeover from distant locations." },
            { title: "Device Compliance Enforcement", desc: "Access depends on device health: encryption, OS patches, malware. Non-compliant denied or require verification." },
            { title: "Just-In-Time Access", desc: "Access granted exactly when needed, automatically revoked after. Time-limited credentials eliminate standing privileges." },
            { title: "Adaptive Authentication", desc: "Authentication adapts to risk level. Low-risk: password. Medium-risk: MFA. High-risk: additional verification." },
        ]
    },
    {
        category: "Governance & Access Control",
        icon: Gem, // Generic governance icon
        items: [
            { title: "Privileged Access Governance", desc: "Centralized policies enforced across all privileged accounts. Role-based access with automatic recommendations." },
            { title: "Zero Standing Privileges", desc: "Eliminate permanent privileged accounts. All access temporary and contextual. Reduces blast radius of compromise." },
        ]
    },
    {
        category: "Security & Encryption",
        icon: LockKeyhole, // Re-using for general security
        items: [
            { title: "Bring Your Own Key (BYOK)", desc: "Full encryption key control retained. Keys never leave infrastructure. Zero-trust encryption model." },
            { title: "Session Recording & Monitoring", desc: "AI-powered recording understands actions and meaning. Real-time monitoring with ability to terminate suspicious sessions." },
            { title: "Passwordless Authentication", desc: "Ephemeral certificates that expire after use. Biometric and hardware token support. Post-quantum cryptography ready." },
            { title: "End-to-End Encryption", desc: "All connections encrypted with TLS 1.3+. Certificate pinning prevents MITM attacks. HSM support." },
        ]
    },
    {
        category: "User & Access Management",
        icon: Users,
        items: [
            { title: "Single Sign-On (SSO) & MFA", desc: "Seamless enterprise identity integration. Multi-factor authentication for all. SAML, OAuth, OIDC support." },
            { title: "Role & Attribute-Based Access (RBAC/ABAC)", desc: "Flexible models with automatic recommendations. Dynamic role assignment. Fine-grained permissions." },
            { title: "Privileged Account Discovery & Management", desc: "Automated discovery of all privileged accounts. Shadow IT identification. Continuous discovery." },
        ]
    },
    {
        category: "Password & Credential Management",
        icon: KeyRound,
        items: [
            { title: "Password Vaulting", desc: "Secure vault with AES-256 encryption. Multi-layer security. Immutable audit logs." },
            { title: "Automated Password Rotation", desc: "Automatic rotation on custom schedules. Service account management. SSH key lifecycle. API token rotation." },
            { title: "Policy Enforcement", desc: "Automated enforcement of security policies. Compliance checking and remediation. Exception workflows." },
        ]
    },
  ];

  const integrationCategories = [
    {
      title: "Identity & Access Management (6)",
      integrations: [
        { name: "Microsoft Active Directory", icon: KeyRound },
        { name: "Azure AD / Entra ID", icon: Cloud },
        { name: "Okta", icon: LockKeyhole },
        { name: "LDAP/OpenLDAP", icon: KeyRound },
        { name: "Ping Identity", icon: Cloud },
        { name: "AWS IAM", icon: Shield },
      ],
    },
    {
      title: "SIEM & Threat Detection (6)",
      integrations: [
        { name: "Splunk", icon: BarChart },
        { name: "Elastic (ELK)", icon: Search },
        { name: "Datadog", icon: BarChart },
        { name: "Microsoft Sentinel", icon: Shield },
        { name: "Sumo Logic", icon: Target },
        { name: "Rapid7 InsightIDR", icon: Search },
      ],
    },
    {
      title: "Cloud Platforms & DevOps (6)",
      integrations: [
        { name: "AWS", icon: Cloud },
        { name: "Microsoft Azure", icon: Cloud },
        { name: "Google Cloud", icon: Cloud },
        { name: "Kubernetes", icon: Server }, // Docker/Kubernetes whale is not in Lucide, using server
        { name: "Docker", icon: Server },
        { name: "OpenStack", icon: Cloud },
      ],
    },
    {
      title: "CI/CD & Automation (6)",
      integrations: [
        { name: "Jenkins", icon: RefreshCcw },
        { name: "GitLab CI", icon: Code },
        { name: "GitHub Actions", icon: Code },
        { name: "Azure DevOps", icon: Cloud },
        { name: "Terraform", icon: Code },
        { name: "Ansible", icon: Settings },
      ],
    },
    {
      title: "Database & Infrastructure (6)",
      integrations: [
        { name: "SQL Server", icon: Database },
        { name: "Oracle Database", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "VMware vSphere", icon: Server },
        { name: "Hyper-V", icon: Server },
      ],
    },
    {
      title: "Ticketing & Incident (6)",
      integrations: [
        { name: "ServiceNow", icon: Ticket },
        { name: "Jira", icon: Ticket },
        { name: "Zendesk", icon: Ticket },
        { name: "Slack", icon: MessageSquareText },
        { name: "Microsoft Teams", icon: MessageSquareText },
        { name: "PagerDuty", icon: Clock }, // Using Clock for incident response
      ],
    },
    {
      title: "Network & Security (6)",
      integrations: [
        { name: "Cisco ACI", icon: Globe },
        { name: "F5 BIG-IP", icon: Globe },
        { name: "Palo Alto Networks", icon: Shield },
        { name: "CheckPoint", icon: Shield },
        { name: "DNS Management", icon: Globe },
        { name: "VPN Solutions", icon: Lock },
      ],
    },
    {
      title: "API & Custom Integration (6)",
      integrations: [
        { name: "RESTful API", icon: Code },
        { name: "Webhooks", icon: Link },
        { name: "Python SDK", icon: Code },
        { name: "Custom Connectors", icon: Settings },
        { name: "Zapier", icon: RefreshCcw },
        { name: "IFTTT", icon: RefreshCcw },
      ],
    },
  ];

  const useCases = [
    {
      title: "Vision Language Processing - Data Exfiltration Detection",
      icon: Speech,
      scenario: "Employee with legitimate access systematically exfiltrates sensitive financial records via approved applications.",
      challenge: [
        "Employee has legitimate access to financial records (job function)",
        "Using approved applications (file sharing, email)",
        "Accessing during business hours from corporate office",
        "Traditional UBA flags high data volume but confirms 'authorized access'",
        "Threat goes undetected for 30+ days until data appears on dark web",
      ],
      solution: [
        "VLP analyzes context: 'Records being accessed are customer data, not this employee's work area'",
        "VLP detects pattern: 'User accessing 50 different folders, downloading to external drive'",
        "VLP understands intent: 'Access pattern indicates data gathering for exfiltration, not legitimate work'",
        "AI semantic analysis: Flags as high-risk based on contextual understanding",
        "Threat detected in 12 minutes vs. 30+ days traditional",
      ],
      impact: "Data breach prevented | $4.88M loss avoided | Zero customer impact",
    },
    {
      title: "User Behavior Analytics - Healthcare Insider Threat",
      icon: UserCircle2,
      scenario: "Medical records administrator accessing patient data outside normal patterns for identity theft ring.",
      challenge: [
        "Administrator has legitimate EHR access (job function)",
        "Access times vary: 2am, 3am, 4am (night shift coverage possible)",
        "Accessing specific patient records (not obvious pattern)",
        "No unusual volume/frequency flags (careful not to trigger alerts)",
        "Goes undetected for 60+ days affecting 500+ patients",
      ],
      solution: [
        "Peer-group comparison: Other night shift staff access different patients, different volumes",
        "Behavioral baseline: Employee's normal pattern vs. new suspicious pattern identified",
        "Adaptive learning: System detects deviation from employee's own established baseline",
        "Pattern recognition: Specific patient targeting detected (not random)",
        "Threat detected in 8 hours, access immediately revoked",
      ],
      impact: "495+ patient records protected | HIPAA violation prevented | $1.9M penalties avoided",
    },
    {
      title: "Conditional Access - Account Takeover Prevention",
      icon: ShieldCheck,
      scenario: "Attacker with stolen credentials attempts impossible travel access from unusual location/device.",
      challenge: [
        "Attacker has valid username and password (leaked on dark web)",
        "One-factor authentication succeeds",
        "Traditional MFA requires SMS/email (time-consuming)",
        "Same credentials = same access level (no risk adaptation)",
        "Fraud discovered 2+ hours later when unauthorized transactions detected",
      ],
      solution: [
        "Login Location: 'User in London at 9am, now attempting access from Tokyo 30 min later' = Impossible Travel",
        "Device Risk: Unknown device, unmanaged, no corporate controls = High Risk",
        "Contextual Decision: System automatically blocks or requires additional verification",
        "Immediate Response: Account holder notified, legitimate access still works",
        "Attack stopped in 5 seconds, $0 fraud loss",
      ],
      impact: "$4.88M+ fraud prevented | Customer trust maintained | Compliance verified",
    },
    {
      title: "Financial Services: Regulatory Compliance",
      icon: DollarSignIcon,
      scenario: "Global bank managing SOX and PCI-DSS compliance, struggling with visibility and manual audits.",
      challenge: [
        "No centralized privileged account visibility across data centers and cloud",
        "Manual compliance audits taking 3+ weeks per quarter",
        "Avg. 45 days to detect privilege abuse incidents (missed SOX deadlines)",
        "8 FTE required just for access provisioning and compliance management",
        "Shared admin accounts violating segregation of duties (SOD)",
      ],
      solution: [
        "Automated discovery & management of all 10,000 accounts within 30 days",
        "Pre-built SOX/PCI-DSS compliance templates with automated reporting",
        "Real-time behavioral analytics detecting privilege abuse in minutes",
        "Just-in-time access eliminating shared accounts automatically",
        "2-4 week deployment enabling immediate compliance actions",
      ],
      quantifiedResults: [
        {
          category: "Operational Efficiency",
          items: [
            "IT staff reduced from 8 to 2 FTE (-75%)",
            "Audit prep time: 3 weeks → 2 days (-93%)",
            "Access provisioning: 2-3 days → 15 minutes",
            "Annual IT labor savings: $480K",
          ],
        },
        {
          category: "Compliance & Risk",
          items: [
            "Privilege abuse reduction: 94%",
            "Compliance violations: 0 in 12 months",
            "Average detection time: 45 days → 12 minutes",
            "Avoided penalties: $500K+ annually",
          ],
        },
        {
          category: "Financial Impact",
          items: [
            "Implementation cost vs. CyberArk: -$600K",
            "Annual operations savings: $480K",
            "Risk mitigation value: $4.88M (breach prevention)",
            "Year 1 ROI: 340%",
          ],
        },
      ],
    },
    {
      title: "Healthcare: HIPAA Compliance",
      icon: FileText,
      scenario: "Regional healthcare network facing HIPAA audit failures due to access visibility gaps and insider threats.",
      challenge: [
        "89% of healthcare organizations report data breaches (2024 statistic)",
        "No centralized audit trail for patient data access across EHR systems",
        "Insider threats: Former employees' access not revoked immediately upon termination",
        "HIPAA audit failures due to access visibility gaps",
        "Compliance preparation costs: $150K annually in consulting fees",
      ],
      solution: [
        "100% session recording of EHR access with AI understanding of data accessed",
        "Automated HIPAA compliance enforcement across all 50 hospitals and 200 clinics",
        "Behavioral analytics detecting suspicious patient data access patterns",
        "Immediate access revocation upon termination (eliminating insider threat window)",
        "Pre-built HIPAA reporting for regulatory audits",
      ],
      quantifiedResults: [
        {
          category: "Operational Excellence",
          items: [
            "Patient data access audit trail: 100%",
            "Audit preparation time: 60 days → 3 days",
            "Insider threat detection: Real-time",
            "Compliance staff time saved: 200 hours/year",
          ],
        },
        {
          category: "Security & Compliance",
          items: [
            "HIPAA audit: First-time pass",
            "Insider threats prevented: 3 detected & stopped",
            "Breach risk reduction: 45% → <5%",
            "Violations avoided: $1.9M potential fines",
          ],
        },
        {
          category: "Financial Impact",
          items: [
            "Consulting fee savings: -$150K annually",
            "Compliance staff reduction: -$200K annually",
            "Breach prevention value: $4.88M",
            "Year 1 ROI: 520%",
          ],
        },
      ],
    },
    {
      title: "SaaS/DevOps: Cloud Security with Zero Deployment Friction",
      icon: Cloud,
      scenario: "Fast-growing SaaS startup with CI/CD-first culture requiring rapid deployment without security bottlenecks.",
      challenge: [
        "Service accounts and API tokens scattered across infrastructure (no central management)",
        "DevOps team bypassing security controls to meet deployment deadlines",
        "No audit trail for infrastructure changes (critical for enterprise customer audits)",
        "Secrets hardcoded in git repositories (discovered by attackers scanning public repos)",
        "Enterprise customers requiring audit-ready environment (PAM implementation required for contracts)",
      ],
      solution: [
        "API-first integration with GitHub Actions, CI/CD pipelines (zero deployment delays)",
        "Kubernetes and container secret management (ephemeral credentials, automatic rotation)",
        "Service account lifecycle automation (provision on deployment, revoke on termination)",
        "Complete audit trail for infrastructure changes (compliance-ready)",
        "2-4 week implementation enabling rapid customer deployments",
      ],
      quantifiedResults: [
        {
          category: "Operational Impact",
          items: [
            "Deployment delays caused by security: 0",
            "DevOps productivity gain: +30%",
            "Audit trail completeness: 100%",
            "Secrets management automation: 100%",
          ],
        },
        {
          category: "Security & Contracts",
          items: [
            "Enterprise customer audits: All passed",
            "Service account vulnerabilities: Eliminated",
            "DevOps team adoption: 100%",
            "New enterprise contracts enabled: 5",
          ],
        },
        {
          category: "Revenue & Growth",
          items: [
            "Enterprise contract value: $2M+ ARR",
            "DevOps productivity gain: $80K annually",
            "Competitive advantage: 6-month lead",
            "Year 1 ROI: 1,200%+",
          ],
        },
      ],
    },
  ];

  const comparisonTableData = [
    { capability: "Architecture", legacy: "Rules-based, reactive", swot: "AI-native, proactive" },
    { capability: "Threat Detection", legacy: "Signature-based", swot: "VLP + LLM + Behavioral" },
    { capability: "Intent Understanding", legacy: "No context analysis", swot: "Full intent via VLP" },
    { capability: "Approval Times", legacy: "Hours to days", swot: "Seconds (automated)" },
    { capability: "Data Privacy", legacy: "Cloud processing", swot: "Offline LLM (no data leaves)" },
    { capability: "Detection Speed", legacy: "206+ days average", swot: "<15 minutes" },
    { capability: "Deployment", legacy: "3–18 months", swot: "2–4 weeks" },
    { capability: "3-Year TCO", legacy: "$1.05M-2.4M", swot: "$650K-950K" },
    { capability: "Attack Surface Reduction", legacy: "Manual controls", swot: "Automatic JIT (70%)" },
    { capability: "Zero Trust Ready", legacy: "Manual implementation", swot: "Built-in by design" },
  ];

  const whyAIBetter = [
    {
      title: "VLP vs. Video Recording",
      legacy: "Manual video review—time-consuming and subjective, missing sophisticated threats.",
      swot: "AI analyzes visual, textual, and contextual patterns simultaneously. Understands 'what,' 'why,' and 'intent.' Processes thousands of sessions in seconds.",
      impact: "300% faster threat response.",
    },
    {
      title: "UBA vs. Traditional Logging",
      legacy: "Manual log review with volume-based alerts causing alert fatigue or missing attacks. No baseline comparison.",
      swot: "ML baselines adapted to users and peer groups. Real-time anomaly detection. Automatic learning reduces false positives.",
      impact: "94% abuse reduction, insider threats caught in hours.",
    },
    {
      title: "Conditional Access vs. RBAC",
      legacy: "Static roles. Same access regardless of context. Stolen credentials = full access.",
      swot: "Real-time risk evaluation. Access adjusts dynamically. Impossible travel blocked. Compliance enforced automatically.",
      impact: "87% lateral movement reduction, account takeover in 5 seconds.",
    },
    {
      title: "Intent-Based vs. Signatures",
      legacy: "Rules-based detection requires known signatures. Zero-day threats bypass detection.",
      swot: "ML detects behavioral deviations. Understands purpose (exfiltration, escalation, recon) regardless of technique. Future-proof.",
      impact: "94-98% detection accuracy with minimal false positives.",
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

  // Define sections for navigation (UPDATED)
  const sections = [
    { id: "hero", title: "Overview" },
    { id: "why-swot", title: "Why SWOT PAM" },
    { id: "pillars", title: "Capabilities" },
    { id: "advanced-features", title: "Advanced Features" }, // NEW
    { id: "integrations", title: "Integrations" }, // NEW
    { id: "use-cases", title: "Use Cases" }, // NEW
    { id: "comparison", title: "Comparison" }, // NEW
    { id: "outcomes", title: "Benefits" },
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

  // Demo form submit handler
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Thank you! Our team will contact you within 1 hour to schedule your demo.');
    event.target.reset();
  };

  return (
    <div className="relative bg-base-100 text-base-content overflow-x-hidden">
      <CustomStyles />

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
                onClick={() => scrollToSection('cta')} // Link to CTA section
              >
                Schedule a Demo
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                {...cardHover}
                className="btn btn-ghost btn-lg px-6"
                aria-label="Explore Innovation"
                onClick={() => scrollToSection('advanced-features')} // Link to detailed features
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

          {/* ADVANCED FEATURES (formerly 'Capabilities', now much more detailed) */}
          <motion.section
            id="advanced-features"
            ref={sectionRefs.current["advanced-features"]}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: "#264082" }}>
              Advanced Features & Capabilities
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-base-content/70 mb-10 max-w-2xl mx-auto">
              Deep dive into the enterprise-grade features built for modern security challenges, powered by AI.
            </motion.p>

            <div className="space-y-12">
              {advancedFeatures.map((category, catIdx) => {
                const CategoryIcon = category.icon;
                return (
                  <motion.div key={catIdx} variants={fadeInUp}>
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-base-content/10">
                        <CategoryIcon size={28} className="text-primary" />
                        <h3 className="text-2xl font-bold text-primary">{category.category}</h3>
                    </div>
                    {category.description && <motion.p variants={fadeInUp} className="text-base-content/70 mb-6">{category.description}</motion.p>}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.items.map((feature, featIdx) => (
                        <motion.div
                          key={featIdx}
                          variants={fadeInUp}
                          className="card bg-base-100 p-6 border border-base-content/10 flex flex-col glass-border"
                        >
                          <h4 className="font-bold text-lg mb-2 text-base-content">{feature.title}</h4>
                          <p className="text-sm text-base-content/70 flex-grow">{feature.desc}</p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* INTEGRATIONS */}
          <motion.section
            id="integrations"
            ref={sectionRefs.current.integrations}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: "#264082" }}>
              Enterprise Integration Ecosystem
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-base-content/70 mb-10 max-w-2xl mx-auto">
              50+ pre-built integrations with your enterprise security stack.
            </motion.p>

            <div className="space-y-10">
              {integrationCategories.map((category, catIdx) => (
                <motion.div key={catIdx} variants={fadeInUp}>
                  <h3 className="text-xl font-bold text-primary mb-6">{category.title}</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                    {category.integrations.map((integration, intIdx) => {
                      const IntegrationIcon = integration.icon;
                      return (
                        <motion.div
                          key={intIdx}
                          variants={fadeInUp}
                          whileHover={{ y: -4, boxShadow: "0 8px 16px -8px rgba(38,64,130,0.15)" }}
                          className="card bg-base-100 p-4 rounded-lg border border-base-content/10 text-center flex flex-col items-center justify-center glass-border"
                        >
                          <IntegrationIcon size={32} className="text-accent mb-2" />
                          <p className="text-sm font-semibold text-base-content">{integration.name}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* USE CASES */}
          <motion.section
            id="use-cases"
            ref={sectionRefs.current.use_cases}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: "#264082" }}>
              Real-World Use Cases with AI Capabilities
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-base-content/70 mb-10 max-w-2xl mx-auto">
              VLP, UBA, and Conditional Access solving real security challenges.
            </motion.p>

            <div className="space-y-12">
              {useCases.map((useCase, ucIdx) => {
                const UseCaseIcon = useCase.icon;
                return (
                  <motion.div key={ucIdx} variants={fadeInUp} className="usecase-detail bg-base-100 p-8 rounded-xl shadow-lg border-l-4 border-primary">
                    <div className="flex items-center gap-3 mb-4">
                        <UseCaseIcon size={28} className="text-primary" />
                        <h3 className="text-2xl font-bold text-base-content">{useCase.title}</h3>
                    </div>
                    <p className="text-base-content/70 mb-6">{useCase.scenario}</p>

                    {useCase.challenge && (
                      <div className="bg-base-200 p-6 rounded-lg mb-6 border-l-4 border-warning">
                        <h4 className="font-bold text-warning mb-3">Challenge (Legacy PAM Misses)</h4>
                        <ul className="list-disc list-inside text-base-content/70 space-y-2">
                          {useCase.challenge.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                    )}

                    {useCase.solution && (
                      <div className="bg-base-200 p-6 rounded-lg mb-6 border-l-4 border-success">
                        <h4 className="font-bold text-success mb-3">SWOT PAM Solution</h4>
                        <ul className="list-disc list-inside text-base-content/70 space-y-2">
                          {useCase.solution.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </div>
                    )}

                    {useCase.impact && (
                      <div className="mt-6 p-4 rounded-lg bg-info/10 text-info font-semibold">
                        Business Impact: {useCase.impact}
                      </div>
                    )}

                    {useCase.quantifiedResults && (
                      <div className="mt-8 bg-success/10 p-6 rounded-lg border-l-4 border-success">
                        <h4 className="font-bold text-success mb-4">Quantified Results (Year 1)</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {useCase.quantifiedResults.map((result, resIdx) => (
                            <div key={resIdx} className="bg-base-100 p-4 rounded-md border border-success/30">
                              <h5 className="font-bold text-success mb-2">{result.category}</h5>
                              <ul className="list-disc list-inside text-base-content/70 text-sm space-y-1">
                                {result.items.map((item, itemIdx) => <li key={itemIdx}>{item}</li>)}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.section>


          {/* COMPARISON */}
          <motion.section
            id="comparison"
            ref={sectionRefs.current.comparison}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: "#264082" }}>
              SWOT PAM vs. Legacy PAM Solutions
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-center text-base-content/70 mb-10 max-w-2xl mx-auto">
              AI-native architecture delivers revolutionary results.
            </motion.p>

            <h3 className="text-xl font-bold text-primary mb-6">📊 Capability Comparison</h3>
            <motion.div variants={fadeInUp} className="overflow-x-auto mb-12 shadow-lg rounded-lg border border-base-content/10">
              <table className="table w-full text-base-content">
                <thead>
                  <tr className="bg-primary text-primary-content">
                    <th className="p-4 text-left rounded-tl-lg">Capability</th>
                    <th className="p-4 text-left">Legacy PAM Tools</th>
                    <th className="p-4 text-left rounded-tr-lg">SWOT PAM</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTableData.map((row, idx) => (
                    <motion.tr
                      key={idx}
                      variants={fadeInUp}
                      className={idx % 2 === 0 ? "bg-base-200" : "bg-base-100"}
                    >
                      <td className="p-4 font-semibold">{row.capability}</td>
                      <td className="p-4 text-base-content/80">{row.legacy}</td>
                      <td className="p-4 text-success font-bold flex items-center gap-2">
                        <SquareCheckBig size={18} /> {row.swot}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            <h3 className="text-xl font-bold text-primary mb-6">💡 Why AI-Native is Better</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyAIBetter.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-base-200 p-6 rounded-lg border-l-4 border-info shadow-sm"
                >
                  <h4 className="font-bold text-info mb-3">{item.title}</h4>
                  <p className="text-sm text-base-content/70 mb-2">
                    <span className="font-bold text-warning">Legacy:</span> {item.legacy}
                  </p>
                  <p className="text-sm text-base-content/70 mb-4">
                    <span className="font-bold text-success">SWOT:</span> {item.swot}
                  </p>
                  <div className="flex items-center gap-2 text-sm font-medium p-2 rounded-lg bg-success/10 text-success">
                    <div className="w-1 h-5 rounded-sm bg-success" />
                    Impact: {item.impact}
                  </div>
                </motion.div>
              ))}
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
                  onClick={() => scrollToSection('contact-form')} // Link to contact form below
                >
                  Request Your Free Demo
                </motion.button>

                <motion.a
                  href="#contact-form" // Link to contact form below
                  className="btn btn-ghost btn-lg px-6"
                  {...cardHover}
                  aria-label="Contact sales"
                  onClick={() => scrollToSection('contact-form')} // Link to contact form below
                >
                  Contact Sales
                </motion.a>
              </div>
            </div>

            {/* Contact Form Section */}
            <section
                id="contact-form"
                ref={sectionRefs.current.cta} // Reusing CTA ref or create a new one if preferred
                className="mt-12 max-w-2xl mx-auto"
            >
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: "#264082" }}>
                    Schedule Your Demo
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-center text-base-content/70 mb-10">
                    Experience AI-native PAM in action.
                </motion.p>
                <motion.form
                    onSubmit={handleSubmit}
                    variants={fadeInUp}
                    className="bg-base-100 p-8 rounded-xl shadow-lg border border-base-content/10 space-y-6"
                >
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-bold text-primary mb-2">Full Name <span className="text-error">*</span></label>
                        <input type="text" id="fullName" required className="input input-bordered w-full" placeholder="John Doe" />
                    </div>
                    <div>
                        <label htmlFor="company" className="block text-sm font-bold text-primary mb-2">Company <span className="text-error">*</span></label>
                        <input type="text" id="company" required className="input input-bordered w-full" placeholder="Acme Corp" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-bold text-primary mb-2">Email <span className="text-error">*</span></label>
                        <input type="email" id="email" required className="input input-bordered w-full" placeholder="john.doe@example.com" />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2">Phone</label>
                        <input type="tel" id="phone" className="input input-bordered w-full" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                        <label htmlFor="interest" className="block text-sm font-bold text-primary mb-2">Interested In</label>
                        <select id="interest" className="select select-bordered w-full">
                            <option>VLP + Offline LLM Demo</option>
                            <option>Intent-Aware Approvals</option>
                            <option>Threat Detection Capabilities</option>
                            <option>Complete Platform</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-bold text-primary mb-2">Message</label>
                        <textarea id="message" className="textarea textarea-bordered w-full h-32" placeholder="Tell us about your security challenges..."></textarea>
                    </div>
                    <motion.button
                        {...cardHover}
                        type="submit"
                        className="btn btn-primary btn-lg w-full"
                    >
                        Request Demo
                    </motion.button>
                </motion.form>
                <div className="mt-6 bg-info/10 border-l-4 border-info p-6 rounded-lg text-info">
                    <p className="font-bold">💚 30-Day Free Trial</p>
                    <p className="text-sm mt-1">Full access to all capabilities. No credit card required.</p>
                </div>
            </section>
          </motion.section>
        </main>

        <Footer />
      </div> {/* End main content wrapper */}
    </div>
  );
};

export default PAMPage;