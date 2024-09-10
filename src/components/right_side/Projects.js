import React from "react";
import "./Projects.css";
import "../../fonts.css";
import GameRevPic from "../../assets/logos/game-rev-pic.png"; // Adjust the path as necessary

const Projects = () => {
  return (
    <section id="section2" className="section">
      <h2 id="section-heading">Projects</h2>
      <div className="Project">
        <a href="https://ahmeds-game-reviews.netlify.app" target="_blank">
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
