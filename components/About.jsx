"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="min-h-screen px-6 py-20">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="text-gray-600 max-w-3xl">
        This is the about section animation test.
      </p>
    </motion.section>
  );
}
