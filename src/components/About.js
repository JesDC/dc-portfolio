import React from "react";
import myPic from "../assets/mypic.jpg";
import {
  FaCode,
  FaDatabase,
  FaPalette,
  FaChartBar,
  FaShieldAlt,
  FaTools,
  FaBriefcase,
  FaBoxes,
} from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const About = () => {
  const skillGroups = [
    {
      title: "Administrative & Operations Support",
      icon: <FaBriefcase />,
      items: [
        "Document processing and records management",
        "Administrative reports and office documentation",
        "Data encoding, validation, and monitoring",
        "Interdepartmental coordination",
      ],
    },
    {
      title: "Inventory, Audit & Procurement Support",
      icon: <FaBoxes />,
      items: [
        "Inventory management and asset tracking",
        "Inventory reconciliation and verification",
        "ICS, ITR, and PPE documentation",
        "Supplier coordination and price validation",
      ],
    },
    {
      title: "Data Analytics & Reporting",
      icon: <FaChartBar />,
      items: [
        "Power BI dashboard creation and reporting",
        "Microsoft Excel (PivotTables and VLOOKUP)",
        "Microsoft Access reporting and automation",
        "Data visualization and report preparation",
      ],
    },
    {
      title: "Database & Systems Management",
      icon: <FaDatabase />,
      items: [
        "MySQL and Microsoft Access",
        "Database organization and data integrity",
        "User acceptance testing (UAT)",
        "Internal system testing and validation",
      ],
    },
    {
      title: "Web Development & UI/UX",
      icon: <FaPalette />,
      items: [
        "HTML, CSS, JavaScript, Tailwind CSS, and ReactJS",
        "Familiarity with Node.js, Python, C, and C#",
        "Figma, wireframing, and prototyping",
        "User interface design principles",
      ],
    },
    {
      title: "Technical Support & Core Strengths",
      icon: <FaTools />,
      items: [
        "Basic hardware, software, and network troubleshooting",
        "End-user system assistance",
        "Problem-solving and critical thinking",
        "Adaptability, attention to detail, and teamwork",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-gradient-to-br from-white via-blue-50 to-white text-gray-800"
    >
      {/* ABOUT ME */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* PROFILE IMAGE */}
        <div className="flex justify-center md:justify-end" data-aos="zoom-in">
          <img
            src={myPic}
            alt="Portrait of Jestro Maverick de Castro"
            className="w-56 sm:w-64 md:w-72 h-56 sm:h-64 md:h-72 object-cover rounded-full shadow-lg border-4 border-blue-800 transform hover:scale-105 hover:rotate-1 transition-transform duration-500"
          />
        </div>

        {/* ABOUT CONTENT */}
        <div
          className="bg-white/70 backdrop-blur-md p-6 sm:p-8 rounded-xl shadow-lg transition-all duration-700"
          data-aos="fade-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 text-center md:text-left">
            About Me
          </h2>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 text-center md:text-left">
            Hello! I'm{" "}
            <span className="font-semibold text-blue-800">
              Jestro Maverick de Castro
            </span>
            , an Information Technology graduate from the Technological
            University of the Philippines, Manila (August 2025). I have
            professional experience in administrative operations, records
            management, inventory and asset monitoring, and data reporting
            through my work at the National Telecommunications Commission (NTC).
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4 text-center md:text-left">
            Throughout my experience, I handled administrative documentation,
            data encoding and validation, inventory reconciliation, audit
            support, and procurement-related activities. I also gained exposure
            to internal management systems, including system testing, feature
            validation, and report preparation.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-center md:text-left">
            Alongside my administrative experience, I have a technical
            background in web development, database management, and data
            analytics. I have worked with technologies and tools such as
            ReactJS, JavaScript, Microsoft Excel, Microsoft Access, and Power
            BI. I enjoy learning new technologies, improving workflows, and
            finding practical ways to make everyday tasks more organized and
            efficient.
          </p>

          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 text-center md:text-left">
            You can explore more about my skills, projects, and professional
            experience in my resume below.
          </p>

          {/* RESUME DOWNLOAD */}
          <div className="text-center md:text-left">
            <a
              href="/decastro2026.pdf"
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
      <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6">
        <h3
          className="text-2xl sm:text-3xl font-bold text-blue-800 mb-3 text-center"
          data-aos="fade-up"
        >
          Skills & Tools
        </h3>

        <p
          className="text-gray-600 text-center max-w-2xl mx-auto mb-10"
          data-aos="fade-up"
        >
          A combination of administrative, analytical, and technical skills
          developed through professional experience, academic projects, and
          continuous learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-gray-800">
          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className="bg-white/60 backdrop-blur-md p-5 rounded-lg shadow-md border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition duration-300"
              data-aos="zoom-in-up"
              data-aos-delay={index * 100}
            >
              <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                <span className="text-blue-700">{group.icon}</span>
                {group.title}
              </h4>

              <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
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
