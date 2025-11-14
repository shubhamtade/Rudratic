import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  LogIn,
  Calendar,
  Sun,
  Moon,
  Menu,
  X,
  Home,
  Box,
  Wrench,
  Building,
  Phone,
  ChevronDown,
  Shield,
  Cloud,
  AlertTriangle,
  TrendingUp,
  Users,
  BookOpen,
  Briefcase,
  Target,
  Globe2Icon,
  Settings2,
  Database,
  ShieldCheck,
  Bot,
  Smartphone,
  Code2,
  LockIcon,
  Zap, // Added Zap if not already imported, it was in a comment
} from "lucide-react";

// --- Data Structure with Icons (Unchanged) ---
const getProductsContent = () => [
  { title: "SWOT-PAM", subtitle: "Privileged Access Management", color: "hsl(var(--p))", href: "/products/pam", icon: Shield, group: "Security & Access" },
  { title: "SWOTCloudPAM", subtitle: "Cloud PAM Solution", color: "hsl(var(--p))", href: "/products/SWOTCloudPAMPage", icon: Cloud, group: "Security & Access" },
  { title: "RBVM", subtitle: "Risk-Based Vulnerability Management", color: "hsl(var(--s))", href: "/products/rbvm", icon: AlertTriangle, group: "Security & Access" },
  { title: "SWOTDAM", subtitle: "Digital Asset Management", color: "hsl(var(--s))", href: "/products/SWOTDAMPage", icon: Box, group: "Enterprise Platforms" },
  { title: "BPMAutomation", subtitle: "Business Process Management", color: "hsl(var(--p))", href: "/products/BPMAutomationPage", icon: Zap, group: "Enterprise Platforms" },
  { title: "AIquinox", subtitle: "Performance Monitoring Platform", color: "hsl(var(--s))", href: "/products/AiquinoxPage", icon: TrendingUp, group: "Platforms & Analytics" },
];

// ✅ MODIFIED: Updated hrefs to point to new pages
const getServicesContent = () => [
  { title: "Software Development", subtitle: "Enterprise Applications", color: "hsl(var(--p))", href: "/services/software-development", icon: Code2, group: "Core Development", },
  { title: "Mobile App Development", subtitle: "iOS & Android", color: "hsl(var(--s))", href: "/services/mobile-app-development", icon: Smartphone, group: "Core Development", },
  { title: "AI & Automation", subtitle: "AI Agents & RPA", color: "hsl(var(--p))", href: "/services/ai-automation", icon: Bot, group: "Intelligent Systems", },
  { title: "Cybersecurity", subtitle: "PenTesting & Compliance", color: "hsl(var(--s))", href: "/services/cybersecurity", icon: ShieldCheck, group: "Security & Compliance", },
  { title: "Cloud Infrastructure", subtitle: "AWS | Azure | GCP", color: "hsl(var(--p))", href: "/services/cloud-infrastructure", icon: Cloud, group: "Managed Infra", },
  { title: "Private Cloud Consulting", subtitle: "Compliance-Ready Infra", color: "hsl(var(--s))", href: "/services/private-cloud", icon: LockIcon, group: "Managed Infra", },
  { title: "Database Services", subtitle: "Optimization & Management", color: "hsl(var(--p))", href: "/services/database-services", icon: Database, group: "Platform Consulting", },
  { title: "IoT & Edge Computing", subtitle: "Real-time Processing", color: "hsl(var(--s))", href: "/services/iot-edge-computing", icon: Settings2, group: "Intelligent Systems", },
  { title: "Digital Twin Solutions", subtitle: "Predictive Maintenance", color: "hsl(var(--p))", href: "/services/digital-twin", icon: Globe2Icon, group: "Intelligent Systems", },
];

const getCompanyContent = () => [
  { title: "Solutions", color: "hsl(var(--p))", href: "/solutions", icon: BookOpen },
  { title: "About us", color: "hsl(var(--s))", href: "/about-us", icon: Users },
  { title: "Client Success", color: "hsl(var(--p))", href: "/client-success", icon: Briefcase },
  { title: "Why Rudratic", color: "hsl(var(--s))", href: "/why-rudratic", icon: Target },
];

const Navigation = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const productsContent = getProductsContent();
  const servicesContent = getServicesContent();
  const companyContent = getCompanyContent();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu and dropdowns on route change
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = ""; // Re-enable scroll
  }, [location.pathname]);

  useEffect(() => {
    // Control body scroll when mobile menu is open/closed
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const menuItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Products", href: "#", hasDropdown: true, icon: Box },
    { label: "Services", href: "#", hasDropdown: true, icon: Wrench },
    { label: "Company", href: "#", hasDropdown: true, icon: Building },
    { label: "Contact", href: "/contact", icon: Phone },
  ];

  const getActiveIndex = () => {
    const path = location.pathname;
    if (path === "/") return 0;
    if (path.startsWith("/products") || productsContent.some(p => p.href === path)) return 1;
    if (path.startsWith("/services") || servicesContent.some(s => s.href === path)) return 2;
    if (companyContent.some(c => c.href === path)) return 3;
    if (path.startsWith("/contact")) return 4;
    return -1;
  };
  const activeIndex = getActiveIndex();

  const navMotion = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  };

  // FIX: Removed trailing semicolon from className string
  const navClass = "fixed left-1/2 -translate-x-1/2 z-[1000] w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-[1400px] rounded-2xl px-4 md:px-10 py-3 md:py-4 transition-all duration-500";

  // FIX: Corrected border property using template literal
  const navStyle = {
    top: scrolled ? "1rem" : "1.5rem",
    background: theme === "night"
      ? scrolled ? "linear-gradient(135deg, rgba(30,30,35,0.95), rgba(15,15,20,0.85))" : "linear-gradient(135deg, rgba(30,30,35,0.7), rgba(15,15,20,0.5))"
      : scrolled ? "linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,240,245,0.85))" : "linear-gradient(135deg, rgba(255,255,255,0.8), rgba(240,240,245,0.6))",
    boxShadow: scrolled
      ? theme === "night" ? "0 10px 30px rgba(0,0,0,0.8), 0 0 50px hsla(var(--p)/0.4)" : "0 10px 30px rgba(0,0,0,0.1), 0 0 50px hsla(var(--p)/0.25)"
      : theme === "night" ? "0 5px 20px rgba(0,0,0,0.5)" : "0 5px 15px rgba(0,0,0,0.1)",
    backdropFilter: "blur(28px)",
    border: `1px solid ${theme === "night" ? "hsla(var(--p)/0.35)" : "hsla(var(--p)/0.2)"}`, // FIX here
  };

  return (
    <>
      {activeDropdown && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/70 backdrop-blur-[8px] z-[900] hidden lg:block"
          onClick={() => setActiveDropdown(null)}
        />
      )}

      <motion.nav {...navMotion} className={navClass} style={navStyle}>
        <div className="relative z-20 flex justify-between items-center">
          <Link to="/" className="flex-shrink-0">
            <motion.img
              src="/rudratic new logo.png"
              alt="RUDRATIC Logo"
              whileHover={{ scale: 1.07, filter: "drop-shadow(0 0 15px hsla(var(--p)/0.9))" }}
              transition={{ type: "spring", stiffness: 200 }}
              className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_10px_hsla(var(--p)/0.7)]"
            />
          </Link>

          <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1.5">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                {/* For non-dropdown items, the Link directly navigates.
                    For dropdown items, the Link is mainly for the parent item's visual state.
                    The actual navigation happens in the MegaMenu. */}
                <Link to={item.href} className="no-underline">
                  <motion.div
                    className={`relative cursor-pointer px-5 py-2.5 rounded-xl transition-colors duration-300 ${activeIndex === index ? 'bg-base-content/10' : 'hover:bg-base-content/5'}`}
                  >
                    <span className={`text-[15px] tracking-wide transition-colors duration-300 flex items-center gap-1.5 ${
                        (activeIndex === index || activeDropdown === item.label)
                          ? "text-base-content font-bold"
                          : "text-base-content/75 hover:text-base-content font-medium"
                      }`}
                    >
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180 text-primary' : ''}`} />
                      )}
                    </span>
                    {activeIndex === index && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-5 right-5 h-[3px] rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_15px_hsla(var(--p)/0.8)]"
                      />
                    )}
                  </motion.div>
                </Link>
                <AnimatePresence>
                  {activeDropdown === item.label && item.hasDropdown && (
                      <MegaMenu
                        content={{ products: productsContent, services: servicesContent, company: companyContent }}
                        type={item.label.toLowerCase()}
                      />
                    )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.2, rotate: 20 }}
              className="btn btn-ghost btn-circle hover:shadow-[0_0_15px_hsla(var(--p)/0.5)] transition-shadow"
            >
              <AnimatePresence mode="wait">
                {theme === "night" ? (
                  <Sun key="sun" size={20} className="text-warning" />
                ) : (
                  <Moon key="moon" size={20} className="text-info" />
                )}
              </AnimatePresence>
            </motion.button>
            <div className="w-px h-8 bg-base-content/10" />
            <motion.button
              onClick={() => window.openLoginModal && window.openLoginModal()}
              whileHover={{ scale: 1.05, y: -1, boxShadow: "0 10px 40px hsla(var(--p)/0.6)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="btn btn-primary text-primary-content font-semibold text-sm gap-2 uppercase tracking-wider"
            >
              <LogIn size={16} /> Client Login
            </motion.button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <button onClick={toggleTheme} className="btn btn-ghost btn-circle hover:shadow-[0_0_10px_hsla(var(--p)/0.4)]">
              <AnimatePresence mode="wait">
                {theme === "night" ? <Sun key="sun" size={20} className="text-warning" /> : <Moon key="moon" size={20} className="text-info" />}
              </AnimatePresence>
            </button>
            <motion.button
              onClick={() => setIsMobileMenuOpen(true)}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1, rotate: 10, boxShadow: "0 0 15px hsla(var(--p)/0.4)" }}
              className="btn btn-ghost btn-circle"
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            menuItems={menuItems}
            onClose={() => setIsMobileMenuOpen(false)}
            content={{ products: productsContent, services: servicesContent, company: companyContent }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

// --- ENHANCED Mobile Menu Component ---
const MobileMenu = ({ menuItems, onClose, content }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1001] lg:hidden"
        onClick={onClose}
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 180, damping: 25 }}
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-gradient-to-br from-base-200/95 to-base-300/95 backdrop-blur-3xl border-l border-primary/40 z-[1002] flex flex-col shadow-[0_0_35px_rgba(0,0,0,0.8)]"
      >
        {/* Animated glow effect for a premium feel */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 25px hsla(var(--p)/0.3)",
              "0 0 50px hsla(var(--s)/0.4)",
              "0 0 25px hsla(var(--p)/0.3)",
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />

        <div className="p-5 flex justify-between items-center border-b border-primary/20 bg-base-200/50">
          <motion.img src="/rudratic new logo.png" alt="Logo" className="h-10 drop-shadow-[0_0_6px_hsla(var(--p)/0.4)]" whileHover={{ scale: 1.05 }}/>
          <motion.button onClick={onClose} whileHover={{ rotate: 90, scale: 1.2, color: "hsl(var(--p))" }} className="btn btn-ghost btn-circle">
            <X size={24} />
          </motion.button>
        </div>

        <motion.div
          className="flex-grow overflow-y-auto p-6 space-y-4"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
        >
          {menuItems.map((item) => {
            const ItemIcon = item.icon;
            return (
              <motion.div key={item.label} variants={{ hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1 } }} transition={{ duration: 0.5, type: "spring", damping: 20 }}>
                {item.hasDropdown ? (
                  <details className="group">
                    <summary className="font-bold text-xl flex items-center gap-3 cursor-pointer py-2 text-base-content/90 hover:text-base-content transition-colors">
                      <ItemIcon size={22} className="text-primary drop-shadow-[0_0_8px_hsla(var(--p)/0.6)]" />
                      {item.label}
                      <ChevronDown size={16} className="ml-auto transform transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <ul className="mt-3 space-y-2 pl-6 pb-2 border-l-2 border-primary/30">
                      {(item.label === "Products" ? content.products : item.label === "Services" ? content.services : content.company).map((subItem) => {
                          const SubItemIcon = subItem.icon || Box;
                          return (
                              <motion.li key={subItem.title} whileHover={{ x: 8, scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }}>
                              <Link to={subItem.href} className="flex items-center gap-2 py-1.5 text-base font-semibold transition-colors duration-200" style={{ color: subItem.color }} onClick={onClose}>
                                  <SubItemIcon size={16}/>
                                  {subItem.title}
                              </Link>
                              </motion.li>
                          )
                      })}
                    </ul>
                  </details>
                ) : (
                  <Link to={item.href} onClick={onClose} className="font-bold text-xl flex items-center gap-3 py-2 text-base-content/90 hover:text-base-content hover:translate-x-2 transition-all duration-300">
                    <ItemIcon size={22} className="text-primary drop-shadow-[0_0_8px_hsla(var(--p)/0.6)]" />
                    {item.label}
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        <div className="p-4 border-t border-primary/20 flex flex-col gap-3 bg-base-200/50">
          <motion.button whileHover={{ scale: 1.03, boxShadow: "0 0 30px hsla(var(--p)/0.5)" }} transition={{ type: "spring", stiffness: 300 }} onClick={() => { window.openLoginModal && window.openLoginModal(); onClose(); }} className="btn btn-primary btn-block btn-lg gap-2 text-lg uppercase tracking-wider">
            <LogIn size={18} /> Client Login
          </motion.button>
          <motion.button whileHover={{ scale: 1.03, boxShadow: "0 0 30px hsla(var(--s)/0.5)" }} transition={{ type: "spring", stiffness: 300 }} onClick={() => { window.openDemoModal && window.openDemoModal(); onClose(); }} className="btn btn-secondary btn-block btn-lg gap-2 text-lg uppercase tracking-wider">
            <Calendar size={18} /> Request Demo
          </motion.button>
        </div>
      </motion.div>
    </>
  );
};

// --- ENHANCED Mega Menu Component ---
const MegaMenu = ({ type, content }) => {
  const data = content[type];

  // Helper function to render grouped menu items
  const renderGroupedItems = (groupName, items) => (
    <div key={groupName} className="flex flex-col gap-2"> {/* Added key for group */}
      <h3 className="text-sm font-extrabold text-base-content/60 uppercase tracking-wider mb-2">
        {groupName}
      </h3>
      <div className="flex flex-col gap-2"> {/* Container for actual links */}
        {items.map((item) => {
          const ItemIcon = item.icon;
          return (
            // FIX: Wrap each item in a Link component to make it navigable
            <Link key={item.title} to={item.href} className="no-underline">
              <motion.div
                whileHover={{ scale: 1.03, x: 4, background: `hsla(var(--b2))` }}
                className="rounded-lg p-3 transition-all duration-300 transform flex items-start gap-3 group" // Added 'group' class for hover effect
              >
                <div className="p-2 rounded-md flex-shrink-0" style={{ background: `${item.color}20`}}>
                  <ItemIcon size={20} style={{ color: item.color }}/>
                </div>
                <div>
                  <h4 className="text-base font-bold mb-0.5 group-hover:text-primary transition-colors" style={{ color: item.color }}> {/* FIX: Changed to h4, added group-hover */}
                    {item.title}
                  </h4>
                  <p className="text-xs text-base-content/70 leading-tight">
                    {item.subtitle}
                  </p>
                </div>
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  const getGroups = (items) => {
    return items.reduce((acc, item) => {
      (acc[item.group] = acc[item.group] || []).push(item);
      return acc;
    }, {});
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      // FIX: Corrected className interpolation using backticks
      className={`absolute top-[65px] bg-base-100/95 backdrop-blur-2xl border border-primary/30 rounded-2xl p-8 shadow-2xl shadow-black/40 z-50 transform origin-top ${
        type === "company" ? "left-1/2 -translate-x-1/2 min-w-[320px]" : "left-1/2 -translate-x-1/2 min-w-[1100px]"
      }`}
    >
      {(type === "products" || type === "services") && (
        // FIX: Adjusted grid layout to have grouped items on the left and sidebar on the right
        <div className="grid grid-cols-[1fr_minmax(250px,300px)] gap-x-8"> {/* Outer grid: main content (grouped items) + sidebar */}
          <div className={`grid ${type === "products" ? "grid-cols-2" : "grid-cols-3"} gap-x-8 gap-y-6`}> {/* Inner grid for the actual grouped items */}
            {Object.entries(getGroups(data)).map(([groupName, items]) => renderGroupedItems(groupName, items))}
          </div>
          {/* Right Sidebar: Media & CTA */}
          <div className="flex flex-col justify-between border-l border-primary/20 pl-10">
            <div>
              <div className="bg-gradient-to-tr from-pink-500/10 to-violet-500/10 border border-pink-500/25 rounded-xl overflow-hidden shadow-inner mb-6">
                <video src={type === "products" ? "/products-video.mp4" : "/service-video.mp4"} autoPlay loop muted playsInline className="w-full h-auto object-cover" />
              </div>
              <h3 className="text-lg font-extrabold text-base-content mb-2">
                {type === "products" ? "Need a Security Audit?" : "Expert Consultation"}
              </h3>
              <p className="text-xs text-base-content/70 leading-relaxed">
                {type === "products" ? "Explore how our security solutions protect your critical assets and meet compliance needs." : "Connect with our experts to design a bespoke IT strategy that scales with your ambition."}
              </p>
            </div>
            <motion.button
              onClick={() => window.openDemoModal && window.openDemoModal()}
              whileHover={{ scale: 1.03, boxShadow: "0 10px 30px hsla(var(--p)/0.6)" }}
              className={`btn ${type === "products" ? 'btn-primary' : 'btn-secondary'} gap-2.5 mt-6`}
            >
              <Calendar size={18} /> {type === "products" ? "Book a Consultation" : "Discuss Your Project"}
            </motion.button>
          </div>
        </div>
      )}

      {type === "company" && (
  <div className="grid grid-cols-1 gap-4 min-w-[360px]">
    {data.map((c, i) => {
      const CompanyIcon = c.icon;
      return (
        <Link key={i} to={c.href} className="no-underline group">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.04,
              x: 6,
              boxShadow: "0 8px 25px hsla(var(--p)/0.25)",
              background:
                "linear-gradient(135deg, hsla(var(--p)/0.15), hsla(var(--s)/0.15))",
            }}
            className="relative rounded-2xl px-6 py-5 transition-all duration-300 flex items-center gap-5 border border-base-content/10 overflow-hidden"
          >
            {/* Glow Orb */}
            <div
              className="absolute -left-10 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-all duration-500"
              style={{ background: c.color }}
            ></div>

            {/* Icon Block */}
            <div
              className="p-3 rounded-xl flex-shrink-0 shadow-inner transition-all duration-300 group-hover:shadow-lg group-hover:scale-110"
              style={{
                background: `${c.color}22`,
                border: `1px solid ${c.color}40`,
              }}
            >
              <CompanyIcon size={22} style={{ color: c.color }} />
            </div>

            {/* Texts */}
            <div className="relative z-10">
              <h4
                className="text-lg font-bold tracking-wide group-hover:text-primary transition-colors"
                style={{ color: c.color }}
              >
                {c.title}
              </h4>
              <p className="text-xs text-base-content/60 mt-1 group-hover:text-base-content/80 transition-colors">
                Explore {c.title} →
              </p>
            </div>
          </motion.div>
        </Link>
      );
    })}
  </div>
)}

    </motion.div>
  );
};

export default Navigation;