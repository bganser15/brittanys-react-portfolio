import React from "react";
import "./index.css";

function Portfolio() {
  return (
    <section>
      <div className="project-cover col-1">
        <h5 class="project-cover-text">National Park Weather</h5>
        <img
          className="portfolio-image"
          src={require("../../assets/img/npsLandingPage.png")}
          alt="National Park Project"
        ></img>
      </div>
      <div className="project-cover col-2">
        <h5 class="project-cover-text">Alphabet Test</h5>
        <img
          className="portfolio-image"
          src={require("../../assets/img/alphabetTest.png")}
          alt="Alphabet Test"
        ></img>
      </div>
      <div className="project-cover col-1">
        <h5 class="project-cover-text">Workday Scheduler</h5>
        <img
          className="portfolio-image"
          src={require("../../assets/img/workdayLanding.png")}
          alt="Workday Scheduler Project"
        ></img>
      </div>
      <div className="project-cover col-2">
        <h5 class="project-cover-text">Password Genersator</h5>
        <img
          className="portfolio-image"
          src={require("../../assets/img/passwordGenerator.png")}
          alt="Password Generator Project"
        ></img>
      </div>
      <div className="project-cover col-2">
        <h5 class="project-cover-text">Budget Tracker</h5>
        <img
          className="portfolio-image"
          src={require("../../assets/img/budgetTracker.png")}
          alt="Budget Tracker Project" 
        ></img>
      </div>
      <div className="project-cover col-1">
        <h5 class="project-cover-text">Javascript Quiz</h5>
        <img
          className="portfolio-image"
          src={require("../../assets/img/javascriptQuiz.png")}
          alt="Javascript Quiz Project"
        ></img>
      </div>
    </section>
  );
}
export default Portfolio;
