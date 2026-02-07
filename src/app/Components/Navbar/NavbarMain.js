"use client";
import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";
import { GiHamburgerMenu, GiCrossMark } from "react-icons/gi";
import Logo from "./Logo";
import Button from "../ui/Button";

const sections = ["home", "about", "skills", "services", "projects", "contact"];

const NavbarMain = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  /* Detect Active Section */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  /* Scroll Background */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Services", id: "services" },
    { name: "Portfolio", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-colors duration-300
         ${
           scrolled
             ? "bg-gray-900/80 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.25)]"
             : "bg-transparent"
         }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 flex items-center justify-between h-16
    ${scrolled ? "py-2" : "py-4"}`}
        >
          {/* LOGO */}
          <a href="#home">
            <Logo />
          </a>

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative text-sm font-medium transition-colors
                ${active === link.id ? "text-purple-300" : "text-gray-300 hover:text-white"}`}
              >
                {link.name}

                {active === link.id && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-purple-400 rounded" />
                )}
              </a>
            ))}

            <Button
              href="#contact"
              icon={<FiArrowRight />}
              onClick={() => setOpen(false)}
            >
               Let&apos;s Connect
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-300 cursor-pointer"
          >
            {open ? <GiCrossMark size={22} /> : <GiHamburgerMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-[64px] w-full bg-gray-900/95 backdrop-blur-md z-40 shadow-2xl
        transition-all duration-300 overflow-hidden
        ${open ? "max-h-[400px] border-b border-purple-900/30" : "max-h-0"}`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`text-base ${active === link.id ? "text-purple-300" : "text-gray-300"}`}
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-center py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600"
          >
            Let&apos;s Connect
          </a>
        </div>
      </div>
    </>
  );
};

export default NavbarMain;
