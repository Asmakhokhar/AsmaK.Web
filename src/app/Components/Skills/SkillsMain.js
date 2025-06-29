'use client';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";

const SkillsSection = () => {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const skills = [
    { 
      name: "HTML5", 
      icon: <FaHtml5 className="w-full h-full" />, 
      color: "text-orange-400", 
      bg: "bg-orange-500/10",
      level: "Expert",
      years: "2 years"
    },
    { 
      name: "CSS3", 
      icon: <FaCss3Alt className="w-full h-full" />, 
      color: "text-blue-500", 
      bg: "bg-blue-500/10",
      level: "Expert",
      years: "2 years"
    },
    { 
      name: "JavaScript", 
      icon: <IoLogoJavascript className="w-full h-full" />, 
      color: "text-yellow-400", 
      bg: "bg-yellow-400/10",
      level: "Expert",
      years: "2 years"
    },
   
    { 
      name: "React", 
      icon: <FaReact className="w-full h-full" />, 
      color: "text-cyan-400", 
      bg: "bg-cyan-400/10",
      level: "Expert",
      years: "2 years"
    },
    { 
      name: "Next.js", 
      icon: <SiNextdotjs className="w-full h-full" />, 
      color: "text-white", 
      bg: "bg-white/10",
      level: "Intermediate",
      years: "1 year"
    },
    { 
      name: "Tailwind", 
      icon: <RiTailwindCssFill className="w-full h-full" />, 
      color: "text-cyan-300", 
      bg: "bg-cyan-300/10",
      level: "Intermediate",
      years: "1 year"
    },
    { 
      name: "Node.js", 
      icon: <FaNodeJs className="w-full h-full" />, 
      color: "text-green-400", 
      bg: "bg-green-500/10",
      level: "Intermediate",
      years: "1 year"
    },
    { 
      name: "Express", 
      icon: <SiExpress className="w-full h-full" />, 
      color: "text-gray-300", 
      bg: "bg-gray-300/10",
      level: "Intermediate",
      years: "1 year"
    },
    { 
      name: "MongoDB", 
      icon: <SiMongodb className="w-full h-full" />, 
      color: "text-green-400", 
      bg: "bg-green-400/10",
      level: "Intermediate",
      years: "1 year"
    },
    
    { 
      name: "Git", 
      icon: <FaGitAlt className="w-full h-full" />, 
      color: "text-orange-600", 
      bg: "bg-orange-400/10",
      level: "Expert",
      years: "2 years"
    },
  ];

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const hoverBackground = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.3), transparent 80%)`;

  return (
    <section className="relative py-28 px-4 sm:px-6 lg:px-8  overflow-hidden" id="skills">
      {/* Floating particles */}
      {isMounted && [...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-purple-500 opacity-10"
          style={{
            width: `${100 + (i * 20)}px`,
            height: `${100 + (i * 20)}px`,
            left: `${(i * 15) % 100}%`,
            top: `${(i * 10) % 100}%`,
            filter: 'blur(40px)'
          }}
          animate={{
            x: [0, i % 2 === 0 ? 50 : -50],
            y: [0, i % 3 === 0 ? 30 : -30],
          }}
          transition={{
            duration: 20 + (i * 2),
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Technical</span> Mastery
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

        {/* Skills grid */}
        <div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
          onMouseMove={handleMouseMove}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              onMouseEnter={() => setActiveSkill(index)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              {/* Interactive background */}
              {isMounted && (
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                  style={{
                    background: hoverBackground,
                  }}
                />
              )}

              {/* 3D holographic card */}
              <div className="relative h-full transition-all duration-500 group-hover:-translate-y-3">
                {/* Card surface */}
                <div className={`relative h-full p-6 rounded-2xl ${skill.bg} backdrop-blur-sm border border-white/10 overflow-hidden`}>
                  {/* Floating icon container */}
                  <motion.div 
                    className="relative w-20 h-20 mx-auto mb-6"
                    animate={activeSkill === index ? { 
                      y: [0, -10, 0],
                      rotateY: [0, 180, 360],
                    } : {}}
                    transition={{ 
                      duration: 2,
                      ease: "easeInOut",
                      repeat: activeSkill === index ? Infinity : 0
                    }}
                  >
                    {/* Icon glow */}
                    <div className={`absolute inset-0 rounded-xl ${skill.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                    {/* Icon */}
                    <div className={`relative w-full h-full flex items-center justify-center ${skill.color} text-4xl`}>
                      {skill.icon}
                    </div>
                  </motion.div>
                  
                  {/* Skill name */}
                  <h3 className="text-center text-xl font-bold text-white mb-1">
                    {skill.name}
                  </h3>
                  
                  {/* Skill level */}
                  <div className="text-center text-sm text-gray-300 mb-2">
                    {skill.level} • {skill.years}
                  </div>
                  
                  {/* Animated progress bar */}
                  <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden mt-3">
                    <motion.div
                      className={`h-full ${skill.color.replace('text', 'bg')} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: 
                        skill.level === "Expert" ? "80%" : 
                        skill.level === "Intermediate" ? "65%" : "50%"
                      }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                    />
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-50 ${skill.color} blur-lg transition-opacity duration-300`}></div>
                </div>
                
                {/* 3D shadow */}
                <div className="absolute inset-x-4 bottom-0 h-4 bg-purple-900/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating tech stack indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30 border border-purple-500/30 backdrop-blur-sm">
            <div className="w-3 h-3 rounded-full bg-green-400 mr-3 animate-pulse shadow-[0_0_10px_2px_rgba(74,222,128,0.5)]"></div>
            <span className="text-sm font-medium text-purple-200 tracking-wider">
              FULL-STACK DEVELOPMENT EXPERTISE
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;