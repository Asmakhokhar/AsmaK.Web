import Hero from '../Components/HeroSection.js';
import NavbarMain from '../Components/Navbar/NavbarMain.js';
import SkillsMain from '../Components/Skills/SkillsMain.js';
import Contact from '../Components/Contact.js';
import Footer from '../Components/Footer.js';
import AboutSection from '../Components/AboutSection.js';
import ServicesSection from '../Components/Services.js';
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
