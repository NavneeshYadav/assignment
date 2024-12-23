"use client";
import React, { useState, useEffect } from "react";
import { FaReact, FaNodeJs, FaAngular, FaVuejs, FaPython, FaJava, FaPhp } from "react-icons/fa";


const InfiniteIconCarousel: React.FC = () => {
  const icons = [
    { id: 1, icon: <FaReact className="text-blue-500" />, name: "React" },
    { id: 2, icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
    { id: 3, icon: <FaAngular className="text-red-500" />, name: "Angular" },
    { id: 4, icon: <FaVuejs className="text-green-400" />, name: "Vue.js" },
    { id: 5, icon: <FaPython className="text-yellow-500" />, name: "Python" },
    { id: 6, icon: <FaJava className="text-purple-500" />, name: "Java" },
    { id: 7, icon: <FaPhp className="text-indigo-400" />, name: "PHP" },
  ];

  const visibleIcons = 7; // Number of icons to show at a time
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalIcons = icons.length;

  // Duplicate the array for the infinite effect
  const infiniteIcons = [...icons, ...icons, ...icons];

  // Handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Reset index logic for infinite loop
  useEffect(() => {
    if (currentIndex === totalIcons) {
      setTimeout(() => {
        setCurrentIndex(0); // Reset index without transition for infinite effect
      }, 500); // Smooth transition reset
    }
  }, [currentIndex, totalIcons]);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      {/* Carousel Content */}
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${(currentIndex % totalIcons) * (100 / visibleIcons)}%)`,
        }}
      >
        {infiniteIcons.map((icon, idx) => (
          <div
            key={idx}
            className="min-w-[33.33%] flex flex-col items-center justify-center h-64"
          >
            <div className="text-6xl">{icon.icon}</div>
            <p className="text-lg mt-2">{icon.name}</p>
          </div>
        ))}
      </div>

      {/* Dots Navigation
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: totalIcons }, (_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex % totalIcons ? "bg-gray-800" : "bg-gray-400"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default InfiniteIconCarousel;
