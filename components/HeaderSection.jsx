"use client";

import { motion } from "framer-motion";
import { FaUsers, FaCheckCircle, FaCode, FaUserFriends } from "react-icons/fa";

export default function HeroProfile() {
  // card animation variant
  const cardFade = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    // Added responsive horizontal padding (px-4 for mobile, px-6 for md)
    <div className="w-full pb-16 lg:pb-5 px-4 md:px-6 lg:px-0"> 
      
      {/* --------- TOP BACKGROUND IMAGE --------- */}
      <div className="w-full h-[380px] relative">
        <img
          src="/hero-bg.avif" // upload yourself
          className="w-full h-full object-cover rounded-xl shadow"
          alt="Hero Background"
        />

        {/* PROFILE IMAGE: Adjusted bottom positioning for mobile screens (-bottom-14) 
            and added z-index to ensure it sits above content below. */}
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          src="/MHEmon.png" // upload yourself
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg absolute left-1/2 md:left-10 -translate-x-1/2 md:-translate-x-0 -bottom-14 object-cover z-10"
          alt="Profile"
        />
      </div>

      {/* --------- NAME + TITLE + STATS --------- */}
      {/* Added pt-16 to give space for the profile image on all screens */}
      <div className="bg-white rounded-xl lg:px-10 mt-16 lg:mt-15 md:mt-5 pt-2"> 
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* NAME: Adjusted margin for mobile and desktop alignment */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center md:text-left mb-8 md:mb-0"> 
            <h2 className="text-2xl font-semibold text-gray-900">
              Mahadi Hasan Emon
            </h2>
            <p className="text-gray-500">Front-end Developer</p>
          </motion.div>

          {/* STATS: Added justify-center for better mobile alignment */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-0 text-center">
            {/* Completed Jobs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}>
              <h3 className="text-2xl font-semibold">96%</h3>
              <p className="text-gray-500 text-sm">Jobs Completed</p>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}>
              <h3 className="text-2xl font-semibold">1+</h3>
              <p className="text-gray-500 text-sm">Years Experience</p>
            </motion.div>

            {/* Hourly Rate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}>
              <h3 className="text-2xl font-semibold">$25</h3>
              <p className="text-gray-500 text-sm">USD/hr</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --------- 4 STATISTIC CARDS --------- */}
      {/* Changed lg:grid-cols-4 to md:grid-cols-4 for better utilization of medium screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-10">
        {/* CARD 1 */}
        <motion.div
          variants={cardFade}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.2 }}
          className="bg-green-600 text-white rounded-md shadow-lg p-6">
          <div className="flex items-center gap-3">
            <FaUsers size={26} />
            <h3 className="text-xl font-semibold">480+</h3>
          </div>
          <p className="mt-2 text-sm opacity-90">Happy Clients</p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          variants={cardFade}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.3 }}
          className="bg-teal-600 text-white rounded-md shadow-lg p-6">
          <div className="flex items-center gap-3">
            <FaCheckCircle size={26} />
            <h3 className="text-xl font-semibold">400+</h3>
          </div>
          <p className="mt-2 text-sm opacity-90">Completed Projects</p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          variants={cardFade}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.4 }}
          className="bg-red-600 text-white rounded-md shadow-lg p-6">
          <div className="flex items-center gap-3">
            <FaCode size={26} />
            <h3 className="text-xl font-semibold">100,000+</h3>
          </div>
          <p className="mt-2 text-sm opacity-90">Lines of Code</p>
        </motion.div>

        {/* CARD 4 */}
        <motion.div
          variants={cardFade}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.5 }}
          className="bg-yellow-500 text-white rounded-md shadow-lg p-6">
          <div className="flex items-center gap-3">
            <FaUserFriends size={26} />
            <h3 className="text-xl font-semibold">1000+</h3>
          </div>
          <p className="mt-2 text-sm opacity-90">Followers</p>
        </motion.div>
      </div>
    </div>
  );
}