import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FaAward,
  FaCertificate,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaTimes,
  FaChevronDown,
  FaCheckCircle,
  FaBookOpen,
  FaLaptopCode,
  FaShieldAlt,
  FaRegCalendarCheck,
} from "react-icons/fa";

import { FiDownload, FiExternalLink, FiFileText } from "react-icons/fi";

// CERTIFICATIONS
const certifications = [
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco",
    date: "October 19, 2024",
    category: "IT Fundamentals",
    description:
      "Foundational learning in computer hardware components, device functions, and basic computer systems.",
    badge:
      "https://www.credly.com/badges/696640f1-5fb3-4322-9119-0b14cd0826a7/linked_in_profile",
    file: "/certificates/computer-hardware-basics.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "October 19, 2024",
    category: "Cybersecurity",
    description:
      "An introduction to cybersecurity concepts, common threats, and the importance of protecting digital information.",
    badge:
      "https://www.credly.com/badges/e932eee0-948c-491d-b9a6-42f86e8af4ec/linked_in_profile",
    file: "/certificates/intro-to-cybersec.pdf",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    date: "October 25, 2024",
    category: "Networking",
    description:
      "Fundamental networking concepts, network communication, and basic networking technologies.",
    badge:
      "https://www.credly.com/badges/8b57bc81-2577-40fa-a038-20c88ac613ad/linked_in_profile",
    file: "/certificates/networking-basics.pdf",
  },
  {
    title: "Digital Skills: User Experience",
    issuer: "Accenture (via FutureLearn)",
    date: "June 24, 2025",
    category: "Digital Skills",
    description:
      "Learning focused on user experience principles and designing better digital experiences.",
    file: "/certificates/ux.pdf",
  },
  {
    title: "Creating a Great User Experience for Mobile Apps",
    issuer:
      "University of Leeds, Click Start and Institute of Coding (via FutureLearn)",
    date: "June 25, 2025",
    category: "UI/UX Design",
    description:
      "Exploring user-centered design principles and usability considerations for mobile applications.",
    file: "/certificates/uxformobile.pdf",
  },
  {
    title: "Digital Skills: Web Analytics",
    issuer: "Accenture (via FutureLearn)",
    date: "June 27, 2025",
    category: "Data & Analytics",
    description:
      "Introduction to web analytics and the use of digital information to understand online activity.",
    file: "/certificates/web-analytics.pdf",
  },
];

// ACADEMIC RECOGNITION
const deansList = [
  {
    semester: "2nd Semester",
    year: "2nd Year",
    academicYear: "AY 2022–2023",
  },
  {
    semester: "1st Semester",
    year: "3rd Year",
    academicYear: "AY 2023–2024",
  },
  {
    semester: "2nd Semester",
    year: "3rd Year",
    academicYear: "AY 2023–2024",
  },
  {
    semester: "1st Semester",
    year: "4th Year",
    academicYear: "AY 2024–2025",
  },
  {
    semester: "2nd Semester",
    year: "4th Year",
    academicYear: "AY 2024–2025",
  },
];

// SEMINARS
const seminars = [
  {
    title: "I.T Certifications: Your Next Step After CCNA",
    organizer: "Tech Academy",
    date: "April 11, 2022",
    category: "IT & Career Development",
  },
  {
    title: "5G NR Advanced Use Cases",
    organizer: "Tech Academy",
    date: "April 10, 2022",
    category: "Networking & Technology",
  },
  {
    title: "AWS Fundamentals",
    organizer: "Tech Academy",
    date: "April 9, 2022",
    category: "Cloud Computing",
  },
  {
    title: "Cloud Computing: Utilization of Cloud",
    organizer: "Tech Academy",
    date: "December 15, 2022",
    category: "Cloud Computing",
  },
];

const tabs = [
  {
    id: "certifications",
    label: "Certifications",
    icon: <FaCertificate />,
  },
  {
    id: "deanslist",
    label: "Academic Recognition",
    icon: <FaGraduationCap />,
  },
  {
    id: "seminars",
    label: "Seminars & Learning",
    icon: <FaChalkboardTeacher />,
  },
];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("certifications");
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [expandedSeminar, setExpandedSeminar] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
    });
  }, []);

  const categories = [
    "All",
    ...new Set(certifications.map((cert) => cert.category)),
  ];

  const filteredCertifications =
    activeCategory === "All"
      ? certifications
      : certifications.filter((cert) => cert.category === activeCategory);

  const openPDF = (file) => {
    setSelectedPDF(file);
  };

  return (
    <section
      id="achievements"
      className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-b from-white via-blue-50 to-white text-gray-800"
    >
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-10 right-0 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="text-blue-700 text-sm font-semibold uppercase tracking-widest">
            Learning, Growth & Recognition
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mt-3 mb-4">
            Professional Development & Achievements
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A collection of academic recognitions, technical certifications, and
            learning activities that reflect my commitment to developing both my
            administrative and technical capabilities.
          </p>
        </div>

        {/* ACHIEVEMENT OVERVIEW */}
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14"
          data-aos="fade-up"
        >
          {[
            {
              icon: <FaCertificate />,
              number: "06",
              label: "Certifications",
              detail: "Technical and digital skills",
            },
            {
              icon: <FaAward />,
              number: "05",
              label: "Dean's List",
              detail: "Academic recognitions",
            },
            {
              icon: <FaBookOpen />,
              number: "04",
              label: "Seminars",
              detail: "Learning activities",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="group bg-white/80 backdrop-blur-md border border-blue-100 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-blue-50 text-blue-800 text-xl group-hover:bg-blue-800 group-hover:text-white transition duration-300">
                  {item.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold text-blue-900">
                    {item.number}
                  </h3>
                  <p className="font-bold text-gray-800">{item.label}</p>
                  <p className="text-xs text-gray-500">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NAVIGATION TABS */}
        <div
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
          data-aos="fade-up"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setExpandedSeminar(null);
              }}
              className={`inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-full text-sm font-semibold border transition duration-300 ${
                activeTab === tab.id
                  ? "bg-blue-800 text-white border-blue-800 shadow-lg"
                  : "bg-white text-blue-800 border-blue-200 hover:bg-blue-50 hover:border-blue-500"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        {activeTab === "certifications" && (
          <div>
            <div className="text-center mb-8" data-aos="fade-up">
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Certifications & Digital Skills
              </h3>
              <p className="text-sm text-gray-600 max-w-xl mx-auto">
                Technical and digital learning covering IT fundamentals,
                cybersecurity, networking, user experience, and analytics.
              </p>
            </div>

            {/* CATEGORY FILTER */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition duration-300 ${
                    activeCategory === category
                      ? "bg-blue-100 text-blue-900 border-blue-500"
                      : "bg-white text-gray-600 border-blue-100 hover:border-blue-400"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* CERTIFICATE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCertifications.map((cert, index) => (
                <div
                  key={cert.title}
                  className="group bg-white/90 backdrop-blur-md rounded-2xl border border-blue-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300 overflow-hidden"
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                >
                  <div className="h-1.5 bg-gradient-to-r from-blue-900 via-blue-600 to-sky-400" />

                  <div className="p-5 sm:p-6">
                    <div className="flex justify-between items-start mb-5">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center text-2xl group-hover:bg-blue-800 group-hover:text-white transition duration-300">
                        <FaCertificate />
                      </div>

                      <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-800 border border-blue-100">
                        {cert.category}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-blue-900 leading-snug mb-2">
                      {cert.title}
                    </h4>

                    <p className="text-sm text-gray-600 mb-3">{cert.issuer}</p>

                    <p className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <FaCalendarAlt className="text-blue-600" />
                      {cert.date}
                    </p>

                    <p className="text-sm text-gray-600 leading-relaxed mb-6 min-h-[60px]">
                      {cert.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                      {cert.file && (
                        <button
                          onClick={() => openPDF(cert.file)}
                          className="inline-flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-700 transition"
                        >
                          <FiFileText />
                          View Certificate
                        </button>
                      )}

                      {cert.badge && (
                        <a
                          href={cert.badge}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border border-blue-700 text-blue-800 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-50 transition"
                        >
                          <FiExternalLink />
                          Credly Badge
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DEAN'S LIST */}
        {activeTab === "deanslist" && (
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <div className="text-center mb-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center text-3xl mx-auto mb-4">
                <FaGraduationCap />
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Academic Recognition
              </h3>

              <p className="text-sm text-gray-600 max-w-xl mx-auto">
                Recognized on the Dean's List during multiple semesters while
                pursuing a Bachelor of Science in Information Technology.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-5 sm:left-6 top-3 bottom-3 w-0.5 bg-blue-200" />

              <div className="space-y-5">
                {deansList.map((entry, index) => (
                  <div
                    key={`${entry.semester}-${entry.year}`}
                    className="relative flex gap-5 sm:gap-7 items-start"
                  >
                    <div className="relative z-10 w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-full bg-blue-800 text-white flex items-center justify-center shadow-md">
                      <FaAward />
                    </div>

                    <div className="flex-1 bg-white rounded-xl border border-blue-100 p-4 sm:p-5 shadow-sm hover:shadow-lg hover:border-blue-300 transition duration-300">
                      <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-700">
                          Recognition {index + 1}
                        </span>

                        <FaCheckCircle className="text-blue-700" />
                      </div>

                      <h4 className="text-lg font-bold text-blue-900">
                        Dean's List
                      </h4>

                      <p className="text-sm text-gray-700 mt-1">
                        {entry.semester}, {entry.year}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        {entry.academicYear}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SEMINARS */}
        {activeTab === "seminars" && (
          <div className="max-w-3xl mx-auto" data-aos="fade-up">
            <div className="text-center mb-10">
              <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center text-3xl mx-auto mb-4">
                <FaChalkboardTeacher />
              </div>

              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                Seminars & Learning Activities
              </h3>

              <p className="text-sm text-gray-600 max-w-xl mx-auto">
                Learning sessions and seminars attended to explore developments
                in information technology, networking, certifications, and cloud
                computing.
              </p>
            </div>

            <div className="space-y-4">
              {seminars.map((seminar, index) => {
                const isExpanded = expandedSeminar === index;

                return (
                  <div
                    key={seminar.title}
                    className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedSeminar(isExpanded ? null : index)
                      }
                      aria-expanded={isExpanded}
                      className="w-full flex items-center gap-4 p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                    >
                      <div className="w-11 h-11 flex-shrink-0 rounded-xl bg-blue-50 text-blue-800 flex items-center justify-center text-xl">
                        <FaCalendarAlt />
                      </div>

                      <div className="flex-1">
                        <h4 className="font-bold text-blue-900">
                          {seminar.title}
                        </h4>

                        <p className="text-xs text-gray-500 mt-1">
                          {seminar.organizer} | {seminar.date}
                        </p>
                      </div>

                      <FaChevronDown
                        className={`text-blue-700 transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isExpanded
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 pl-20">
                          <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                            <FaBookOpen />
                            {seminar.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* CLOSING STATEMENT */}
        <div
          className="mt-16 text-center border-t border-blue-100 pt-10"
          data-aos="fade-up"
        >
          <p className="text-blue-900 font-bold text-lg sm:text-xl mb-2">
            Continuous Learning, Practical Application.
          </p>

          <p className="text-gray-600 text-sm max-w-2xl mx-auto leading-relaxed">
            I believe professional growth comes from combining academic
            foundations, practical experience, and continuous learning across
            both administrative operations and information technology.
          </p>
        </div>
      </div>

      {/* PDF VIEWER MODAL */}
      {selectedPDF && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-3 sm:p-6"
          onClick={() => setSelectedPDF(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Certificate preview"
            className="relative bg-white w-full max-w-5xl h-[85vh] rounded-xl shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 sm:px-5 border-b border-gray-200">
              <div className="flex items-center gap-2 text-blue-900 font-semibold">
                <FaCertificate />
                Certificate Preview
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedPDF}
                  download
                  className="inline-flex items-center gap-2 text-sm text-blue-800 hover:text-blue-600"
                >
                  <FiDownload />
                  <span className="hidden sm:inline">Download</span>
                </a>

                <button
                  onClick={() => setSelectedPDF(null)}
                  aria-label="Close certificate preview"
                  className="text-gray-500 hover:text-red-600 text-xl p-1"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            <iframe
              src={selectedPDF}
              title="Certificate PDF Preview"
              className="w-full flex-1"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
