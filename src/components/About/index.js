import React from "react";
import "./index.css"

function About() {
  return (
    <section className="container">
      <div className="pic-container">
        <img className="profile-pic" src={require("../../assets/img/BrittanyHeadshot.jpg")} alt="Headshot of Brittany"></img>
      </div>
      <div className="about-me-container">
        <h1>Hi! I'm Brittany Ganser!</h1>
        <p>I graduated from Baldwin Wallace University in Cleveland, OH with a BA in Theatre and minor in Web Programming. I am currently studying at Michigan State University's Coding Bootcamp to become a full stack web developer. I am excited to take my love for art and design and translate it into beautiful websites and work on projects to help better our communities.</p>
        <br/>
        <p>When I'm not coding you can find me painting abstract art, enjoying nature or practicing yoga.</p>
        <br />
        <p><i>git commit -m"about Brittany</i></p>
      </div>
    </section>
  );
}

export default About;
