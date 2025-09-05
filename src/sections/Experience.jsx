import React from "react";
import { motion } from "framer-motion";
import TypingTitle from "../components/TypingTitle";

const experiences = [
  {
    title: "T+ID Lab @ GT",
    position: "Undergraduate Research Assistant",
    period: "Aug 2025 - Present",
    image: "/tid lab.png",
    description: ["Will be updated soon."]
  },
  {
    title: "Create-X Startup Project",
    position: "Founder",
    period: "Aug 2025 -",
    image: "/createx.png",
    description: ["Development underway."]
  },
  {
    title: "GT Office of Information Technology",
    position: "IT Service Student Assistant",
    period: "Aug 2023 - Present",
    image: "/oit.jpg",
    description: [
      "Administer laptop rentals for student loan equipment by notifying students’ request and return status through email.",
      "Manage rapid, complete image processing of 500+ laptops each semester via Microsoft Deployment Toolkit to protect previous user’s data and provide convenience for the next loaner at every return.",
      "Guide and help 20+ students every day for printing services at the library and ensure enough amount of paper, materials and ink are stocked."
    ]
  },
  {
    title: "ML for 3D Printing",
    position: "VIP Student Researcher",
    period: "Aug - Dec 2023",
    image: "/vip.jpeg",
    description: [
      "Helped improve the Machine Learning model that detects defects in 3D printer materials with improved accuracy from 70% to 90%.",
      "Researched, designed, and implemented a Convolutional Neural Network (CNN) binary image classification model using Keras’ sequential model and TensorFlow, scikit-learn, NumPy, and matplotlib.",
      "Implemented model by applying data augmentation to increase the data set and optimize the performance."
    ]
  }
];

const Experience = () => (
  <section id="Experience" className="relative py-8 px-4 overflow-hidden">
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
      className="absolute top-0 left-0 w-full h-50 bg-white shadow-md z-10"
      style={{
        clipPath:
          "polygon(0 0, 100% 0, 100% 80%, 95% 100%, 85% 90%, 75% 100%, 65% 92%, 55% 100%, 45% 95%, 35% 100%, 25% 92%, 15% 100%, 5% 90%, 0 100%)",
      }}
    />

    <TypingTitle
      text="Research & Work Experience"
      className="text-5xl text-center mt-10 relative z-20"
      style={{ fontFamily: "'Yeon Sung', system-ui" }}
    />

    {/* Horizontal scrollable cards */}
    <div className="relative z-20 mt-32 overflow-x-auto py-4">
      <div className="flex gap-6 justify-center px-4">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md w-72 flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Organization image */}
            {exp.image && (
              <img
                src={exp.image}
                alt={exp.title}
                className="rounded-md mb-4"
                style={{
                  maxHeight: "6rem",
                  width: "auto",
                  height: "auto",
                }}
                onLoad={(e) => {
                  const img = e.currentTarget;
                  if (img.naturalWidth > img.naturalHeight) {
                    img.style.width = "11rem";
                    img.style.height = "auto";
                  } else {
                    img.style.width = "6rem";
                    img.style.height = "6rem";
                  }
                }}
              />
            )}

            {/* Text content */}
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Yeon Sung', system-ui" }}>
                {exp.title}
              </h3>
              <p className="text-sm italic" style={{ fontFamily: "'Yeon Sung', system-ui" }}>
                {exp.position} | {exp.period}
              </p>
              <div className="space-y-1" style={{ fontFamily: "'Yeon Sung', system-ui" }}>
                {exp.description.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
