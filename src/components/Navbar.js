import React, { useEffect, useState, useRef } from "react";
import Scrollspy from "react-scrollspy";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import clsx from "clsx";

// Navigation items
const navItems = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "about", label: "About" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  // Shrink + hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 10);
      setHidden(currentY > lastScrollY.current && currentY > 100);
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable body scroll when menu is open (mobile fix)
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Highlight current section for Scrollspy (also for mobile)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0.3 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      ref={navRef}
      role="navigation"
      className={clsx(
        "fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-300",
        scrolled ? "shadow-md bg-white/90" : "bg-white/95",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <div className="py-3 px-6 md:px-16 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <img
            src="/logo.png"
            alt="JMDC Logo"
            className={clsx(
              "object-contain transition-all duration-500",
              scrolled ? "w-8 h-8" : "w-12 h-12"
            )}
          />
        </a>

        {/* Desktop Navigation */}
        <Scrollspy
          items={navItems.map((item) => item.id)}
          currentClassName="text-primary underline underline-offset-4"
          className="hidden md:flex space-x-8 text-blue-800 font-medium"
          offset={-100}
          componentTag="ul"
        >
          {navItems.map((item, index) => (
            <li
              key={item.id}
              data-aos="fade-down"
              data-aos-delay={`${index * 100}`}
              data-aos-duration="500"
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

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
          className="md:hidden text-blue-900 text-2xl transition-transform duration-300"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <ul className="animate-in slide-in-from-top fade-in absolute top-full left-0 w-full bg-white shadow-lg py-6 flex flex-col items-center space-y-4 md:hidden z-40">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setIsOpen(false)}
                className={clsx(
                  "font-medium transition-colors duration-300",
                  "text-blue-800 hover:text-primary",
                  activeSection === item.id && "text-primary underline"
                )}
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
