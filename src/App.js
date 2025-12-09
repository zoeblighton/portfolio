import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <div>
          <h1>Zoe Blighton</h1>
          <nav>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="about">
          <h2>About</h2>
          <p>Short bio will go here.</p>
        </section>

        <section id="projects">
          <h2>Personal Projects</h2>
          <p>Project cards will go here.</p>
        </section>

        <section id="resume">
          <h2>Resume</h2>
          <p>Link to my resume will go here.</p>
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
