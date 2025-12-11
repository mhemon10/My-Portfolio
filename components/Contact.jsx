// components/ContactSection.js
"use client";

import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

// --- CONFIGURATION & DATA ---

const CONTACT_INFO = [
  {
    icon: FaMapMarkerAlt,
    label: "Address:",
    value: "Dhaka, Uttara, Bangladesh",
    link: "https://maps.app.goo.gl/YourMapLinkHere", // Replace with actual Google Maps link
  },
  {
    icon: FaPhone,
    label: "Phone:",
    value: "+880 1XXXXXXXXX",
    link: "tel:+8801XXXXXXXXX",
  },
  {
    icon: FaEnvelope,
    label: "E-mail:",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com",
  },
];

const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1825.0747043831828!2d90.3853173!3d23.8698188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c68f2f2c8367%3A0x6734c5625737e40a!2sUttara%20Model%20Town!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd";
// This URL points generally to Uttara, Dhaka, Bangladesh. Replace the 'v' parameter with the current timestamp if required.

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

// --- Sub-Component: Contact Info Card ---
const ContactInfoCard = () => (
  <motion.div
    variants={itemVariants}
    className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 mb-6">
    <h3 className="text-xl font-bold mb-4 text-gray-800 flex justify-between items-center">
      CONTACT INFO <FaPaperPlane className="text-gray-400" size={18} />
    </h3>

    <div className="space-y-4">
      {CONTACT_INFO.map((item, index) => (
        <motion.div
          variants={itemVariants}
          key={index}
          className="flex items-start text-gray-700">
          <item.icon
            className="text-blue-600 mr-4 mt-1 flex-shrink-0"
            size={20}
          />
          <div>
            <span className="font-semibold text-gray-800">{item.label}</span>{" "}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors block md:inline">
              {item.value}
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// --- Sub-Component: Contact Map Card ---
const ContactMapCard = () => (

);

// --- Sub-Component: Contact Form ---
const ContactForm = () => (
  <motion.div
    variants={itemVariants}
    className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 lg:col-span-2">
    <h3 className="text-xl font-bold mb-6 text-gray-800 flex justify-between items-center">
      Write a message: <FaPaperPlane className="text-gray-400" size={18} />
    </h3>

    <form className="space-y-4">
      <motion.input
        variants={itemVariants}
        type="text"
        placeholder="Your Name"
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
      />
      <motion.input
        variants={itemVariants}
        type="email"
        placeholder="Your Email"
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
      />
      <motion.input
        variants={itemVariants}
        type="text"
        placeholder="Subject"
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150"
      />
      <motion.textarea
        variants={itemVariants}
        placeholder="Message"
        rows="4"
        className="w-full p-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 transition duration-150 resize-none"
      />
      <motion.button
        variants={itemVariants}
        type="submit"
        className="flex items-center justify-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-md shadow-lg hover:bg-blue-700 transition duration-300">
        <FaPaperPlane className="mr-2" />
        SEND MESSAGE
      </motion.button>
    </form>
  </motion.div>
);

// --- Main Component ---
export default function ContactSection() {
  return (
  
  );
}
