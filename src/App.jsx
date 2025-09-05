import React from "react";
import Home from "./sections/Home";
import About from './sections/About';
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Navbar from './sections/Navbar';

function App() {
  return (
    <div className="scroll-smooth">
      <Home />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Navbar />
    </div>
  );
}

export default App;
