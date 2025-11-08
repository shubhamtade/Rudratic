import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../Components/Footer';
import { Shield, Target, TrendingUp, Zap } from 'lucide-react';

const RBVMPage = () => {
    return (
        <div className="bg-base-100 min-h-screen">
            <div className="container mx-auto px-4 pt-36 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="badge badge-lg badge-outline border-secondary/50 bg-secondary/10 text-secondary p-4 mb-6 font-semibold">
                        Vulnerability Management
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                        Risk-Based Vulnerability Management
                    </h1>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        Prioritize and remediate the vulnerabilities that pose the greatest risk to your business.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="mt-16 p-8 bg-base-200 rounded-box text-center"
                >
                    <h2 className="text-2xl font-bold text-base-content">
                        Content Coming Soon
                    </h2>
                    <p className="text-base-content/60 mt-4">
                        This page is under construction. Detailed information about our Vulnerability Management solution will be available shortly.
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                         <div className="flex items-start gap-4"><Shield className="text-secondary mt-1" size={24}/><div><h3 className="font-bold">Prioritize</h3><p className="text-sm text-base-content/60">Focus on critical threats</p></div></div>
                         <div className="flex items-start gap-4"><Target className="text-secondary mt-1" size={24}/><div><h3 className="font-bold">Remediate</h3><p className="text-sm text-base-content/60">Actionable remediation steps</p></div></div>
                         <div className="flex items-start gap-4"><TrendingUp className="text-secondary mt-1" size={24}/><div><h3 className="font-bold">Report</h3><p className="text-sm text-base-content/60">Track your security posture</p></div></div>
                         <div className="flex items-start gap-4"><Zap className="text-secondary mt-1" size={24}/><div><h3 className="font-bold">Automate</h3><p className="text-sm text-base-content/60">Integrate with your workflows</p></div></div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default RBVMPage;