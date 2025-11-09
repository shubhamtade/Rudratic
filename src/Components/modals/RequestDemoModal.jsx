import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, User, Building, MapPin, MessageSquare } from 'lucide-react';

const RequestDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', company: '', phone: '', country: '', comments: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demo request submitted:', formData);
    onClose();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const countries = [ 'Select Country', 'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'France', 'India', 'Japan', 'Singapore', 'Other' ];
  
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} onClick={onClose} className="absolute inset-0 bg-base-100/80 backdrop-blur-md" />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-base-200/50 backdrop-blur-2xl border border-primary/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            <motion.div
              animate={{
                background: [
                  'radial-gradient(circle at 20% 30%, hsla(var(--p)/0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 70%, hsla(var(--s)/0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 50% 50%, hsla(var(--a)/0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 30%, hsla(var(--p)/0.3) 0%, transparent 50%)'
                ]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-50%] opacity-50 pointer-events-none blur-2xl"
            />
            
            <div className="relative z-10 p-6 sm:p-10 overflow-y-auto">
              <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={onClose} className="absolute top-4 right-4 btn btn-ghost btn-circle btn-sm z-20">
                <X size={20} />
              </motion.button>

              <div className="text-center mb-8">
                <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold gradient-text mb-3 tracking-tight">
                  Request a Demo
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-base-content/60">
                  Schedule a personalized demo with our experts
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="form-control">
                    <label className="label"><span className="label-text uppercase text-xs tracking-wider">First Name</span></label>
                    <label className="input input-bordered input-lg flex items-center gap-3 bg-base-content/5">
                      <User size={20} className="text-primary/60" />
                      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="grow" placeholder="Your first name" required />
                    </label>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} className="form-control">
                    <label className="label"><span className="label-text uppercase text-xs tracking-wider">Last Name</span></label>
                    <label className="input input-bordered input-lg flex items-center gap-3 bg-base-content/5">
                      <User size={20} className="text-secondary/60" />
                      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="grow" placeholder="Your last name" required />
                    </label>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="form-control">
                    <label className="label"><span className="label-text uppercase text-xs tracking-wider">Email Address</span></label>
                    <label className="input input-bordered input-lg flex items-center gap-3 bg-base-content/5">
                      <Mail size={20} className="text-primary/60" />
                      <input type="email" name="email" value={formData.email} onChange={handleChange} className="grow" placeholder="your.email@example.com" required />
                    </label>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.45 }} className="form-control">
                    <label className="label"><span className="label-text uppercase text-xs tracking-wider">Company Name</span></label>
                    <label className="input input-bordered input-lg flex items-center gap-3 bg-base-content/5">
                      <Building size={20} className="text-secondary/60" />
                      <input type="text" name="company" value={formData.company} onChange={handleChange} className="grow" placeholder="Your company name" required />
                    </label>
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} className="form-control">
                    <label className="label"><span className="label-text uppercase text-xs tracking-wider">Phone Number</span></label>
                    <label className="input input-bordered input-lg flex items-center gap-3 bg-base-content/5">
                      <Phone size={20} className="text-primary/60" />
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="grow" placeholder="Your phone number" required />
                    </label>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.55 }} className="form-control">
                    <label className="label"><span className="label-text uppercase text-xs tracking-wider">Country</span></label>
                    <label className="input input-bordered input-lg flex items-center gap-3 bg-base-content/5">
                      <MapPin size={20} className="text-secondary/60" />
                      <select name="country" value={formData.country} onChange={handleChange} required className="select grow bg-base-100">
                        {countries.map((country) => (
                          <option key={country} value={country === 'Select Country' ? '' : country}>{country}</option>
                        ))}
                      </select>
                    </label>
                  </motion.div>
                </div>

                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="form-control">
                    <label className="label"><span className="label-text uppercase text-xs tracking-wider">Additional Comments</span></label>
                    <div className="relative">
                        <MessageSquare size={20} className="text-primary/60 absolute top-5 left-4 pointer-events-none" />
                        <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Tell us about your project..." rows="4" className="textarea textarea-bordered textarea-lg w-full bg-base-content/5 pl-12"></textarea>
                    </div>
                </motion.div>

                <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} whileHover={{ scale: 1.02, y: -2, boxShadow: '0 12px 40px hsla(var(--p)/0.4)' }} whileTap={{ scale: 0.98 }} type="submit" className="btn btn-primary btn-lg w-full mt-4 uppercase font-bold tracking-wider">
                  Send Request
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RequestDemoModal;