import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "./Components/Navigation.jsx";
import HomePage from "./Pages/HomePage.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import WhyRudraticPage from "./Pages/WhyRudraticpage.jsx";
import SolutionsPage from "./Pages/SolutionsPage.jsx";
import ClientSuccessPage from "./Pages/ClientSuccessPage.jsx";
import ClientLoginModal from "./Components/modals/ClientLoginModal";
import PAMPage from "./Pages/PAMPage.jsx";
import SWOTDAMPage from "./Pages/SWOTDAMPage.jsx";
import SWOTCloudPAMPage from "./Pages/SWOTCloudPAMPage.jsx";
import BPMAutomationPage from "./Pages/BPMAutomationPage.jsx";
import AiquinoxPage from "./Pages/AiquinoxPage.jsx";
import Appdevelopmentpage from "./Pages/Services/Appdevelopmentpage.jsx";
import Oracleservicespage from "./Pages/Services/Oracleservicespage.jsx";
import SAPconsultpage from "./Pages/Services/SAPconsultpage.jsx";
import IBMservicespage from "./Pages/Services/IBMservicespage.jsx";
import ITinfrastructurepage from "./Pages/Services/ITinfrastructurepage.jsx";
import VMwarepage from "./Pages/Services/VMwarepage.jsx";
import RequestDemoModal from "./Components/modals/RequestDemoModal";
import { useTheme } from "./hooks/useTheme.js";

// ✅ ADD IMPORTS FOR NEW PAGES
import RBVMPage from "./Pages/RBVMPage.jsx";
import TawnyWorkspacePage from "./Pages/TawnyWorkspacePage.jsx";


// Page transition variants
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

// Animated routes wrapper
function AnimatedRoutes() {
  const location = useLocation();

  const wrapWithMotion = (element) => (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {element}
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={wrapWithMotion(<HomePage />)} />
        <Route path="/contact" element={wrapWithMotion(<ContactUs />)} />
        <Route path="/about-us" element={wrapWithMotion(<AboutUsPage />)} />
        <Route path="/why-rudratic" element={wrapWithMotion(<WhyRudraticPage />)} />
        <Route path="/solutions" element={wrapWithMotion(<SolutionsPage />)} />
        <Route path="/client-success" element={wrapWithMotion(<ClientSuccessPage />)} />
        
        <Route path="/products/pam" element={wrapWithMotion(<PAMPage />)} />
        <Route path="/products/SWOTDAMPage" element={wrapWithMotion(<SWOTDAMPage />)} />
        <Route path="/products/SWOTCloudPAMPage" element={wrapWithMotion(<SWOTCloudPAMPage />)} />
        <Route path="/products/AiquinoxPage" element={wrapWithMotion(<AiquinoxPage />)} />
        <Route path="/products/BPMAutomationPage" element={wrapWithMotion(<BPMAutomationPage />)} />

        {/* ✅ ADD NEW ROUTES HERE */}
        <Route path="/products/rbvm" element={wrapWithMotion(<RBVMPage />)} />
        <Route path="/products/tawny-workspace" element={wrapWithMotion(<TawnyWorkspacePage />)} />


        {/* Services Routes */}
        <Route path="/services/app-development" element={wrapWithMotion(<Appdevelopmentpage />)} />
        <Route path="/services/oracle" element={wrapWithMotion(<Oracleservicespage />)} />
        <Route path="/services/sap" element={wrapWithMotion(<SAPconsultpage />)} />
        <Route path="/services/ibm" element={wrapWithMotion(<IBMservicespage />)} />
        <Route path="/services/it-infrastructure" element={wrapWithMotion(<ITinfrastructurepage />)} />
        <Route path="/services/vmware" element={wrapWithMotion(<VMwarepage />)} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    window.openLoginModal = () => setIsLoginModalOpen(true);
    window.openDemoModal = () => setIsDemoModalOpen(true);
    return () => {
      delete window.openLoginModal;
      delete window.openDemoModal;
    };
  }, []);

  return (
    <Router>
      <Navigation theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-[2]">
        <AnimatedRoutes />
      </main>
      <ClientLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      <RequestDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </Router>
  );
}

export default App;