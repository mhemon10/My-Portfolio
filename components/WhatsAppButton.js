// components/WhatsAppButton.js
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

// --- CONFIGURATION ---

const WHATSAPP_NUMBER = "8801932582807";
const INITIAL_MESSAGE =
  "Hello%2C%20I%20saw%20your%20portfolio%20and%20I%20want%20to%20talk%20about%20a%20project.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${INITIAL_MESSAGE}`;

// Framer Motion Variants for the button itself (No change needed here)
const btnVariants = {
  hidden: { scale: 0, rotate: 180, opacity: 0 },
  visible: {
    scale: 1,
    rotate: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

// Framer Motion Variants for the popup message
const popupVariants = {
  // x: 0 তে পপআপ দেখা যাবে, x: 20 তে লুকানো থাকবে (বাটনের বাম দিকে যাওয়ার জন্য)
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: 20, transition: { duration: 0.2 } },
};

// --- Main Component ---
export default function WhatsAppButton() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    // মূল কন্টেইনারটিকে Relative করা হয়েছে যাতে পপআপটিকে Absolute পজিশন দেওয়া যায়।
    <div
      className="fixed bottom-20 right-5 lg:bottom-10 lg:right-10 z-50 flex items-center justify-end"
      onMouseEnter={() => setShowPopup(true)} // Show popup on hover
      onMouseLeave={() => setShowPopup(false)} // Hide popup when mouse leaves
    >
      {/* 🎯 Popup Message - WhatsApp বাটনের বামে থাকবে */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            // position the popup relative to the parent div
            className="absolute right-[calc(100%+8px)] bg-white text-gray-800 text-sm md:text-base 
                       p-3 rounded-lg shadow-xl 
                       whitespace-nowrap 
                       hidden sm:block">
            Feel free to message me
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button (বাটনটি ডান দিকে থাকবে) */}
      <motion.a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
        variants={btnVariants}
        initial="hidden"
        animate="visible"
        // 🎯 hover:scale-110 সরানো হয়েছে যাতে বাটন স্থির থাকে
        className="bg-green-500 text-white 
                           p-4 lg:p-5 rounded-full shadow-2xl 
                           hover:bg-green-600 
                           transition-all duration-300 
                           cursor-pointer 
                           flex items-center justify-center 
                           /* Removed hover:scale-110 */">
        <FaWhatsapp size={30} className="w-6 h-6 lg:w-8 lg:h-8" />
      </motion.a>
    </div>
  );
}
