// components/ResumeSection.js
"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

// --- DATA ---
const EDUCATION_DATA = [
  {
    years: "2020 to Present",
    title: "Self Taught (Programming)",
    description:
      "Since 2020 I started learning programming. I have learned HTML, CSS, Sass, JavaScript, Bootstrap. Now I am a Professional Web Designer.",
  },
  {
    years: "2019 to Present",
    title: "Diploma In Civil Engineering",
    description:
      "Studying Civil Engineering at Shyamoli Ideal Polytechnic Institute since 2019. Continuing at present.",
  },
  {
    years: "2014 to 2019",
    title: "Secondary School Certificate",
    description:
      "Passed SSC Exam in 2019 from Science Group with GPA 4.56 from Patgram Anath Bondhu Govt. High School.",
  },
];

const EXPERIENCE_DATA = [
  {
    years: "2019 to Present",
    title: "Graphics Design",
    description:
      "Working in Graphic Design since 2018 using Photoshop and Illustrator.",
  },
  {
    years: "2020 to Present",
    title: "Web Design",
    description:
      "Learned HTML, CSS, Sass, JavaScript, Bootstrap. Now a professional Web Designer.",
  },
  {
    years: "2020 to Present",
    title: "WordPress",
    description:
      "Experienced in installing, customizing & fixing issues on WordPress websites.",
  },
];

// --- ANIMATION ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// --- TIMELINE ITEM ---
const TimelineItem = ({ years, title, description, isLast }) => (
  <motion.div variants={itemVariants} className="relative flex pb-10">
    {/* Line + Dot */}
    <div className="flex flex-col items-center mr-6">
      <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-lg z-10"></div>
      {!isLast && <div className="h-full w-0.5 bg-gray-300"></div>}
    </div>

    {/* Content */}
    <div className="flex-1 bg-white p-5 rounded-xl shadow-md border border-gray-100">
      <p className="text-xs font-semibold text-white bg-blue-600 inline-block px-3 py-1 rounded mb-2 shadow">
        {years}
      </p>
      <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-2 leading-tight">
        {title}
      </h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

// --- MAIN COMPONENT ---
export default function ResumeSection() {
  return (
    <motion.section
      id="resume"
      className="p-4 md:p-8 lg:p-3 bg-white max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}>
      <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 text-center md:text-left">
        Resume
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* EDUCATION */}
        <div>
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-6 text-gray-800">
            <FaGraduationCap className="text-blue-600 mr-3 text-3xl" />
            <h2 className="text-2xl md:text-3xl font-bold">Education</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {EDUCATION_DATA.map((item, index) => (
              <TimelineItem
                key={index}
                years={item.years}
                title={item.title}
                description={item.description}
                isLast={index === EDUCATION_DATA.length - 1}
              />
            ))}
          </motion.div>
        </div>

        {/* EXPERIENCE */}
        <div>
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-6 text-gray-800">
            <FaBriefcase className="text-blue-600 mr-3 text-3xl" />
            <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
            {EXPERIENCE_DATA.map((item, index) => (
              <TimelineItem
                key={index}
                years={item.years}
                title={item.title}
                description={item.description}
                isLast={index === EXPERIENCE_DATA.length - 1}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
