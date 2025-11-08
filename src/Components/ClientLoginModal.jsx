import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Eye, EyeOff, Clock } from 'lucide-react';

const ClientLoginModal = ({ isOpen, onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ customerId: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    onClose(); // Close modal on submit
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="absolute inset-0 bg-base-100/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md bg-base-200/50 backdrop-blur-2xl border border-primary/30 rounded-3xl shadow-2xl overflow-hidden"
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
            
            <div className="relative z-10 p-8 sm:p-12">
              <motion.button whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }} onClick={onClose} className="absolute top-4 right-4 btn btn-ghost btn-circle btn-sm">
                <X size={20} />
              </motion.button>

              <div className="text-center mb-8">
                <motion.h2 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-3xl sm:text-4xl font-bold gradient-text mb-3 tracking-tight">
                  Customer Login
                </motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-base-content/60">
                  Access your account dashboard
                </motion.p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="form-control">
                  <label className="label"><span className="label-text uppercase text-xs tracking-wider">Customer ID</span></label>
                  <label className="input input-bordered input-lg w-full flex items-center gap-3 bg-base-content/5">
                    <Mail size={20} className="text-primary/60" />
                    <input type="text" name="customerId" value={formData.customerId} onChange={handleChange} className="grow" placeholder="Enter your Customer ID" required />
                  </label>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className="form-control">
                  <label className="label"><span className="label-text uppercase text-xs tracking-wider">Password</span></label>
                  <label className="input input-bordered input-lg w-full flex items-center gap-3 bg-base-content/5">
                    <Lock size={20} className="text-secondary/60" />
                    <input type={showPassword ? 'text' : 'password'} name="password" value={formData.password} onChange={handleChange} className="grow " placeholder="Enter your password" required />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="btn btn-ghost btn-sm h-full px-2">
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </label>
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover text-primary text-sm mt-1">Forgot password?</a>
                  </label>
                </motion.div>

                <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} whileHover={{ scale: 1.02, y: -2, boxShadow: '0 12px 40px hsla(var(--p)/0.4)' }} whileTap={{ scale: 0.98 }} type="submit" className="btn btn-primary btn-lg w-full mt-4 uppercase font-bold tracking-wider">
                  Login
                </motion.button>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className="pt-6">
                  <div className="divider text-xs text-base-content/50">Support</div>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-base-content/60">
                    <a href="mailto:support@rudratic.com" className="flex items-center gap-2 link link-hover text-primary/80 hover:text-primary">
                      <Mail size={16} /> support@rudratic.com
                    </a>
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-secondary/80" /> 24/7
                    </div>
                  </div>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ClientLoginModal;