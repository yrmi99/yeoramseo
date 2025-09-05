import React from "react";
import { TypeAnimation } from "react-type-animation";
import { useInView } from "react-intersection-observer";

const TypingTitle = ({ text, className = "", style = {}, cursorColor = "#fca5a5", threshold = 1 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold });

  return (
    <div ref={ref}>
      {inView && (
        <TypeAnimation
          sequence={[text, 1000]} // 텍스트 + 1초 대기
          wrapper="h2"
          cursor={false}
          repeat={0}
          className={`relative font-bold text-center z-20 ${className}`}
          style={{ color: cursorColor, ...style }}
        />
      )}
    </div>
  );
};

export default TypingTitle;
