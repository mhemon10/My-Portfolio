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
export default function BlogSection() {
  return (
    <section
      id="blog" // Used for Intersection Observer in Sidebar
      // Main container uses a light background (bg-gray-50 or bg-white)
      className="p-4 md:p-8 lg:p-3 bg-white">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-10 text-gray-800 flex items-center">
        <span className="w-10 h-0.5 bg-blue-600 mr-3"></span>{" "}
        {/* Line under title */}
        Latest Blog Posts
      </motion.h1>

      {/* Grid for Cards: Responsive 1, 2, or 3 columns */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}>
        {BLOG_POSTS.map((post, index) => (
          <BlogPostCard key={post.id} post={post} delay={0.1 * index} />
        ))}
      </motion.div>
    </section>
  );
}
