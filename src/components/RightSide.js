import React from "react";
import Section from "./Section";
import "./RightSide.css";
import "../fonts.css";
import About from "./About";

const RightSide = () => {
  return (
    <div className="right-side">
      <About />
      <Section id="section2" title="Projects" content="fsdf" />
      <Section id="section3" title="Contact" content="add contact and cv" />
    </div>
  );
};

export default RightSide;
