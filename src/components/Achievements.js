import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaAward,
  FaCertificate,
  FaDownload,
  FaExternalLinkAlt,
} from "react-icons/fa";

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
    title: "Introduction to Machine Learning: Art of the Possible",
    issuer: "AWS Training and Certification",
    date: "November 11, 2024",
    file: "/certificates/aws-cert.pdf",
  },
];

const deansList = [
  "2nd Semester, 2nd Year, AY 2022–2023",
  "1st Semester, 3rd Year, AY 2023–2024",
  "2nd Semester, 3rd Year, AY 2023–2024",
  "1st Semester, 4th Year, AY 2024–2025",
  "2nd Semester, 4th Year, AY 2024–2025",
];

const seminars = [
  {
    title: "I.T Certifications: Your Next Step After CCNA",
    organizer: "Tech Academy",
    date: "April 11, 2022",
  },
  {
    title: "5G New Radio Advanced Applications and Use Cases",
    organizer: "Tech Academy",
    date: "April 10, 2022",
  },
  {
    title: "AWS Fundamentals",
    organizer: "Tech Academy",
    date: "April 9, 2022",
  },
  {
    title: "Cloud Computing: Utilization of Cloud Service Solutions",
    organizer: "Tech Academy",
    date: "December 15, 2022",
  },
];

const Achievements = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      id="achievements"
      className="py-24 bg-gradient-to-b from-white via-blue-50 to-white text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-extrabold text-center text-blue-900 mb-16"
          data-aos="fade-up"
        >
          Certifications & Achievements
        </h2>

        {/* Certifications */}
        <div className="mb-20" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
            <FaCertificate className="text-blue-600" />
            Certifications
          </h3>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((item, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-md p-6 rounded-xl border border-blue-100 shadow-md hover:shadow-lg transition duration-300"
                data-aos="zoom-in"
              >
                <h4 className="text-lg font-bold text-blue-800 mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700 mb-4">
                  {item.issuer} — {item.date}
                </p>
                <div className="flex gap-3 flex-wrap">
                  {item.file && (
                    <a
                      href={item.file}
                      download
                      className="inline-flex items-center gap-2 bg-blue-800 text-white px-4 py-2 rounded-full shadow hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                    >
                      <FaDownload />
                      Download PDF
                    </a>
                  )}
                  {item.badge && (
                    <a
                      href={item.badge}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-blue-700 text-blue-700 px-4 py-2 rounded-full shadow hover:bg-blue-50 hover:scale-105 transition-all duration-300"
                    >
                      <FaExternalLinkAlt />
                      View Badge
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dean’s List */}
        <div className="mb-20" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <FaAward className="text-yellow-600" />
            Dean’s List Awards
          </h3>
          <ul className="list-disc list-inside pl-2 text-gray-700 space-y-2">
            {deansList.map((item, index) => (
              <li key={index} className="text-md">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Seminars/Webinars */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
            <FaCertificate className="text-blue-600" />
            Seminars & Webinars Attended
          </h3>
          <ul className="list-disc list-inside pl-2 text-gray-700 space-y-2">
            {seminars.map((item, index) => (
              <li key={index}>
                <span className="font-semibold">{item.title}</span> —{" "}
                {item.organizer} ({item.date})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
