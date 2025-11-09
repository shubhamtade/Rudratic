import React, { useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Footer from "../layouts/Footer";
import {
  Shield,
  Cpu,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Globe2,
  Lock,
  BarChart3,
  ArrowRight,
} from "lucide-react";

// Helper for animated number count-up
const AnimatedNumber = ({ value }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const isNumber = !isNaN(parseFloat(value));

  useEffect(() => {
    if (inView && isNumber) {
      controls.start({
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.1,
          onComplete: () => {
            const numericValue = parseFloat(value);
            controls.set({ innerHTML: 0 }); // Use a non-state way to update innerHTML for performance
            const animation = controls.start({
              innerHTML: numericValue,
              transition: {
                duration: 1.5,
                ease: "easeOut",
                // Custom property for Framer Motion to animate
                onUpdate: (latest) => {
                  if (ref.current) {
                    ref.current.innerHTML = Math.round(latest).toLocaleString();
                  }
                },
              },
            });
            return () => animation.stop();
          },
        },
      });
    }
    if (!isNumber) {
      controls.start({ opacity: 1, transition: { duration: 0.5 } });
    }
  }, [inView, controls, value, isNumber]);

  // For non-numeric values, just render them
  if (!isNumber) {
    return (
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
        {value}
      </motion.div>
    );
  }

  // For numbers, start with 0 and let the animation fill it in
  return (
    <motion.div ref={ref} initial={{ opacity: 0 }} animate={controls}>
      0
    </motion.div>
  );
};

// Custom CSS for unique, cloud-centric visuals
const CustomStyles = () => (
  <style jsx global>{`
    /* --- Ethereal Animated Cloud/Nebula Background --- */
    body::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: radial-gradient(
          circle at 20% 30%,
          hsl(var(--wa) / 0.1),
          transparent 40%
        ),
        radial-gradient(
          circle at 80% 70%,
          hsl(30, 90%, 50%, 0.1),
          transparent 40%
        );
      animation: drift-glow 30s infinite alternate ease-in-out;
    }

    @keyframes drift-glow {
      0% {
        transform: scale(1) translate(0, 0);
        opacity: 0.8;
      }
      100% {
        transform: scale(1.4) translate(-10vw, 10vh);
        opacity: 1;
      }
    }

    /* --- Card with animated glow on hover --- */
    .glow-card {
      position: relative;
      background-color: hsl(var(--b2) / 0.4);
      border: 1px solid hsl(var(--bc) / 0.1);
      backdrop-filter: blur(8px);
      transition: transform 0.3s ease, box-shadow 0.3s ease,
        border-color 0.3s ease;
    }

    .glow-card:hover {
      transform: translateY(-8px);
      border-color: hsl(var(--wa) / 0.3);
      box-shadow: 0 20px 40px -15px hsl(var(--wa) / 0.25);
    }
  `}</style>
);

const SWOTCloudPAMPage = () => {
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
    <div className="bg-base-100 text-base-content overflow-x-hidden">
      <CustomStyles />

      {/* Hero Section */}
      <div className="relative text-center container mx-auto px-4 pt-36 pb-24">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={fadeInUp}
            className="badge badge-lg border-warning/50 bg-warning/10 text-warning p-4 mb-6 font-semibold"
          >
            SWOT Cloud PAM
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 max-w-5xl"
          >
            The Only{" "}
            <span className="bg-gradient-to-r from-warning to-orange-400 bg-clip-text text-transparent">
              AI-Native Platform
            </span>{" "}
            to Eliminate Privilege Abuse Before It Happens
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="max-w-4xl mx-auto text-lg text-base-content/70 leading-relaxed mb-10"
          >
            Stop reacting to security threats. SWOT Cloud PAM predicts,
            prevents, and automatically responds to privilege abuse in
            real-time—combining zero standing privileges and behavioral
            intelligence.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px -5px hsl(var(--wa)/0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-warning btn-lg shadow-lg"
            >
              Request a Cloud Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-ghost btn-lg"
            >
              Read the Whitepaper
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pb-24 space-y-28">
        {/* The Problem Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Why Traditional PAM Can't Keep Up
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Globe2,
                title: "Dynamic Cloud Infrastructure",
                desc: "Cloud resources change constantly, but legacy PAM policies remain static, causing huge security gaps.",
              },
              {
                icon: AlertTriangle,
                title: "Sophisticated Account Threats",
                desc: "Insider threats and credential compromise blend in, making them nearly impossible for rule-based systems to detect.",
              },
              {
                icon: BarChart3,
                title: "Compliance & Operational Burden",
                desc: "Manual audits are expensive, slow, and often miss subtle privileged abuses in dynamic cloud environments.",
              },
              {
                icon: Lock,
                title: "Fragmented Multi-Cloud Controls",
                desc: "Different IAM models across clouds force inconsistent security, increasing risk and operational overhead.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glow-card card p-6"
              >
                <motion.div whileHover={{ scale: 1.15, rotate: -10 }}>
                  <item.icon size={36} className="text-warning mb-4" />
                </motion.div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-base-content/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* The SWOT Solution Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            The SWOT Solution: AI-Native From the Ground Up
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Cpu,
                title: "Intelligence Woven In",
                desc: "Our intelligence is part of every component, not a bolted-on feature. It understands your entire security landscape.",
              },
              {
                icon: Shield,
                title: "Zero Standing Privileges",
                desc: "All privileges are ephemeral and context-aware. They automatically expire and cannot be reused or stolen by attackers.",
              },
              {
                icon: Zap,
                title: "Autonomous Response",
                desc: "When threats are detected, SWOT takes automated action: revoking access, enforcing MFA, or terminating sessions instantly.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="glow-card card p-8 text-center flex flex-col items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-warning/10 rounded-full mb-6"
                >
                  <item.icon size={40} className="text-warning" />
                </motion.div>
                <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-base-content/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Core Capabilities Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Core Cloud Capabilities
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Zero Standing Privilege (ZSP)",
              "AI Behavioral Anomaly Detection",
              "Intelligent Session Analysis",
              "Unified Multi-Cloud Control",
              "Native Kubernetes Security",
              "Service Account & CI/CD Security",
              "Automated Compliance Reporting",
              "Just-In-Time (JIT) Self-Service",
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex items-center gap-3 p-4 bg-warning/5 border border-warning/10 rounded-xl hover:bg-warning/10 transition-colors"
              >
                <CheckCircle2
                  size={22}
                  className="text-warning flex-shrink-0"
                />
                <span className="font-semibold text-base-content">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ROI Section */}
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
            Measurable ROI & Business Impact
          </motion.h2>
          <motion.div
            variants={fadeInUp}
            className="card bg-base-200/40 border border-warning/20 backdrop-blur-md p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { value: "3.1M", label: "Average Annual Benefit", prefix: "$" },
                {
                  value: "50",
                  label: "Reduction in IT Admin Labor",
                  suffix: "%",
                },
                { value: "80", label: "Faster Compliance Audits", suffix: "%" },
                { value: "3-6 months", label: "Typical Payback Period" },
              ].map((stat, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <div className="flex justify-center items-baseline text-5xl font-bold bg-gradient-to-r from-warning to-orange-400 bg-clip-text text-transparent">
                    {stat.prefix && <span className="mr-1">{stat.prefix}</span>}
                    <AnimatedNumber value={stat.value} />
                    {stat.suffix && <span className="ml-1">{stat.suffix}</span>}
                  </div>
                  <p className="font-semibold text-base-content/80 mt-2">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
        >
          <div className="relative rounded-2xl p-10 md:p-16 text-center overflow-hidden bg-gradient-to-r from-warning to-orange-500 text-primary-content shadow-2xl shadow-warning/30">
            <h2 className="text-3xl font-bold mb-4">
              Go Beyond Prevention. Achieve Autonomous Cloud Security.
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-content/80">
              See how SWOT's AI-native platform can eliminate your cloud
              privilege risks in a personalized 30-minute demo.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px -5px hsl(var(--bc))",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-neutral btn-lg"
            >
              Schedule Your Demo <ArrowRight className="ml-2" />
            </motion.button>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default SWOTCloudPAMPage;
