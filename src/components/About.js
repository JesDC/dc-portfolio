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
            , an IT graduate from the Technological University of the
            Philippines – Manila (August 2025). I have experience in government
            operations, data documentation, inventory systems, and operational
            reporting within a national agency environment.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-center md:text-left">
            I currently support asset lifecycle tracking, procurement processes,
            inventory auditing, and data reporting, with a focus on accuracy,
            compliance, and process efficiency.
          </p>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-center md:text-left">
            I also have experience in UI/UX principles, web systems, and data
            analytics using tools like Power BI and Microsoft Access. I enjoy
            working on structured, data-driven systems that improve workflow and
            usability.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-center md:text-left">
            You can view my full experience and details in my resume below.
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
          {/* Web Development */}
          <div
            className="bg-white/60 backdrop-blur-md p-5 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition"
            data-aos="zoom-in-up"
          >
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <FaCode className="text-blue-700" />
              Web Development
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>HTML, CSS, Tailwind CSS, JavaScript, React.js</li>
              <li>Basic C, C#, Node.js, and Python (server-side awareness)</li>
              <li>MySQL and Microsoft Access for relational data handling</li>
            </ul>
          </div>

          {/* UI/UX Design */}
          <div
            className="bg-white/60 backdrop-blur-md p-5 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition"
            data-aos="zoom-in-up"
            data-aos-delay="100"
          >
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <FaPalette className="text-blue-700" />
              UI/UX Design
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Figma (intermediate level)</li>
              <li>User-centered interface design principles</li>
              <li>Wireframing and prototyping</li>
            </ul>
          </div>

          {/* Data & Inventory Support */}
          <div
            className="bg-white/60 backdrop-blur-md p-5 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition"
            data-aos="zoom-in-up"
            data-aos-delay="200"
          >
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <FaDatabase className="text-blue-700" />
              Inventory, Data & Audit Support
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Asset tracking and inventory record maintenance</li>
              <li>Data encoding, validation, and report updating</li>
              <li>Audit support and documentation compliance</li>
              <li>Inter-department coordination for operational workflows</li>
            </ul>
          </div>

          {/* Data Analytics */}
          <div
            className="bg-white/60 backdrop-blur-md p-5 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <FaChartBar className="text-blue-700" />
              Data Analytics
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Power BI dashboards and reporting</li>
              <li>Excel and Access data integration</li>
              <li>Data visualization and structured reporting</li>
            </ul>
          </div>

          {/* Technical Support */}
          <div
            className="bg-white/60 backdrop-blur-md p-5 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition"
            data-aos="zoom-in-up"
            data-aos-delay="400"
          >
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <FaShieldAlt className="text-blue-700" />
              Technical Support
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Basic troubleshooting for software and hardware issues</li>
              <li>System and user support for operational tools</li>
              <li>Problem-solving and issue resolution</li>
            </ul>
          </div>

          {/* Core Strengths */}
          <div
            className="bg-white/60 backdrop-blur-md p-5 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition"
            data-aos="zoom-in-up"
            data-aos-delay="500"
          >
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <FaTools className="text-blue-700" />
              Core Strengths
            </h4>
            <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
              <li>Problem-solving and critical thinking</li>
              <li>Adaptability and strong communication</li>
              <li>Team collaboration and independent work</li>
              <li>Attention to detail and process efficiency</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
