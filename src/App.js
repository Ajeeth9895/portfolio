import "./App.css";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Home from "./Components/Home";
import Skill from "./Components/Skill";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="home">
      <Navigation/>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
