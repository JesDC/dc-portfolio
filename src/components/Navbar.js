import React from "react";
import Scrollspy from "react-scrollspy";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-6 md:px-16 flex justify-between items-center animate-fade-in-down">
      <h1 className="text-xl md:text-2xl font-bold text-primary">JDC</h1>

      <Scrollspy
        items={["about", "projects", "contact"]}
        currentClassName="text-primary underline"
        className="hidden md:flex space-x-8 text-blue-800 font-medium"
        offset={-100}
      >
        <li>
          <a href="#projects" className="hover:text-primary transition">
            Projects
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-primary transition">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-primary transition">
            Contact
          </a>
        </li>
      </Scrollspy>
    </nav>
  );
};

export default Navbar;
