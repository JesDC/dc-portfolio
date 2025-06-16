import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "NTC Scanner Checker Mobile App",
    description: "A mobile-based exam checker with for examinees.",
    role: "Application Developer & UI/UX Designer",
    imgUrl: require("../assets/ntc.jpg"),
    link: "https://www.figma.com/proto/sNTb3prCWRXtbG19gaDN5s?node-id=0-1&t=9IX0hzOO9DqJOZsg-6",
    designLink:
      "https://www.figma.com/design/CArjBPAhPNAFsUDnfq7WxV/Mobile-App?node-id=0-1&t=2GlqIobxuDvMOH00-1",
  },
  {
    title: "Stranded Mobile App",
    description:
      "Guidance app to help senior high students choose the right strand.",
    role: "UI/UX Designer",
    imgUrl: require("../assets/stranded.jpg"),
    link: "https://www.figma.com/proto/ANSv58WBpKJW22ihB0IU9e?node-id=0-1&t=9SQBx5X4xOS7fsHf-6",
    designLink:
      "https://www.figma.com/design/ANSv58WBpKJW22ihB0IU9e/Stranded-UI-Design?node-id=0-1&t=yQzp5OJAtzRr5m2q-1",
  },
  {
    title: "YAR Drainage Resource Management System",
    description: "Resource tracking with QR code integration for YAR Drainage.",
    role: "Front-End Developer & UI/UX Designer",
    imgUrl: require("../assets/yar.jpg"),
    link: "https://www.figma.com/proto/7BKBuEtgM9CXy5GTGo4otk?node-id=0-1&t=9SQBx5X4xOS7fsHf-6",
    designLink:
      "https://www.figma.com/design/7BKBuEtgM9CXy5GTGo4otk/Yar-Drainage?node-id=0-1&t=3VCSUvS7RTz2M0Pd-1",
  },
  {
    title: "Matahum Inventory Management System",
    description: "Inventory control system for Matahum Rice Trading.",
    role: "Front-End Developer & UI/UX Designer",
    imgUrl: require("../assets/matahum.jpg"),
    link: "https://www.figma.com/proto/CSmgeR1ZxbWeukKWyHNlkR?node-id=0-1&t=9SQBx5X4xOS7fsHf-6",
    designLink:
      "https://www.figma.com/design/CSmgeR1ZxbWeukKWyHNlkR/Matahum-Inventory-Management-System?node-id=0-1&t=LRgmSbt5D3XwhhJi-1",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2
          className="text-4xl sm:text-5xl font-extrabold text-center text-blue-900 mb-16"
          data-aos="fade-up"
        >
          My UI/UX Projects
        </h2>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              className="group bg-white/80 backdrop-blur-sm border border-blue-100 rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
            >
              <div className="relative">
                <img
                  src={project.imgUrl}
                  alt={project.title}
                  className="w-full h-52 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-900 bg-opacity-40 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-800 hover:bg-blue-700 px-4 py-1 rounded-full text-xs sm:text-sm font-medium shadow-lg transition"
                    title="Figma interactive prototype"
                  >
                    View Prototype
                  </a>
                  <a
                    href={project.designLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-blue-700 hover:bg-blue-600 px-4 py-1 rounded-full text-xs sm:text-sm font-medium shadow-md transition"
                    title="Full editable UI design in Figma"
                  >
                    Open Figma Design
                  </a>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-2">
                  {project.title}
                </h3>
                <span className="inline-block mb-3 text-xs font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                  {project.role}
                </span>
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
