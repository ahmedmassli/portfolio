import React from "react";
import "./Projects.css";
import "../../fonts.css";
import GameRevPic from "../../assets/logos/game-rev-pic-2.png"; // Adjust the path as necessary
import GamePlatformPic from "../../assets/logos/games_website.png"; // Adjust the path as necessary

const Projects = () => {
  return (
    <section id="section2" className="section">
      <h2 id="section-heading">Projects</h2>
      <div className="Project">
        <a
          href="https://ahmeds-game-reviews.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="GameRev">
            <img src={GameRevPic} alt="GameRevPic" className="web-snapshot" />
            <div className="Project-Text">
              <h3 id="gameRevTitle">Game-Reviews</h3>
              <p id="gameRevText">
                The website is a platform where users can explore detailed board
                game reviews and ratings for various games. It features a
                user-friendly interface with sections dedicated to different
                types of games. Users can navigate through reviews, leave
                comments, and ratings.
              </p>
              <ul className="technologies-list">
                <li>
                  <div class="technology-tag">React</div>
                </li>
                <li>
                  <div class="technology-tag">Express</div>
                </li>
                <li>
                  <div class="technology-tag">Netifly</div>
                </li>
                <li>
                  <div class="technology-tag">PSQL</div>
                </li>
              </ul>
            </div>
          </div>
        </a>
        <a
          href="https://game-code-a2lu.onrender.com/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div id="GameRev">
            <img
              src={GamePlatformPic}
              alt="Gaming platform website preview"
              className="web-snapshot"
            />
            <div className="Project-Text">
              <h3 id="gameRevTitle">Gaming Platform Website</h3>
              <p id="gameRevText">
                A responsive and accessible gaming platform website built with
                HTML, CSS, and JavaScript. The site features structured
                navigation, mobile-friendly menus, and interactive forms for
                user registration and contact. Emphasis was placed on semantic
                HTML, accessibility (ARIA roles), and responsive design to
                ensure a smooth experience across devices.
              </p>
              <ul className="technologies-list">
                <li>
                  <div className="technology-tag">HTML5</div>
                </li>
                <li>
                  <div className="technology-tag">CSS3</div>
                </li>
                <li>
                  <div className="technology-tag">JavaScript</div>
                </li>
                <li>
                  <div className="technology-tag">jQuery</div>
                </li>
                <li>
                  <div className="technology-tag">SlickNav</div>
                </li>
              </ul>
            </div>
          </div>
        </a>
      </div>
      <div id="CV">
        <a
          href="/Ahmed-Massli-CV.pdf"
          download="Ahmed-Massli-CV.pdf"
          className="cv-button"
        >
          View Full Résumé
        </a>
      </div>
    </section>
  );
};

export default Projects;
