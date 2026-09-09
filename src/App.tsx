import AmbientBackground from "./components/AmbientBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import AIWorkflow from "./components/AIWorkflow";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import GitHubSection from "./components/GitHubSection";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AIWorkflow />
        <Education />
        <Certifications />
        <GitHubSection />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
