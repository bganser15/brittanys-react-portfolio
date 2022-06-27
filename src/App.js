import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  const [aboutSelected, setAboutSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <main>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      {portfolioSelected ? (
        <>
          <Portfolio></Portfolio>
        </>
      ) : (
        <>
          <About></About>
        </>
      )}
      {resumeSelected ? (
        <>
          <Resume></Resume>
        </>
      ) : (
        <>
          <About></About>
        </>
      )}

      {contactSelected ? (
        <>
          <Contact></Contact>
        </>
      ) : (
        <>
          <About></About>
        </>
      )}
    </main>
  );
}

export default App;
