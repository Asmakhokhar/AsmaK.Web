'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const textVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-25 px-4 sm:px-6 lg:px-8  "
      ref={ref}
    >
      <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center relative">
            <motion.h2 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">About</span> Me
            </motion.h2>
            <motion.div 
              className="absolute -top-6 -right-6 text-xs font-bold px-2 py-1 rounded-full bg-purple-600/50 text-purple-100 border border-purple-400/30"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              PRO LEVEL
            </motion.div>
          </div>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Technologies I've mastered through years of professional experience and personal projects
          </motion.p>
        </motion.div>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col lg:flex-row items-center"
        >
        
          <motion.div
            variants={imageVariants}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative overflow-hidden">
              <Image
                src="/ab-img.png" 
                alt="hero image"
                width={500}
                height={500}
                className="object-cover border"
                priority
              />
              <div className="absolute inset-0 mix-blend-multiply" />
              <div className="absolute -inset-4 border-2 border-purple-400/30 rounded-2xl" />
            </div>
          </motion.div>

          


          <motion.div
            variants={textVariants}
            className="w-full lg:w-1/2 space-y-6"
          >
            

            <p className="text-lg :text-white">
              Passionate web developer with 2 years of experience creating modern,
              responsive websites and web applications. I specialize in Next.js,
              React, and Tailwind CSS to deliver exceptional user experiences.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-purple-100 dark:bg-purple-900/50">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Full Stack Development</h3>
                  <p className="text-gray-400">
                    Expertise in both frontend and backend technologies for complete solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-purple-100 dark:bg-purple-900/50">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">UI/UX Focus</h3>
                  <p className="text-gray-400">
                    Creating intuitive interfaces with exceptional user experience.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-purple-100 dark:bg-purple-900/50">
                  <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Performance Optimization</h3>
                  <p className="text-gray-400">
                    Websites that load fast and perform smoothly on all devices.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}