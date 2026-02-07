"use client";
import { FiGithub } from "react-icons/fi";

export default function GithubCTA() {
  return (
    <div className="flex justify-center mt-20">
      <div className="text-center">
        <p className="text-gray-400 mb-6 text-sm tracking-wide">
          Want to see more of my experiments?
        </p>

        <a
          href="https://github.com/yourusername"
          target="_blank"
          className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl
          border border-white/10 bg-white/5 backdrop-blur-md
          hover:bg-white/10 transition-all duration-300"
        >
          {/* glow */}
          <span className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 blur-xl"></span>

          {/* icon */}
          <FiGithub className="text-xl text-gray-200 group-hover:scale-110 transition" />

          {/* text */}
          <span className="font-medium text-gray-200 tracking-wide">
            Browse GitHub Repositories
          </span>
        </a>
      </div>
    </div>
  );
}
