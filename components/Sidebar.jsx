"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaCog,
  FaBriefcase,
  FaTags,
  FaBlog,
  FaPhone,
  FaDribbble,
  FaTwitter,
  FaGooglePlusG,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Sidebar({ sections }) {
  const [active, setActive] = useState("home");
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Auto-close mobile sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileOpen && !e.target.closest(".sidebar-container")) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMobileOpen]);

  // Intersection Observer for active section
  useEffect(() => {
    const observers = [];

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => entry.isIntersecting && setActive(section.id),
        { threshold: 0.4 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sections]);

  const iconMap = {
    home: <FaHome size={22} />,
    about: <FaUser size={22} />,
    resume: <FaFileAlt size={22} />,
    services: <FaCog size={22} />,
    portfolio: <FaBriefcase size={22} />,
    pricing: <FaTags size={22} />,
    blog: <FaBlog size={22} />,
    contact: <FaPhone size={22} />,
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    if (isMobile) {
      setIsMobileOpen(false);
    }
  };

  // Mobile toggle button
  const MobileToggleButton = () => (
    <button
      onClick={() => setIsMobileOpen(!isMobileOpen)}
      className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
      aria-label={isMobileOpen ? "Close menu" : "Open menu"}>
      {isMobileOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  );

  // Social Icons Component
  const SocialIcons = () => (
    <div className="flex gap-3 mt-3 text-white text-base lg:text-lg justify-center">
      <FaGithub className="cursor-pointer hover:text-gray-200 transition-colors" />
      <FaDribbble className="cursor-pointer hover:text-pink-300 transition-colors" />
      <FaTwitter className="cursor-pointer hover:text-blue-300 transition-colors" />
      <FaGooglePlusG className="cursor-pointer hover:text-red-300 transition-colors" />
      <FaLinkedin className="cursor-pointer hover:text-blue-300 transition-colors" />
      <FaFacebook className="cursor-pointer hover:text-blue-400 transition-colors" />
    </div>
  );

  // Sidebar Content Component
  const SidebarContent = () => (
    <div className="sidebar-container h-full flex flex-col">
      {/* Profile Section */}
      <div className="relative h-48 lg:h-64 w-full flex flex-col items-center justify-center px-4">
        <img
          src="/nav-bg.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black/40 lg:bg-black/20"></div>

        <div className="relative flex flex-col items-center z-10">
          {/* Profile Image */}
          <div className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border-4 border-white shadow-lg overflow-hidden">
            <img
              src="/MHEmon.png"
              className="w-full h-full object-cover"
              alt="Mahadi Hasan Emon"
            />
          </div>

          {/* Name */}
          <h2 className="text-lg lg:text-xl font-semibold text-white mt-3 text-center">
            Mahadi Hasan Emon
          </h2>

          {/* Email */}
          <p className="text-white/80 text-xs lg:text-sm mt-1 text-center">
            stevenson@gmail.com
          </p>

          {/* Social Icons */}
          <SocialIcons />
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 mt-2 lg:mt-4 pb-4 overflow-y-auto">
        {sections.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center gap-3 lg:gap-4 px-4 lg:px-8 py-3 cursor-pointer transition-all
              ${
                active === item.id
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }
            `}>
            <span
              className={`${
                active === item.id ? "text-blue-600" : "text-gray-500"
              }`}>
              {iconMap[item.id]}
            </span>

            <span
              className={`text-base lg:text-lg ${
                active === item.id ? "text-blue-700" : "text-gray-700"
              }`}>
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <MobileToggleButton />

      {/* Desktop Sidebar (hidden on mobile) */}
      <div className="hidden lg:block w-72 h-screen bg-white shadow-lg fixed left-0 top-0 overflow-hidden">
        <SidebarContent />
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
            />

            {/* Mobile Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="lg:hidden fixed top-0 left-0 h-screen w-80 max-w-[85vw] bg-white shadow-xl z-40 sidebar-container">
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main content spacing for desktop */}
      {!isMobile && <div className="hidden lg:block ml-72"></div>}

      {/* Mobile bottom navigation for quick access */}
      {isMobile && !isMobileOpen && (
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 z-30">
          <div className="flex justify-around">
            {sections.slice(0, 4).map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex flex-col items-center p-2 rounded-lg transition-colors ${
                  active === item.id
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-600"
                }`}>
                <span className="text-lg">{iconMap[item.id]}</span>
                <span className="text-xs mt-1">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        @media (max-width: 640px) {
          .sidebar-container {
            max-height: calc(100vh - 80px);
          }
        }

        /* Hide scrollbar for Chrome, Safari and Opera */
        .sidebar-container::-webkit-scrollbar {
          display: none;
        }

        /* Hide scrollbar for IE, Edge and Firefox */
        .sidebar-container {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </>
  );
}
