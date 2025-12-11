// components/AboutMeSection.js
"use client";

import { motion } from "framer-motion";
import { FaDownload, FaUserCircle, FaRedhat } from "react-icons/fa";
import {
  MdOutlineWork,
  MdLocationOn,
  MdFlag,
  MdCake,
  MdEmojiFoodBeverage,
  MdPublic,
  MdMilitaryTech,
  MdMusicNote,
} from "react-icons/md";

// --- CONFIGURATION & DATA ---

// Personal Information Data
const PERSONAL_INFO = [
  { label: "Age:", value: "22 Years", icon: MdCake },
  { label: "Job:", value: "Freelancer", icon: MdOutlineWork },
  { label: "Citizenship:", value: "United States", icon: MdFlag },
  {
    label: "Address:",
    value: "358 W Jefferson St, Bensenville",
    icon: MdLocationOn,
  },
];

const FUN_STATS = [
  { label: "Cups of coffee:", value: "20.000", icon: MdEmojiFoodBeverage },
  { label: "Countries Visited:", value: "28", icon: MdPublic },
  { label: "Awards Won:", value: "16", icon: MdMilitaryTech },
  { label: "Albumes Listened:", value: "80", icon: MdMusicNote },
];

// Skills Data
const PROFESSIONAL_SKILLS = [
  { name: "UI/UX Design", level: 90, color: "bg-green-500" },
  { name: "Web Develoement", level: 85, color: "bg-green-500" },
  { name: "Mobile Application", level: 75, color: "bg-green-500" },
  { name: "Writing", level: 80, color: "bg-green-500" },
  { name: "Photography", level: 70, color: "bg-green-500" },
];

const PERSONAL_SKILLS = [
  { name: "Communication", level: 95, color: "bg-red-500" },
  { name: "Team Work", level: 88, color: "bg-red-500" },
  { name: "Leadership", level: 80, color: "bg-red-500" },
  { name: "Creativity", level: 92, color: "bg-red-500" },
  { name: "Language", level: 78, color: "bg-red-500" },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Sub-Components ---

// Component for a single stat item (Age, Job, Coffee etc.)
const StatItem = ({ label, value, Icon }) => (
  <motion.div
    variants={itemVariants}
    className="flex text-gray-700 shadow-2xl lg:px-5 py-1.5 border-b border-gray-200 last:border-b-0">
    <div className="flex w-1/2 min-w-[120px]">
      {/* Using a placeholder icon based on the screenshot, but customized for better React Icon usage */}
      <span className="mr-3 text-lg">{label}</span>
    </div>
    <span className="font-semibold text-gray-900">{value}</span>
  </motion.div>
);

// Component for a single skill bar
const SkillBar = ({ name, level, color }) => (
  <motion.div variants={itemVariants} className="mb-4">
    <div className="flex justify-between items-center mb-1 text-gray-700">
      <span className="text-sm font-medium">{name}</span>
      <span className="text-xs font-semibold">{`${level}%`}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`${color} h-2.5 rounded-full`}
      />
    </div>
  </motion.div>
);

// --- Main Component ---
export default function AboutMeSection() {
  return (
    <motion.section
      id="about" // Used for Intersection Observer in Sidebar
      className="p-4 md:p-8 lg:p-2 bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      // Ensure animation runs when scrolled into view
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Me</h1>

      {/* 1. About Text & CV Button */}
      <motion.div variants={itemVariants} className=" p-4 lg:p-5 mb-5 shadow">
        <p className="text-gray-600 mb-4 leading-relaxed">
          Hi, I’m Mahadi Hasan Emon — a passionate Front-End Developer who loves
          turning ideas into clean, modern, and fully responsive web
          experiences. I enjoy bringing designs to life with smooth animations,
          pixel-perfect layouts, and intuitive user interfaces that feel great
          on every device. Over the past years, I’ve worked on various personal
          and client projects, focusing on creating fast, user-friendly, and
          visually appealing websites. My main stack includes HTML, CSS,
          JavaScript, React, Next.js, and I’m constantly learning new tools to
          improve my craft and deliver better digital solutions. I believe good
          design is not just how a website looks, but how it works — and my goal
          is to build interfaces that are both beautiful and functional. Whether
          it’s a landing page, a dashboard, or a complete web app, I always aim
          to write maintainable, clean code and ensure a seamless user
          experience. When I’m not coding, I explore new UI trends, create
          creative projects, and continuously push myself to become a better
          developer.
        </p>
      
        <button className="flex items-center bg-green-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-green-700 transition duration-300">
          <FaDownload className="mr-2" />
          DOWNLOAD CV.
        </button>
      </motion.div>

      {/* 2. Personal Stats/Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 mt-10">
        {/* Left Column: Personal Info */}
        <motion.div variants={containerVariants}>
          <div className="space-y-2 ">
            {PERSONAL_INFO.map((item, index) => (
              <StatItem
                key={index}
                label={item.label}
                value={item.value}
                Icon={item.icon}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Column: Fun Stats */}
        <motion.div variants={containerVariants}>
          <div className="space-y-2">
            {FUN_STATS.map((item, index) => (
              <StatItem
                key={index}
                label={item.label}
                value={item.value}
                Icon={item.icon}
              />
            ))}
          </div>
        </motion.div>
      </div>

      <div className="h-px w-full bg-gray-200 my-10" />

      {/* 3. Skills Progress Bars */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
        {/* Professional Skills */}
        <div>
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-4">
            <FaUserCircle className="text-green-600 mr-3 text-2xl" />
            <h3 className="text-lg font-semibold text-gray-800">
              Professional Skills
            </h3>
          </motion.div>
          <p className="text-sm text-gray-500 mb-6">Sed ut perspiciatis</p>
          <motion.div variants={containerVariants} className="space-y-4">
            {PROFESSIONAL_SKILLS.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </motion.div>
        </div>

        {/* Personal Skills */}
        <div>
          <motion.div
            variants={itemVariants}
            className="flex items-center mb-4">
            <FaRedhat className="text-red-600 mr-3 text-2xl" />
            <h3 className="text-lg font-semibold text-gray-800">
              Personal Skills
            </h3>
          </motion.div>
          <p className="text-sm text-gray-500 mb-6">Sed ut perspiciatis</p>
          <motion.div variants={containerVariants} className="space-y-4">
            {PERSONAL_SKILLS.map((skill, index) => (
              <SkillBar
                key={index}
                name={skill.name}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
