import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const resumeLink = "/Yeoram_Seo_Resume.pdf";

const getRandomColor = () => {
  const colors = [
    "#fef08a","#fde68a","#fca5a5","#fecaca","#f9a8d4","#fbcfe8","#c4b5fd",
    "#ddd6fe","#a5f3fc","#bae6fd","#86efac","#bbf7d0","#fcd34d","#f97316",
    "#ef4444","#ec4899","#8b5cf6","#3b82f6","#22d3ee","#10b981"
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Home = () => {
  const [paintedCells, setPaintedCells] = useState(Array(200).fill(null));

  const handleHover = (index) => {
    setPaintedCells((prev) => {
      const newPainted = [...prev];
      if (!newPainted[index]) newPainted[index] = getRandomColor();
      return newPainted;
    });
  };

  return (
  <section id="Home">
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="h-screen flex flex-col items-center justify-center text-center px-4 relative bg-white"
    >
      {/* 원고지 */}
      <div style={{ display: "inline-block", border: "2px solid #fca5a5", padding: "10px", backgroundColor: "white", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "'Yeon Sung', system-ui", fontSize: "1.2rem", color: "#fca5a5", marginBottom: "5px" }}>
          <span>No.</span>
          <span>Date</span>
        </div>
        <hr style={{ border: "1px solid #fca5a5", marginBottom: "8px" }} />
        <div className="grid gap-y-0" style={{ gridTemplateRows: "repeat(10, 60px)", gridTemplateColumns: "repeat(20, 60px)" }}>
          {[...Array(200)].map((_, i) => (
            <div
              key={i}
              onMouseEnter={() => handleHover(i)}
              style={{
                width: "60px",
                height: "60px",
                border: paintedCells[i] ? "none" : "1px solid #fca5a5",
                backgroundColor: paintedCells[i] || "transparent",
                transition: "background-color 0.3s ease, border 0.3s ease",
              }}
            />
          ))}
        </div>
        <hr style={{ border: "1px solid #fca5a5", marginTop: "8px" }} />
        <div style={{ textAlign: "right", fontFamily: "'Yeon Sung', system-ui", fontSize: "1rem", color: "#fca5a5", marginTop: "5px" }}>
          Page
        </div>
      </div>

      {/* 타이핑 애니메이션 */}
      <div className="absolute top-1/3 w-full flex justify-center">
        <TypeAnimation
          sequence={[
            "I'm a Software Engineer", 1500,
            "I'm a Full-Stack Developer", 1500,
            "I'm a Tech Innovator", 1500,
            "I'm a Product Manager", 1500,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "5em", display: "inline-block", fontFamily: "'Yeon Sung', system-ui" }}
          repeat={Infinity}
        />
      </div>


      {/* 소개 문구 */}
      <p
        className="absolute top-100 w-full text-4xl text-gray-700 max-w-3xl leading-relaxed text-center"
        style={{ fontFamily: "'Yeon Sung', system-ui" }}
      >
        aspiring to create technology that empowers communities and drives social good.
      </p>

    </motion.section>
  </section>
  );
};

export default Home;
