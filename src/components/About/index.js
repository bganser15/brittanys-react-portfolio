import React from "react";
import "./index.css"

function About() {
  return (
    <section className="container">
      <div className="pic-container">
        <img className="profile-pic" src={require("../../assets/img/BrittanyHeadshot.jpg")} alt="Headshot of Brittany"></img>
      </div>
      <div className="about-me-container">
        <h1>Hi! I'm Brittany</h1>
        <p>I graduated from Baldwin Wallace University with a BA in Theatre and minor in Web Programming. I am currently taking Michigan State University's Coding Bootcamp to become a full stack web developer. I am excited to take my love for art and design and translate it into beautiful websites.</p>
      </div>
    </section>
  );
}

export default About;
