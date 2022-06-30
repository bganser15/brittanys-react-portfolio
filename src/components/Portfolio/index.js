import React from "react";
import "./index.css";

function Portfolio() {
  return (
    <section className="portfolio-container">
      <h1>Check out some of my projects and their Github repositories!</h1>
      <div className="project-cover col-1">
        <div className="project-cover-text">
          <span className="github">
            <a
              href="https://github.com/bganser15/national-parks-weather"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
          <span className="project-name">National Park Weather</span>
          <span className="deployed">
            <a
              href="https://bganser15.github.io/national-parks-weather/"
              target="_blank"
              rel="noreferrer"
            >
              Deployed
            </a>
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
            <a
              href="https://github.com/bganser15/SJDA_Alphabet_Test"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
          <span className="project-name">Alphabet Test</span>
          <span className="deployed">
            <a
              href="https://ancient-brook-00685.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Deployed
            </a>
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
            <a
              href="https://github.com/bganser15/workday-scheduler"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
          <span className="project-name">Workday Scheduler</span>
          <span className="deployed">
            <a
              href="https://bganser15.github.io/workday-scheduler/"
              target="_blank"
              rel="noreferrer"
            >
              Deployed
            </a>
          </span>
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
            <a
              href="https://github.com/bganser15/password-generator"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
          <span className="project-name">Password Generator</span>
          <span className="deployed">
            <a
              href="https://bganser15.github.io/password-generator/"
              target="_blank"
              rel="noreferrer"
            >
              Deployed
            </a>
          </span>
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
            <a
              href="https://github.com/bganser15/budget-tracker"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
          <span className="project-name">Budget Tracker</span>
          <span className="deployed">
            <a
              href="https://polar-headland-41681.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              Deployed
            </a>
          </span>
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
            <a
              href="https://github.com/bganser15/coding-quiz"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </span>
          <span className="project-name">Javascript Quiz</span>
          <span className="deployed">
            <a
              href="https://bganser15.github.io/coding-quiz/"
              target="_blank"
              rel="noreferrer"
            >
              Deployed
            </a>
          </span>
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
