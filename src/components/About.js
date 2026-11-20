import React, { useState } from "react";
import myPic from "../assets/mypic.jpg";

import {
  FaBriefcase,
  FaBoxes,
  FaChartBar,
  FaDatabase,
  FaCode,
  FaPalette,
  FaTools,
  FaFileAlt,
  FaClipboardCheck,
  FaLaptop,
  FaChevronDown,
  FaCheckCircle,
  FaRegLightbulb,
} from "react-icons/fa";

import { FiDownload, FiArrowUpRight } from "react-icons/fi";

const About = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedSkill, setExpandedSkill] = useState(null);

  const filters = [
    "All",
    "Administrative",
    "Data & Analytics",
    "IT & Technical",
  ];

  const skillGroups = [
    {
      id: 1,
      title: "Administrative & Operations Support",
      shortTitle: "Administrative Operations",
      category: "Administrative",
      icon: <FaBriefcase />,
      description:
        "Supporting daily office operations through organized documentation, records handling, and administrative coordination.",
      items: [
        "Document processing and records management",
        "Administrative reports and office documentation",
        "Data encoding, validation, and monitoring",
        "Interdepartmental coordination",
        "Electronic document organization",
      ],
      application:
        "Applied through the processing, reviewing, encoding, and monitoring of administrative documents and office records.",
      tags: ["Documentation", "Records", "Coordination"],
    },
    {
      id: 2,
      title: "Inventory, Property & Procurement Support",
      shortTitle: "Inventory & Property",
      category: "Administrative",
      icon: <FaBoxes />,
      description:
        "Assisting with inventory monitoring, property documentation, record reconciliation, and procurement-related activities.",
      items: [
        "Inventory management and asset tracking",
        "Inventory reconciliation and verification",
        "ICS, ITR, and PPE documentation",
        "Supplier coordination and price validation",
        "Inventory records and data monitoring",
      ],
      application:
        "Gained practical experience assisting with physical inventory activities, property documentation, record checking, and procurement support.",
      tags: ["Inventory", "Property", "Procurement"],
    },
    {
      id: 3,
      title: "Data Analytics & Reporting",
      shortTitle: "Data & Reporting",
      category: "Data & Analytics",
      icon: <FaChartBar />,
      description:
        "Working with data to support reporting, monitoring, organization, and informed administrative decisions.",
      items: [
        "Microsoft Excel, PivotTables, and VLOOKUP",
        "Power BI dashboard creation",
        "Microsoft Access reporting and automation",
        "Data visualization and report preparation",
        "Data organization and validation",
      ],
      application:
        "Used data tools to organize records, prepare reports, work with inventory information, and create dashboard visualizations.",
      tags: ["Excel", "Power BI", "Reporting"],
    },
    {
      id: 4,
      title: "Database & Information Systems",
      shortTitle: "Database & Systems",
      category: "IT & Technical",
      icon: <FaDatabase />,
      description:
        "Understanding how information is stored, organized, checked, and maintained across digital systems.",
      items: [
        "MySQL and Microsoft Access",
        "Database organization and data integrity",
        "User acceptance testing (UAT)",
        "Internal system testing and validation",
        "Data entry and system functionality checking",
      ],
      application:
        "Gained exposure to internal management systems through end-user testing, feature validation, observation documentation, and reporting.",
      tags: ["MySQL", "Access", "System Testing"],
    },
    {
      id: 5,
      title: "Web Development & UI/UX Design",
      shortTitle: "Web Development & UI/UX",
      category: "IT & Technical",
      icon: <FaCode />,
      description:
        "Applying technical knowledge to build web interfaces, develop academic projects, and create user-friendly digital experiences.",
      items: [
        "HTML, CSS, and JavaScript",
        "Tailwind CSS and ReactJS",
        "Familiarity with Node.js and Python",
        "Basic familiarity with C and C#",
        "Figma, wireframing, and prototyping",
      ],
      application:
        "Developed and designed interfaces for academic and personal projects, including web-based management systems and mobile application prototypes.",
      tags: ["ReactJS", "JavaScript", "Figma"],
    },
    {
      id: 6,
      title: "Technical Support & Professional Skills",
      shortTitle: "Technical Support",
      category: "IT & Technical",
      icon: <FaTools />,
      description:
        "Combining technical awareness with practical problem-solving and the ability to work with different people and systems.",
      items: [
        "Basic hardware and software troubleshooting",
        "Basic network troubleshooting",
        "End-user system assistance",
        "Problem-solving and critical thinking",
        "Adaptability, attention to detail, and teamwork",
      ],
      application:
        "Developed through academic IT activities, workplace exposure, collaboration, and hands-on experience with digital tools.",
      tags: ["Troubleshooting", "Problem Solving", "Support"],
    },
  ];

  const filteredGroups =
    activeFilter === "All"
      ? skillGroups
      : skillGroups.filter((group) => group.category === activeFilter);

  const toggleSkill = (id) => {
    setExpandedSkill(expandedSkill === id ? null : id);
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-white via-blue-50 to-white text-gray-800"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      {/* ABOUT ME */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* PROFILE IMAGE */}
          <div
            className="flex justify-center md:justify-end"
            data-aos="zoom-in"
          >
            <div className="relative group">
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-700 to-sky-300 opacity-20 blur-md group-hover:opacity-40 transition duration-500" />

              <div className="relative">
                <img
                  src={myPic}
                  alt="Portrait of Jestro Maverick de Castro"
                  className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-full shadow-xl border-4 border-white group-hover:scale-[1.03] transition duration-500"
                />

                <div className="absolute bottom-3 right-0 bg-blue-800 text-white px-4 py-2 rounded-full shadow-lg text-xs sm:text-sm font-medium flex items-center gap-2">
                  <FaCheckCircle className="text-green-300" />
                  IT Graduate
                </div>
              </div>
            </div>
          </div>

          {/* ABOUT CONTENT */}
          <div
            className="bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-lg border border-white transition duration-500 hover:shadow-xl"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-1 bg-blue-800 rounded-full" />
              <span className="text-blue-700 text-sm font-semibold uppercase tracking-widest">
                Get to know me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-blue-900 mb-5">
              About Me
            </h2>

            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Hello! I'm{" "}
              <span className="font-semibold text-blue-800">
                Jestro Maverick de Castro
              </span>
              , an Information Technology graduate from the Technological
              University of the Philippines, Manila. I have professional
              experience in administrative operations, records management,
              inventory and property support, and data reporting through my work
              at the National Telecommunications Commission (NTC).
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-4">
              My experience involved handling administrative documents,
              maintaining records, validating data, assisting with inventory
              activities, and supporting procurement-related processes. I also
              gained exposure to internal digital systems through end-user
              testing, functionality checking, and report preparation.
            </p>

            <p className="text-gray-700 text-base leading-relaxed mb-6">
              With my IT background, I also have knowledge of web development,
              databases, data analytics, and UI/UX design. I am interested in
              using technology to improve information management, support office
              operations, and make everyday processes more organized and
              efficient.
            </p>

            {/* PROFESSIONAL FOCUS */}
            <div className="grid grid-cols-2 gap-3 mb-7">
              {[
                {
                  icon: <FaBriefcase />,
                  label: "Administrative",
                  detail: "Operations & Records",
                },
                {
                  icon: <FaChartBar />,
                  label: "Analytical",
                  detail: "Data & Reporting",
                },
                {
                  icon: <FaDatabase />,
                  label: "Information",
                  detail: "Systems & Databases",
                },
                {
                  icon: <FaLaptop />,
                  label: "Technical",
                  detail: "IT & Development",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-50/80 border border-blue-100 hover:bg-blue-100/80 hover:-translate-y-1 transition duration-300"
                >
                  <span className="text-xl text-blue-800">{item.icon}</span>
                  <div>
                    <h4 className="text-sm font-bold text-blue-900">
                      {item.label}
                    </h4>
                    <p className="text-xs text-gray-600">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* RESUME DOWNLOAD */}
            <a
              href="/decastro2026.pdf"
              download
              aria-label="Download Resume"
              className="inline-flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition duration-300 group"
            >
              <FiDownload className="text-lg group-hover:animate-bounce" />
              Download Resume
              <FiArrowUpRight className="text-lg" />
            </a>
          </div>
        </div>

        {/* PROFESSIONAL HIGHLIGHTS */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-16"
          data-aos="fade-up"
        >
          {[
            {
              icon: <FaFileAlt />,
              title: "Administrative Experience",
              description:
                "Document handling, records management, and office support.",
            },
            {
              icon: <FaClipboardCheck />,
              title: "Operations & Monitoring",
              description:
                "Inventory documentation, data checking, and coordination.",
            },
            {
              icon: <FaRegLightbulb />,
              title: "Technology & Improvement",
              description:
                "Using IT knowledge to support systems and improve workflows.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/80 border border-blue-100 rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-100 text-blue-800 text-xl mb-4 group-hover:bg-blue-800 group-hover:text-white transition duration-300">
                {item.icon}
              </div>

              <h3 className="font-bold text-blue-900 mb-2">{item.title}</h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS & TOOLS */}
      <div className="relative max-w-6xl mx-auto mt-24 px-4 sm:px-6">
        {/* SECTION HEADING */}
        <div className="text-center mb-10" data-aos="fade-up">
          <span className="text-blue-700 text-sm font-semibold uppercase tracking-widest">
            What I bring to the table
          </span>

          <h3 className="text-3xl sm:text-4xl font-bold text-blue-900 mt-3 mb-4">
            Skills & Expertise
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A combination of administrative, operational, analytical, and
            technical capabilities developed through professional experience,
            academic projects, and continuous learning.
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
          data-aos="fade-up"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setExpandedSkill(null);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-sm font-semibold transition duration-300 border ${
                activeFilter === filter
                  ? "bg-blue-800 text-white border-blue-800 shadow-md"
                  : "bg-white text-gray-600 border-blue-100 hover:border-blue-700 hover:text-blue-800"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* SKILL CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {filteredGroups.map((group, index) => {
            const isExpanded = expandedSkill === group.id;

            return (
              <div
                key={group.id}
                className={`group bg-white/90 backdrop-blur-md rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? "border-blue-500 shadow-xl"
                    : "border-blue-100 shadow-md hover:shadow-xl hover:-translate-y-1"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 80}
              >
                <button
                  type="button"
                  onClick={() => toggleSkill(group.id)}
                  aria-expanded={isExpanded}
                  className="w-full text-left p-5 sm:p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                >
                  <div className="flex justify-between items-start gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 text-blue-800 text-2xl group-hover:bg-blue-800 group-hover:text-white transition duration-300">
                      {group.icon}
                    </div>

                    <FaChevronDown
                      className={`text-blue-700 mt-2 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  <span className="text-xs uppercase tracking-wider text-blue-700 font-semibold">
                    {group.category}
                  </span>

                  <h4 className="text-lg font-bold text-gray-900 mt-2 mb-3">
                    {group.title}
                  </h4>

                  <p className="text-sm text-gray-600 leading-relaxed min-h-[60px]">
                    {group.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-5">
                    {group.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                    <span className="text-sm font-semibold text-blue-800">
                      {isExpanded ? "Hide details" : "Explore skills"}
                    </span>

                    <span className="text-xs text-gray-400">
                      {group.items.length} skills
                    </span>
                  </div>
                </button>

                {/* EXPANDABLE CONTENT */}
                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 sm:px-6 pb-6">
                      <div className="bg-blue-50/80 rounded-xl p-4 mb-4">
                        <h5 className="text-sm font-bold text-blue-900 mb-3">
                          Skills covered
                        </h5>

                        <ul className="space-y-2">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-gray-700"
                            >
                              <FaCheckCircle className="text-blue-700 mt-1 flex-shrink-0 text-xs" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-bold text-blue-900 mb-2">
                          Practical application
                        </h5>

                        <p className="text-sm text-gray-600 leading-relaxed">
                          {group.application}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM NOTE */}
        <div
          className="mt-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg"
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div>
              <span className="text-blue-200 text-xs font-semibold uppercase tracking-widest">
                My professional approach
              </span>

              <h4 className="text-xl sm:text-2xl font-bold mt-2 mb-2">
                Organized Operations. Practical Technology.
              </h4>

              <p className="text-blue-100 text-sm leading-relaxed max-w-2xl">
                I value accuracy, organization, and continuous learning. Whether
                handling administrative tasks, working with data, or exploring
                technical solutions, I aim to contribute to efficient and
                well-organized operations.
              </p>
            </div>

            <a
              href="/decastro2026.pdf"
              download
              className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-blue-900 px-5 py-3 rounded-full font-semibold text-sm hover:bg-blue-50 hover:scale-105 transition duration-300"
            >
              <FiDownload />
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
