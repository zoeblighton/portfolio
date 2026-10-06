import "./App.css";
import { useCallback, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ResumeModal from "./components/ResumeModal";
import Work from "./components/Work";
import useFit from "./hooks/useFit";
import useReveal from "./hooks/useReveal";

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const closeResume = useCallback(() => setIsResumeOpen(false), []);

  useFit();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#work">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <About />
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>
      <Cursor />
      {isResumeOpen && <ResumeModal onClose={closeResume} />}
    </>
  );
}

export default App;
