"use client";
import { motion } from "framer-motion";

export default function HeaderSection() {
  return (
    <section id="home" className="relative min-h-[60vh]">
      <img src="/cover.jpg" className="w-full h-[60vh] object-cover" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute bottom-6 left-6 bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold">Sean Stevenson</h1>
        <p className="text-gray-500">Front-end Developer</p>
      </motion.div>
    </section>
  );
}
