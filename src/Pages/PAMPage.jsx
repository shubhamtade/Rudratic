import React from "react";
import { motion } from "framer-motion";
import Footer from "../layouts/Footer";
import {
  Shield,
  Zap,
  Target,
  Brain,
  Users,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

// Helper component for custom CSS to keep the main component clean
// The CSS here is for effects that are difficult or verbose to do with Tailwind alone.
const CustomStyles = () => (
  <style jsx global>{`
    /* --- Animated Gradient Background --- */
    body {
      position: relative; /* Needed for the pseudo-element */
    }
    body::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: radial-gradient(
          circle at 10% 20%,
          hsl(var(--a) / 0.08),
          transparent 40%
        ),
        radial-gradient(
          circle at 90% 80%,
          hsl(var(--p) / 0.08),
          transparent 40%
        );
      animation: moveGlow 20s infinite alternate ease-in-out;
    }

    @keyframes moveGlow {
      0% {
        transform: scale(1) translate(0, 0);
        opacity: 0.8;
      }
      100% {
        transform: scale(1.2) translate(10vw, -10vh);
        opacity: 1;
      }
    }

    /* --- Animated Gradient Border on Cards --- */
    .pillar-card {
      position: relative;
      overflow: hidden;
      border: 1px solid hsl(var(--bc) / 0.1);
      background-color: hsl(var(--b2) / 0.5);
      backdrop-filter: blur(10px);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    .pillar-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 30px -10px hsl(var(--p) / 0.2);
    }
    .pillar-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: inherit;
      padding: 1px;
      background: linear-gradient(
        135deg,
        hsl(var(--a) / 0.5),
        hsl(var(--p) / 0.5)
      );
      -webkit-mask: linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    .pillar-card:hover::before {
      opacity: 1;
    }
  `}</style>
);

const PAMPage = () => {
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
            className="badge badge-lg border-accent/50 bg-accent/10 text-accent p-4 mb-6 font-semibold"
          >
            🚀 World's First AI-Native PAM
          </motion.div>
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl"
          >
            The Future of{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Privileged Access
            </span>{" "}
            is Here
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed mb-8"
          >
            SWOT PAM is the world's first AI-native Privileged Access Management
            platform, built from the ground up to address the new and evolving
            cyber threat landscape.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl w-full mx-auto card bg-base-200/50 p-6 border-l-4 border-accent shadow-lg backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-accent mb-2 flex items-center gap-2">
              <Brain size={24} /> Core Innovation: VLP + Offline LLM
            </h3>
            <p className="text-base-content/80">
              Our unique combination enables us to understand context, intent,
              and behavior patterns with unprecedented accuracy all while
              maintaining complete data privacy and security. This is not an
              add-on; it's the foundation of everything we build.
            </p>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 20px -5px hsl(var(--p)/0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-lg shadow-lg"
            >
              Schedule a Demo
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-ghost btn-lg"
            >
              Explore Innovation
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pb-24 space-y-28">
        {/* Pillars Section */}
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
            Three Pillars of SWOT PAM
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Proactive Threat Defense",
                desc: "Our AI detects and prevents malicious behavior in real-time by analyzing context, intent, and user behavior.",
                metric: "Threats neutralized in <15 minutes",
              },
              {
                icon: Zap,
                title: "Automated Intent-Aware Approvals",
                desc: "Our VLP technology automates access requests by understanding the reason, reducing approval times from hours to seconds.",
                metric: "Approval time: Hours → Seconds",
              },
              {
                icon: Target,
                title: "Reduced Attack Surface",
                desc: "Our 'Just-in-Time' privilege removes standing privileges, reducing your exposure to threats by up to 70%.",
                metric: "70% reduction in attack surface",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="pillar-card card p-8 text-center flex flex-col"
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="inline-block p-4 bg-accent/10 rounded-full mb-6 mx-auto"
                >
                  <item.icon size={40} className="text-accent" />
                </motion.div>
                <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-base-content/70 mb-6 flex-grow">
                  {item.desc}
                </p>
                <div className="mt-auto badge badge-lg bg-success/10 text-success font-semibold p-4">
                  {item.metric}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* The AI Difference Section */}
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
            The AI-Native Difference
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto"
          >
            See how our VLP + Offline LLM core transforms privileged access from
            a manual chore into an intelligent, automated defense system.
          </motion.p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {[
              {
                icon: Users,
                title: "1. Access Request",
                desc: "A user requests privileged access with a stated reason (intent).",
              },
              {
                icon: Brain,
                title: "2. AI Analysis",
                desc: "SWOT's VLP and LLM analyze intent, context, and user behavior against security policies.",
              },
              {
                icon: CheckCircle2,
                title: "3. Smart Decision",
                desc: "Access is automatically approved or denied in seconds with 'Just-in-Time' privileges.",
              },
            ].map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  variants={fadeInUp}
                  className="card bg-base-200/50 p-6 w-full md:w-1/4 text-center border border-base-content/10"
                >
                  <div className="inline-block p-3 bg-primary/10 rounded-full mb-4 mx-auto">
                    <step.icon size={32} className="text-primary" />
                  </div>
                  <h4 className="font-bold">{step.title}</h4>
                  <p className="text-sm text-base-content/70 mt-1">
                    {step.desc}
                  </p>
                </motion.div>
                {index < 2 && (
                  <motion.div
                    variants={fadeInUp}
                    className="hidden md:block text-primary/50 mx-6"
                  >
                    <ArrowRight size={40} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.section>

        {/* Business Benefits Section */}
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
            Strategic Business Outcomes
          </motion.h2>
          <div className="space-y-12">
            {/* Tiers Data */}
            {[
              {
                tier: "TIER 1",
                title: "Risk Reduction & Breach Prevention",
                color: "text-success",
                benefits: [
                  {
                    title: "Enhanced Cyber Resilience",
                    desc: "Detect and respond to threats in minutes, reducing breach impact by 95%.",
                  },
                  {
                    title: "Insider Threat Prevention",
                    desc: "Behavior analytics identify insider risks before data loss occurs.",
                  },
                  {
                    title: "Reduced Attack Surface",
                    desc: "Zero standing privileges eliminate vectors for both internal and external attacks.",
                  },
                ],
              },
              {
                tier: "TIER 2",
                title: "Compliance & Operational Efficiency",
                color: "text-info",
                benefits: [
                  {
                    title: "Automated Compliance",
                    desc: "Meet NIST, HIPAA, GDPR, SOX, and PCI-DSS standards with one-click audit trails.",
                  },
                  {
                    title: "Operational Efficiency",
                    desc: "AI automation reduces manual IT effort by up to 70%, saving weeks of admin time.",
                  },
                  {
                    title: "Business Continuity",
                    desc: "Ensure uninterrupted operations with real-time monitoring and auto-containment.",
                  },
                ],
              },
              {
                tier: "TIER 3",
                title: "Cost Savings & Strategic Advantage",
                color: "text-warning",
                benefits: [
                  {
                    title: "Lower TCO",
                    desc: "Achieve 70% lower Total Cost of Ownership with rapid 2-4 week deployment and 6-12 month ROI.",
                  },
                  {
                    title: "Reduced Insurance Premiums",
                    desc: "Enhanced resilience lowers risk ratings, reducing premiums by 20-30%.",
                  },
                  {
                    title: "Competitive Advantage",
                    desc: "Accelerate operations by 80% with AI-native architecture and 95% user adoption.",
                  },
                ],
              },
            ].map((tier, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <div
                  className={`border-l-4 pl-4 mb-6 border-current ${tier.color}`}
                >
                  <h3 className={`text-2xl font-semibold`}>
                    <span className="font-light text-base-content/50 mr-2">
                      {tier.tier}:
                    </span>
                    {tier.title}
                  </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {tier.benefits.map((benefit, j) => (
                    <motion.div
                      key={j}
                      variants={fadeInUp}
                      whileHover={{ y: -5, transition: { duration: 0.2 } }}
                      className="card bg-base-200/50 p-6 border border-transparent hover:border-base-content/20 transition-colors"
                    >
                      <h4 className="font-bold mb-1">{benefit.title}</h4>
                      <p className="text-sm text-base-content/70">
                        {benefit.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Final CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeInUp}
          className="mt-28"
        >
          <div className="relative rounded-2xl p-10 md:p-16 text-center overflow-hidden bg-gradient-to-r from-primary to-accent text-primary-content shadow-2xl shadow-primary/30">
            <h2 className="text-3xl font-bold mb-4">
              Ready to See the Future of PAM?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-primary-content/80">
              Stop chasing threats and start preventing them. Schedule a
              personalized demo to see how SWOT's AI-native PAM can secure your
              organization, streamline operations, and drive business growth.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 30px -5px hsl(var(--pc))",
              }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-neutral btn-lg"
            >
              Request Your Free Demo
            </motion.button>
          </div>
        </motion.section>
      </div>

      <Footer />
    </div>
  );
};

export default PAMPage;
