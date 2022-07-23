import React from "react";
import "./index.css";

function Nav(props) {
  const {
    setPageSelected,
    pageSelected
  } = props;
  return (
    <header className="nav-header">
      <nav>
        <ul>
          <li className={pageSelected === 'About' ? 'active' : 'nav-link'}>
            <a
              href="#about"
              onClick={() => setPageSelected("About")}
            >
              About
            </a>
          </li>
          <li className={pageSelected === 'Portfolio' ? 'active' : 'nav-link'}>
            <a
              href="#portfolio"
              onClick={() => setPageSelected("Portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li className={pageSelected === 'Resume' ? 'active' : 'nav-link'} >
            <a href="#resume" onClick={() => setPageSelected("Resume")}>
              Resume
            </a>
          </li>
         {/*  <li className={pageSelected === 'Contact' ? 'active' : 'nav-link'}>
            <a
              href="#contact"
              onClick={() => setPageSelected("Contact")}
              
            >
              Contact
            </a>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
