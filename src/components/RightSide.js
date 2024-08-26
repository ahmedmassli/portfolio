import React from "react";
import Section from "./Section";
import "./RightSide.css";
import "../fonts.css";

const RightSide = () => {
  return (
    <div className="right-side">
      <Section id="section1" title="Section 1" />
      <Section id="section2" title="Section 2" />
      <Section id="section3" title="Section 3" />
    </div>
  );
};

export default RightSide;
