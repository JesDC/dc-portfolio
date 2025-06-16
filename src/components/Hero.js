import React from "react";
import yourPhoto from "../assets/mypic.jpg";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between
                 bg-gradient-to-br from-white via-blue-50 to-white
                 px-6 md:px-20 py-20 gap-12 overflow-hidden"
      aria-label="Introduction Section"
    >
      {/* Animated SVG Blob Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] -z-10 opacity-30 pointer-events-none select-none">
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

      {/* Left Side: Text Content */}
      <div
        className="flex-1 z-10 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg transition-all duration-700"
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4">
          Hi, I’m Jestro Maverick de Castro 👋
        </h1>
        <p
          className="text-lg md:text-xl text-blue-800 mb-6 max-w-xl leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <span className="block text-xl font-bold text-blue-700 mb-2">
            Crafting experiences. Coding with purpose.
          </span>
          I’m a passionate aspiring UI/UX designer and data analytics enthusiast
          based in Manila. Equipped with tools like React.js, Tailwind CSS,
          Figma, Power BI, Microsoft Access, and more. I make interactive,
          data-driven digital experiences that bring ideas to life.
        </p>
        <a
          href="#projects"
          className="bg-blue-800 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full 
                     shadow-lg transition-transform duration-300 hover:scale-105 inline-block animate-fade-in"
        >
          View Projects
        </a>
      </div>

      {/* Right Side: Profile Image */}
      <div
        className="flex-1 flex justify-center z-10"
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-delay="400"
      >
        <img
          src={yourPhoto}
          alt="Portrait of J"
          className="w-72 h-72 object-cover rounded-full shadow-xl border-4 border-blue-300 
                     transition-transform duration-500 hover:scale-105 animate-fade-in"
        />
      </div>
    </section>
  );
}

export default Hero;
