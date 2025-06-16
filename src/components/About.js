import React from "react";
import myPic from "../assets/mypic.jpg";
import {
  FaCode,
  FaDatabase,
  FaPalette,
  FaChartBar,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-gradient-to-br from-white via-blue-50 to-white text-gray-800"
    >
      {/* MAIN GRID: IMAGE + INFO */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* LEFT - IMAGE */}
        <div className="flex justify-center md:justify-end" data-aos="zoom-in">
          <img
            src={myPic}
            alt="Portrait of Jestro Maverick de Castro"
            className="w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 object-cover rounded-full shadow-lg border-4 border-blue-800 transform hover:scale-105 hover:rotate-1 transition-transform duration-500"
          />
        </div>

        {/* RIGHT - TEXT CONTENT */}
        <div
          className="bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-700"
          data-aos="fade-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 text-center md:text-left">
            About Me
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 text-center md:text-left">
            Hello! I’m{" "}
            <span className="font-semibold text-blue-800">
              Jestro Maverick de Castro
            </span>
            , a enthusiastic person with a passion for building sleek,
            user-centered designs and turning data into meaningful insights.
            Whether it's coding interfaces, designing Figma prototypes, or
            visualizing analytics in Power BI as admire turning ideas into real,
            interactive products.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-center md:text-left">
            I am currently pursuing my Bachelor of Science in Information
            Technology in the Technological University of the Philippines –
            Manila, with graduation expected in August 2025.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-center md:text-left">
            While interning at the National Telecommunications Commission (NTC),
            I was working as an Application Developer and a part of the core
            development team of the NTC Scanner Checker Mobile App, where we
            laid the foundation of the mobile application for future
            development. I also helped in digitizing the records of employees
            using Microsoft Access and Power BI, thereby supporting the agency's
            thrust towards data modernization.
          </p>

          {/* RESUME DOWNLOAD */}
          <div className="text-center md:text-left">
            <a
              href="/decastro-resume.pdf"
              download
              aria-label="Download Resume"
              className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 hover:scale-105 transform transition duration-300 group"
            >
              <FiDownload className="text-xl group-hover:animate-bounce" />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {/* SKILLS & TOOLS */}
      <div className="max-w-6xl mx-auto mt-10 px-4 sm:px-6">
        <h3
          className="text-2xl sm:text-3xl font-bold text-blue-800 mb-10 text-center"
          data-aos="fade-up"
        >
          Skills & Tools
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-gray-800">
          {[
            {
              title: "Web Development",
              icon: <FaCode className="text-blue-700" />,
              items: [
                "HTML, CSS, Tailwind CSS, JavaScript, React.js",
                "Basic Python, C, and C# scripting",
              ],
            },
            {
              title: "Back-End Development",
              icon: <FaDatabase className="text-blue-700" />,
              items: ["Node.js, XAMPP for server-side", "MySQL, MS Access"],
            },
            {
              title: "UI/UX Design",
              icon: <FaPalette className="text-blue-700" />,
              items: [
                "Figma proficiency",
                "Clean, user-centered interface design",
              ],
            },
            {
              title: "Data Analytics / BI",
              icon: <FaChartBar className="text-blue-700" />,
              items: [
                "Power BI dashboards & reports",
                "Excel + Access integration",
              ],
            },
            {
              title: "Other Tech Skills",
              icon: <FaShieldAlt className="text-blue-700" />,
              items: [
                "Basic Cybersecurity & AI awareness",
                "Git & GitHub for version control",
                "Advanced Microsoft Office 365",
              ],
            },
            {
              title: "Strengths",
              icon: <FaTools className="text-blue-700" />,
              items: [
                "Problem-solving & critical thinking",
                "Adaptability & communication",
                "Teamwork & independence",
              ],
            },
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-md p-5 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                {skill.icon}
                {skill.title}
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                {skill.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
