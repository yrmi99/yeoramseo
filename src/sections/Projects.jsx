import React, { useState } from "react";
import { motion } from "framer-motion";
import TypingTitle from "../components/TypingTitle";

const projects = [
  {
    name: "Seoul Subway Elevator Guide",
    description:
      "With millions of daily riders, Seoul's metro system is one of the busiest in the world.\nI developed a full-stack web application that helps users navigate the system with accessibility in mind.\nCurrently, the app is available in Korean only.",
    tech: ["JavaScript", "Node.js", "Express", "React", "Firebase"],
    image: "/subwayguide.png",
    link: "https://seoul-elevator-guide.vercel.app/",
  },
  {
    name: "Thai Mission Letter",
    description:
      "A personal website I created to share my 2024 mission trip to Thailand.\nIt offers content in both English and Korean, including general information, prayer requests, and ways for friends and family to support me.",
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "HTML", "CSS"],
    image: "/thaimission.png",
    link: "https://thai2024.vercel.app/",
  },
  {
    name: "Business Management GUI",
    description:
      "Tkinter + MySQL system for managing employees, products, and clients.",
    tech: ["Python", "Tkinter", "MySQL"],
    image: "/blackout.jpg",
    link: "", // No demo
  },
  {
    name: "Question Sorter",
    description: "Tool to categorize and sort quiz questions efficiently.",
    tech: ["Python", "Django", "SQLite"],
    image: "/blackout.jpg",
    link: "", // No demo
  },
];

const Projects = () => {
  const [openDemo, setOpenDemo] = useState(null);

  const handleProjectClick = (proj) => {
    if (proj.link) setOpenDemo(proj);
  };

  return (
    <section
      id="Projects"
      className="relative py-20 px-4 overflow-hidden"
      style={{ fontFamily: "'Yeon Sung', system-ui" }}
    >
      {/* 원고지 배경 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#fff8f0",
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 찢어진 종이 효과 */}
      <div
        className="absolute top-0 left-0 w-full h-50 bg-white z-10"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 85% 90%, 75% 100%, 65% 92%, 55% 100%, 45% 95%, 35% 100%, 25% 92%, 15% 100%, 5% 90%, 0 100%)",
        }}
      />

      <TypingTitle
        text="Projects"
        className="text-5xl text-center mb-12 relative z-20"
      />

      <div className="relative z-20 flex flex-col gap-16 max-w-6xl mx-auto mt-30">
        {projects.map((proj, index) => {
          const isInteractive = !!proj.link;
          return (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* 이미지 + overlay/message */}
              <div
                className={`relative w-full md:w-3/5 rounded-xl overflow-hidden ${
                  isInteractive ? "cursor-pointer" : ""
                }`}
                onClick={() => handleProjectClick(proj)}
              >
                <img
                  src={proj.image}
                  alt={proj.name}
                  className="w-full h-full object-cover rounded-xl"
                />

                {isInteractive ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 opacity-0 hover:opacity-80 transition-opacity">
                    <span className="text-white text-xl font-bold">
                      Check it out!
                    </span>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-gray-800 to-black text-white text-xl font-bold rounded-xl p-4">
                    Demo currently not supported
                  </div>
                )}
              </div>

            {/* 정보 박스 */}
            <div className="relative flex-1 p-6 bg-yellow-100 rounded-lg">
              {/* Top pins */}
              <div className="absolute top-3 left-4 w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-3 right-4 w-3 h-3 bg-yellow-300 rounded-full"></div>

              <h3 className="text-2xl font-bold text-pink-500 mt-4">{proj.name}</h3>
              <p className="text-gray-800 whitespace-pre-line text-xl mt-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-pink-200 text-pink-800 px-3 py-1 rounded-full text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>


            </motion.div>
          );
        })}
      </div>

      {/* Only interactive modals */}
      {openDemo && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 p-2 bg-black bg-opacity-20"
          onClick={() => setOpenDemo(null)}
        >
          <div
            className="relative w-full max-w-5xl h-[85vh] flex rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: "#F9F1E7", boxShadow: "0 10px 25px rgba(0,0,0,0.2)" }}
          >
            <div className="flex flex-col items-center justify-center w-8 bg-transparent ml-2 py-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-3 h-6 bg-gray-400 rounded-full mb-2 shadow-md" />
              ))}
            </div>

            <div
              className="flex-1 mx-2 my-2 rounded-md flex flex-col"
              style={{
                border: "3px dashed #FECACA",
                padding: "4px",
                backgroundColor: "#FFF5F0",
                minHeight: 0,
              }}
            >
              <iframe
                src={openDemo.link}
                title={openDemo.name}
                className="flex-1 w-full border-none rounded-md min-h-0"
              />
            </div>

            <div className="flex flex-col mt-10 w-8 py-4 space-y-2 -ml-1 mr-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-full h-8 bg-[#FFD6C2] rounded-r-full shadow-md" />
              ))}
            </div>

            <button
              className="absolute top-2 right-2 text-2xl font-bold z-10 hover:text-pink-700"
              style={{ color: "#D97706", textShadow: "1px 1px 2px rgba(0,0,0,0.2)" }}
              onClick={() => setOpenDemo(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
