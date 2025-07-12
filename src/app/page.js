"use client";
import React from 'react'; 
import Hero from '../app/Components/HeroSection.js';
import NavbarMain from '../app/Components/Navbar/NavbarMain.js';
import SkillsMain from '../app/Components/Skills/SkillsMain.js';
import Contact from '../app/Components/Contact.js';
import Footer from '../app/Components/Footer.js';
import AboutSection from '../app/Components/AboutSection.js';
import ServicesSection from '../app/Components/Services.js';
export default function Home() {
  return (
    < >
          
      <div className='font-body bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white min-h-screen'>
        <NavbarMain />
        <Hero/>
        <AboutSection/>
        <SkillsMain/>
        <ServicesSection/>
        <Contact />
      </div>
      <Footer />

    </>
  );
}
