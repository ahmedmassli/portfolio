import React from "react";
import Section from "./Section";
import "./RightSide.css";
import "../../fonts.css";
import About from "./About";
import Projects from "./Projects";

const RightSide = () => {
  return (
    <div className="right-side">
      <About />
      <Projects />
      <Section
        id="section3"
        title="Contact"
        content="My journey into the tech industry began during my engineering studies when a research project ignited a deep passion for technology. Attracted by the flexibility, work-life balance, and the creativity involved in software development, I transitioned my career towards becoming a software developer.

After graduating, I focused on consistently delivering projects on time, while refining my creativity and problem-solving skills through personal programming projects. My experience at NorthCoders equipped me with the essential skills needed for the tech industry in a supportive learning environment.

Outside of coding, I'm passionate about martial arts, particularly Brazilian Jiu-Jitsu (BJJ), and enjoy hiking and bouldering in my free time. When I'm not outdoors, you can find me exploring the vast world of video games, with a special fondness for adventures in Hyrule.
My journey into the tech industry began during my engineering studies when a research project ignited a deep passion for technology. Attracted by the flexibility, work-life balance, and the creativity involved in software development, I transitioned my career towards becoming a software developer.

After graduating, I focused on consistently delivering projects on time, while refining my creativity and problem-solving skills through personal programming projects. My experience at NorthCoders equipped me with the essential skills needed for the tech industry in a supportive learning environment.

Outside of coding, I'm passionate about martial arts, particularly Brazilian Jiu-Jitsu (BJJ), and enjoy hiking and bouldering in my free time. When I'm not outdoors, you can find me exploring the vast world of video games, with a special fondness for adventures in Hyrule."
      />
    </div>
  );
};

export default RightSide;
