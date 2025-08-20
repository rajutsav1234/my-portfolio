import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import "./components/styles.css";   // ✅ global styles (background, sections, buttons, etc.)

function App() {
  return (
    <div className="app-background">
      <Navbar />
      <div id="home" className="section"><Home /></div>
      <div id="about" className="section"><About /></div>
      <div id="skills" className="section"><Skills /></div>
      <div id="education" className="section"><Education /></div>
      <div id="projects" className="section"><Projects /></div>
      <div id="experience" className="section"><Experience /></div>
      <div id="certifications" className="section"><Certifications /></div>
      <div id="achievements" className="section"><Achievements /></div>
      <div id="contact" className="section"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
