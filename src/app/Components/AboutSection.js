"use client";
import React from "react";
import { FaReact, FaNodeJs, FaLightbulb, FaBrain } from "react-icons/fa";
import SectionTitle from "./ui/SectionTitle"; // Reusable title component
import { color } from "framer-motion";

const skills = [
  {
    icon: <FaReact size={24} />,
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript, React",
    gradient: "from-purple-600 to-indigo-600",
    color: "text-purple-400",
  },
  {
    icon: <FaNodeJs size={24} />,
    title: "Backend Development",
    description: "Node.js, Express.js\nREST APIs, JWT Authentication",
    gradient: "from-green-600 to-blue-600",
    color: "text-purple-400",
  },
  {
    icon: <FaLightbulb size={24} />,
    title: "AI & Automation",
    description: "AI Integration and Automation",
    gradient: "from-yellow-400 to-yellow-500",
    color: "text-purple-400",
  },
  {
    icon: <FaBrain size={24} />,
    title: "Problem Solving",
    description: "Creative Problem Solving",
    gradient: "from-pink-500 to-purple-500",
    color: "text-purple-400",
  },
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "Techxicon",
    duration: "2024 - 2025",
    details: "Developed scalable web apps, optimized UI performance, and maintained clean, reusable code.",
  },
  {
    role: "MERN Stack Developer",
    company: "Machine Minds",
    duration: "2025 - Present",
    details: "Worked with international clients on full-stack projects, integrating APIs and building responsive UIs.",
  },
  {
    role: "MERN Stack Developer",
    company: "Freelance",
    duration: "2023 - Present",
    details: "Built custom web solutions for clients, including e-commerce sites and portfolio websites, with a focus on performance and user experience.",
  },
];

const certificates = [
  {
    title: "React Developer Certificate",
    issuer: "FreeCodeCamp",
    year: "2023",
  },
  {
    title: "MERN Stack Professional",
    issuer: "Dev Castle IT Institute",
    year: "2024",
  },
  {
    title: "AI & Automation Essentials",
    issuer: "Coursera",
    year: "2025",
  },
  {
    title: "Advanced Backend Development, API Testing, and Deployment",
    issuer: "Coursera",
    year: "2025",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-20">
      {/* Section Header */}
      <SectionTitle
        title={
          <>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              About
            </span>{" "}
            / My Journey
          </>
        }
        description="Professional growth-focused overview highlighting skills, experience, and certifications."
      />

      {/* Skills / Glass Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 p-6 flex flex-col gap-3"
          >
            {/* Icon */}
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg border border-purple-400 ${skill.color} shadow-md`}
            >
              {skill.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white">{skill.title}</h3>

            {/* Description */}
            <p className="text-gray-300 text-sm">{skill.description}</p>
          </div>
        ))}
      </div>

      {/* Experience + Certificates Flex Layout */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Experience */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-4">Experience</h3>
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 p-6 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-purple-400 font-bold">{exp.role}</h4>
              <span className="text-gray-400 text-sm">
                {exp.company} | {exp.duration}
              </span>
              <p className="text-gray-300 text-sm mt-2">{exp.details}</p>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-4">Certificates</h3>
          {certificates.map((cert, idx) => (
            <div
              key={idx}
              className="relative rounded-xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/10 p-4 hover:shadow-lg transition-shadow"
            >
              <h4 className="text-purple-400 font-semibold">{cert.title}</h4>
              <span className="text-gray-400 text-sm">{cert.issuer}</span>
              <p className="text-gray-300 text-sm">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
