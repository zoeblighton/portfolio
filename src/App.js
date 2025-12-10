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

              <p>
                I build simple, responsive front-end experiences using React,
                Python, and modern web tooling. I am a driven, solution-seeking
                individual with a strong mindset for growth.
              </p>
              <div>
                <img
                  src={require("./headshot.jpg")}
                  alt="Zoe Blighton"
                  width={300}
                />
              </div>
            </div>
            <div>
              <a
                href="https://www.linkedin.com/in/zoe-blighton-a26087347/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              {" | "}
              <a
                href="https://github.com/zoeblighton"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              {" | "}
              <a
                href="https://www.shecodes.io/graduates/159152-zoe-blighton"
                target="_blank"
                rel="noreferrer"
              >
                SheCodes
              </a>

              {" | "}
              <a href="mailto:zoeblighton.seo@gmail.com">Email</a>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>Personal Projects</h2>
          <p>Project cards will go here.</p>
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <p>You can view or download my resume here:</p>
          <p>
            <a href="" target="_blank" rel="noreferrer">
              View Resume
            </a>
          </p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>
            Want to collaborate or just say hi? Reach out via the form below or
            any of my social links.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks for your message!");
            }}
          >
            <div>
              <label htmlFor="name">Name</label>
              <br />
              <input id="name" name="name" required />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <br />
              <input id="email" name="email" type="email" required />
            </div>

            <div>
              <label htmlFor="message">Message</label>
              <br />
              <textarea id="message" name="message" rows="4" required />
            </div>

            <button type="submit">Send message</button>
          </form>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Send me an Email: zoeblighton.seo@gmail.com </p>
          <p>or fill in the form below.</p>
          <p>Contact form will go here.</p>
        </section>
      </main>

      <footer>
        <p> {new Date().getFullYear()} Coded by Zoe Blighton</p>
      </footer>
    </div>
  );
}

export default App;
