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
  Calendar,
  Shield,
  Cloud,
  Box,
  Zap,
  TrendingUp,
  LayoutGrid,
  Server,
  Briefcase,
  Users,
  Target,
  BookOpen,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "../utils/animations";

// Footer links mapped from Navigation data
const products = [
  { title: "SWOT-PAM", href: "/products/pam", icon: Shield },
  { title: "SWOTCloudPAM", href: "/products/SWOTCloudPAMPage", icon: Cloud },
  { title: "RBVM", href: "/products/rbvm", icon: Box },
  { title: "SWOTDAM", href: "/products/SWOTDAMPage", icon: Box },
  { title: "BPMAutomation", href: "/products/BPMAutomationPage", icon: Zap },
  { title: "AIquinox", href: "/products/AiquinoxPage", icon: TrendingUp },
  { title: "Tawny Workspace", href: "/products/tawny-workspace", icon: LayoutGrid },
];

const services = [
  { title: "Application Development", href: "/services/app-development", icon: Box },
  { title: "IT Infrastructure", href: "/services/it-infrastructure", icon: Server },
  { title: "VMware Solutions", href: "/services/vmware", icon: Cloud },
  { title: "Oracle Services", href: "/services/oracle", icon: Briefcase },
  { title: "SAP Consulting", href: "/services/sap", icon: Briefcase },
  { title: "IBM Services", href: "/services/ibm", icon: Briefcase },
];

const company = [
  { title: "Solutions", href: "/solutions", icon: BookOpen },
  { title: "About us", href: "/about-us", icon: Users },
  { title: "Client Success", href: "/client-success", icon: Briefcase },
  { title: "Why Rudratic", href: "/why-rudratic", icon: Target },
];

const socialIcons = [
  { icon: Facebook, link: "#" },
  { icon: Twitter, link: "#" },
  { icon: Linkedin, link: "#" },
  { icon: Instagram, link: "#" },
];

const Footer = () => {
  return (
    <footer className="relative bg-base-200 border-t border-base-content/10 overflow-hidden pt-20 pb-10">
      <div className="container mx-auto px-6 lg:px-10 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Logo & Description */}
          <motion.div variants={fadeInUp} className="text-center sm:text-left">
            <Link to="/" className="flex justify-center sm:justify-start mb-6">
              <motion.img
                src="/rudratic new logo.png"
                alt="RUDRATIC Logo"
                whileHover={{ scale: 1.07, filter: "drop-shadow(0 0 15px hsla(var(--p)/0.9))" }}
                transition={{ type: "spring", stiffness: 200 }}
                className="h-10 md:h-12 w-auto object-contain drop-shadow-[0_0_10px_hsla(var(--p)/0.7)]"
              />
            </Link>
            <p className="text-base-content/70 leading-relaxed mb-8 max-w-sm mx-auto sm:mx-0">
              Rudratic Technologies delivers end-to-end IT solutions across security, monitoring, and automation for enterprises globally.
            </p>

            {/* Social Icons */}
            <div className="flex justify-center sm:justify-start gap-4">
              {socialIcons.map(({ icon: Icon, link }, i) => (
                <motion.a
                  key={i}
                  href={link}
                  whileHover={{ scale: 1.15, y: -2, boxShadow: "0 0 15px hsla(var(--p)/0.4)" }}
                  className="relative w-10 h-10 rounded-full bg-base-content/5 border border-base-content/10 flex items-center justify-center hover:text-primary transition-all duration-300 group"
                >
                  <Icon size={18} className="relative z-10" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 blur-md transition-all"></div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Products */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-base-content mb-4 uppercase tracking-wide border-b border-base-content/10 pb-1">
              Products
            </h4>
            <ul className="space-y-2">
              {products.map(({ title, href, icon: Icon }, i) => (
                <li key={i}>
                  <Link
                    to={href}
                    className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors text-sm group"
                  >
                    <Icon size={16} />
                    <span className="group-hover:translate-x-1 transition-transform">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-base-content mb-4 uppercase tracking-wide border-b border-base-content/10 pb-1">
              Services
            </h4>
            <ul className="space-y-2">
              {services.map(({ title, href, icon: Icon }, i) => (
                <li key={i}>
                  <Link
                    to={href}
                    className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors text-sm group"
                  >
                    <Icon size={16} />
                    <span className="group-hover:translate-x-1 transition-transform">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-base-content mb-4 uppercase tracking-wide border-b border-base-content/10 pb-1">
              Company
            </h4>
            <ul className="space-y-2">
              {company.map(({ title, href, icon: Icon }, i) => (
                <li key={i}>
                  <Link
                    to={href}
                    className="flex items-center gap-2 text-base-content/70 hover:text-primary transition-colors text-sm group"
                  >
                    <Icon size={16} />
                    <span className="group-hover:translate-x-1 transition-transform">{title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Contact Info & Legal */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-center text-sm text-base-content/70">
          <div className="flex flex-col sm:flex-row items-center gap-4">
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
          <p className="text-xs text-base-content/50">
            © {new Date().getFullYear()} <span className="text-primary font-medium">Rudratic Technologies</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
