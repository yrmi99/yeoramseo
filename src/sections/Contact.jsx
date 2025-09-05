import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TypingTitle from "../components/TypingTitle";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../components/firebase";

const db = getFirestore(app);

const calligraphyImages = [
  "/calli8.jpg",
  "/calli2.jpg",
  "/calli3.jpg",
  "/calli4.jpg",
  "/calli5.jpg",
  "/calli6.jpg",
  "/calli7.jpg",
];

const Contact = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasTyped, setHasTyped] = useState(false);

  const handleInput = () => {
    setHasTyped(true);
  };

  // 2초 후 배경 초기화
  useEffect(() => {
    if (hasTyped) {
      const timer = setTimeout(() => setHasTyped(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [hasTyped]);

  // ✅ Firestore에 저장하는 함수
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        message,
        createdAt: new Date(),
      });
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("❌ Failed to save message. Please try again");
    }
  };


  return (
    <section id="Contact" className="relative py-20 px-4 overflow-hidden">
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

      {/* 타이틀 */}
      <TypingTitle
        text="Contact Me"
        className="text-5xl text-center mb-12 relative z-20"
        style={{ fontFamily: "'Yeon Sung', system-ui" }}
      />

      {/* 좌우 레이아웃 */}
      <div className="relative z-20 max-w-6xl mx-auto flex flex-col md:flex-row mt-40 gap-12">
        {/* 왼쪽: Say Hello 노트 */}
        <div
          className={`flex-1 rounded-lg p-8 flex flex-col justify-center items-center min-h-[500px] border-2 transition-colors duration-500`}
          style={{
            fontFamily: "'Yeon Sung', system-ui",
            borderColor: "#FBB6CE",
            backgroundColor: hasTyped ? "rgba(251, 204, 213, 0.33)" : "transparent",
          }}
        >
          <h3 className="text-2xl font-bold text-pink-500 mb-6 text-center">
            Say Hello👋
          </h3>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full max-w-md"
          >
          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            className="p-3 rounded border border-gray-300"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setHasTyped(true);
            }}
            required
          />

          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            className="p-3 rounded border border-gray-300"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setHasTyped(true);
            }}
            required
          />

          <textarea
            name="Message"
            placeholder="Your Message"
            className="p-3 rounded border border-gray-300 h-40 resize-none"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              setHasTyped(true);
            }}
            required
          />

            <motion.button
              type="submit"
              className="bg-pink-400 text-white px-6 py-3 mt-2 rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Send
            </motion.button>
          </form>
        </div>

        {/* 오른쪽: 캘리그라피 슬라이더 */}
        <div
          className="flex-1 flex flex-col items-center rounded-lg p-8 min-h-[500px]"
          style={{ fontFamily: "'Yeon Sung', system-ui", backgroundColor: "#ffffff" }}
        >
          <h3 className="text-2xl font-bold text-purple-600 mb-6 text-center">
            Some of my Arts 🎨
          </h3>
          <div className="relative w-full h-80 flex items-center justify-center overflow-hidden rounded">
            <img
              src={calligraphyImages[currentIndex]}
              alt={`Calligraphy ${currentIndex + 1}`}
              className="w-full h-full object-contain transition-all duration-500"
            />
            {/* 좌우 버튼 */}
            <button
              onClick={() =>
                setCurrentIndex(
                  currentIndex === 0
                    ? calligraphyImages.length - 1
                    : currentIndex - 1
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"
            >
              ‹
            </button>
            <button
              onClick={() =>
                setCurrentIndex((currentIndex + 1) % calligraphyImages.length)
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-pink-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
