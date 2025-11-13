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
import RequestDemoModal from "./Components/modals/RequestDemoModal";
import { useTheme } from "./hooks/useTheme.js";
import UnderDevlopment from "./layouts/UnderDevelopment.jsx";
// ✅ ADD IMPORTS FOR NEW PAGES
import RBVMPage from "./Pages/RBVMPage.jsx";
import TawnyWorkspacePage from "./Pages/TawnyWorkspacePage.jsx";
// ✅ ADDED IMPORTS FOR NEW SERVICE PAGES
import MobileAppDevelopmentPage from "./Pages/Services/MobileAppDevelopmentPage.jsx";
import AIAutomationPage from "./Pages/Services/AIAutomationPage.jsx";
import CybersecurityPage from "./Pages/Services/CybersecurityPage.jsx";
import CloudInfrastructurePage from "./Pages/Services/CloudInfrastructurePage.jsx";
import PrivateCloudPage from "./Pages/Services/PrivateCloudPage.jsx";
import DatabaseServicesPage from "./Pages/Services/DatabaseServicesPage.jsx";
import IoTEdgePage from "./Pages/Services/IoTEdgePage.jsx";
import DigitalTwinPage from "./Pages/Services/DigitalTwinPage.jsx";
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
        <Route
          path="/why-rudratic"
          element={wrapWithMotion(<WhyRudraticPage />)}
        />
        <Route path="/solutions" element={wrapWithMotion(<SolutionsPage />)} />
        <Route
          path="/client-success"
          element={wrapWithMotion(<ClientSuccessPage />)}
        />
        code Code
        <Route path="/products/pam" element={wrapWithMotion(<PAMPage />)} />
        <Route
          path="/products/SWOTDAMPage"
          element={wrapWithMotion(<SWOTDAMPage />)}
        />
        <Route
          path="/products/SWOTCloudPAMPage"
          element={wrapWithMotion(<SWOTCloudPAMPage />)}
        />
        <Route
          path="/products/AiquinoxPage"
          element={wrapWithMotion(<AiquinoxPage />)}
        />
        <Route
          path="/products/BPMAutomationPage"
          element={wrapWithMotion(<BPMAutomationPage />)}
        />
        {/* ✅ ADD NEW ROUTES HERE */}
        <Route path="/products/rbvm" element={wrapWithMotion(<RBVMPage />)} />
        <Route
          path="/products/tawny-workspace"
          element={wrapWithMotion(<TawnyWorkspacePage />)}
        />
        {/* ✅ MODIFIED & EXPANDED: Services Routes */}
        <Route
          path="/services/software-development"
          element={wrapWithMotion(<Appdevelopmentpage />)}
        />
        <Route
          path="/services/mobile-app-development"
          element={wrapWithMotion(<MobileAppDevelopmentPage />)}
        />
        <Route
          path="/services/ai-automation"
          element={wrapWithMotion(<AIAutomationPage />)}
        />
        <Route
          path="/services/cybersecurity"
          element={wrapWithMotion(<CybersecurityPage />)}
        />
        <Route
          path="/services/cloud-infrastructure"
          element={wrapWithMotion(<CloudInfrastructurePage />)}
        />
        <Route
          path="/services/private-cloud"
          element={wrapWithMotion(<PrivateCloudPage />)}
        />
        <Route
          path="/services/database-services"
          element={wrapWithMotion(<DatabaseServicesPage />)}
        />
        <Route
          path="/services/iot-edge-computing"
          element={wrapWithMotion(<IoTEdgePage />)}
        />
        <Route
          path="/services/digital-twin"
          element={wrapWithMotion(<DigitalTwinPage />)}
        />
        <Route
          path="/underDevlopment"
          element={wrapWithMotion(<UnderDevlopment />)}
        />
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
