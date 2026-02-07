"use client";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaLightbulb
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState, useEffect } from "react";
import SectionTitle from "../ui/SectionTitle"; // Reusable title component

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
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="w-full h-full" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="w-full h-full" />,
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
    },

    {
      name: "React",
      icon: <FaReact className="w-full h-full" />,
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-full h-full" />,
      color: "text-white",
      bg: "bg-white/10",
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill className="w-full h-full" />,
      color: "text-cyan-300",
      bg: "bg-cyan-300/10",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs className="w-full h-full" />,
      color: "text-green-400",
      bg: "bg-green-500/10",
    },
    {
      name: "Express",
      icon: <SiExpress className="w-full h-full" />,
      color: "text-gray-300",
      bg: "bg-gray-300/10",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-full h-full" />,
      color: "text-green-400",
      bg: "bg-green-400/10",
    },

    {
      name: "Git",
      icon: <FaGitAlt className="w-full h-full" />,
      color: "text-orange-600",
      bg: "bg-orange-400/10",
    },
  ];

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const hoverBackground = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.3), transparent 80%)`;

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8  overflow-hidden"
      id="skills"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <SectionTitle
          title={
            <>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                My
              </span>{" "}
              Skills
            </>
          }
          description="A showcase of my technical expertise and proficiencies across various technologies."
        />
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
                <div
                  className={`relative h-full p-4 rounded-2xl ${skill.bg} backdrop-blur-sm border border-white/10 overflow-hidden`}
                >
                  {/* Floating icon container */}
                  <motion.div
                    className="relative w-15 h-15 mx-auto mb-6"
                    animate={
                      activeSkill === index
                        ? {
                            y: [0, -10, 0],
                            rotateY: [0, 180, 360],
                          }
                        : {}
                    }
                    transition={{
                      duration: 2,
                      ease: "easeInOut",
                      repeat: activeSkill === index ? Infinity : 0,
                    }}
                  >
                    {/* Icon glow */}
                    <div
                      className={`absolute inset-0 rounded-xl ${skill.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                    ></div>
                    {/* Icon */}
                    <div
                      className={`relative w-full h-full flex items-center justify-center ${skill.color} text-4xl`}
                    >
                      {skill.icon}
                    </div>
                  </motion.div>

                  {/* Skill name */}
                  <h3 className="text-center text-xl font-bold text-white mb-1">
                    {skill.name}
                  </h3>

                  {/* Hover glow effect */}
                  <div
                    className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-50 ${skill.color} blur-lg transition-opacity duration-300`}
                  ></div>
                </div>

                {/* 3D shadow */}
                <div className="absolute inset-x-4 bottom-0 h-4 bg-purple-900/50 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center justify-between gap-6 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-purple-500/10 text-purple-300 text-xl">
              <FaLightbulb />
            </div>

            <div>
              <h4 className="text-white font-semibold">Continuous Learning</h4>
              <p className="text-sm text-gray-400">
                Currently expanding into AI integration, automation workflows
                and scalable backend systems.
              </p>
            </div>
          </div>

          <span className="hidden sm:block text-sm text-purple-300 border border-purple-400/20 px-4 py-2 rounded-lg">
            Always Improving
          </span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
