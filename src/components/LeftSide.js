import React from "react";
import "./LeftSide.css";
import "../fonts.css";

const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="left-top">
        <h1 className="custom-heading-h1">Ahmed Massli</h1>
        <h3 className="custom-heading-h3">Software Developer</h3>
        <p className="brief-intro">
          I craft precise, user-centric, and inclusive digital solutions that
          deliver seamless and captivating experiences.
        </p>
      </div>
      <div className="left-middle">
        <ul className="vertical-navbar">
          <li>
            <a href="#section1">Section 1</a>
          </li>
          <li>
            <a href="#section2">Section 2</a>
          </li>
          <li>
            <a href="#section3">Section 3</a>
          </li>
        </ul>
      </div>
      <div className="left-bottom">
        <ul className="social-links">
          <li>
            <a href="https://twitter.com/">Twitter</a>
          </li>
          <li>
            <a href="https://linkedin.com/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/">GitHub</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
