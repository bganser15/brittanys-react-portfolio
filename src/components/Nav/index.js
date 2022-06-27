import React from "react";
import "./index.css";

function Nav(props) {
  const {
    setAboutSelected,
    setPortfolioSelected,
    setResumeSelected,
    setContactSelected,
  } = props;
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              onClick={() => {
                setAboutSelected(true);
                setPortfolioSelected(false);
                setResumeSelected(false)
                setContactSelected(false);
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => {
                setPortfolioSelected(true);
                setAboutSelected(false);
                setResumeSelected(false)
                setContactSelected(false);
              }}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => {
              setResumeSelected(true)
              setAboutSelected(false)
              setPortfolioSelected(false);
              setContactSelected(false);
              }}>
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => {
                setContactSelected(true);
                setAboutSelected(false);
                setPortfolioSelected(false);
                setResumeSelected(false)
              }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
