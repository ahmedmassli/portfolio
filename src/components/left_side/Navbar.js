import React, { useState, useEffect } from "react";
import "./Navbar.css";
import "../../fonts.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute("id"));
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="left-middle">
      <ul className="vertical-navbar">
        <li>
          <a
            href="#section1"
            className={`nav-item ${
              activeSection === "section1" ? "active" : ""
            }`}
          >
            <span className="nav-indicator"></span>
            About
          </a>
        </li>
        <li>
          <a
            href="#section2"
            className={`nav-item ${
              activeSection === "section2" ? "active" : ""
            }`}
          >
            <span className="nav-indicator"></span>
            Projects
          </a>
        </li>
        <li>
          <a
            href="#section3"
            className={`nav-item ${
              activeSection === "section3" ? "active" : ""
            }`}
          >
            <span className="nav-indicator"></span>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
