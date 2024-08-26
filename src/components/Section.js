import React from "react";
import "./Section.css";

const Section = ({ id, title }) => {
  return (
    <section id={id} className="section">
      <h2>{title}</h2>
      <p>Content for {title}</p>
    </section>
  );
};

export default Section;
