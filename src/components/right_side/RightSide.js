import React from "react";
import "./RightSide.css";
import "../../fonts.css";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const RightSide = () => {
  return (
    <div className="right-side">
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default RightSide;
