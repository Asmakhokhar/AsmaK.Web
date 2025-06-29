'use client';
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FiArrowRightCircle } from 'react-icons/fi';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export default function HeroSection() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200);
  const toRotate = ["Web Developer", "UI/UX Designer", "MERN Stack Developer"];
  const period = 2000;
  const heroRef = useRef(null);
  const particlesRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Parallax effect values
  const x1 = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 0], [-20, 20]);
  const x2 = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 0], [20, -20]);
  const y1 = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 0], [-10, 10]);
  const y2 = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 0], [10, -10]);

  // Initialize particles
  const initParticles = useCallback(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        color: `rgba(168, 85, 247, ${Math.random() * 0.5 + 0.1})`
      });
    }

    const animateParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= 1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= 1;
      });

      requestAnimationFrame(animateParticles);
    };

    animateParticles();
  }, []);

  useEffect(() => {
    initParticles();
    const handleResize = () => {
      const canvas = particlesRef.current;
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [initParticles]);

  // Text animation
  useEffect(() => {
    let ticker = setInterval(() => tick(), delta);
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

  // Handle mouse movement for parallax
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  // Animate numbers
  const [projectsCount, setProjectsCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);
  
  useEffect(() => {
    const projectsAnimation = animate(0, 20, {
      duration: 2,
      onUpdate: (value) => setProjectsCount(Math.floor(value))
    });
    const experienceAnimation = animate(0, 1.5, {
      duration: 2,
      onUpdate: (value) => setExperienceYears(Math.floor(value))
    });
    
    return () => {
      projectsAnimation.stop();
      experienceAnimation.stop();
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden "
      onMouseMove={handleMouseMove}
    >
      {/* Particle Canvas */}
      <canvas 
        ref={particlesRef} 
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
      />
     
      <motion.div 
        className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl opacity-10"
        style={{ x: x2, y: y2 }}
      />
      
      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center relative z-20 max-w-4xl mx-auto mt-25"
      >
        {/* Welcome text with animated border */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block relative mb-6"
        >
          <span className="block text-lg text-purple-300 mb-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-900/20 backdrop-blur-sm">
            Welcome to my Website
          </span>
        </motion.div>

        {/* Main heading with typewriter effect */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span className="inline-block">
            Hi, I&#39;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Asma Khokhar</span>
          </span>
          <br />
          <span className="inline-flex items-center">
            <span className="text-purple-300">{text}</span>
            <span className="block w-1 h-12 bg-purple-400 ml-2 animate-pulse"></span>
          </span>
        </motion.h1>

        {/* Description with animated underline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative inline-block mb-10"
        >
          <p className="text-gray-300 text-sm md:text-base mb-8 mx-auto max-w-2xl">
            I build scalable web apps with the MERN stack (MongoDB, Express, React, Node.js).
            Passionate about clean code, intuitive UX, and solving real-world problems.
          </p>
          <motion.div 
            className="absolute bottom-6 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          />
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="flex justify-center gap-8 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">
              <span>{projectsCount}</span>+
            </div>
            <div className="text-sm text-gray-400">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">
              <span>{experienceYears}</span>+
            </div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-1">
              <span>100</span>%
            </div>
            <div className="text-sm text-gray-400">Passion</div>
          </div>
        </motion.div>

        {/* CTA Button with floating effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          whileHover={{ y: -5 }}
          className="inline-block"
        >
          <button
            onClick={() => console.log("connect")}
            className="group relative overflow-hidden bg-gradient-to-r from-[#9854FF] to-[#442AC6] hover:from-[#442AC6] hover:to-[#9854FF] text-white py-4 px-10 rounded-lg transition-all duration-500 flex items-center mx-auto shadow-xl hover:shadow-[0_10px_30px_-5px_rgba(152,84,255,0.3)]"
          >
            <span className="relative z-10 flex items-center">
              Let&#39;s Connect
              <FiArrowRightCircle className="ml-3 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#442AC6] to-[#9854FF] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}