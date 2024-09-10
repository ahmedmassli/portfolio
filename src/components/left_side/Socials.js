import React from "react";
import "./Socials.css";
import githubLogo from "../../assets/logos/icons8-github-30.png"; // Adjust the path as necessary
import linkedinLogo from "../../assets/logos/linkedin-app-white-icon.svg"; // Adjust the path as necessary

const Socials = () => {
  return (
    <div className="left-bottom">
      <ul className="social-links">
        <li className="social-linkedin">
          <a
            href="https://www.linkedin.com/in/massli/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn Logo"
              className="social-logo"
            />
          </a>
        </li>
        <li className="social-github">
          <a
            href="https://github.com/ahmedmassli"
            target="_blank"
            aria-label="GitHub"
          >
            <img src={githubLogo} alt="GitHub Logo" className="social-logo" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
