"use client";
import { useState, useRef, useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { FiUser, FiMail, FiPhone, FiMessageSquare } from "react-icons/fi";
import {
  FaPaperPlane,
  FaCheck,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const formRef = useRef(null);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    animate(
      formRef.current,
      {
        rotateX: -(e.clientY - top - height / 2) / 20,
        rotateY: (e.clientX - left - width / 2) / 20,
      },
      { duration: 0.5 },
    );
  };

  const handleMouseLeave = () => {
    animate(formRef.current, { rotateX: 0, rotateY: 0 }, { duration: 0.5 });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Required";
    if (!formData.email.trim()) newErrors.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.message.trim()) newErrors.message = "Required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Asmakhokhar",
      color: "bg-gray-800 hover:bg-gray-700",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/asma-ismail-28445a2a4/",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      icon: <FaTwitter />,
      url: "https://x.com/Asma_Khokhar_",
      color: "bg-black hover:bg-gray-800",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/asmak.web/",
      color:
        "bg-gradient-to-tr from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
    },
    {
      icon: <FaFacebook />,
      url: "https://web.facebook.com/profile.php?id=61556637118609",
      color: "bg-blue-700 hover:bg-blue-800",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4  overflow-hidden py-20 border-none">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isMounted &&
          [...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-purple-500 opacity-10"
              initial={{
                x: Math.random() * 100,
                y: Math.random() * 100,
                width: Math.random() * 300 + 100,
                height: Math.random() * 300 + 100,
                filter: "blur(60px)",
              }}
              animate={{
                x: [null, (Math.random() - 0.5) * 100],
                y: [null, (Math.random() - 0.5) * 100],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center justify-center relative">
              <motion.h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  Let&#39;s Build Something{" "}
                </span>{" "}
                Amazing
              </motion.h2>
            </div>
            <motion.p
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Technologies I&#39;ve mastered through years of professional
              experience and personal projects
            </motion.p>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Social/Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Connect Directly
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
                  <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                    <FiMail className="w-6 h-6" />
                  </div>
                  <a
                    href="mailto:asma.khokharr@gmail.com"
                    className="text-white hover:text-purple-300 transition-colors text-lg"
                  >
                    asma.khokharr@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-purple-500 transition-all">
                  <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                    <FiPhone className="w-6 h-6" />
                  </div>
                  <a
                    href="tel:+923707638774"
                    className="text-white hover:text-purple-300 transition-colors text-lg"
                  >
                    +92 370 7638774
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Follow My Journey
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -5, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${social.color} w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-all`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 3D Form */}
          <motion.div
            ref={formRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              perspective: "1000px",
              transformStyle: "preserve-3d",
            }}
            className="bg-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-800 shadow-2xl relative overflow-hidden"
          >
            {/* Animated gradient border */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none opacity-70"
              style={{
                background: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(168, 85, 247, 0.4), transparent 80%)`,
              }}
            />

            {submitSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-20 h-20 bg-green-500/10 border border-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <FaCheck className="text-green-400 text-3xl" />
                </motion.div>
                <h3 className="text-2xl font-bold text-green-400 mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-300 mb-6">
                  Thanks for reaching out! I&#39;ll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="px-6 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all duration-300 hover:shadow-purple-500/20"
                >
                  New Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                >
                  <label className="block text-sm font-medium text-purple-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-purple-400">
                      <FiUser className="w-5 h-5" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 bg-gray-800/30 border ${errors.name ? "border-red-500" : "border-gray-700 hover:border-purple-500"} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300`}
                      placeholder="Asma Khokhar"
                    />
                    {errors.name && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-400 text-sm mt-1 absolute"
                      >
                        {errors.name}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  <label className="block text-sm font-medium text-purple-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-purple-400">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 bg-gray-800/30 border ${errors.email ? "border-red-500" : "border-gray-700 hover:border-purple-500"} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300`}
                      placeholder="asma@example.com"
                    />
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-400 text-sm mt-1 absolute"
                      >
                        {errors.email}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <label className="block text-sm font-medium text-purple-300 mb-2">
                    Phone (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-purple-400">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800/30 border border-gray-700 hover:border-purple-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="+92 300 1234567"
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <label className="block text-sm font-medium text-purple-300 mb-2">
                    Your Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3 text-purple-400">
                      <FiMessageSquare className="w-5 h-5" />
                    </div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full pl-10 pr-4 py-3 bg-gray-800/30 border ${errors.message ? "border-red-500" : "border-gray-700 hover:border-purple-500"} rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300`}
                      placeholder="I'd love to build a..."
                    />
                    {errors.message && (
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-red-400 text-sm mt-1 absolute"
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 }}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-4 font-medium rounded-lg transition-all duration-300 ${isSubmitting ? "bg-purple-800 cursor-not-allowed" : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-purple-500/30"}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
