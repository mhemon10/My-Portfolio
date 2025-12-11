// components/BlogSection.js
"use client";

import { motion } from "framer-motion";
import { FaBookmark } from "react-icons/fa"; // Icon for 'Save'

// --- CONFIGURATION & DATA ---

const BLOG_POSTS = [
  {
    id: 1,
    title: "Mastering Responsive Web Design",
    excerpt:
      "In today digital landscape, responsive web design is not just a trend; it is a necessity. Explore the principles and...",
    date: "June 4, 2020",
    tags: ["HTML", "CSS","Tailwind","Javascript"],
    image: "/blog-post-1.jpg", // Replace with your image path
    link: "https://example.com/responsive-design",
  },
  {
    id: 2,
    title: "Unleashing Creativity With Slideshows",
    excerpt:
      "Discover innovative ways to create captivating slideshows that engage your audience. From stunning visuals to...",
    date: "may 21, 2022",
    tags: ["HTML", "CSS","Tailwind","React"],
    image: "/blog-post-2.jpg",
    link: "https://example.com/creative-slideshows",
  },
  {
    id: 3,
    title: "Enhancing User Experience With Image Gallery Lightboxes",
    excerpt:
      "Explore the benefits of incorporating image gallery lightboxes into your website design. From improved user...",
    date: "June 43, 2024",
    tags: ["HTML", "CSS","Nextjs","React"],
    image: "/blog-post-3.jpg",
    link: "https://example.com/image-lightboxes",
    save: true, // Matching the 'Save' pin in the screenshot
  },
];

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// --- Sub-Component: Single Blog Card (UPDATED FOR LIGHT THEME) ---


// --- Main Component (UPDATED FOR LIGHT THEME) ---

