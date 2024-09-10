import React from "react";
import "./Contact.css";
import "./RightSide.css";
import "../../fonts.css";

const Contact = () => {
  return (
    <section id="section3" className="section3">
      <h2 id="section-heading">Contact</h2>
      <p id="about-me-text">
        Whether you have an idea for a project or just want to chat, feel free
        to shoot me an email!
      </p>
      <a id="mail-link" href="mailto:ahmedmassli@hotmail.co.uk">
        Send Email
      </a>
    </section>
  );
};

export default Contact;
