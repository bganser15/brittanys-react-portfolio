import React from "react";
import "./index.css"
function Resume() {
  return (
    <section className="resume-container">
      <div className="skills">
      <h1>Skills</h1>
      <ul>
        <li>HTML and CSS</li>
        <li>Javascript(ES6)</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>React</li>
        <li>Github</li>
      </ul>
      </div>
      <button className="resume-button"><a href="../../assets/docs/BrittanyGanserResume.pdf" download>Download My Resume</a></button>
    </section>
  );
}

export default Resume;
