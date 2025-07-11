'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { FiCode, FiLayers, FiSmartphone, FiServer, FiDatabase, FiShield } from 'react-icons/fi';
import { useState, useEffect } from 'react';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const services = [
    {
      title: "Frontend Development",
      description: "Crafting responsive, pixel-perfect interfaces with React, Next.js and Tailwind CSS for exceptional user experiences.",
      icon: <FiCode className="w-6 h-6" />,
      gradient: "from-purple-600 to-indigo-600",
      tech: ["React", "Next.js", "Tailwind", "Framer Motion"]
    },
    {
      title: "Backend Development",
      description: "Building robust server-side solutions with Node.js, Express, and scalable architectures.",
      icon: <FiServer className="w-6 h-6" />,
      gradient: "from-blue-600 to-purple-600",
      tech: ["Node.js", "Express", "REST APIs", "GraphQL"]
    },
    {
      title: "Full Stack Solutions",
      description: "End-to-end application development with seamless frontend-backend integration.",
      icon: <FiLayers className="w-6 h-6" />,
      gradient: "from-indigo-600 to-violet-600",
      tech: ["MERN Stack", "Authentication", "Deployment", "CI/CD"]
    },
    {
      title: "Database Design",
      description: "Optimized database architectures with PostgreSQL, MongoDB, and efficient data modeling.",
      icon: <FiDatabase className="w-6 h-6" />,
      gradient: "from-violet-600 to-purple-600",
      tech: ["MongoDB", "PostgreSQL", "Firebase", "Prisma"]
    },
    {
      title: "Mobile Responsive",
      description: "Flawless mobile experiences with responsive design and mobile-first approaches.",
      icon: <FiSmartphone className="w-6 h-6" />,
      gradient: "from-purple-600 to-fuchsia-600",
      tech: ["Responsive UI", "Mobile First", "PWA", "Cross-browser"]
    },
    {
      title: "Security Implementation",
      description: "Enterprise-grade security with authentication and data protection best practices.",
      icon: <FiShield className="w-6 h-6" />,
      gradient: "from-fuchsia-600 to-pink-600",
      tech: ["JWT", "OAuth", "CORS", "Encryption"]
    }
  ];

  const handleMouseMove = (e, index) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
    setHoveredIndex(index);
  };

  const hoverBackground = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(139, 92, 246, 0.3), transparent 80%)`;

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated background elements */}
      {isMounted && (
        <>
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:100px_100px] opacity-10"></div>
          </div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-10 animate-float"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl opacity-10 animate-float-delay"></div>
        </>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Premium</span> Development Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isMounted ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Cutting-edge solutions that blend innovative technology with elegant design.
          </motion.p>
        </div>

        {/* Services grid with glass cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative h-full group"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Interactive gradient overlay */}
              {hoveredIndex === index && isMounted && (
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-20 pointer-events-none"
                  style={{
                    background: hoverBackground,
                  }}
                  layoutId="hoverBackground"
                />
              )}
              
              {/* Glass card container */}
              <div className="relative h-full rounded-xl overflow-hidden">
                {/* Glass background with blur */}
                <div className="absolute inset-0 bg-white/10 dark:bg-gray-900/20 backdrop-blur-md border border-white/10 dark:border-gray-800 rounded-xl" />
                
                {/* Gradient border effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                
                {/* Card content */}
                <div className="relative h-full p-6">
                  {/* Icon with gradient background */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-lg`}
                  >
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </motion.div>
                  
                  {/* Service title */}
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  
                  {/* Service description */}
                  <p className="text-gray-300 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.tech.map((tech, i) => (
                      <motion.span 
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-purple-200 backdrop-blur-sm"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Learn more button */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-purple-300 font-medium group-hover:text-purple-100 transition-colors mt-auto"
                  >
                    <span>Learn more</span>
                    <svg 
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.div>
                  
                  {/* Decorative corner element */}
                  <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-purple-400/20 rounded-tr-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.p
            className="text-lg text-gray-300 mb-6"
            whileHover={{ scale: 1.01 }}
          >
            Need something custom? Let&#39;s discuss your project.
          </motion.p>
          <motion.button
            whileHover={{ 
              scale: 1.03,
              boxShadow: "0 10px 25px -5px rgba(167, 139, 250, 0.4)"
            }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-medium shadow-lg transition-all relative overflow-hidden"
          >
            <span className="relative z-10">Schedule a Call</span>
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}