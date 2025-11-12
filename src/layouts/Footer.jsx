import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Shield,
  Cloud,
  Box,
  Zap,
  TrendingUp,
  Server,
  Briefcase,
  Users,
  Target,
  BookOpen,
  FileText,
  LifeBuoy,
  Lock,
  CheckCircle,
  Code2,
  Smartphone,
  Bot,
  ShieldCheck,
  LockIcon,
  Database,
  Settings2,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

const products = [
  { title: "SWOT PAM", href: "/products/pam", icon: Shield },
  { title: "SWOTCloudPAM", href: "/products/SWOTCloudPAMPage", icon: Cloud },
  { title: "SWOT DAM", href: "/products/SWOTDAMPage", icon: Box },
  { title: "AIquinox", href: "/products/AiquinoxPage", icon: TrendingUp },
  { title: "BPMAutomation", href: "/products/BPMAutomationPage", icon: Zap },
  { title: "RBVM", href: "/products/rbvm", icon: Box },
];

const services = [
  {
    title: "Software Development",
    href: "#",
    icon: Code2,
  },
  {
    title: "Mobile App Development",
    href: "#",
    icon: Smartphone,
  },
  { title: "AI & Automation", href: "#", icon: Bot },
  { title: "Cybersecurity", href: "#", icon: ShieldCheck },
  { title: "Cloud Infrastructure", href: "#", icon: Cloud },
  { title: "Private Cloud Consulting", href: "#", icon: LockIcon },
  { title: "Database Services", href: "#", icon: Database },
  { title: "IoT & Edge Computing", href: "#", icon: Settings2 },
];

const company = [
  { title: "Solutions", href: "/solutions", icon: BookOpen },
  { title: "About Us", href: "/about-us", icon: Users },
  // { title: "Client Success", href: "/client-success", icon: Briefcase },
  { title: "Why Rudratic", href: "/why-rudratic", icon: Target },
];

const resources = [
  { title: "Documentation", href: "/resources/documentation", icon: FileText },
  { title: "Case Studies", href: "/resources/case-studies", icon: BookOpen },
  { title: "Blog", href: "/blog", icon: BookOpen },
  { title: "Support", href: "/support", icon: LifeBuoy },
];

const socialIcons = [
  { icon: Facebook, link: "#" },
  { icon: Twitter, link: "#" },
  { icon: Linkedin, link: "#" },
  { icon: Instagram, link: "#" },
];

const legalLinks = [
  { title: "Privacy Policy", href: "/legal/privacy-policy" },
  { title: "Terms of Service", href: "/legal/terms-of-service" },
  { title: "Security", href: "/legal/security" },
  { title: "Compliance", href: "/legal/compliance" },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-base-content/10 bg-gradient-to-b from-base-300/60 to-base-200/60 backdrop-blur-xl">
      <img
        src="/rudratic new logo.png"
        alt="LOGO"
        className="fixed -bottom-50 w-full opacity-5"
      />

      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute top-0 left-0 w-[700px] h-[700px] opacity-20 fill-primary blur-3xl"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M39.8,-65.5C51.2,-56.4,60.3,-43.2,68.6,-28.4C76.9,-13.6,84.5,2.9,80.8,15.8C77,28.6,61.9,37.8,49.2,49.3C36.4,60.8,25.9,74.5,12,82.7C-1.9,90.8,-18.9,93.4,-35,88.4C-51.1,83.3,-66.3,70.6,-72.8,54.4C-79.3,38.2,-77.1,18.5,-73.9,0.4C-70.7,-17.6,-66.4,-35.2,-56.7,-46.4C-47,-57.6,-31.9,-62.4,-17.3,-70.4C-2.7,-78.3,11.3,-89.5,24.7,-89.2C38.2,-88.9,50.9,-77.2,39.8,-65.5Z" />
        </svg>

        <svg
          className="absolute bottom-[-150px] right-[-200px] w-[800px] h-[800px] opacity-10 fill-secondary blur-3xl"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M40.1,-64.7C53.7,-56.9,66.4,-46.7,74.3,-33.2C82.2,-19.7,85.3,-3,81.9,12.8C78.5,28.5,68.7,43.4,56,53.8C43.3,64.2,27.7,70.1,12.2,73.3C-3.2,76.5,-18.7,77,-33.3,71.8C-47.9,66.6,-61.6,55.6,-67.9,41.1C-74.2,26.5,-73.1,8.3,-68.8,-8.4C-64.4,-25,-56.8,-40.2,-45.6,-52.2C-34.5,-64.1,-20,-72.9,-5.2,-70.7C9.5,-68.6,19.1,-55.5,40.1,-64.7Z" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12"
        >
          {/* Logo + Info */}
         <motion.div variants={fadeInUp} className="col-span-2 md:col-span-2">
  <Link to="/" className="flex justify-start mb-6">
    <motion.img
      src="/rudratic new logo.png"
      alt="Rudratic Logo"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="h-12 w-auto drop-shadow-[0_0_10px_hsla(var(--p)/0.7)]"
    />
  </Link>

  <p className="text-base-content/70 leading-relaxed mb-4 max-w-sm">
    Rudratic Technologies delivers end-to-end IT solutions across security,
    monitoring, and automation for enterprises worldwide.
  </p>

  {/* Addresses */}
  <div className="text-sm text-base-content/60 leading-relaxed mb-6 space-y-3">
    <div>
      <h4 className="font-semibold text-base-content mb-1">UK Office:</h4>
      <p>
        Rudratic Technologies Ltd., <br />
        47, Courtside, 47-49 Penywern Road, <br />
        London, SW5 9TU
      </p>
    </div>

    <div>
      <h4 className="font-semibold text-base-content mb-1">India Office:</h4>
      <p>
        No.187, 2nd Cross Street, Shanthi Nagar, <br />
        Chromepet, Chennai – 600044
      </p>
    </div>
  </div>

  {/* Social Icons */}
  <div className="flex gap-3">
    {socialIcons.map(({ icon: Icon, link }, i) => (
      <motion.a
        key={i}
        href={link}
        whileHover={{ scale: 1.1, y: -2 }}
        className="relative w-10 h-10 rounded-xl bg-base-content/5 border border-base-content/10 flex items-center justify-center hover:text-primary transition-all duration-300 group"
      >
        <Icon size={18} />
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/30 to-secondary/30 opacity-0 group-hover:opacity-100 blur-md transition-all" />
      </motion.a>
    ))}
  </div>
</motion.div>


          {/* Footer Columns */}
          {[
            { title: "Products", data: products },
            { title: "Services", data: services },
            { title: "Company", data: company },
            { title: "Resources", data: resources },
          ].map(({ title, data }, idx) => (
            <motion.div key={idx} variants={fadeInUp} className="min-w-[150px]">
              <h4 className="text-lg font-semibold mb-4 uppercase tracking-wide text-primary/90 border-b border-base-content/10 pb-1">
                {title}
              </h4>
              <ul className="space-y-2">
                {data.map(({ title, href, icon: Icon }, i) => (
                  <li key={i}>
                    <Link
                      to={href}
                      className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-all text-sm group"
                    >
                      <div className="p-1 rounded-md bg-base-content/5 group-hover:bg-primary/10 transition-colors">
                        <Icon size={14} />
                      </div>
                      <span className="group-hover:translate-x-1 transition-transform">
                        {title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-base-content/10 to-transparent mt-16 mb-8" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-4 text-center text-sm text-base-content/70">
          <div className="flex flex-col md:flex-row justify-center md:justify-between w-full">
            {" "}
            <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap justify-center">
              <span className="flex items-center gap-2">
                <Mail size={14} /> info@rudratic.com
              </span>
              <span className="flex items-center gap-2">
                <Phone size={14} /> +44 7438618490 / +91 9962233803
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> London, UK & Chennai, IN
              </span>
            </div>
            {/* Copyright */}
            <p className="text-xs text-base-content/60">
              © {new Date().getFullYear()}{" "}
              <span className="text-primary font-medium">
                Rudratic Technologies
              </span>
              . All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex justify-center md:justify-start w-full gap-3 md:gap-10  text-[10px] md:text-sm opacity-50">
            {legalLinks.map(({ title, href }, i) => (
              <Link
                key={i}
                to={href}
                className="hover:text-primary transition-colors duration-200"
              >
                {title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
