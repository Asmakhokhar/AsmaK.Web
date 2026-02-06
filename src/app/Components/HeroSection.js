"use client";
import React from "react";
import { FiDownload, FiArrowRightCircle } from "react-icons/fi";
import Button from "./ui/Button"; // your reusable button

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-30"> 
      
      {/* Left Content */}
      <div className="flex-1 flex flex-col items-start space-y-6 md:pr-10">
        
        {/* Opportunities Tag */}
        <span className="text-sm text-white uppercase tracking-wider border border-white px-3 py-1 rounded-full">
          Available for Opportunities
        </span>
      

        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
         Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600">Asma Khokhar</span>
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
         {" { MERN Stack Developer } "}
        </h2>

        {/* Description */}
        <p className="text-gray-400 max-w-lg leading-relaxed">
          I build scalable and efficient web applications with MongoDB, Express, React, and Node.js. Passionate about clean code, intuitive UX, and delivering real-world solutions.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          <Button 
            icon={<FiDownload />} 
            onClick={() => console.log("Download CV")} 
            download={true}
          >
            Download CV
          </Button>
          <Button 
            icon={<FiArrowRightCircle />} 
            onClick={() => console.log("Hire Me")}
          >
            Hire Me
          </Button>
        </div>

        {/* Counters */}
        {/* <div className="grid grid-cols-3 gap-6 mt-10 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-400">20+</div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-400">3+</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-400">100%</div>
            <div className="text-sm text-gray-400">Passion</div>
          </div>
        </div> */}
      </div>

      {/* Right Content - Profile Image */}
      <div className="flex-1 flex justify-center items-start mt-10 md:mt-0">
        <div className="relative w-92 h-92 rounded-full shadow-3xl shadow-purple-900/50 border-8 border-white overflow-hidden">
          <img 
            src="/hero.png" // your PNG image
            alt="Asma Khokhar" 
            className="w-full h-full object-cover"
          />
          {/* Optional subtle overlay for glow */}
          <div className="absolute inset-0 rounded-full ring-2 ring-purple-400/30"></div>
        </div>
      </div>

    </section>
  );
}
