import "./App.css";
import emailjs from "@emailjs/browser";
import { useState } from "react";
function App() {
  const [sent, setSent] = useState(false);
  return (
    <div className="app">
      <header>
        <div>
          <h1>Zoe Blighton</h1>
          <nav>
            <a href="#about">About</a> {" | "}
            <a href="#projects">Projects</a> {" | "}
            <a href="#resume">Resume</a> {" | "}
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="about">
          <div>
            <div>
              <h2>Front-end Web Developer</h2>

              <p>Based in Colchester, UK</p>
              <div>
                <img
                  src={require("./headshot.jpg")}
                  alt="Zoe Blighton"
                  width={300}
                />
              </div>

              <p>
                <strong> Hi, I'm Zoe.👋</strong>
                <br />I build responsive, SEO-conscious web applications using
                React and modern front-end tooling. I specialise in translating
                ideas into clean, user-focused interfaces, delivering projects
                from concept and design direction through to production
                deployment. <br />
                My background in management within an early-years setting
                strengthened my communication, organisation, and problem-solving
                skills, which now support my work with clients and collaborative
                projects in tech. I’m driven by continuous growth and enjoy
                building thoughtful digital experiences that balance usability,
                performance, and visual clarity. <br /> Outside of development,
                you’ll find me climbing, practicing yoga, or exploring nature
                with my dog, Alfie.
              </p>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Personal Projects</h2>

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
              <p>
                <ul>
                  <li>
                    Delivered a fully responsive React application from concept
                    to launch
                  </li>
                  <li>
                    Led creative direction and UX decisions with full design
                    autonomy
                  </li>
                  <li>
                    Structured semantic HTML to support SEO best practices
                  </li>
                  <li>
                    Deployed the site independently, managing build and
                    production release
                  </li>
                  <li>
                    Established scalable component architecture for future
                    content expansion
                  </li>
                </ul>
              </p>
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
                Live{" "}
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
              single application.{" "}
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
            <h3>Pokemon generator</h3>
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
                alt="Pokemon Screenshot"
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
                href="https://pokemon-randomiser.netlify.app//"
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
            <a
              href="/resume/zoe-blighton-resume-PDF.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View
            </a>
            <a
              href="/resume/zoe-blighton-resume-PDF.pdf"
              download
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
                alt="LinkedIn Icon"
                width={50}
              />
            </a>
            {"  "}
            <a
              href="https://github.com/zoeblighton"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./github-icon.png")}
                alt="Github Icon"
                width={50}
              />
            </a>

            {"  "}
            <a
              href="https://www.shecodes.io/graduates/159152-zoe-blighton"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={require("./shecodes-icon.png")}
                alt="SheCodes Icon"
                width={50}
              />
            </a>

            {"  "}
            <a href="mailto:zoeblighton.seo@gmail.com">
              <img
                src={require("./email-icon.png")}
                alt="Email Icon"
                width={50}
              />
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p> {new Date().getFullYear()} Coded by Zoe Blighton</p>
      </footer>
    </div>
  );
}

export default App;
