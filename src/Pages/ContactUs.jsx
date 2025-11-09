import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Calendar,
  Loader2,
  AlertCircle,
  CheckCircle,
  Building,
  User,
  MessageSquare,
} from "lucide-react";
import Footer from "../layouts/Footer"; // Assuming you have this component

// --- Reusable Components for a Cleaner Structure ---

// Reusable Form Field Component
const FormField = ({
  icon: Icon,
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  as = "input",
}) => {
  const InputComponent = as;
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-base-content/80 mb-2"
      >
        {label}
      </label>
      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-base-content/40">
          <Icon size={18} />
        </span>
        <InputComponent
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required
          className={`input input-bordered w-full bg-base-300/40 border-white/10 focus:border-primary focus:ring-2 focus:ring-pink-500/40 transition-all pl-10 ${
            error ? "border-red-500/50" : "border-white/10"
          } ${as === "textarea" ? "h-32 pt-3" : ""}`}
          rows={as === "textarea" ? 5 : undefined}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      </div>
      <AnimatePresence>
        {error && (
          <motion.p
            id={`${name}-error`}
            className="text-red-400 text-xs font-medium mt-1.5"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

// Reusable Contact Info Item Component
const ContactInfoItem = ({ icon: Icon, label, content, colors }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, x: 4 }}
      className="flex items-start gap-4 group"
    >
      <div
        className={`p-3 rounded-lg flex-shrink-0 border border-white/10 ${colors.bg} transition-all duration-300 group-hover:scale-110`}
      >
        <Icon size={24} className={colors.icon} />
      </div>
      <div>
        <h3 className={`font-semibold mb-1 ${colors.label}`}>{label}</h3>
        <div className="text-sm text-base-content/70 leading-relaxed">
          {content.map((line, i) => (
            <a
              key={i}
              href={
                label === "Phone :"
                  ? `tel:${line}`
                  : label === "Email :"
                  ? `mailto:${line}`
                  : "#"
              }
              className="block hover:text-primary transition-colors"
            >
              {line}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// --- Main ContactUs Page Component ---

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formStatus, setFormStatus] = useState("idle"); // 'idle', 'loading', 'success', 'error'

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone :",
      content: ["+44 7438618490", "+91 9962233803"],
      colors: {
        bg: "bg-gradient-to-br from-indigo-500/30 to-purple-500/30",
        icon: "text-indigo-400",
        label: "text-indigo-400",
      },
    },
    {
      icon: Mail,
      label: "Email :",
      content: ["info@rudratic.com"],
      colors: {
        bg: "bg-gradient-to-br from-pink-500/30 to-purple-500/30",
        icon: "text-pink-400",
        label: "text-pink-400",
      },
    },
    {
      icon: MapPin,
      label: "Address :",
      content: [
        "Rudratic Technologies Ltd., 47, Courtside, 47-49 Penywern road, London, SW59TU",
        "India Address: No.187, 2nd cross street, Shanthi Nagar, Chromepet, Chennai, 600044",
      ],
      colors: {
        bg: "bg-gradient-to-br from-purple-500/30 to-pink-500/30",
        icon: "text-purple-400",
        label: "text-purple-400",
      },
    },
  ];

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required.";
    if (!formData.email.trim()) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid.";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      errors.message = "Message must be at least 10 characters long.";
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field being edited
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: null });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormStatus("loading");
    setFormErrors({});

    // --- Simulated API Call ---
    // In a real application, you would replace this with a fetch/axios call to your backend.
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // throw new Error("Simulated network error"); // Uncomment to test error state
      console.log("Form submitted successfully:", formData);
      setFormStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error("Submission failed:", error);
      setFormStatus("error");
    } finally {
      setTimeout(() => setFormStatus("idle"), 5000); // Reset status after 5 seconds
    }
  };

  // Floating orb background animation (unchanged)
  const orbs = Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 200 + Math.random() * 150,
    color: i % 2 === 0 ? "hsl(259,96%,66%)" : "hsl(326,96%,66%)",
  }));

  return (
    <div className="bg-base-100 relative min-h-screen overflow-hidden flex flex-col">
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {orbs.map((orb) => (
          <motion.div
            key={orb.id}
            className="absolute rounded-full blur-3xl opacity-20"
            style={{
              background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
              width: orb.size,
              height: orb.size,
            }}
            animate={{
              x: [`${orb.x}%`, `${(orb.x + 30 + Math.random() * 20) % 100}%`],
              y: [`${orb.y}%`, `${(orb.y + 40 + Math.random() * 20) % 100}%`],
            }}
            transition={{
              duration: 20 + Math.random() * 15,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex-grow">
        <div className="pt-36 pb-16 text-center container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-sm"
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base md:text-lg text-base-content/70 max-w-3xl mx-auto leading-relaxed"
          >
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </motion.p>
        </div>

        {/* Contact & Form Section */}
        <div className="container mx-auto px-4 lg:px-8 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Info Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="card bg-base-200/40 backdrop-blur-xl border border-white/10 shadow-2xl p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <ContactInfoItem key={index} {...item} />
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{
                scale: 1.02,
                boxShadow: "0 10px 40px rgba(236,72,153,0.3)",
              }}
              className="card bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl p-6 md:p-8 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2">Ready to Get Started?</h3>
              <p className="opacity-90 mb-6 text-sm">
                Schedule a free consultation with our experts to discuss your
                requirements.
              </p>
              <motion.button
                onClick={() =>
                  window.open("YOUR_CALENDLY_OR_SCHEDULING_LINK", "_blank")
                }
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#fff",
                  color: "#7e22ce",
                }}
                whileTap={{ scale: 0.96 }}
                className="btn bg-white/90 text-purple-700 hover:bg-white font-semibold border-none"
              >
                Schedule Free Consultation <Calendar size={18} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Form Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="card bg-base-200/40 backdrop-blur-xl border border-white/10 shadow-2xl p-6 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <FormField
                icon={User}
                label="Full Name"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                error={formErrors.name}
              />
              <FormField
                icon={Mail}
                label="Email ID"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
              />
              <FormField
                icon={Building}
                label="Company Name (Optional)"
                name="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleChange}
                error={formErrors.company}
              />
              <FormField
                icon={MessageSquare}
                label="Message"
                name="message"
                placeholder="Tell us about your project or inquiry..."
                value={formData.message}
                onChange={handleChange}
                error={formErrors.message}
                as="textarea"
              />

              <div className="pt-2">
                <motion.button
                  type="submit"
                  disabled={formStatus === "loading"}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 25px hsla(326,96%,66%,0.5)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  className="btn btn-lg w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white border-none transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "loading" ? (
                    <Loader2 size={24} className="animate-spin" />
                  ) : (
                    <>
                      Send Message <Send size={20} />
                    </>
                  )}
                </motion.button>
              </div>

              <AnimatePresence>
                {formStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-3 p-3 mt-4 text-sm font-medium text-green-200 bg-green-500/20 border border-green-500/30 rounded-lg"
                    role="alert"
                  >
                    <CheckCircle size={20} />
                    Message Sent Successfully! We'll get back to you soon.
                  </motion.div>
                )}
                {formStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-center gap-3 p-3 mt-4 text-sm font-medium text-red-200 bg-red-500/20 border border-red-500/30 rounded-lg"
                    role="alert"
                  >
                    <AlertCircle size={20} />
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>

        {/* --- Interactive Map Section --- */}
        <div className="container mx-auto px-4 lg:px-8 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-base-300"
          >
            {/* IMPORTANT: Replace this with your actual Google Maps embed link */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.512687611598!2d-0.19472532351982236!3d51.48821421258163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760f85b7501b7d%3A0xe543c5b70c3d9730!2s47%20Penywern%20Rd%2C%20London%20SW5%209TU%2C%20UK!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rudratic Technologies London Office"
            ></iframe>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
