import "./App.css";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";

function App() {
  const [sent, setSent] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const resumeUrl = "/resume/zoe-blighton-resume-PDF.pdf";

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsResumeOpen(false);
        setIsMenuOpen(false);
      }
    };
    if (isResumeOpen || isMenuOpen)
      window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isResumeOpen, isMenuOpen]);

  const handleNavClick = () => setIsMenuOpen(false);

  return (
    <div className="app">
      <header>
        <div>
          <h1>Zoe Blighton</h1>

          <button
            type="button"
            className="menu-button"
            aria-label="Open menu"
            aria-controls="site-nav"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            <span className="hamburger" aria-hidden="true" />
          </button>

          <nav id="site-nav" className={`site-nav ${isMenuOpen ? "open" : ""}`}>
            <a href="#about" onClick={handleNavClick}>
              About
            </a>
            <a href="#projects" onClick={handleNavClick}>
              Projects
            </a>
            <a href="#resume" onClick={handleNavClick}>
              Resume
            </a>
            <a href="#contact" onClick={handleNavClick}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section id="about">
          <div>
            <div>
              <h2>Web &amp; Mobile App Developer</h2>

              <p>Based in Suffolk, UK</p>
              <div>
                <img
                  src={require("./headshot.jpg")}
                  alt="Zoe Blighton"
                  width={300}
                />
              </div>

              <p className="about-card">
                <strong> Hi, I'm Zoe.👋</strong>
                <br />I design and build web and mobile apps, from responsive,
                SEO-conscious React websites to cross-platform mobile apps with
                React Native and Expo, backed by serverless functions and
                third-party APIs. I take projects from the first idea through
                branding, UX and design to development and deployment, both for
                clients and for my own products. <br />
                My background in management within an early-years setting
                strengthened my communication, organisation, and problem-solving
                skills, and it’s the world behind Little Plans, the planning app
                I’m building for early years practitioners. I’m driven by
                continuous growth and enjoy building thoughtful digital
                experiences that balance usability, performance, and visual
                clarity. <br /> Outside of development, you’ll find me climbing,
                practicing yoga, or exploring nature with my dog, Alfie.
              </p>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Projects</h2>

          <article className="project-card">
            <h3>Little Plans – Landing Page &amp; Mobile App</h3>
            <p>
              Little Plans is an upcoming planning app for early years
              practitioners, offering weekly topic packs, age-adapted EYFS
              activities and automatic shopping lists. I designed and built its
              landing page in React to explain the product, show pricing, and
              build a waitlist ahead of launch.
            </p>
            <p>
              The site uses a component-based architecture, with each section
              (hero, features, how it works, EYFS areas, pricing and sign-up)
              built as a reusable component and all copy kept in a separate
              content file. I added scroll-triggered reveal animations using a
              custom Intersection Observer hook, and optimised the layout for
              mobile. The waitlist form is backed by a serverless Netlify
              Function that validates each email, adds it to a Resend mailing
              list, and sends a branded HTML confirmation email.
            </p>
            <p>
              The Little Plans mobile app is my current project, and development
              is still in progress. I'm building it with React Native and Expo,
              using React Navigation, with bottom tabs for Home, This Week,
              Calendar and Saved, each with its own stack so activity details
              can open within a tab. It shares the brand's colour theme with the
              landing page and emails.
            </p>
            <div>
              <img
                className="littleplans-screenshot"
                src={require("./little-plans-screenshot.png")}
                alt="Little Plans landing page screenshot"
              />
            </div>
            <div className="project-role">
              <h4>My Role</h4>
              <p>
                Founder, Designer & Developer. Responsible for brand identity,
                UX and page design, front-end development, serverless email
                integration, deployment, and cross-platform mobile app
                development.
              </p>
            </div>
            <div className="project-outcomes">
              <h4>Project Outcomes</h4>
              <ul>
                <li>
                  Designed and launched a responsive landing page to validate
                  demand for a new product
                </li>
                <li>
                  Built a working waitlist with serverless email sign-up and
                  automated confirmation emails
                </li>
                <li>
                  Created a consistent brand system, carried through the site,
                  emails and the companion mobile app
                </li>
                <li>
                  Structured content in a separate data file so features and
                  pricing are easy to update
                </li>
                <li>
                  Deployed on Netlify with serverless functions and
                  environment-based configuration
                </li>
                <li>
                  Set up the cross-platform mobile app with tab and stack
                  navigation, tested on iPad via Expo Go
                </li>
              </ul>
            </div>
            <ul className="project-tags">
              <li>React</li>
              <li>Vite</li>
              <li>Netlify Functions</li>
              <li>Resend</li>
              <li>React Native</li>
              <li>Expo</li>
              <li>React Navigation</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
            </ul>
            <div className="project-links">
              {/* TODO: uncomment once the live site URL is ready
              <a href="LIVE-SITE-URL" target="_blank" rel="noopener noreferrer">
                Live
              </a>{" "}
              */}
              <a
                href="https://github.com/zoeblighton/little-plans-site"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </article>

          <article className="project-card">
            <h3>Triple Moon – Living Magically (Client Project)</h3>
            <p>
              Triple Moon is a client project built in React. The client gave me
              full creative direction over the design, allowing me to define the
              visual identity, layout structure, and user experience from
              concept to launch.
            </p>
            <p>
              I developed the site using a component-based architecture,
              implemented responsive layouts for all devices, and structured
              semantic HTML to support SEO best practices. The project
              demonstrates end-to-end delivery, from design decisions through
              development and deployment.
            </p>
            <div>
              <img
                className="triplemoon-screenshot"
                src={require("./triplemoon-screenshot.png")}
                alt="Triple Moon Living Magically Website Screenshot"
              />
            </div>
            <div className="project-role">
              <h4>My Role</h4>
              <p>
                Sole Front-End Developer & Designer. Responsible for UX design,
                component architecture, responsive implementation, SEO
                structure, and production deployment.
              </p>
            </div>
            <div className="project-outcomes">
              <h4>Project Outcomes</h4>
              <ul>
                <li>
                  Delivered a fully responsive React application from concept to
                  launch
                </li>
                <li>
                  Led creative direction and UX decisions with full design
                  autonomy
                </li>
                <li>Structured semantic HTML to support SEO best practices</li>
                <li>
                  Deployed the site independently, managing build and production
                  release
                </li>
                <li>
                  Established scalable component architecture for future content
                  expansion
                </li>
              </ul>
            </div>

            <ul className="project-tags">
              <li>React</li>
              <li>Client Project</li>
              <li>UI/UX Design</li>
              <li>Responsive Design</li>
              <li>SEO</li>
            </ul>
            <div className="project-links">
              <a
                href="https://triplemoon.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>{" "}
              <a
                href="https://github.com/zoeblighton/triple-moon"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </article>

          <article className="project-card">
            <h3>Dictionary App</h3>
            <p>
              I built a React dictionary app that allows users to type in a word
              and instantly receive dictionary results. The app displays
              definitions, parts of speech, example usage, and related word
              information, depending on the API response. The project
              demonstrates my ability to work with real-world data, manage user
              input, and present dynamic results in a clean, accessible
              interface. It integrates two separate APIs—one for retrieving
              dictionary data and another for fetching related images—showcasing
              my experience handling multiple asynchronous data sources within a
              single application.
            </p>
            <div>
              <img
                className="dictionary-screenshot"
                src={require("./dictionary-app-screenshot.png")}
                alt="Dictionary App Screenshot"
              />
            </div>

            <ul className="project-tags">
              <li>React</li>
              <li>Async JavaScript</li>
              <li>APIs</li>
              <li>Hooks</li>
              <li>REST</li>
              <li>Netlify</li>
            </ul>
            <div className="project-links">
              {" "}
              <a
                href="https://enchanting-gingersnap-0e85cd.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>{" "}
              <a
                href="https://github.com/zoeblighton/dictionary-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </article>

          <article className="project-card">
            <h3>Weather App</h3>
            <p>
              I built a responsive weather app using React that lets users
              search any city to view current conditions (temperature, humidity,
              wind, description + icon) and a 5-day forecast. It uses Axios to
              fetch data from the SheCodes Weather API, manages UI state with
              React Hooks, and includes error handling for invalid searches.
            </p>
            <div>
              <img
                className="weather-screenshot"
                src={require("./weather-app-screenshot.png")}
                alt="Weather App Screenshot"
              />
            </div>
            <ul className="project-tags">
              <li>React</li>
              <li>Axios</li>
              <li>API</li>
            </ul>
            <div className="project-links">
              {" "}
              <a
                href="https://steady-cendol-19e8c9.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>{" "}
              <a
                href="https://github.com/zoeblighton/weather-react-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </article>

          <article className="project-card">
            <h3>Pokémon Generator</h3>
            <p>
              As a themed project, I created a React app that lets users
              generate random Pokémon, search by name or ID, and build a
              six-Pokémon party inspired by the games. It uses the PokéAPI to
              fetch and display Pokémon details, artwork, types, and Pokédex
              descriptions in a Game Boy–style interface.
            </p>
            <div>
              <img
                className="pokemon-screenshot"
                src={require("./pokemon-screenshot.png")}
                alt="Pokémon Generator Screenshot"
              />
            </div>
            <ul className="project-tags">
              <li>React</li>
              <li>CSS</li>
              <li>API</li>
            </ul>
            <div className="project-links">
              {" "}
              <a
                href="https://pokemon-randomiser.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live
              </a>{" "}
              <a
                href="https://github.com/zoeblighton/pokemon-random-search"
                target="_blank"
                rel="noopener noreferrer"
              >
                Code
              </a>
            </div>
          </article>
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <p>View my resume here:</p>

          <div className="resume-links">
            <button
              type="button"
              className="btn"
              onClick={() => setIsResumeOpen(true)}
            >
              View
            </button>

            <a
              href={resumeUrl}
              download="Zoe-Blighton-Resume.pdf"
              className="btn"
            >
              Download (PDF)
            </a>
          </div>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            Want to collaborate or just say hi? Reach out via the form below, or
            through any of my social links.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSendError(false);

              emailjs
                .sendForm(
                  "service_kqxk9ng",
                  "template_r0g2tgd",
                  e.target,
                  "Abr_bfzKgCiKd3O7y",
                )
                .then(
                  () => {
                    setSent(true);
                    e.target.reset();
                  },
                  (error) => {
                    console.error("EmailJS error:", error);
                    setSendError(true);
                  },
                );
            }}
          >
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input id="name" name="from_name" required />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <br />
              <input id="email" name="reply_to" type="email" required />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <br />
              <textarea id="message" name="message" rows="4" required />
            </div>

            {sendError && (
              <p className="error-message" role="alert">
                Sorry, your message couldn't be sent. Please try again or email
                me directly.
              </p>
            )}

            {sent ? (
              <p className="success-message">Message received ✓</p>
            ) : (
              <button className="submit-button" type="submit">
                Send message
              </button>
            )}
          </form>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/zoe-blighton-a26087347/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./linked-in-icon.png")}
                alt="LinkedIn"
                width={50}
              />
            </a>
            {"  "}
            <a
              href="https://github.com/zoeblighton"
              target="_blank"
              rel="noreferrer"
            >
              <img src={require("./github-icon.png")} alt="GitHub" width={50} />
            </a>

            {"  "}
            <a
              href="https://www.shecodes.io/graduates/159152-zoe-blighton"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./shecodes-icon.png")}
                alt="SheCodes"
                width={50}
              />
            </a>

            {"  "}
            <a href="mailto:zoeblighton.seo@gmail.com">
              <img src={require("./email-icon.png")} alt="Email" width={50} />
            </a>
          </div>
        </section>
        {isResumeOpen && (
          <div
            className="modal-overlay"
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
            onClick={() => setIsResumeOpen(false)}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <p className="modal-title">Resume</p>
                <button
                  type="button"
                  className="modal-close"
                  onClick={() => setIsResumeOpen(false)}
                  aria-label="Close resume preview"
                >
                  ✕
                </button>
              </div>

              <iframe
                className="resume-frame"
                src={resumeUrl}
                title="Zoe Blighton Resume"
              />

              <div className="modal-footer">
                <a
                  className="btn"
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in new tab
                </a>
                <a
                  className="btn"
                  href={resumeUrl}
                  download="Zoe-Blighton-Resume.pdf"
                >
                  Download (PDF)
                </a>
              </div>
            </div>
          </div>
        )}
      </main>

      <footer>
        <p>© {new Date().getFullYear()} Coded by Zoe Blighton</p>
      </footer>
    </div>
  );
}

export default App;
