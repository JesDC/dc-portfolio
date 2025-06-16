import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-10 text-center text-sm text-blue-900 mt-24 shadow-inner">
      <div className="mb-5 flex justify-center gap-6 text-2xl">
        <a
          href="https://github.com/JesDC"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-blue-800 hover:text-blue-500 transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jestro-maverick-de-castro-1058162a3/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-blue-800 hover:text-blue-500 transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/JmDC1923/"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className="text-blue-800 hover:text-blue-500 transition-transform transform hover:scale-110"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/jm_saurus/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="text-blue-800 hover:text-blue-500 transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-xs sm:text-sm tracking-wide">
        &copy; {new Date().getFullYear()} JMDC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
