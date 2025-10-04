"use client";
import React from 'react'; 
// import dynamic from 'next/dynamic';

// const GridLoader = dynamic(() => import('react-spinners/GridLoader'), { ssr: false });
import HeroSection from './Components/HeroSection';
import NavbarMain from './Components/Navbar/NavbarMain';
import SkillsMain from './Components/Skills/SkillsMain';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import AboutSection from './Components/AboutSection';
import ServicesSection from './Components/Services';

export default function Home() {

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timeout = setTimeout(() => setLoading(false), 2000);
  //   return () => clearTimeout(timeout);
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-gray-950">
  //       <GridLoader color="#3551e5" />
  //     </div>
  //   );
  // }
 
  return (
    <>
      <div className='font-body bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white min-h-screen'>
        <NavbarMain />
        <HeroSection />
        <AboutSection />
        <SkillsMain />
        <ServicesSection />
        <Contact />
      </div>
      <Footer />
    </>
  );
}
