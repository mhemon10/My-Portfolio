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
    <div className="w-full pb-16">
      {/* --------- TOP BACKGROUND IMAGE --------- */}
      <div className="w-full h-[380px] relative">
        <img
          src="/hero-bg.avif" // upload yourself
          className="w-full h-full object-cover rounded-xl shadow"
        />

        {/* PROFILE IMAGE */}
        <motion.img
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, type: "spring" }}
          src="/MHEmon.png" // upload yourself
          className="w-28 h-28 rounded-full border-4 border-white shadow-lg absolute left-10 -bottom-14 object-cover"
        />
      </div>

      {/* --------- NAME + TITLE + STATS --------- */}
      <div className="bg-white rounded-xl mt-16 px-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* NAME */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-900">
              Sean Stevenson
            </h2>
            <p className="text-gray-500">Front-end Developer</p>
          </motion.div>

          {/* STATS */}
          <div className="flex flex-wrap gap-10 mt-8 md:mt-0 text-center">
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
              <h3 className="text-2xl font-semibold">10</h3>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
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
