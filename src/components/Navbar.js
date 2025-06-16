import React, { useState } from "react";
import Scrollspy from "react-scrollspy";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "achievements", label: "Achievements" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-md py-4 px-6 md:px-16 flex justify-between items-center animate-fade-in-down">
      <h1 className="text-xl md:text-2xl font-bold text-primary">JMDC</h1>

      {/* Desktop Navigation */}
      <Scrollspy
        items={navItems.map((item) => item.id)}
        currentClassName="text-primary underline underline-offset-4"
        className="hidden md:flex space-x-8 text-blue-800 font-medium transition-colors duration-200"
        offset={-100}
        componentTag="ul"
      >
        {navItems.map((item, index) => (
          <li
            key={item.id}
            data-aos="fade-down"
            data-aos-delay={`${index * 100}`}
            data-aos-duration="600"
          >
            <a
              href={`#${item.id}`}
              className="relative group hover:text-primary transition-colors duration-300"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </li>
        ))}
      </Scrollspy>

      {/* Mobile Menu Button */}
      <button
        className={`md:hidden text-blue-900 focus:outline-none text-2xl transition-transform duration-300 ${
          isOpen ? "rotate-90 scale-110" : "rotate-0 scale-100"
        }`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
      </button>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <ul className="animate-in slide-in-from-top-4 fade-in absolute top-16 left-0 w-full bg-white shadow-md py-4 flex flex-col items-center space-y-4 md:hidden z-40">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className="text-blue-800 hover:text-primary font-medium transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
