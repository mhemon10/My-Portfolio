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


