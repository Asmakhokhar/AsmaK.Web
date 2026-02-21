"use client";
import { useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import SectionTitle from "./ui/SectionTitle";
import GithubCTA from "./ui/GithubCTA";

const TABS = ["All", "Frontend", "Web Application"];

const projects = [
  {
    id: 1,
    title: "Real Estate Leads Dashboard",
    category: "Web Application",
    company: "Machine Minds",
    stack: "Next.js, Tailwind, Node.js, MongoDB",
    image: "./user.PNG",
    live: "https://www.fourteen.ae/auth/login",
    github: "#",
  },
  {
    id: 2,
    title: "Involuck Web Application",
    category: "Web Application",
    company: "Involuck",
    stack: "React, Tailwind",
    image: "./3.PNG",
    live: "https://involuck.vercel.app/",
    github: "#",
  },
  {
    id: 3,
    title: "ChatBot Pro Web Application",
    category: "Web Application",
    company: "Neonecy",
    stack: "React, Tailwind, Node.js, MongoDB, Ai Integration",
    image: "./chat.PNG",
    live: "https://smart-chat-finale.vercel.app/manager-dashboard/manager-bots",
    github: "#",
  },
  {
    id: 4,
    title: "Restaurant Booking Website",
    category: "Frontend",
    company: "Upwork Client",
    stack: "HTML, CSS, JS",
    image: "./res.PNG",
    live: "https://feliciano-restaurant-website.vercel.app/",
    github: "https://github.com/Asmakhokhar/Feliciano-Restaurant-Website",
  },
  {
    id: 5,
    title: "Deviconic Company Website",
    category: "Frontend",
    company: "Deviconic",
    stack: "React, Tailwind",
    image: "./dev.PNG",
    live: "https://www.deviconic.com/",
    github: "#",
  },
  {
    id: 6,
    title: "Techxicon Company Website",
    category: "Frontend",
    company: "Techxicon",
    stack: "Next.js, Tailwind",
    image: "./tx.PNG",
    live: "https://glowing-octo-system-wio1.vercel.app/",
    github: "https://github.com/Asmakhokhar/Tech-website",
  },
];

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          title={<> Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Projects</span></>}
          description="Selected work demonstrating real-world problem solving and production ready development"
        />

        {/* Tabs */}
        <div className="flex justify-center mt-10 mb-12">
          <div className="flex gap-2 p-2 rounded-xl bg-white/5 backdrop-blur border border-white/10">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-purple-500 text-white"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur overflow-hidden hover:border-purple-400/40 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex justify-between items-center text-xs text-gray-400">
                  <span>{project.category}</span>
                  <span>{project.company}</span>
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400">{project.stack}</p>

                {/* Buttons */}
                <div className="flex gap-3 mt-3">
                  <a
                    href={project.live}
                    target="_blank"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:bg-purple-500/30 transition"
                  >
                    Live <FiExternalLink />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-white/10 text-gray-200 hover:bg-white/20 transition"
                  >
                    Code <FiGithub />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* CTA */}
        <GithubCTA href="https://github.com/Asmakhokhar" />
       
      </div>
    </section>
  );
}
