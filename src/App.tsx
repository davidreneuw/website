import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <html>
      <header className="App-header">
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        ></link>
        <title>davidrene</title>
      </header>
      <div className="content">
        <div className="navbar">
          <a href="#home">
            <div className="navItem">Home</div>
          </a>
          <a href="#about">
            <div className="navItem">About</div>
          </a>
          <a href="#experience">
            <div className="navItem">Experience</div>
          </a>
          <a href="#education">
            <div className="navItem">Education</div>
          </a>
          <a href="#projects">
            <div className="navItem">Projects</div>
          </a>
          <a href="#contact">
            <div className="navItem">Contact me</div>
          </a>
          <br />
        </div>
        <div className="main">
          <div className="container">
            <div className="landing-container">
              <div className="landing-title-container">
                <h1 className="landing-title anim-typewriter line-1" id="home">
                  Hi, I'm David!
                </h1>
              </div>
              <h2 className="landing-subtitle">
                I am a software developer based in Hamilton, Canada. I graduated
                B.Sc Honours Mathematical Physics from the University of
                Waterloo with a minor in astrophysics and a minor in German.
                <br />
                <br />I am currently working as a programmer-analyst for Shared
                Services Canada, where I use Blazor, C# and Azure to develop a
                cloud-based analytics platform for Canadian scientists.
                <br />
                <br /> Please feel free to contact me if you have any questions,
                or if you would like to chat!
                <br />
                <br /> <i> David René</i>
              </h2>
            </div>
            <div className="profile-picture-container">
              <img
                src="../assets/david.jpg"
                alt="Me"
                className="profile-picture"
              />
            </div>
          </div>
          <hr />
          <h1 className="section-title" id="about">
            About
          </h1>
          <Card
            title="Welcome! 😁"
            content="testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
          ></Card>
          <hr />
          <h1 className="section-title" id="experience">
            Experience
          </h1>
          <Card
            title="Welcome! 😁"
            content="testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
          ></Card>
          <hr />
          <h1 className="section-title" id="education">
            Education
          </h1>
          <Card
            title="Welcome! 😁"
            content="testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
          ></Card>
          <hr />
          <h1 className="section-title" id="projects">
            Projects
          </h1>
          <Card
            title="Welcome! 😁"
            content="testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
          ></Card>
          <hr />
          <h1 className="section-title" id="contact">
            Contact me
          </h1>
          <Card
            title="Welcome! 😁"
            content="testttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt"
          ></Card>
        </div>
      </div>
    </html>
  );
}

export default App;
