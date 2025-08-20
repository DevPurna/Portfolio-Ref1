import React from "react";
import "./Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <h1>
        <span>I'm Purna Chandramouli,</span> A passionate MERN Stack Developer
        based in Hyderabad, India.
      </h1>
      <p>
        I specialize in building scalable and user-friendly web applications
        using the MERN stack (MongoDB, Express, React, Node.js). With hands-on
        project experience, I bring clean code practices, problem-solving
        ability, and a strong passion for crafting digital solutions.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            Connect With Me
          </Link>
        </div>
        <div className="hero-resume">View Resume</div>
      </div>
    </div>
  );
};

export default Hero;
