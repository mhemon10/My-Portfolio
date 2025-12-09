// components/ServicesSection.js
"use client";

import { motion } from "framer-motion";
import {
  FaPalette, // For UI/UX Design
  FaLaptopCode, // For Web Application
  FaAndroid, // For Android Application
  FaMobileAlt, // For Mobile Design
  FaPencilAlt, // For Writing
  FaCameraRetro, // For Photography
} from "react-icons/fa";

// --- CONFIGURATION & DATA (UPDATED DESCRIPTIONS) ---

const SERVICE_CARDS = [
  {
    icon: FaLaptopCode,
    title: "Web Application",
    description:
      "Developing powerful, scalable, and responsive web applications using modern frameworks like Next.js and React.",
    color: "bg-teal-600", // Matches screenshot teal/blue-green
    delay: 0.3,
  },
  {
    icon: FaPalette,
    title: "UI/UX Design",
    description:
      "Designing beautiful and highly functional user interfaces and engaging user experiences focused on conversion and accessibility.",
    color: "bg-green-600", // Matches screenshot green
    delay: 0.2,
  },

  {
    icon: FaAndroid,
    title: "Android Application",
    description:
      "Building native or cross-platform Android applications that deliver seamless performance and a great user experience.",
    color: "bg-red-600", // Matches screenshot red
    delay: 0.4,
  },
  {
    icon: FaMobileAlt,
    title: "Mobile Design",
    description:
      "Creating mobile-first designs ensuring your application looks and works flawlessly on any handheld device or screen size.",
    color: "bg-orange-500", // Matches screenshot orange
    delay: 0.5,
  },
  {
    icon: FaPencilAlt,
    title: "Writing",
    description:
      "Providing clear, concise, and engaging technical content, documentation, or creative copywriting for your project needs.",
    color: "bg-blue-600", // Matches screenshot blue
    delay: 0.6,
  },
  {
    icon: FaCameraRetro,
    title: "Photography",
    description:
      "Delivering high-quality, professional photography services for digital media, portraits, and product showcasing.",
    color: "bg-purple-600", // Matches screenshot purple
    delay: 0.7,
  },
];

// Framer Motion Variants (No Change)
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Sub-Component: Single Service Card (UPDATED HOVER ANIMATION) ---
const ServiceCard = ({ icon: Icon, title, description, color, delay }) => (
  <motion.div
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay: delay }}
    // Added stronger hover effect for visual appeal
    className="flex bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-[1.03] hover:shadow-xl transition-transform duration-300 border border-gray-100 cursor-pointer">
    {/* Color Block (Left Side) */}
    <div
      className={`${color} w-20 flex-shrink-0 flex items-center justify-center p-4`}>
      {/* Icon */}
      <Icon size={32} className="text-white" />
    </div>

    {/* Content */}
    <div className="p-4 flex-1">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </motion.div>
);

// --- Main Component (UPDATED GRID LAYOUT) ---
export default function ServicesSection() {
  return (
    <section
      id="services" // Used for Intersection Observer in Sidebar
      className="p-4 md:p-8 lg:p-3 bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10 text-gray-800">
        Services
      </motion.h1>

      {/* Grid for Cards: Now uses a 1-column layout on mobile, and a 2-column layout on medium/large screens (2x3 grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SERVICE_CARDS.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
            color={service.color}
            delay={service.delay}
          />
        ))}
      </div>
    </section>
  );
}
