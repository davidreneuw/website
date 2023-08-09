import "./App.css";
import Info from "./info.json";

function App() {
  return (
    <div className="content">
      <div className="navbar">
        {Info.sections.map((section) => (
          <a className="navItem" href={"#" + section.id}>
            {section.title}
          </a>
        ))}
      </div>
      <div className="main">
        <div className="container">
          <div className="landing-container">
            <div className="landing-title-container">
              <h1 className="landing-title anim-typewriter line-1" id="home">
                {Info.landing.title}
              </h1>
            </div>
            {Info.landing.subtitles.map((subtitle) => (
              <h2 className="landing-subtitle">{subtitle}</h2>
            ))}
            <img
              src={"../assets/" + Info.landing.signatureName}
              alt="Signature"
              className="signature"
              loading="lazy"
            />
          </div>
          <div className="profile-picture-container">
            <img
              src={"../assets/" + Info.landing.pictureName}
              alt="Me"
              className="profile-picture"
              loading="lazy"
            />
          </div>
        </div>
        <hr />
        {Info.sections.map((section) => (
          <div className="section">
            <h1 className="section-title" id={section.id}>
              {section.title}
            </h1>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
