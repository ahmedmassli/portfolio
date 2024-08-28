import React from "react";
import "./Project.css";
import "./RightSide.css";
import "../../fonts.css";
import GameRevPic from "../../assets/logos/game-rev-pic.png"; // Adjust the path as necessary

const Projects = () => {
  return (
    <section id="section2" className="section">
      <h2>Projects</h2>
      <a href="https://ahmeds-game-reviews.netlify.app" target="_blank">
        <div className="Game-Reviews">
          <img src={GameRevPic} alt="GameRevPic" className="web-snapshot" />
          <div>
            <h3 id="gameRevTitle">Game-Reviews</h3>
            <p>
              The website is a platform where users can explore detailed reviews
              and ratings for various games. It features a clean, user-friendly
              interface with sections dedicated to different types of games.
              Users can navigate through reviews, leave comments, and see
              ratings. The site is designed with responsiveness in mind,
              ensuring a seamless experience across devices. The focus is on
              delivering insightful content for gaming enthusiasts, highlighting
              key aspects of each game reviewed.
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
    </section>
  );
};

export default Projects;
