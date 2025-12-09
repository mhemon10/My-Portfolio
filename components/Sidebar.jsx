"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
} from "react-icons/fa";

export default function Sidebar({ sections }) {
  const [active, setActive] = useState("home");

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
  };

  return (
    <div className="w-72 h-screen bg-white shadow-lg fixed left-0 top-0 overflow-y-auto">
      {/* ---------- TOP BACKGROUND AREA ---------- */}
      <div className="relative h-48 w-full">
        <img
          src="/bg-cover.jpg"
          className="w-full h-full object-cover"
          alt="bg"
        />

        {/* Profile + Name + Email + Social */}
        <div className="absolute left-6 bottom-[-40px]">
          <img
            src="/profile.jpg"
            className="w-20 h-20 rounded-full border-4 border-white shadow-lg object-cover"
            alt="profile"
          />
        </div>
      </div>

      {/* ---------- TEXT AREA UNDER PROFILE ---------- */}
      <div className="mt-16 px-6">
        <h2 className="text-xl font-semibold text-gray-800">Sean Stevenson</h2>

        <p className="text-gray-500 text-sm">stevenson@gmail.com</p>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4 mt-4 text-gray-600 text-lg">
          <FaGithub className="cursor-pointer hover:text-gray-900" />
          <FaDribbble className="cursor-pointer hover:text-pink-500" />
          <FaTwitter className="cursor-pointer hover:text-blue-400" />
          <FaGooglePlusG className="cursor-pointer hover:text-red-600" />
          <FaLinkedin className="cursor-pointer hover:text-blue-600" />
          <FaFacebook className="cursor-pointer hover:text-blue-700" />
        </div>
      </div>

      {/* ---------- MENU ITEMS ---------- */}
      <div className="mt-8">
        {sections.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => scrollToSection(item.id)}
            className={`flex items-center gap-4 px-8 py-3 cursor-pointer
              ${
                active === item.id
                  ? "bg-blue-50 text-blue-600 font-semibold"
                  : "text-gray-600 hover:bg-gray-50"
              }
            `}>
            <span
              className={`${
                active === item.id ? "text-blue-600" : "text-gray-500"
              }`}>
              {iconMap[item.id]}
            </span>

            <span
              className={`text-lg ${
                active === item.id ? "text-blue-700" : "text-gray-700"
              }`}>
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
