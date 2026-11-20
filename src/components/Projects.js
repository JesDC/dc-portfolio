import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Generic illustration for confidential administrative systems.
// These are conceptual visuals, not actual government system screenshots.

const AdminSystemVisual = ({ type = "management" }) => {
  const isRecords = type === "records";

  return (
    <div
      className={`relative h-56 sm:h-64 overflow-hidden p-5 flex flex-col justify-between ${
        isRecords
          ? "bg-gradient-to-br from-indigo-950 via-blue-900 to-slate-800"
          : "bg-gradient-to-br from-slate-900 via-blue-950 to-blue-800"
      }`}
    >
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/5 blur-2xl" />
      <div className="absolute -left-10 bottom-0 w-32 h-32 rounded-full bg-blue-400/10 blur-2xl" />

      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/10 flex items-center justify-center">
            <span className="text-white text-lg">{isRecords ? "▤" : "▣"}</span>
          </div>

          <div>
            <p className="text-white text-sm font-bold">
              {isRecords ? "Digital Administration" : "Internal System"}
            </p>
            <p className="text-blue-200 text-[10px]">
              {isRecords
                ? "Electronic records management"
                : "End-user testing and validation"}
            </p>
          </div>
        </div>

        <span className="text-[9px] text-blue-100 border border-white/20 rounded-full px-2.5 py-1">
          Confidential
        </span>
      </div>

      <div className="relative grid grid-cols-3 gap-2">
        {(isRecords
          ? [
              ["01", "Documents"],
              ["02", "Digital files"],
              ["03", "Monitoring"],
            ]
          : [
              ["01", "Testing"],
              ["02", "Validation"],
              ["03", "Reports"],
            ]
        ).map(([number, label]) => (
          <div
            key={number}
            className="rounded-xl bg-white/10 border border-white/10 p-3"
          >
            <p className="text-blue-200 text-[10px]">{number}</p>
            <p className="text-white text-xs font-semibold mt-1">{label}</p>
          </div>
        ))}
      </div>

      <div className="relative rounded-xl bg-white/10 border border-white/10 p-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-white text-xs font-medium">
            {isRecords
              ? "Paperless administrative workflow"
              : "System evaluation workflow"}
          </span>
          <span className="text-blue-200 text-[9px]">Illustrative</span>
        </div>

        <div className="flex gap-1.5">
          <div className="h-1.5 flex-1 rounded-full bg-blue-300" />
          <div className="h-1.5 flex-1 rounded-full bg-blue-300/70" />
          <div className="h-1.5 flex-1 rounded-full bg-white/20" />
        </div>
      </div>

      <p className="relative text-[9px] text-blue-200/80">
        Conceptual representation only
      </p>
    </div>
  );
};

const projects = [
  // ADMINISTRATIVE EXPERIENCE

  {
    title: "Internal Management System",
    category: "Administrative Experience",
    type: "Professional Experience",
    role: "End-User Testing & System Validation",
    description:
      "Participated as an end user in the testing and evaluation of an internal management system, supporting functionality validation, documentation, and progress reporting.",
    contributions: [
      "Participated in end-user testing of selected system functionalities.",
      "Reviewed and validated features based on user requirements.",
      "Documented observations and feedback during testing.",
      "Prepared weekly progress reports and communicated testing findings.",
      "Provided feedback to support system evaluation and improvement.",
    ],
    tools: [
      "End-User Testing",
      "System Validation",
      "Documentation",
      "Progress Reporting",
    ],
    visual: "management",
  },
  {
    title: "Digital Administrative Records Management",
    category: "Administrative Experience",
    type: "Professional Experience",
    role: "Digital Records & Document Handling",
    description:
      "Handled an internal digital administrative system supporting paperless office operations, including electronic document processing, records organization, and monitoring.",
    contributions: [
      "Handled administrative documents through an internal digital platform.",
      "Encoded, organized, and maintained electronic office records.",
      "Assisted in monitoring document processing and record status.",
      "Supported paperless administrative workflows and digital file management.",
      "Helped maintain accurate and organized administrative documentation.",
    ],
    tools: [
      "Digital Records Management",
      "Document Processing",
      "Data Encoding",
      "Paperless Workflow",
    ],
    visual: "records",
  },

  // ORIGINAL PROJECTS, RETAINED

  {
    title: "Stranded Mobile App",
    category: "Development & UI/UX",
    type: "Academic / Design Project",
    role: "UI/UX Designer",
    description:
      "A guidance app concept designed to help senior high school students explore and choose the strand that suits their interests.",
    contributions: [
      "Designed the user interface and overall app experience.",
      "Organized information to make strand selection easier to understand.",
      "Created an interactive prototype using Figma.",
    ],
    tools: ["Figma", "UI/UX Design", "Prototyping"],
    imgUrl: require("../assets/stranded.jpg"),
    link: "https://www.figma.com/proto/ANSv58WBpKJW22ihB0IU9e?node-id=0-1&t=9SQBx5X4xOS7fsHf-6",
    designLink:
      "https://www.figma.com/design/ANSv58WBpKJW22ihB0IU9e/Stranded-UI-Design?node-id=0-1&t=yQzp5OJAtzRr5m2q-1",
  },
  {
    title: "YAR Drainage Resource Management System",
    category: "Development & UI/UX",
    type: "Capstone Project",
    role: "Front-End Developer & UI/UX Designer",
    description:
      "A web-based resource management system with QR code integration for YAR Drainage.",
    contributions: [
      "Contributed to front-end development and interface design.",
      "Worked on the resource management interface.",
      "Contributed to the QR code integration and user experience.",
      "Collaborated with the team throughout system development.",
    ],
    tools: ["ReactJS", "Tailwind CSS", "Node.js", "MySQL", "Figma"],
    imgUrl: require("../assets/yar.jpg"),
    link: "https://www.figma.com/proto/7BKBuEtgM9CXy5GTGo4otk?node-id=0-1&t=9SQBx5X4xOS7fsHf-6",
    designLink:
      "https://www.figma.com/design/7BKBuEtgM9CXy5GTGo4otk/Yar-Drainage?node-id=0-1&t=3VCSUvS7RTz2M0Pd-1",
  },
  {
    title: "Matahum Inventory Management System",
    category: "Development & UI/UX",
    type: "Academic Project",
    role: "Front-End Developer & UI/UX Designer",
    description:
      "An inventory management system developed for Matahum Rice Trading.",
    contributions: [
      "Contributed to front-end development and interface design.",
      "Worked on screens supporting inventory-related activities.",
      "Helped translate system requirements into user interface elements.",
    ],
    tools: ["ReactJS", "JavaScript", "PHP", "MySQL", "Figma"],
    imgUrl: require("../assets/matahum.jpg"),
    link: "https://www.figma.com/proto/CSmgeR1ZxbWeukKWyHNlkR?node-id=0-1&t=9SQBx5X4xOS7fsHf-6",
    designLink:
      "https://www.figma.com/design/CSmgeR1ZxbWeukKWyHNlkR/Matahum-Inventory-Management-System?node-id=0-1&t=LRgmSbt5D3XwhhJi-1",
  },
  {
    title: "Foodie Go Mobile App",
    category: "Development & UI/UX",
    type: "UI/UX Design Project",
    role: "UI/UX Designer",
    description:
      "A food delivery app concept that allows users to browse categories, select meals, add items to their cart, and proceed to checkout.",
    contributions: [
      "Designed the app interface and user flow.",
      "Created screens for browsing, selecting meals, and checkout.",
      "Developed an interactive Figma prototype.",
    ],
    tools: ["Figma", "UI/UX Design", "Prototyping"],
    imgUrl: require("../assets/FoodieGo.jpg"),
    link: "https://www.figma.com/proto/x8E7tnZS6L4EtmjX6GPt1X/Food-App?node-id=1-2&p=f&t=5mXCe72Tw1v5vTP1-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    designLink:
      "https://www.figma.com/design/x8E7tnZS6L4EtmjX6GPt1X/Food-App?node-id=0-1&t=5mXCe72Tw1v5vTP1-1",
  },
  {
    title: "SecureAI: Intelligent Threat Detection Mobile App",
    category: "Development & UI/UX",
    type: "UI/UX Design Project",
    role: "UI/UX Designer",
    description:
      "A school design activity for an antivirus and threat detection app concept featuring protection status, file scanning, secure browsing, and data security.",
    contributions: [
      "Designed the interface for a mobile security app concept.",
      "Organized features such as file scanning and protection status.",
      "Created an interactive Figma prototype.",
    ],
    tools: ["Figma", "UI/UX Design", "Prototyping"],
    imgUrl: require("../assets/SecureAI.png"),
    link: "http://figma.com/proto/gSNT5OGJ1Fo8bpzDsmlAAj/SecureAI----Intelligent-Threat-Detection?node-id=1-2&p=f&t=l4XVYkQ5baDB9m3C-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    designLink:
      "https://www.figma.com/design/gSNT5OGJ1Fo8bpzDsmlAAj/SecureAI----Intelligent-Threat-Detection?node-id=0-1&t=l4XVYkQ5baDB9m3C-1",
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 60,
    });
  }, []);

  const filters = ["All", "Administrative Experience", "Development & UI/UX"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const toggleDetails = (title) => {
    setExpandedProject((current) => (current === title ? null : title));
  };

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-20 sm:py-24 bg-gradient-to-br from-white via-blue-50 to-white"
    >
      {/* Decorative background */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section heading */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />A
            selection of my work and experience
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            Projects <span className="text-blue-600">&</span> Experience
          </h2>

          <p className="max-w-2xl mx-auto mt-5 text-gray-600 text-sm sm:text-base leading-relaxed">
            A collection of my professional administrative experience, academic
            projects, and work in information technology, systems, and UI/UX
            design.
          </p>
        </div>

        {/* Experience highlights */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12"
          data-aos="fade-up"
        >
          {[
            { number: "02", label: "Administrative Entries" },
            { number: "05", label: "Academic Projects" },
            { number: "07", label: "Total Entries" },
            { number: "IT", label: "Technical Background" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/80 border border-blue-100 rounded-xl p-4 text-center shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-blue-700">
                {item.number}
              </p>
              <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Category filters */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-10"
          data-aos="fade-up"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;

            return (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  setExpandedProject(null);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold border transition-all duration-300 ${
                  isActive
                    ? "bg-blue-700 border-blue-700 text-white shadow-lg shadow-blue-200"
                    : "bg-white/80 border-blue-100 text-blue-800 hover:bg-blue-100 hover:border-blue-300 hover:-translate-y-0.5"
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project count */}
        <div className="flex justify-between items-center mb-5">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-bold text-blue-800">
              {filteredProjects.length}
            </span>{" "}
            {filteredProjects.length === 1 ? "entry" : "entries"}
          </p>

          <p className="hidden sm:block text-xs text-gray-400">
            Explore each entry for more details
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const isExpanded = expandedProject === project.title;

            return (
              <article
                key={project.title}
                data-aos="fade-up"
                data-aos-delay={index * 70}
                className={`group flex flex-col bg-white/90 backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? "border-blue-400 shadow-xl shadow-blue-100"
                    : "border-blue-100 shadow-md hover:shadow-2xl hover:shadow-blue-100 hover:-translate-y-2"
                }`}
              >
                {/* Project image or confidential visual */}
                <div className="relative overflow-hidden">
                  {project.visual ? (
                    <AdminSystemVisual type={project.visual} />
                  ) : (
                    <img
                      src={project.imgUrl}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur text-blue-800 text-[10px] sm:text-xs font-bold shadow-sm">
                      {project.type}
                    </span>
                  </div>

                  {!project.visual && (
                    <div className="absolute inset-0 bg-blue-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-sm font-semibold border border-white/70 rounded-full px-5 py-2">
                        Explore project
                      </span>
                    </div>
                  )}
                </div>

                {/* Project information */}
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider font-bold text-blue-600">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-blue-950 leading-snug mb-2 group-hover:text-blue-700 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-blue-700 font-semibold mb-3">
                    {project.role}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] sm:text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-1 rounded-md"
                      >
                        {tool}
                      </span>
                    ))}

                    {project.tools.length > 3 && (
                      <span className="text-[10px] sm:text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md">
                        +{project.tools.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="mt-auto flex items-center justify-between gap-3 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => toggleDetails(project.title)}
                      aria-expanded={isExpanded}
                      className="text-sm font-bold text-blue-700 hover:text-blue-950 transition-colors flex items-center gap-2"
                    >
                      {isExpanded ? "Show less" : "View details"}

                      <span
                        className={`inline-block transition-transform duration-300 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      >
                        ↓
                      </span>
                    </button>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-semibold text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-200"
                      >
                        View prototype ↗
                      </a>
                    )}
                  </div>

                  {/* Expandable details */}
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isExpanded
                        ? "grid-rows-[1fr] opacity-100 mt-5"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pt-5 border-t border-blue-100">
                        <h4 className="text-sm font-bold text-blue-950 mb-3">
                          Responsibilities & Contributions
                        </h4>

                        <ul className="space-y-2 mb-5">
                          {project.contributions.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-2 text-xs sm:text-sm text-gray-600 leading-relaxed"
                            >
                              <span className="text-blue-600 font-bold">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="text-sm font-bold text-blue-950 mb-3">
                          Tools & Skills
                        </h4>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tools.map((tool) => (
                            <span
                              key={tool}
                              className="text-xs bg-blue-100 text-blue-800 px-3 py-1.5 rounded-lg"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>

                        {project.designLink && (
                          <a
                            href={project.designLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-950 transition-colors"
                          >
                            Open full Figma design ↗
                          </a>
                        )}

                        {project.visual && (
                          <div className="mt-4 p-3 rounded-lg bg-gray-50 border border-gray-100">
                            <p className="text-[11px] text-gray-500 leading-relaxed">
                              This entry provides a general description of
                              professional responsibilities. The visual is
                              illustrative and does not represent an actual
                              internal government system or disclose
                              confidential information.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
