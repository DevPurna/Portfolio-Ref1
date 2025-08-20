import React from "react";
import theme_pattern from "../assets/theme_pattern.svg";
import profile_img from "../assets/profile_img.svg";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a MERN Stack Developer with hands-on experience &
              professional expertise in designing and developing modern web
              applications.
            </p>
            <p>
              I have built 5+ full-stack projects using React, Node, Express,
              and MongoDB, focusing on real-world problem-solving. My passion for
              development goes beyond just writing code—I enjoy architecting
              efficient solutions, optimizing performance, and constantly
              learning new technologies.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS</p>
                <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>JavaScript</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>React</p>
                <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Node.js</p>
                <hr style={{ width: "60%" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
