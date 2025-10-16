"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  {
    id: "01",
    category: "Web",
    title: "IvoLuck Website",
    tech: "Next.JS, Tailwind, Node.JS, GSAP, Swiper Js",
    image: "/dash.PNG",
  },
  {
    id: "02",
    category: "Web",
    title: "Deviconic Company Website",
    tech: "React.JS, Tailwind, Node.JS, GSAP, Swiper Js",
    image: "/dev.PNG",
  },
  {
    id: "03",
    category: "Web",
    title: "Techxicon Company Site",
    tech: "Next.JS, Tailwind, Node.JS, GSAP, Swiper Js and Figma",
    image: "/tech.PNG",
  },
  {
    id: "04",
    category: "Web",
    title: "Feliciano Restaurant Website",
    tech: "HTML, CSS, JavaScript, GSAP, Swiper Js and Figma",
    image: "/res.PNG",
  },
  {
    id: "05",
    category: "Web",
    title: "Digital Agency Website",
    tech: "React.JS, CSS, GSAP, Swiper Js and Figma",
    image: "/agen.PNG",
  },
];

export default function ProjectsSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Prevent hydration mismatch
    return null;
  }

  return (
    <section id="projects" className="relative py-20 text-white overflow-hidden">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            I make
          </span>{" "}
          Incredible Websites
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          className="pb-12"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="rounded-3xl bg-gray-900/50 backdrop-blur-md border border-gray-800 p-6 flex flex-col justify-between h-[460px] shadow-[0_0_30px_rgba(72,61,139,0.2)] hover:shadow-[0_0_40px_rgba(128,90,213,0.4)] transition-all duration-500">
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-3xl font-bold text-gray-300">
                      {project.id}
                    </span>
                    <span className="text-sm uppercase text-gray-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    <span className="font-semibold text-gray-300">
                      Technologies used:
                    </span>{" "}
                    {project.tech}
                  </p>
                </div>

                <div className="relative group mt-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <FiArrowUpRight className="text-white text-lg" />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* floating glow removed from SSR to prevent mismatch */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl"></div>
    </section>
  );
}
