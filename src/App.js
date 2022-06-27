import "./App.css";
import About from "./components/About";
import Nav from "./components/Nav";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <main>
      <Nav></Nav>
      <div>
        <About></About>;
      </div>
      <div>
        <Portfolio></Portfolio>
      </div>
      <div>
        <Resume></Resume>
      </div>
      <Contact></Contact>
    </main>
  );
}

export default App;
