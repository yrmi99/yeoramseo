import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations } from "@react-three/drei";
import TypingTitle from "../components/TypingTitle";

const About = ({ resumeLink }) => {
  return (
    <section id="About" className="relative py-20 px-4 overflow-hidden z-0">
      {/* 배경 */}
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
        className="absolute top-0 left-0 w-full h-70 bg-white shadow-md z-10"
        style={{
          clipPath:
            "polygon(0 0, 100% 0, 100% 90%, 95% 100%, 85% 92%, 75% 100%, 65% 93%, 55% 100%, 45% 95%, 35% 100%, 25% 94%, 15% 100%, 5% 92%, 0 100%)",
        }}
      />

      {/* 꽃 장식 */} 
      <span className="absolute bottom-20 left-68 text-4xl z-20">🌼</span> 
      <span className="absolute bottom-20 left-48 text-4xl z-20">🌼</span> 
      <span className="absolute bottom-20 left-58 text-4xl z-20">🌼</span> 
      <span className="absolute bottom-20 left-110 text-4xl z-20">🌼</span> 
      <span className="absolute bottom-20 left-120 text-4xl z-20">🌼</span> 
      <span className="absolute bottom-20 left-130 text-4xl z-20">🌼</span> 

      {/* 타이틀 */}
      <TypingTitle
        text="About Me"
        className="text-6xl mt-20"
        style={{ fontFamily: "'Yeon Sung', system-ui" }}
      />

      {/* 레이아웃 */}
      <div className="relative z-20 mt-40 max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8">
        {/* 왼쪽 프로필 */}
        <div className="w-full md:w-80 lg:w-96 h-80 md:h-96 lg:h-[28rem] flex items-center justify-center">
        <img
            src="hi_cropped.png"
            className="w-full h-full object-contain rounded-xl"
            alt="Profile"
        />
        </div>


        {/* 오른쪽 텍스트 */}
        <div className="flex-1 text-left mt-6 md:mt-0">
          <p className="text-2xl text-gray-800 mb-2" style={{ fontFamily: "'Yeon Sung', system-ui" }}>
            Hey! How's it going?
          </p>
          <p className="text-xl text-gray-800 mb-4" style={{ fontFamily: "'Yeon Sung', system-ui" }}>
            I'm Yeoram. I am a Computer Science student at Georgia Tech with threads in Media (interactive media) and Modeling&Simulation.
          </p>
          <p className="text-xl text-gray-800 mb-4" style={{ fontFamily: "'Yeon Sung', system-ui" }}>
            I am passionate about leveraging technology, especially human-computer interaction, to create social impact, with the long-term goal of contributing to global development.
          </p>
          <p className="text-xl text-gray-800 mb-6" style={{ fontFamily: "'Yeon Sung', system-ui" }}>
            I blend creativity and analytical thinking - my artistic side shows through calligraphy, singing and playing guitar, while my technical skills and leadership experiences highlight my problem-solving abilities.
            Together, they guide me in designing, building and enhancing impactful projects.
          </p>
          <p className="text-xl text-gray-800 mb-6" style={{ fontFamily: "'Yeon Sung', system-ui" }}>
            I’m excited to share my work and ideas with you, and I hope they bring a bit of inspiration and joy along the way. Take care!
          </p>

          {/* 버튼 */}
          <div className="flex flex-row items-center gap-6 mt-4" style={{ fontFamily: "'Yeon Sung', system-ui" }}>
            <a href="/Yeoram_Seo_Resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="bg-pink-500 text-white px-7 py-2 text-md rounded-lg font-semibold transition-transform duration-300 hover:scale-110">
                View Resume
              </button>
            </a>
            <a href="https://www.instagram.com/yeoram_seo" target="_blank" rel="noopener noreferrer">
              <img src="/insta logo.png" alt="Instagram" className="w-9 h-auto cursor-pointer transition-transform duration-300 hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/yeoramseo" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin logo.png" alt="LinkedIn" className="w-9 h-auto cursor-pointer transition-transform duration-300 hover:scale-110" />
            </a>
            <a href="https://github.com/yrmi99" target="_blank" rel="noopener noreferrer">
              <img src="/github.png" alt="Github" className="w-10 h-auto cursor-pointer transition-transform duration-300 hover:scale-110" />
            </a>
            <a href="mailto:yseo60@gatech.edu">
              <img src="/mail.webp" alt="Email" className="w-9 h-auto cursor-pointer transition-transform duration-300 hover:scale-110" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
