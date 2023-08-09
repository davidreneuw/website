import { SocialIcon } from "react-social-icons";
import "./App.css";
import Info from "./info.json";

function App() {
  return (
    <div className="content" id="home">
      <div className="navbar">
        {Info.sections.map((section) => (
          <a className="navItem" href={"#" + section.id}>
            {section.title}
          </a>
        ))}
      </div>
      <div className="main" id="home">
        <div className="container">
          <div className="landing-container">
            <div className="landing-title-container">
              <h1 className="landing-title anim-typewriter line-1">
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
            <div className="social-media-list">
              {Info.landing.socialMedia.map((socialMedia) => (
                <SocialIcon
                  url={socialMedia.url}
                  bgColor={getComputedStyle(
                    document.documentElement
                  ).getPropertyValue("--primary-colour")}
                  label={socialMedia.name}
                  className="social-media-icon"
                />
              ))}
            </div>
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
        {Info.sections
          .filter((section) => section.title !== "Home")
          .map((section) => (
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
