const TypingProfile = () => {
  return (
    <section
      className="h-screen flex flex-col items-start justify-center px-16 py-20"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="grid grid-cols-20 gap-2 mb-4">
          {line.split("").map((char, charIndex) => (
            <motion.span
              key={charIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (charIndex + lineIndex * 10) * 0.08 }}
              className="text-gray-800 text-2xl font-medium"
            >
              {char}
            </motion.span>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TypingProfile;