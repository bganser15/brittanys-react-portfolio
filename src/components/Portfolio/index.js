import React from "react";
import "./index.css";

function Portfolio() {
  return (
    <section className="portfolio-container">
      <div className="project-cover col-1">
        <div className="project-cover-text">
          <span className="github">
            <a href="github.com">Github</a>
          </span>
          <span className="project-name">National Park Weather</span>
          <span className="deployed">
            <a href="github.com">Deployed</a>
          </span>
        </div>
        <img
          className="portfolio-image"
          src={require("../../assets/img/npsLandingPage.png")}
          alt="National Park Project"
        ></img>
      </div>
      <div className="project-cover col-2">
        <div className="project-cover-text">
          <span className="github">
            <a href="github.com">Github</a>
          </span>
          <span className="project-name">Alphabet Test</span>
          <span className="deployed">
            <a href="github.com">Deployed</a>
          </span>
        </div>
        <img
          className="portfolio-image"
          src={require("../../assets/img/alphabetTest.png")}
          alt="Alphabet Test"
        ></img>
      </div>
      <div className="project-cover col-1">
        <div className="project-cover-text">
          <span className="github">
            <a href="github.com">Github</a>
          </span>
          <span className="project-name">Workday Scheduler</span>
          <span className="deployed">Deployed</span>
        </div>
        <img
          className="portfolio-image"
          src={require("../../assets/img/workdayLanding.png")}
          alt="Workday Scheduler Project"
        ></img>
      </div>
      <div className="project-cover col-2">
        <div className="project-cover-text">
          <span className="github">
            <a href="github.com">Github</a>
          </span>
          <span className="project-name">Password Generator</span>
          <span className="deployed">Deployed</span>
        </div>
        <img
          className="portfolio-image"
          src={require("../../assets/img/passwordGenerator.png")}
          alt="Password Generator Project"
        ></img>
      </div>
      <div className="project-cover col-1">
        <div className="project-cover-text">
          <span className="github">
            <a href="github.com">Github</a>
          </span>
          <span className="project-name">Budget Tracker</span>
          <span className="deployed">Deployed</span>
        </div>
        <img
          className="portfolio-image"
          src={require("../../assets/img/budgetTracker.png")}
          alt="Budget Tracker Project"
        ></img>
      </div>
      <div className="project-cover col-2">
        <div className="project-cover-text">
          <span className="github">
            <a href="github.com">Github</a>
          </span>
          <span className="project-name">Javascript Quiz</span>
          <span className="deployed">Deployed</span>
        </div>
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
