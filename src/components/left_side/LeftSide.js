import React from "react";
import "./LeftSide.css";
import "../../fonts.css";
import Navbar from "./Navbar";
import Socials from "./Socials";
import Intro from "./Intro";

const LeftSide = () => {
  return (
    <div className="left-side">
      <Intro />
      <Navbar />
      <Socials />
    </div>
  );
};

export default LeftSide;
