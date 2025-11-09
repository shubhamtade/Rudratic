// Shared product data for Navigation and ProductsSection
const productsData = [
  {
    title: "SWOT-PAM",
    subtitle: "Privileged Access Management",
    color: "hsl(var(--p))",
    href: "/products/pam",
    imagePath: "/product1.jpg",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    description:
      "Comprehensive PAM solution with secure credential vaulting, granular access controls, approval workflows, and continuous monitoring.",
    features: [
      "Role-based Access Control",
      "Just-in-Time Privileges",
      "Password Vaulting",
      "Session Recording",
    ],
    group: "Security & Access",
    icon: "Shield",
  },
  {
    title: "SWOTCloudPAM",
    subtitle: "Cloud PAM Solution",
    color: "hsl(var(--p))",
    href: "/products/SWOTCloudPAMPage",
    imagePath: "/product4.jpg",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    description:
      "Cloud-native security for privileged accounts across multi-cloud and hybrid environments with zero-trust architecture.",
    features: [
      "Secure Cloud Vaulting",
      "Just-in-Time Access",
      "Multi-factor Authentication",
      "Real-time Session Recording",
    ],
    group: "Security & Access",
    icon: "Cloud",
  },
  {
    title: "RBVM",
    subtitle: "Risk-Based Vulnerability Management",
    color: "hsl(var(--s))",
    href: "/products/rbvm",
    imagePath: "/product5.jpg",
    gradient: "from-secondary/20 via-secondary/10 to-transparent",
    description:
      "Prioritize and remediate vulnerabilities with risk scoring, automated discovery, and continuous validation.",
    features: [
      "Risk Scoring",
      "Automated Scanning",
      "Prioritized Remediation",
      "Compliance Reports",
    ],
    group: "Security & Access",
    icon: "AlertTriangle",
  },
  {
    title: "SWOTDAM",
    subtitle: "Digital Asset Management",
    color: "hsl(var(--a))",
    href: "/products/SWOTDAMPage",
    imagePath: "/product3.jpg",
    gradient: "from-accent/20 via-accent/10 to-transparent",
    description:
      "A comprehensive platform for organizing, managing, and distributing digital assets with powerful search and version control.",
    features: [
      "Centralized Asset Storage",
      "AI-powered Search",
      "Version Control & Audit Trails",
      "Permission Management",
    ],
    group: "Enterprise Platforms",
    icon: "Box",
  },
  {
    title: "BPMAutomation",
    subtitle: "Business Process Management",
    color: "hsl(var(--p))",
    href: "/products/BPMAutomationPage",
    imagePath: "/product1.jpg",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    description:
      "Streamline and automate business workflows to increase efficiency and reduce operational costs.",
    features: [
      "Workflow Designer",
      "Process Automation",
      "Analytics & Monitoring",
      "Integrations",
    ],
    group: "Enterprise Platforms",
    icon: "Zap",
  },
  {
    title: "AIquinox",
    subtitle: "Performance Monitoring Platform",
    color: "hsl(var(--s))",
    href: "/products/AiquinoxPage",
    imagePath: "/product2.jpg",
    gradient: "from-secondary/20 via-secondary/10 to-transparent",
    description:
      "AI-powered monitoring that detects impactful issues using advanced analytics, cutting through the noise of traditional tools.",
    features: [
      "AI-Driven Analytics",
      "Automated Issue Discovery",
      "Real-Time Tracking",
      "Predictive Insights",
    ],
    group: "Platforms & Analytics",
    icon: "TrendingUp",
  },
  {
    title: "Tawny Workspace",
    subtitle: "Products Management Suite",
    color: "hsl(var(--p))",
    href: "/products/tawny-workspace",
    imagePath: "/product3.jpg",
    gradient: "from-primary/20 via-primary/10 to-transparent",
    description:
      "A unified workspace for product teams to manage lifecycles, releases, and collaboration.",
    features: [
      "Product Catalog",
      "Collaboration Tools",
      "Release Management",
      "Analytics",
    ],
    group: "Platforms & Analytics",
    icon: "LayoutGrid",
  },
];

export default productsData;
