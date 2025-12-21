import "./App.css";

function App() {
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
              <h2>Junior Front-end Developer</h2>

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
                <br />I build simple, responsive front-end experiences using
                React, Python, and modern web tooling. I’m a driven,
                solution-seeking individual with a strong mindset for growth,
                and I’ve been strengthening my front-end skills through hands-on
                training with SheCodes. Before moving into tech, I progressed
                into a management role in an early-years setting, where I
                developed strong communication, organisation, and
                problem-solving skills — all of which support my work as a
                front-end developer. When I’m not coding, I enjoy climbing,
                practicing yoga, and exploring nature with my dog, Alfie.
              </p>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Personal Projects</h2>
          <div className="shecodes-profile">
            View my SheCodes profile <br />
            <a
              href="https://www.shecodes.io/graduates/159152-zoe-blighton"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={require("./shecodes-icon.png")}
                alt="SheCodes Icon"
                width={50}
              />
            </a>
          </div>

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
                width={600}
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
            <h3>Project Two</h3>
            <p>
              Another focused project, for example a responsive landing page or
              a small component library.
            </p>
            <ul className="project-tags">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
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
            <h3>Project Three</h3>
            <p>
              A short description of what this project does, the problem it
              solves, and what you learned while building it.
            </p>
            <ul className="project-tags">
              <li>Python</li>
              <li>CSS</li>
              <li>API</li>
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
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <p>You can view or download my resume here:</p>
          <p>View Resume</p>
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
              alert("Thanks for your message, I will be in touch!");
            }}
          >
            <div>
              <label htmlFor="name">Name:</label>
              <br />
              <input id="name" name="name" required />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <br />
              <input id="email" name="email" type="email" required />
            </div>

            <div>
              <label htmlFor="message">Message:</label>
              <br />
              <textarea id="message" name="message" rows="4" required />
            </div>

            <button type="submit">Send message</button>
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
