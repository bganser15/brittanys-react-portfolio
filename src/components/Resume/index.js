import React from "react";
import "./index.css";
function Resume() {
  return (
    <section className="resume-container">
      <div className="resume">
        <img
          src={require("../../assets/img/BrittanyGanserWebDevResume.png")}
          alt="Brittany's Resume"
        ></img>
      </div>
      <button className="resume-button">
        <a href="/BrittanyGanserWebDevResume.png" download>
          Download My Resume
        </a>
      </button>
    </section>
  );
}

export default Resume;
