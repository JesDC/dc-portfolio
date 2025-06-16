import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
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
      className="py-20 sm:py-24 bg-gradient-to-b from-white via-blue-50 to-white text-gray-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-6"
          data-aos="fade-up"
        >
          Contact Me
        </h2>

        <p
          className="text-base sm:text-lg mb-12 text-gray-700"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Let’s connect! Whether it’s for a job opportunity, collaboration, or
          just a friendly hello—I’d love to hear from you.
        </p>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16 text-left">
          {/* Email Card */}
          <div
            className="bg-white/60 backdrop-blur-md border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Email</h3>
            <div className="flex items-center gap-3 text-gray-700">
              <MdEmail className="text-2xl text-blue-700 hover:animate-bounce" />
              <span className="break-words">jm.decastro38@gmail.com</span>
            </div>
          </div>

          {/* Phone Card */}
          <div
            className="bg-white/60 backdrop-blur-md border border-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">Phone</h3>
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhoneAlt className="text-lg text-blue-700 hover:animate-bounce" />
              <a href="tel:09292034977" className="hover:underline">
                0929-203-4977
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
