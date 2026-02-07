"use client";
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaArrowUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import Logo from './Navbar/Logo';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Initialize client-side state
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Social links with animation variants
  const socialLinks = [
    { icon: <FaGithub className="h-5 w-5" />, href: "https://github.com/Asmakhokhar", label: "GitHub" },
    { icon: <FaLinkedin className="h-5 w-5" />, href: "https://www.linkedin.com/in/asma-ismail-28445a2a4/", label: "LinkedIn" },
    { icon: <FaTwitter className="h-5 w-5" />, href: "https://x.com/Asma_Khokhar_", label: "Twitter" },
    { icon: <FaInstagram className="h-5 w-5" />, href: "https://www.instagram.com/asmak.web/", label: "Instagram" },
    { icon: <FaFacebook className="h-5 w-5" />, href: "https://web.facebook.com/profile.php?id=61556637118609", label: "Facebook" }
  ];

  // Stable particle positions using useMemo
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      // Deterministic positions based on index
      const angle = (i * 137.5) % 360; // Golden angle distribution
      const distance = 30 + (i % 20);
      return {
        id: i,
        size: `${100 + (i % 4) * 50}px`,
        left: `${50 + Math.cos(angle * Math.PI / 180) * distance}%`,
        top: `${50 + Math.sin(angle * Math.PI / 180) * distance}%`,
        blur: '60px',
        opacity: 0.1
      };
    });
  }, []);

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  };

  return (
    <>
      {/* Scroll to top button - client-side only */}
      {isClient && isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-[#9854FF] to-[#442AC6] shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaArrowUp className="h-5 w-5 text-white" />
        </motion.button>
      )}

      {/* Main Footer */}
      <footer className="relative overflow-hidden bg-gray-900 text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        {/* Stable background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {isClient && particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute rounded-full bg-purple-500"
              style={{
                width: particle.size,
                height: particle.size,
                left: particle.left,
                top: particle.top,
                filter: `blur(${particle.blur})`,
                opacity: particle.opacity
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={footerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
          >
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-center gap-3">
                <Logo className="h-8 w-auto" />
              </div>
              <p className="text-purple-100/80 text-lg leading-relaxed">
                Crafting exceptional digital experiences that drive results and create lasting impressions.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    variants={itemVariants}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Link
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-300 transition-colors duration-300"
                    >
                      {link.icon}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Get In Touch</h3>
              <div className="space-y-4 text-purple-100/80">
                <p className="flex items-start gap-3">
                  <svg className="h-5 w-5 mt-0.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <Link href="mailto:asma.khokharr@gmail.com" className="hover:underline hover:text-white transition-colors">
                    asma.khokharr@gmail.com
                  </Link>
                </p>
                <p className="flex items-start gap-3">
                  <svg className="h-5 w-5 mt-0.5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <Link href="tel:+923707638774" className="hover:underline hover:text-white transition-colors">
                    +92 370 7638774
                  </Link>
                </p>
              </div>
            </motion.div>

            {/* Services Column */}
            <div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Services</h3>
              <ul className="space-y-3 text-purple-100/80">
                <li className="hover:text-white transition-colors duration-300">Full Stack Development</li>
                <li className="hover:text-white transition-colors duration-300">Performance Optimization</li>
                <li className="hover:text-white transition-colors duration-300">Responsive Web Design</li>
                <li className="hover:text-white transition-colors duration-300">Technical Consulting</li>
              </ul>
            </div>

            {/* Newsletter Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Stay Updated</h3>
              <p className="text-purple-100/80">
                Subscribe to my newsletter for the latest projects and insights.
              </p>
              <form className="flex flex-col space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-[#9854FF] to-[#442AC6] hover:from-[#442AC6] hover:to-[#9854FF] text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-purple-100/70 text-sm">
              &copy; {currentYear} Asma Khokhar. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-purple-100/70 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-purple-100/70 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-purple-100/70 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}