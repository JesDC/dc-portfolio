import React, { useEffect } from "react";
import {
  FaPhoneAlt,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white via-blue-50 to-white text-gray-800"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-extrabold text-blue-900 mb-6"
          data-aos="fade-up"
        >
          Contact Me
        </h2>
        <p
          className="text-lg mb-12 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Let’s connect! Whether it’s for a job opportunity, collaboration, or
          just a friendly hello — I’d love to hear from you.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left mb-12">
          {/* Email */}
          <div
            className="bg-white/60 backdrop-blur-md border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Email</h3>
            <div className="flex items-center text-gray-700 gap-2">
              <MdEmail className="text-2xl text-blue-700" />
              <span>jm.decastro38@gmail.com</span>
            </div>
          </div>

          {/* Phone */}
          <div
            className="bg-white/60 backdrop-blur-md border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Phone</h3>
            <div className="flex items-center text-gray-700 gap-2">
              <FaPhoneAlt className="text-base text-blue-700" />
              <span>0929-203-4977</span>
            </div>
          </div>
        </div>

        {/* Socials */}
        <div data-aos="zoom-in">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">
            Connect with me
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/JesDC"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 text-2xl transition"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jestro-maverick-de-castro-1058162a3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 text-2xl transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.facebook.com/JmDC1923/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 text-2xl transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/jm_saurus/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-800 hover:text-blue-600 text-2xl transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
