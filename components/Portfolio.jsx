// components/PortfolioSection.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaEllipsisV, FaSave } from "react-icons/fa";

// --- CONFIGURATION & DATA ---

const PROJECTS = [
  {
    id: 1,
    title: "Realistic Business Cards Mockup",
    category: "mockups",
    tags: ["Mockups"],
    image: "/project-mockup1.jpg", // Replace with your image path
    liveLink: "https://example.com/business-cards", // Replace with live link
  },
  {
    id: 2,
    title: "The Mountainbiker Freebie PSD",
    category: "graphics",
    tags: ["Graphics"],
    image: "/project-graphic.jpg", // Replace with your image path
    liveLink: "https://example.com/mountainbiker",
  },
  {
    id: 3,
    title: "Notebook MockUp PSD",
    category: "mockups",
    tags: ["Mockups"],
    image: "/project-notebook.jpg", // Replace with your image path
    liveLink: "https://example.com/notebook",
    save: true, // Example of a 'Save' button/pin
  },
  {
    id: 4,
    title: "Icon Set Design",
    category: "icons",
    tags: ["Icons", "Design"],
    image: "/project-icons.png", // Replace with your image path
    liveLink: "https://example.com/icons",
  },
  {
    id: 5,
    title: "Clean & Modern UI Design",
    category: "ui_kits",
    tags: ["UI Kits", "Design"],
    image: "/project-ui1.png", // Replace with your image path
    liveLink: "https://example.com/modern-ui",
  },
  {
    id: 6,
    title: "Mobile App Wireframe",
    category: "ui_kits",
    tags: ["UI Kits", "App"],
    image: "/project-ui2.png", // Replace with your image path
    liveLink: "https://example.com/mobile-app",
  },
  {
    id: 7,
    title: "Landing Page Mockup",
    category: "mockups",
    tags: ["Mockups", "Web"],
    image: "/project-mockup2.jpg", // Replace with your image path
    liveLink: "https://example.com/landing-page",
  },
];

const FILTERS = [
  { label: "ALL", category: "all" },
  { label: "FRONT END", category: "frontend" },
  { label: "BACK END", category: "backend" },
  { label: "GRAPHICS", category: "graphics" },
  { label: "UI KITS", category: "ui_kits" },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.95 },
  visible: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } },
};

// --- Sub-Component: Single Project Card ---
const ProjectCard = ({ project }) => {
  const handleProjectClick = () => {
    // Open the live link in a new tab/window
    if (project.liveLink) {
      window.open(project.liveLink, "_blank");
    }
  };

  return (
   
  );
};

// --- Main Component ---
export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  // Filter logic
  const filteredProjects = PROJECTS.filter((project) =>
    activeFilter === "all" ? true : project.category === activeFilter
  );

  return (
    <section
      id="portfolio" // Used for Intersection Observer in Sidebar
      className="p-4 md:p-8 lg:p-3 bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-6 text-gray-800">
        Portfolio
      </motion.h1>

      {/* Filter Tabs */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap gap-2 md:gap-4 mb-10 border-b border-gray-200 pb-2">
        {FILTERS.map((filter) => (
          <button
            key={filter.category}
            onClick={() => setActiveFilter(filter.category)}
            className={`text-sm md:text-base px-3 py-1 font-medium rounded-full transition-all duration-300 capitalize 
                            ${
                              activeFilter === filter.category
                                ? "bg-blue-600 text-white shadow-md"
                                : "text-gray-600 hover:text-blue-600"
                            }
                        `}>
            {filter.label}
          </button>
        ))}
      </motion.div>

      {/* Project Grid (Uses AnimatePresence for filter transitions) */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
