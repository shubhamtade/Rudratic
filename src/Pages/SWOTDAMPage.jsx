import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../Components/Footer";
import { Search, Shield, FileText, CheckCircle2, Code, MessageSquare, ArrowRight } from "lucide-react";

// Custom CSS (no changes needed)
const CustomStyles = () => (
    <style jsx global>{`
        body::before { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; background-image: radial-gradient(hsl(var(--bc) / 0.1) 1px, transparent 0); background-size: 20px 20px; animation: pan-background 40s linear infinite; }
        @keyframes pan-background { 0% { background-position: 0% 0%; } 100% { background-position: 100% 100%; } }
        body::after { content: ''; position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -2; background: radial-gradient(circle at 10% 80%, hsl(var(--p)/0.1), transparent 40%), radial-gradient(circle at 90% 20%, hsl(200, 80%, 50%, 0.1), transparent 40%); animation: move-glow 25s infinite alternate ease-in-out; }
        @keyframes move-glow { from { transform: scale(1) translate(0, 0); } to { transform: scale(1.3) translate(-5vw, 5vh); } }
        .feature-card { position: relative; background-color: hsl(var(--b2) / 0.5); border: 1px solid hsl(var(--bc) / 0.1); backdrop-filter: blur(8px); transition: transform 0.3s ease, box-shadow 0.3s ease; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 20px 30px -10px hsl(var(--p) / 0.2); border-color: hsl(var(--p) / 0.3); }
    `}</style>
);

// ==================================================================
// ========== HELPER COMPONENTS WITH REFINED STYLING ==========
// ==================================================================

// "Before" component, styled to match the image
const BeforeComponent = () => (
    <div className="p-6 md:p-8 space-y-4">
        <h3 className="text-xl font-bold text-neutral-focus">The Old Way: Complex & Slow</h3>
        <p className="text-base-content/70">An analyst spends hours writing, testing, and running a complex query, creating a bottleneck for the business.</p>
        <div className="mockup-code text-sm bg-base-200 text-base-content/60 border border-base-content">
  <pre data-prefix=" "><code>-- 3+ hours of work...</code></pre>
  <pre data-prefix=" "><code>SELECT c.customer_name, SUM(o.order_value)</code></pre>
  <pre data-prefix=" "><code>FROM customers c JOIN orders o ...</code></pre>
  <pre data-prefix=" "><code>WHERE c.signup_date {'<'} NOW() ...</code></pre>
  <pre data-prefix=" "><code>GROUP BY c.customer_name ...</code></pre>
</div>
    </div>
);

// "After" component, styled to match the image
const AfterComponent = () => (
    <div className="p-6 md:p-8 space-y-6">
        <div>
            <h3 className="text-xl font-bold text-green-600">The SWOT Way: Simple & Instant</h3>
            <p className="text-base-content/70">Anyone on your team can ask a simple question and get an immediate, actionable answer.</p>
        </div>
        <div className="relative w-full">
            <input type="text" readOnly value="Show me our top 10 customers by lifetime value who haven't purchased in 90 days" className="input input-bordered w-full h-14 pl-6 pr-16 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400" />
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="btn btn-circle bg-orange-400 hover:bg-orange-500 border-none absolute top-1/2 right-2 transform -translate-y-1/2">
                <ArrowRight size={24} className="text-white"/>
            </motion.button>
        </div>
        <div className="p-4 bg-green-500/10 rounded-xl text-green-700 flex items-center gap-4">
            <div className="bg-white p-1 rounded-full shadow-sm"><CheckCircle2 size={24}/></div>
            <div>
                <h5 className="font-bold">Result Generated in 12 Seconds</h5>
                <p className="text-sm text-green-600/80">Report delivered to your inbox with full customer breakdown and churn risk analysis.</p>
            </div>
        </div>
    </div>
);


const SWOTDAMPage = () => {
    const [activeTab, setActiveTab] = useState('ai');

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
    };
    const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

    return (
        <div className="bg-base-100 text-base-content overflow-x-hidden">
            <CustomStyles />
            {/* --- Hero, Crisis, and Difference Sections (Unchanged) --- */}
            <div className="relative text-center container mx-auto px-4 pt-36 pb-24"><motion.div initial="hidden" animate="visible" variants={staggerContainer} className="flex flex-col items-center"><motion.div variants={fadeInUp} className="badge badge-lg border-primary/50 bg-primary/10 text-primary p-4 mb-6 font-semibold">SWOT DAM 3.0</motion.div><motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold mb-6 max-w-5xl">Detect Threats in Milliseconds. <br /> <span className="bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">Understand Your Data Instantly.</span></motion.h1><motion.p variants={fadeInUp} className="max-w-3xl mx-auto text-lg text-base-content/70 leading-relaxed mb-10">AI-driven database monitoring + semantic intelligence — built to predict, protect, and empower your entire organization.</motion.p><motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center"><motion.button whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px -5px hsl(var(--p)/0.4)" }} whileTap={{ scale: 0.95 }} className="btn btn-primary btn-lg shadow-lg">Book Your 30-Minute Demo</motion.button><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-ghost btn-lg">Take the 2-Minute Risk Assessment</motion.button></motion.div></motion.div></div>
            <div className="container mx-auto px-4 pb-24 space-y-28">
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}><motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-center">The Modern Database Crisis</motion.h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="card bg-base-200/50 p-8 border-l-4 border-error transition-transform"><h3 className="text-2xl font-bold mb-4 text-error">Your Security Reality</h3><ul className="space-y-4 list-disc list-inside text-base-content/80"><li><strong>40% of breaches</strong> involve insider threats or credential abuse.</li><li>Average cost of a database breach: <strong>$4.45 million</strong>.</li><li><strong>70% of enterprises</strong> report alert fatigue from false positives.</li><li>DBAs have unlimited access and can control their own audit logs.</li></ul></motion.div><motion.div variants={fadeInUp} whileHover={{ y: -5 }} className="card bg-base-200/50 p-8 border-l-4 border-info transition-transform"><h3 className="text-2xl font-bold mb-4 text-info">Your Operations Reality</h3><ul className="space-y-4 list-disc list-inside text-base-content/80"><li>Analysts spend <strong>40% of their time</strong> just searching for the right data.</li><li>Only <strong>5-10% of employees</strong> can write SQL, creating a huge bottleneck.</li><li>Compliance audit prep takes <strong>10+ days</strong> of manual, error-prone work.</li><li>Sensitive data is scattered, and you don't know where it is.</li></ul></motion.div></div></motion.section>
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}><motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-12 text-center">The SWOT DAM 3.0 Difference</motion.h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{[{ icon: Shield, title: "AI-Powered Threat Detection", desc: "Our AI learns normal behavior to detect insider threats in 7 days and reduces false positives by 80%." },{ icon: Search, title: "Semantic Data Intelligence", desc: "Ask questions in plain English, not SQL. Our AI understands business context, creating reports in minutes." },{ icon: FileText, title: "Automated Compliance", desc: "Get one-click, audit-ready reports for GDPR, HIPAA, PCI DSS & SOX. Reduce prep time from 10 days to 2 hours." }].map((item, index) => (<motion.div key={index} variants={fadeInUp} className="feature-card card p-8 text-center flex flex-col"><motion.div whileHover={{ scale: 1.1, rotate: 10 }} className="inline-block p-4 bg-primary/10 rounded-full mb-6 mx-auto"><item.icon size={40} className="text-primary"/></motion.div><h3 className="font-bold text-xl mb-3">{item.title}</h3><p className="text-base-content/70 flex-grow">{item.desc}</p></motion.div>))}</div></motion.section>

                {/* ============================================================= */}
                {/* ========== FINAL RESPONSIVE COMPARISON SECTION ========== */}
                {/* ============================================================= */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={staggerContainer}>
                    <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4 text-center">From SQL to English: The AI Revolution</motion.h2>
                    <motion.p variants={fadeInUp} className="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
                        Stop waiting on analysts. Empower your entire team to get instant insights from your most valuable asset: your data.
                    </motion.p>
                    <motion.div variants={fadeInUp} className="card bg-base-100 border border-base-content/10 shadow-xl overflow-hidden">
                        {/* --- Mobile View (Tabs) --- */}
                        <div className="lg:hidden">
                            <div className="p-4 border-b border-base-content/10 flex justify-center gap-2">
                                <button onClick={() => setActiveTab('sql')} className={`btn btn-sm rounded-full gap-2 transition-all ${activeTab === 'sql' ? 'bg-base-300' : 'btn-ghost'}`}><Code size={16}/> Before</button>
                                <button onClick={() => setActiveTab('ai')} className={`btn btn-sm rounded-full gap-2 transition-all ${activeTab === 'ai' ? 'bg-teal-400/20 text-teal-600' : 'btn-ghost'}`}><MessageSquare size={16}/> After</button>
                            </div>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {activeTab === 'sql' ? <BeforeComponent /> : <AfterComponent />}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                        
                        {/* --- Desktop View (Side-by-side) --- */}
                        <div className="hidden lg:grid lg:grid-cols-2 lg:divide-x lg:divide-base-content/10">
                            <BeforeComponent />
                            <AfterComponent />
                        </div>
                    </motion.div>
                </motion.section>

                {/* --- Final CTA Section (Unchanged) --- */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={fadeInUp}>
                     <div className="relative rounded-2xl p-10 md:p-16 text-center overflow-hidden bg-gradient-to-r from-primary to-cyan-500 text-primary-content shadow-2xl shadow-primary/30">
                        <h2 className="text-3xl font-bold mb-4">Unlock the True Power of Your Data</h2>
                        <p className="max-w-2xl mx-auto mb-8 text-primary-content/80">Stop reacting to data breaches and operational bottlenecks. It's time to proactively secure and leverage your most critical asset.</p>
                        <motion.button whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px -5px hsl(var(--pc))" }} whileTap={{ scale: 0.95 }} className="btn btn-neutral btn-lg">Request a Personalized Demo</motion.button>
                     </div>
                </motion.section>
            </div>
            <Footer />
        </div>
    );
};

export default SWOTDAMPage;