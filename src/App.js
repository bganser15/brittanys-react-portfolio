import "./App.css";
import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [pageSelected, setPageSelected] = useState("About");
  const displayPage = () => {
    if (pageSelected === "About") {
    return <About/>}
      if (pageSelected === "Portfolio") {
      return <Portfolio/>}
      if (pageSelected === "Resume") {
      return <Resume/>}
      if (pageSelected === "Contact") {
      return <Contact/>}
      }
  

  return (
    <main>
      <Nav setPageSelected={setPageSelected}></Nav>
      {displayPage()}
      <Footer></Footer>
    </main>
  );
}

export default App;
