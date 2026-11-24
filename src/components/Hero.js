import React, { useEffect, useState } from "react";
import yourPhoto from "../assets/mypic.jpg";

import {
  FaBriefcase,
  FaDatabase,
  FaChartLine,
  FaLaptopCode,
} from "react-icons/fa";

function Hero() {
  const roles = [
    "Administrative Operations",
    "Data & Reporting",
    "Information Technology",
    "Systems & Database Support",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  const focusAreas = [
    { icon: <FaBriefcase />, label: "Admin Operations" },
    { icon: <FaDatabase />, label: "Data Management" },
    { icon: <FaChartLine />, label: "Reporting & Analytics" },
    { icon: <FaLaptopCode />, label: "IT & Systems" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden
      bg-gradient-to-br from-white via-blue-50 to-white
      px-4 sm:px-8 lg:px-20 py-24"
      aria-label="Introduction Section"
    >
      {/* BACKGROUND DECORATIONS */}
      <div
        className="absolute top-20 right-10 w-72 h-72 bg-blue-200/30
        rounded-full blur-3xl pointer-events-none animate-pulse"
      />

      <div
        className="absolute bottom-10 left-0 w-80 h-80 bg-sky-200/30
        rounded-full blur-3xl pointer-events-none"
      />

      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#1e40af 1px, transparent 1px)",
          backgroundSize: "25px 25px",
        }}
      />

      {/* MAIN CONTENT */}
      <div
        className="relative z-10 max-w-7xl mx-auto w-full
        grid grid-cols-1 lg:grid-cols-2 items-center gap-14"
      >
        {/* LEFT CONTENT */}
        <div
          className="text-center lg:text-left"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          {/* INTRO BADGE */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2
            rounded-full bg-blue-100 text-blue-800 text-sm font-semibold
            mb-6 border border-blue-200 hover:bg-blue-800 hover:text-white
            hover:border-blue-800 transition-all duration-300 cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span
                className="animate-ping absolute inline-flex h-full w-full
                rounded-full bg-blue-500 opacity-75"
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2
                bg-blue-700"
              />
            </span>
            Information Technology Graduate
          </div>

          {/* NAME */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl
            font-extrabold text-gray-900 leading-tight mb-5"
          >
            Hi, I'm{" "}
            <span
              className="bg-gradient-to-r from-blue-800 via-blue-600
              to-sky-500 bg-clip-text text-transparent"
            >
              Jestro Maverick de Castro
            </span>
            <span className="inline-block animate-bounce ml-2">👋</span>
          </h1>

          {/* ROTATING PROFESSIONAL TITLE */}
          <div className="min-h-[65px] sm:min-h-[45px] mb-5">
            <p
              key={roleIndex}
              className="text-xl sm:text-2xl font-bold text-blue-800
              animate-[fadeIn_0.6s_ease-in-out]"
            >
              {roles[roleIndex]}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Professional Interests & Experience
            </p>
          </div>

          {/* DESCRIPTION */}
          <p
            className="text-gray-700 text-base sm:text-lg leading-relaxed
            max-w-2xl mx-auto lg:mx-0 mb-7"
          >
            An Information Technology graduate with professional experience in
            administrative operations, records management, inventory monitoring,
            and data reporting. My experience includes handling official
            documents, validating and reconciling records, supporting audit and
            procurement activities, and working with internal management
            systems. I also have a technical background in web development,
            databases, and data analytics, with experience using Microsoft
            Excel, Access, and Power BI. I aim to combine organizational skills
            and technical knowledge to support efficient operations and
            practical technology solutions.
          </p>

          {/* PROFESSIONAL FOCUS TAGS */}
          <div
            className="flex flex-wrap justify-center lg:justify-start
            gap-2 mb-8"
          >
            {focusAreas.map((item, index) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-3 py-2
                bg-white border border-blue-100 rounded-lg
                text-blue-800 text-xs sm:text-sm font-medium shadow-sm
                hover:bg-blue-800 hover:text-white hover:border-blue-800
                hover:-translate-y-1 hover:shadow-lg
                transition-all duration-300 cursor-default"
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {item.icon}
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PROFILE IMAGE */}
        <div
          className="relative flex justify-center items-center
          min-h-[350px] sm:min-h-[450px]"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          {/* IMAGE GLOW */}
          <div
            className="absolute w-72 h-72 sm:w-96 sm:h-96
            rounded-full bg-blue-300/30 blur-3xl"
          />

          {/* ROTATING CIRCLE */}
          <div
            className="absolute w-72 h-72 sm:w-[420px] sm:h-[420px]
            rounded-full border border-dashed border-blue-300/70
            animate-[spin_35s_linear_infinite]"
          />

          {/* PROFILE IMAGE */}
          <div className="relative group">
            <div
              className="absolute -inset-3 rounded-full
              bg-gradient-to-r from-blue-500 to-sky-300
              opacity-30 blur-xl group-hover:opacity-70
              group-hover:blur-2xl transition-all duration-500"
            />

            <img
              src={yourPhoto}
              alt="Portrait of Jestro Maverick de Castro"
              className="relative w-60 h-60 sm:w-80 sm:h-80
              object-cover rounded-full border-8 border-white
              shadow-2xl group-hover:scale-105
              group-hover:-rotate-2 transition-all duration-500"
            />
          </div>

          {/* FLOATING BADGE 1 */}
          <div
            className="absolute top-5 right-0 sm:right-5
            bg-white/90 backdrop-blur-md rounded-xl shadow-xl
            p-3 flex items-center gap-3 border border-blue-100
            hover:-translate-y-2 hover:shadow-2xl
            transition-all duration-300 animate-bounce"
            style={{ animationDuration: "4s" }}
          >
            <div className="bg-blue-100 text-blue-800 p-3 rounded-lg">
              <FaDatabase size={20} />
            </div>

            <div>
              <p className="font-bold text-gray-800 text-sm">Data Management</p>
              <p className="text-xs text-gray-500">Accuracy & Organization</p>
            </div>
          </div>

          {/* FLOATING BADGE 2 */}
          <div
            className="absolute bottom-8 left-0 sm:left-0
            bg-white/90 backdrop-blur-md rounded-xl shadow-xl
            p-3 flex items-center gap-3 border border-blue-100
            hover:-translate-y-2 hover:shadow-2xl
            transition-all duration-300"
          >
            <div className="bg-sky-100 text-blue-800 p-3 rounded-lg">
              <FaBriefcase size={20} />
            </div>

            <div>
              <p className="font-bold text-gray-800 text-sm">
                Operations Support
              </p>
              <p className="text-xs text-gray-500">Administrative Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
