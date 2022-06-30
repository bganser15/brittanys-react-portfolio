import React from "react";
import "./index.css";

function Nav(props) {
  const {
    setPageSelected,
  } = props;
  return (
    <header className="nav-header">
      <nav>
        <ul>
          <li>
            <a
              href="#about"
              onClick={() => setPageSelected("About")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              onClick={() => setPageSelected("Portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a href="#resume" onClick={() => setPageSelected("Resume")}>
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={() => setPageSelected("Contact")}
              
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
