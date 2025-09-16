import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const NUM_CELLS = 200;

const getRandomColor = () => {
  const colors = [
    "#fef08a","#fde68a","#fca5a5","#fecaca","#f9a8d4","#fbcfe8","#c4b5fd",
    "#ddd6fe","#a5f3fc","#bae6fd","#86efac","#bbf7d0","#fcd34d","#f97316",
    "#ef4444","#ec4899","#8b5cf6","#3b82f6","#22d3ee","#10b981"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Home = () => {
  const [paintedCells, setPaintedCells] = useState(Array(NUM_CELLS).fill(null));

  const handleHover = (index) => {
    setPaintedCells((prev) => {
      const next = [...prev];
      if (!next[index]) next[index] = getRandomColor();
      return next;
    });
  };

  return (
    <section id="Home" className="bg-white">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen flex flex-col items-center justify-center px-4 py-8"
      >
        {/* manuscript container */}
        <div
          className="manuscript relative inline-block"
          style={{
            border: "2px solid #fca5a5",
            padding: "10px",
            backgroundColor: "white",
          }}
        >
          {/* Title & paragraph inside the manuscript */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 text-center w-full"
            style={{ top: "40%", maxWidth: "90%", pointerEvents: "none" }}
          >
            <TypeAnimation
              sequence={[
                "I'm a Software Engineer", 1500,
                "I'm a Full-Stack Developer", 1500,
                "I'm a Tech Innovator", 1500,
                "I'm a Product Manager", 1500,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontFamily: "'Yeon Sung', system-ui",
                fontSize: "clamp(2rem, 5vw, 4rem)",
                display: "block",
              }}
              repeat={Infinity}
            />
            <p
              className="mt-1 text-gray-700 text-center"
              style={{
                fontFamily: "'Yeon Sung', system-ui",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                maxWidth: "60%",
                margin: "0 auto",
              }}
            >
              aspiring to create technology that empowers communities and drives social good.
            </p>
          </div>

          {/* manuscript meta */}
          <div
            className="flex justify-between mb-1"
            style={{
              fontFamily: "'Yeon Sung', system-ui",
              fontSize: "1.05rem",
              color: "#fca5a5",
            }}
          >
            <span>No.</span>
            <span>Date</span>
          </div>

          <hr style={{ border: "1px solid #fca5a5", marginBottom: 8 }} />

          {/* grid */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: "repeat(20, 60px)",
              gridAutoRows: "60px",
            }}
          >
            {Array.from({ length: NUM_CELLS }).map((_, i) => (
              <div
                key={i}
                onMouseEnter={() => handleHover(i)}
                style={{
                  border: paintedCells[i] ? "none" : "1px solid #fca5a5",
                  backgroundColor: paintedCells[i] || "transparent",
                  width: "60px",
                  height: "60px",
                  transition: "background-color 0.22s ease, border 0.22s ease",
                }}
              />
            ))}
          </div>

          <hr style={{ border: "1px solid #fca5a5", marginTop: 8 }} />

          <div
            className="text-right mt-1"
            style={{
              fontFamily: "'Yeon Sung', system-ui",
              color: "#fca5a5",
            }}
          >
            Page
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default Home;
