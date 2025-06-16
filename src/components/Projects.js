import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "NTC Scanner Checker Mobile App",
    description: "A mobile-based exam checker with QR scanning for examinees.",
    role: "Application Developer & UI/UX Designer",
    imgUrl: require("../assets/ntc.jpg"),
    link: "https://www.figma.com/proto/sNTb3prCWRXtbG19gaDN5s?node-id=0-1&t=9SQBx5X4xOS7fsHf-6",
  },
  {
    title: "Stranded Mobile App",
    description:
      "Guidance app to help senior high students choose the right strand.",
    role: "UI/UX Designer",
    imgUrl: require("../assets/stranded.jpg"),
    link: "https://www.figma.com/proto/ANSv58WBpKJW22ihB0IU9e?node-id=0-1&t=9SQBx5X4xOS7fsHf-6",
  },
  {
    title: "YAR Drainage Resource Management System",
    description: "Resource tracking with QR code integration for YAR Drainage.",
    role: "Front-End Developer & UI/UX Designer",
    imgUrl: require("../assets/yar.jpg"),
    link: "https://www.figma.com/proto/7BKBuEtgM9CXy5GTGo4otk?node-id=0-1&t=9SQBx5X4xOS7fsHf-6",
  },
  {
    title: "Matahum Inventory Management System",
    description: "Inventory control system for Matahum Rice Trading.",
    role: "Front-End Developer & UI/UX Designer",
    imgUrl: require("../assets/matahum.jpg"),
    link: "https://www.figma.com/proto/CSmgeR1ZxbWeukKWyHNlkR?node-id=0-1&t=9SQBx5X4xOS7fsHf-6",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-blue-900 mb-16"
          data-aos="fade-up"
        >
          My UI/UX Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              className="backdrop-blur-md bg-white/70 border border-blue-100 rounded-xl shadow-lg overflow-hidden group transform transition duration-300 hover:scale-105"
            >
              <div className="relative">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-800 hover:bg-blue-700 px-6 py-2 rounded-full font-medium shadow-lg transition"
                  >
                    View Design
                  </a>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-blue-800 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 italic mb-2">
                  Role: {project.role}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
