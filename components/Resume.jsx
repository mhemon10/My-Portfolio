// components/ResumeSection.js
"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa"; // Icons for Timeline Headers

// --- CONFIGURATION & DATA ---

const EDUCATION_DATA = [
  {
    years: "2020 to Present",
    title: "Self Taught (Programming)",
    description:
      "Since 2020 I started to learn Programming. I have learn Html, Css, Sass, JavaScript, Bootstrap. Now I am a Professional Web Designer..",
  },
  {
    years: "2019 to Present",
    title: "Diploma In Civil Engineering",
    description:
      "From 2019 I started my journey to be a Civil Engineer on Shyamoli Ideal Polytechnic Institute. It still Running to Present.",
  },
  {
    years: "2014 to 2019",
    title: "Secondary School Certificate",
    description:
      "In 2019 I passed SSC Exam from Science Group with GPA-4.56. My school name was Patgram Anath Bondhu Govt. High School.",
  },
];

const EXPERIENCE_DATA = [
  {
    years: "2019 to Present",
    title: "Graphics Design",
    description:
      "From 2018 I am woking on Graphics Design. The software I use Photoshop, Illustrator for Graphics design.",
  },
  {
    years: "2020 to Present",
    title: "Web Design",
    description:
      "Since 2020 I started to learn Coding. I have learn Html, Css, Sass, JavaScript, Bootstrap. Now I am a Professional Web Designer..",
  },
  {
    years: "2020 to Present",
    title: "Wordpress",
    description:
      "Since 2020 I started to learn Wordpress. I can install, Customize, & fix bug on wordpress.",
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Sub-Component: Single Timeline Item ---
const TimelineItem = ({ years, title, description, isLast }) => (
  <motion.div variants={itemVariants} className="relative flex pb-8">
    {/* Timeline Line and Dot */}
    <div className="flex flex-col items-center mr-6">
      <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow z-10"></div>
      {/* The line connecting the dots (hidden for the last item) */}
      {!isLast && (
        <div className="h-full w-0.5 bg-gray-300 transform translate-y-[-4px]"></div>
      )}
    </div>

    {/* Content Box */}
    <div className="flex-1 bg-white p-4 rounded-lg shadow-md border border-gray-100 mb-6">
      <p className="text-xs font-semibold text-white bg-blue-600 inline-block px-3 py-1 rounded mb-2 shadow-sm">
        {years}
      </p>
      <h4 className="text-xl font-bold text-gray-800 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </motion.div>
);

// --- Main Component ---
export default function ResumeSection() {
  return (
    <motion.section
      id="resume" // Used for Intersection Observer in Sidebar
      className="p-4 md:p-8 lg:p-3 bg-white"
      variants={containerVariants}
      initial="hidden"
      // Ensure animation runs when scrolled into view
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}>
      <h1 className="text-3xl font-bold mb-10 text-gray-800">Resume</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12">
        {/* 1. Education Column */}
        <div>
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-6 text-gray-800">
            <FaGraduationCap className="text-blue-600 mr-3 text-3xl" />
            <h2 className="text-2xl font-bold">Education</h2>
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

        {/* 2. Experience Column */}
        <div>
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-6 text-gray-800">
            <FaBriefcase className="text-blue-600 mr-3 text-3xl" />
            <h2 className="text-2xl font-bold">Experience</h2>
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
