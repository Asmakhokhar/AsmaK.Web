"use client";
import React from 'react'; 
import HeroSection from './Components/HeroSection';
import NavbarMain from './Components/Navbar/NavbarMain';
import SkillsMain from './Components/Skills/SkillsMain';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AboutSection from './Components/AboutSection';
import ServicesSection from './Components/Services';
import ProjectsSection from './Components/ProjectsSection';
import TestimonialSection from './Components/Testimonials';
export default function Home() {


 
  return (
    <>
      <div className='font-body text-white'>
        <NavbarMain />
        <HeroSection />
        <AboutSection />
        <SkillsMain />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialSection />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
