import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import Projects from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import WorkExperience from "./components/WorkExperience";
import DownloadCV from "./components/DownloadCV";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <WorkExperience />
      <DownloadCV />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
