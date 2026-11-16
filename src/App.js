import "./App.css";
import { useCallback, useEffect, useState } from "react";
import About from "./components/About";
import CaseStudy from "./components/CaseStudy";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ResumeModal from "./components/ResumeModal";
import Work from "./components/Work";
import { caseStudies } from "./content";
import useFit from "./hooks/useFit";
import useReveal from "./hooks/useReveal";

// Two kinds of page, chosen by the address: the home page, or a case study
// at /work/<slug>. Links between them are ordinary page loads, so there's no
// router; Netlify serves index.html for /work/* (public/_redirects).
function caseStudySlug() {
  const match = window.location.pathname.match(/^\/work\/([a-z0-9-]+)\/?$/);
  return match && caseStudies[match[1]] ? match[1] : null;
}

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const closeResume = useCallback(() => setIsResumeOpen(false), []);
  const [slug] = useState(caseStudySlug);

  useFit();
  useReveal();

  // Arriving from another page at /#work etc.: the target only exists once
  // React has rendered, after the browser's own jump has been tried.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) document.getElementById(id)?.scrollIntoView();
  }, []);

  return (
    <>
      <a className="skip-link" href={slug ? "#case-study" : "#work"}>
        Skip to content
      </a>
      <Header />
      <main>
        {slug ? (
          <CaseStudy slug={slug} />
        ) : (
          <>
            <Hero />
            <Work />
            <About />
          </>
        )}
        <Contact onOpenResume={() => setIsResumeOpen(true)} />
      </main>
      <Cursor />
      {isResumeOpen && <ResumeModal onClose={closeResume} />}
    </>
  );
}

export default App;
