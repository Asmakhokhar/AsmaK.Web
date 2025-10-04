"use client";
import React, { useState, useEffect } from "react";
import { FiArrowRightCircle } from "react-icons/fi";

export default function HeroSection() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200);
  const toRotate = ["Web Developer", "MERN Stack Developer"];
  const period = 2000;

  // Typing effect
  useEffect(() => {
    const ticker = setInterval(() => tick(), delta);
    return () => clearInterval(ticker);
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) setDelta((prev) => prev / 2);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  // Counters
  const [projectsCount, setProjectsCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = 20 / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= 20) {
        start = 20;
        clearInterval(counter);
      }
      setProjectsCount(Math.floor(start));
    }, 50);

    let startExp = 0;
    const expInc = 1.5 / (duration / 50);

    const counterExp = setInterval(() => {
      startExp += expInc;
      if (startExp >= 1.5) {
        startExp = 1.5;
        clearInterval(counterExp);
      }
      setExperienceYears(Math.floor(startExp));
    }, 50);

    return () => {
      clearInterval(counter);
      clearInterval(counterExp);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-transparent">
      {/* Title Section */}
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Hi, I’m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            Asma Khokhar
          </span>
          <br />
          <span className="inline-flex items-center justify-center mt-2">
            <span className="text-purple-300">{text}</span>
            <span className="block w-1 h-8 bg-purple-400 ml-2 animate-pulse"></span>
          </span>
        </h1>

        <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto">
          I build scalable web apps with the MERN stack (MongoDB, Express,
          React, Node.js). Passionate about clean code, intuitive UX, and
          solving real-world problems.
        </p>

        <button
          onClick={() => console.log("connect")}
          className="mt-4 bg-gradient-to-r from-[#9854FF] to-[#442AC6] hover:from-[#442AC6] hover:to-[#9854FF] text-white py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center mx-auto shadow-lg"
        >
          Hire Me
          <FiArrowRightCircle className="ml-3 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* Counter Section (Below content) */}
      <div className="grid grid-cols-3 gap-6 mt-12 text-center">
        <div>
          <div className="text-3xl md:text-4xl font-bold text-purple-400">
            {projectsCount}+
          </div>
          <div className="text-sm text-gray-400">Projects</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-purple-400">
            {experienceYears}+
          </div>
          <div className="text-sm text-gray-400">Years Experience</div>
        </div>
        <div>
          <div className="text-3xl md:text-4xl font-bold text-purple-400">
            100%
          </div>
          <div className="text-sm text-gray-400">Passion</div>
        </div>
      </div>

      {/* Bottom Gradient Line */}
      <div className="absolute bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
    </section>
  );
}
