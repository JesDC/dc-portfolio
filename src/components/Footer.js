import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      data-aos="fade-up"
      data-aos-duration="600"
      className="bg-blue-50 py-10 text-center text-sm text-blue-900 shadow-inner"
    >
      <hr className="mx-auto mb-6 w-1/2 border-blue-200" />

      <div className="mb-5 flex justify-center gap-6 text-2xl">
        {[
          {
            icon: <FaGithub />,
            link: "https://github.com/JesDC",
            label: "GitHub",
          },
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/jestro-maverick-de-castro-1058162a3/",
            label: "LinkedIn",
          },
          {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/JmDC1923/",
            label: "Facebook",
          },
          {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/jm_saurus/",
            label: "Instagram",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className="text-blue-800 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1 hover:drop-shadow focus:outline-none focus-visible:ring focus-visible:ring-blue-300"
          >
            {item.icon}
          </a>
        ))}
      </div>

      <p className="text-xs sm:text-sm tracking-wide">
        &copy; {new Date().getFullYear()} JMDC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
