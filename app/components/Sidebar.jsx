"use client";
import { useEffect, useState } from "react";

export default function Sidebar({ sections }) {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers = [];

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActive(section.id);
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-64 h-screen bg-white border-r fixed left-0 top-0 p-6">
      <div className="text-center mb-8">
        <img src="/me.jpg" className="w-24 h-24 rounded-full mx-auto" />
        <h2 className="text-xl font-bold mt-3">Sean Stevenson</h2>
        <p className="text-gray-500 text-sm">frontend developer</p>
      </div>

      <nav className="space-y-4">
        {sections.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`w-full text-left px-4 py-2 rounded-md transition ${
              active === item.id
                ? "bg-orange-500 text-white"
                : "hover:bg-gray-100"
            }`}>
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}
