import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";
import TypingTitle from "../components/TypingTitle";

const skillsByCategory = {
  "Frontend": ["JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "React", "Next.js"],
  "Backend": ["Node.js", "MySQL", "PostgreSQL"],
  "Programming Languages": ["Python", "Java", "C"],
  "Data Analytics / Visualization": ["Tableau", "Power BI"],
  "Machine Learning / AI": ["TensorFlow", "Keras"]
};

// 카테고리별 hover 색상
const hoverColors = {
  "Frontend": "#fcd34d",           // 노란색
  "Backend": "#60a5fa",            // 파란색
  "Programming Languages": "#f87171", // 연붉은색
  "Data Analytics / Visualization": "#34d399", // 연초록
  "Machine Learning / AI": "#a78bfa" // 보라색
};

const Skills = () => {
  return (
    <section id="Skills" className="relative py-20 px-4 overflow-hidden z-0">
      {/* 원고지 배경 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: "#fff8f0",
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* 찢어진 종이 효과 */}
      <div
        className="absolute top-0 left-0 w-full h-50 bg-white shadow-md z-10"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 90%, 95% 100%, 85% 92%, 75% 100%, 65% 93%, 55% 100%, 45% 95%, 35% 100%, 25% 94%, 15% 100%, 5% 92%, 0 100%)",
        }}
      />

      {/* 꽃 장식 */}
      <span className="absolute top-1/2 left-50 text-3xl z-20">🌺</span>

      {/* 타이틀 */}
      <TypingTitle
        text="Skills"
        className="text-6xl"
        style={{ fontFamily: "'Yeon Sung', system-ui" }}
      />

      
    <div className="relative z-20 mt-40 max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8">
      {/* 왼쪽: 스킬 카드 */}
      <div className="flex-1">
        {Object.entries(skillsByCategory).map(([category, skills]) => (
          <div key={category} className="mb-8">
            <h3 className="text-3xl font-semibold mb-4" style={{ fontFamily: "'Yeon Sung', system-ui", color: "#4B3621" }}>
              {category}
            </h3>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  className="border-2 border-[#4B3621] text-[#4B3621] px-6 py-3 rounded-lg font-semibold cursor-pointer transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = hoverColors[category])}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  style={{ fontFamily: "'Yeon Sung', system-ui" }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 오른쪽: 이미지 */}
      <div className="flex justify-end items-start w-full md:w-auto mt-50">
        <img
          src="/pinkcar.png"
          alt="Skills illustration"
          className="absolute bottom-4 right-4 w-96 md:w-[30rem] rounded-lg z-10"
        />
      </div>
    </div>

    </section>
  );
};

export default Skills;
