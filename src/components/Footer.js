import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-50 py-8 text-center text-sm text-blue-900 mt-20">
      <div className="mb-4 flex justify-center gap-6 text-xl">
        <a
          href="https://github.com/JesDC"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/jestro-maverick-de-castro-1058162a3/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/JmDC1923/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/jm_saurus/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-primary"
        >
          <FaInstagram />
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} JMDC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
