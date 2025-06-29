'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";

const NavbarMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Links = [
    { link: 'Home', section: 'home' },
    { link: 'About', section: 'about' },
    { link: 'Services', section: 'services' },
    { link: 'Portfolio', section: 'portfolio' },
    { link: 'Contact', section: 'contact' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2 bg-gray-900/80 backdrop-blur-md border-b border-purple-900/20' : 'py-4 bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <span className="text-3xl font-bold text-white">
                  Asma <span className="text-purple-400">Khokhar</span>
                </span>
              </motion.div>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8">
                {Links.map((item, index) => {
                  const isActive = pathname === `/${item.section}`;
                  return (
                    <li key={index} className="relative group">
                      <Link 
                        href={`/${item.section}`} 
                        className={`relative px-1 py-2 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-purple-300' : 'text-gray-300 hover:text-white'}`}
                      >
                        {item.link}
                        {isActive && (
                          <motion.span 
                            className="absolute left-0 bottom-0 w-full h-0.5 bg-purple-400"
                            layoutId="navUnderline"
                            transition={{ duration: 0.3 }}
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Connect Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="#contact" 
                  className="flex items-center px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-medium shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group"
                >
                  Let's Connect
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <GiCrossMark className="h-6 w-6 text-purple-400" />
                ) : (
                  <GiHamburgerMenu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 inset-x-0 z-40 md:hidden bg-gray-900/95 backdrop-blur-lg border-b border-purple-900/20"
          >
            <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
              {Links.map((item, index) => {
                const isActive = pathname === `/${item.section}`;
                return (
                  <Link
                    key={index}
                    href={`/${item.section}`}
                    className={`block px-3 py-3 rounded-md text-base font-medium ${isActive ? 'bg-purple-900/30 text-purple-300' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.link}
                  </Link>
                );
              })}
              <div className="px-3 pt-2">
                <Link
                  href="#contact"
                  className="block w-full px-4 py-2 text-center rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium shadow-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Let's Connect
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarMain;    