import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../layouts/Footer';
import { Box, Sliders, Users, BarChart } from 'lucide-react';

const TawnyWorkspacePage = () => {
    return (
        <div className="bg-base-100 min-h-screen">
            <div className="container mx-auto px-4 pt-36 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <div className="badge badge-lg badge-outline border-primary/50 bg-primary/10 text-primary p-4 mb-6 font-semibold">
                        Product Management
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                        Tawny Workspace
                    </h1>
                    <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
                        An integrated platform to design, manage, and monitor your products efficiently.
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
                        This page is under construction. Detailed information about Tawny Workspace will be available shortly.
                    </p>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                         <div className="flex items-start gap-4"><Box className="text-primary mt-1" size={24}/><div><h3 className="font-bold">Organize</h3><p className="text-sm text-base-content/60">Centralize product assets</p></div></div>
                         <div className="flex items-start gap-4"><Sliders className="text-primary mt-1" size={24}/><div><h3 className="font-bold">Manage</h3><p className="text-sm text-base-content/60">Control your workflows</p></div></div>
                         <div className="flex items-start gap-4"><Users className="text-primary mt-1" size={24}/><div><h3 className="font-bold">Collaborate</h3><p className="text-sm text-base-content/60">Work with your team</p></div></div>
                         <div className="flex items-start gap-4"><BarChart className="text-primary mt-1" size={24}/><div><h3 className="font-bold">Analyze</h3><p className="text-sm text-base-content/60">Monitor performance</p></div></div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    );
};

export default TawnyWorkspacePage;