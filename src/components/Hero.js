import React from "react";
import yourPhoto from "../assets/mypic.jpg";
// import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center
                 bg-gradient-to-br from-white via-blue-50 to-white
                 px-4 sm:px-6 md:px-20 py-16 md:py-24 gap-10 sm:gap-12 overflow-hidden"
      aria-label="Introduction Section"
    >
      {/* SVG Background Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] -z-10 opacity-30 pointer-events-none select-none">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full animate-pulseSlow"
        >
          <path
            fill="#60a5fa"
            d="M47.5,-63.3C61.5,-53.3,72.1,-39.8,75.3,-25.4C78.5,-11.1,74.2,4.3,67.1,18.6C60,32.9,50,46.1,37.1,55.5C24.2,64.8,8.3,70.3,-7.2,72.3C-22.8,74.3,-45.7,72.9,-58.9,61.6C-72.2,50.2,-75.8,28.8,-73.4,10.1C-71.1,-8.7,-62.8,-23.7,-52.4,-36.2C-42.1,-48.8,-29.7,-58.8,-15.1,-65.1C-0.6,-71.4,15.2,-74.9,30.1,-71.3C45,-67.7,60.4,-56.7,47.5,-63.3Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      {/* Left: Text Content */}
      <div
        className="flex-1 z-10 bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-700 text-center md:text-left"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-700 via-blue-500 to-blue-700 bg-clip-text text-transparent mb-4">
          Hi, I’m Jestro Maverick de Castro 👋
        </h1>

        {/* Tagline */}
        <div className="text-lg sm:text-xl font-bold text-blue-700 mb-2">
          Crafting experiences. Design and code with purpose.
          {/* 
          <Typewriter
            words={["Crafting experiences. Design and code with purpose."]}
            loop
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
          */}
        </div>

        {/* Description */}
        <p
          className="text-base sm:text-lg md:text-xl text-blue-800 mb-6 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          I’m a passionate aspiring UI/UX designer and data analytics enthusiast
          based in Manila. Equipped with tools like React.js, Tailwind CSS,
          Figma, Power BI, Microsoft Access, and more—I create interactive,
          data-driven digital experiences that bring ideas to life.
        </p>

        {/* CTA Button */}
        <a
          href="#projects"
          className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full 
                     shadow-lg transition-transform duration-300 hover:scale-105 inline-block animate-fade-in"
        >
          View Projects
        </a>
      </div>

      {/* Right: Profile Image */}
      <div
        className="flex-1 flex justify-center z-10 mb-10 md:mb-0"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <img
          src={yourPhoto}
          alt="Portrait of Jestro Maverick de Castro"
          className="w-52 sm:w-64 md:w-72 h-52 sm:h-64 md:h-72 object-cover rounded-full border-4 border-blue-300 
                   shadow-xl animate-glow"
        />
      </div>
    </section>
  );
}

export default Hero;
