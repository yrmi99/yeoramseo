import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const FooterNav = () => {
  const navItems = ["Home", "About", "Skills", "Experience", "Projects", "Contact"];

  return (
    <footer className="w-full bg-white border-t-2 border-[#FECACA] mt-20 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* 로고/문구 */}
        <motion.div
          className="text-xl font-bold"
          whileHover={{ scale: 1.05 }}
          style={{ fontFamily: "'Yeon Sung', system-ui", color: '#fb9696ff' }}
        >
          Thanks for visiting! 💌
        </motion.div>

        {/* 메뉴 */}
        <ul
          className="flex gap-6 text-lg font-semibold"
          style={{ fontFamily: "'Yeon Sung', system-ui" }}
        >
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, color: "#D87C5D" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer text-gray-700"
            >
              <Link
                to={item}
                smooth={true}
                duration={600}
                offset={-80} // 상단 navbar 있을 경우 보정
              >
                {item}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default FooterNav;
