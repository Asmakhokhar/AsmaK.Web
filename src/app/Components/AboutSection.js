'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            About
          </span>{' '}
          Me
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Technologies I&#39;ve mastered through years of professional experience and personal projects
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative overflow-hidden ">
            <Image
              src="/ab-img.png"
              alt="About Me"
              width={500}
              height={500}
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 space-y-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Passionate web developer with 2 years of experience creating modern, responsive websites and web
            applications. I specialize in Next.js, React, and Tailwind CSS to deliver exceptional user experiences.
          </p>

          <div className="space-y-5">
            {[
              {
                title: 'Full Stack Development',
                desc: 'Expertise in both frontend and backend technologies for complete solutions.',
              },
              {
                title: 'UI/UX Focus',
                desc: 'Creating intuitive interfaces with exceptional user experience.',
              },
              {
                title: 'Performance Optimization',
                desc: 'Websites that load fast and perform smoothly on all devices.',
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="mt-1 p-2 rounded-full bg-purple-100 dark:bg-purple-900/50">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
