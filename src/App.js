import "./App.css";
import NavBar from "./components/Navbar.js";
import Profile from "./components/Profile.js";
import About from "./components/About.js";
import Skills from "./components/Skill.js";
import Project from "./components/Projects.js";
import Contact from "./components/Contact.js";
import Footer from "./components/Footer.js";
import { useEffect } from "react";
import AOS from "aos";
import "./index.css";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="App">
      {/* <section id="home">
        <NavBar />
        <Profile />
      </section>
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer /> */}

      <div class="container">
        <div class="emoji">🚧</div>
        <h1 class="title">Work in Progress</h1>
        <p class="description">
          My portfolio is currently under construction. Exciting updates are on
          the way!
        </p>
        <div class="dots">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
