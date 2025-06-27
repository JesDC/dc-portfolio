import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaAward,
  FaCertificate,
  FaDownload,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaGraduationCap,
  FaChalkboardTeacher,
  FaTimes,
} from "react-icons/fa";

// Data
const certifications = [
  {
    title: "Computer Hardware Basics",
    issuer: "Cisco",
    date: "October 19, 2024",
    badge:
      "https://www.credly.com/badges/696640f1-5fb3-4322-9119-0b14cd0826a7/linked_in_profile",
    file: "/certificates/computer-hardware-basics.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "October 19, 2024",
    badge:
      "https://www.credly.com/badges/e932eee0-948c-491d-b9a6-42f86e8af4ec/linked_in_profile",
    file: "/certificates/intro-to-cybersec.pdf",
  },
  {
    title: "Networking Basics",
    issuer: "Cisco",
    date: "October 25, 2024",
    badge:
      "https://www.credly.com/badges/8b57bc81-2577-40fa-a038-20c88ac613ad/linked_in_profile",
    file: "/certificates/networking-basics.pdf",
  },
  {
    title: "Digital Skills: User Experience",
    issuer: "Accenture (via FutureLearn)",
    date: "June 24, 2025",
    file: "/certificates/ux.pdf",
  },
  {
    title: "Creating a Great User Experience for Mobile Apps",
    issuer:
      "University of Leeds, Click Start and Insitute of Coding (via FutureLearn)",
    date: "June 25, 2025",
    file: "/certificates/uxformobile.pdf",
  },
  {
    title: "Digital Skills: Web Analytics",
    issuer: "Accenture (via FutureLearn)",
    date: "June 27, 2025",
    file: "/certificates/web-analytics.pdf",
  },
];

const deansList = [
  "2nd Sem, 2nd Year, AY 2022–2023",
  "1st Sem, 3rd Year, AY 2023–2024",
  "2nd Sem, 3rd Year, AY 2023–2024",
  "1st Sem, 4th Year, AY 2024–2025",
  "2nd Sem, 4th Year, AY 2024–2025",
];

const seminars = [
  {
    title: "I.T Certifications: Your Next Step After CCNA",
    organizer: "Tech Academy",
    date: "April 11, 2022",
  },
  {
    title: "5G NR Advanced Use Cases",
    organizer: "Tech Academy",
    date: "April 10, 2022",
  },
  {
    title: "AWS Fundamentals",
    organizer: "Tech Academy",
    date: "April 9, 2022",
  },
  {
    title: "Cloud Computing: Utilization of Cloud",
    organizer: "Tech Academy",
    date: "Dec 15, 2022",
  },
];

// Tabs
const tabs = [
  { id: "certifications", label: "Certifications", icon: <FaCertificate /> },
  { id: "deanslist", label: "Dean's List", icon: <FaAward /> },
  { id: "seminars", label: "Seminars", icon: <FaChalkboardTeacher /> },
];

const Achievements = () => {
  const [activeTab, setActiveTab] = useState("certifications");
  const [selectedPDF, setSelectedPDF] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-b from-white via-blue-50 to-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="text-4xl font-extrabold text-center text-blue-900 mb-6"
          data-aos="fade-up"
        >
          Certifications & Achievements
        </h2>

        {/* Filter Tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10"
          data-aos="fade-up"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center gap-2 px-5 py-2 rounded-full font-medium transition w-full sm:w-auto
              ${
                activeTab === tab.id
                  ? "bg-blue-800 text-white shadow-lg scale-105"
                  : "bg-white border border-blue-200 text-blue-700 hover:bg-blue-100"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Certifications */}
        {activeTab === "certifications" && (
          <div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            data-aos="zoom-in-up"
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-blue-800 mb-1">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-700 mb-4">
                  {cert.issuer} — {cert.date}
                </p>
                <div className="flex flex-wrap gap-3">
                  {cert.file && (
                    <button
                      onClick={() => setSelectedPDF(cert.file)}
                      className="inline-flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 hover:scale-105 transition"
                    >
                      <FaDownload />
                      View PDF
                    </button>
                  )}
                  {cert.badge && (
                    <a
                      href={cert.badge}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-blue-700 text-blue-700 px-4 py-2 rounded-full shadow hover:bg-blue-50 hover:scale-105 transition"
                    >
                      <FaExternalLinkAlt />
                      Badge
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dean’s List */}
        {activeTab === "deanslist" && (
          <ul
            className="list-disc list-inside pl-2 text-gray-700 space-y-2 max-w-xl mx-auto"
            data-aos="fade-left"
          >
            {deansList.map((entry, index) => (
              <li key={index} className="text-md flex items-center gap-2">
                <FaGraduationCap className="text-blue-500" />
                {entry}
              </li>
            ))}
          </ul>
        )}

        {/* Seminars */}
        {activeTab === "seminars" && (
          <ul
            className="list-disc list-inside pl-2 text-gray-700 space-y-3 max-w-2xl mx-auto"
            data-aos="fade-right"
          >
            {seminars.map((seminar, index) => (
              <li key={index} className="flex items-start gap-2">
                <FaCalendarAlt className="mt-1 text-blue-400" />
                <span>
                  <span className="font-semibold">{seminar.title}</span> —{" "}
                  {seminar.organizer} ({seminar.date})
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Lightbox PDF Viewer */}
      {selectedPDF && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center"
          onClick={() => setSelectedPDF(null)}
        >
          <div
            className="relative bg-white w-[90%] max-w-4xl h-[80vh] rounded-lg shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-xl text-gray-700 hover:text-red-600"
              onClick={() => setSelectedPDF(null)}
            >
              <FaTimes />
            </button>
            <embed
              src={selectedPDF}
              type="application/pdf"
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
