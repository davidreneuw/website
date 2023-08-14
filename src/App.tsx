import { useState } from "react";
import { SocialIcon } from "react-social-icons";
import "./App.css";
import Card from "./components/card";
import Info from "./info.json";

interface Section {
  title: string;
  id: string;
  contents: Content[];
}

interface Content {
  title: string;
  content: string;
  contentType: "card" | "dropcard";
  tags?: Filter[];
}

interface Filter {
  name: string;
  active: boolean;
}

/**
 * The main component of the application.
 * It renders the navbar, landing page, and sections.
 * @returns The App component.
 */
const App = () => {
  const [sections, setSection] = useState<Section[]>(loadSections());
  const [filters, setFilters] = useState<Filter[]>(loadFilters());
  const ALWAYS_ACTIVE = ["info"];

  /**
   * Returns the JSX element for the given content if it matches the active filters.
   * @param content - The content to render.
   * @returns The JSX element for the given content if it matches the active filters, otherwise null.
   */
  function getContent(content: Content) {
    if (
      content.tags?.some((t) =>
        filters.some((f) => f.name === t.name && f.active)
      )
    ) {
      switch (content.contentType) {
        case "card":
          return (
            <div className="card-container">
              <Card title={content.title} content={content.content} />
            </div>
          );
      }
    } else {
      return null;
    }
  }

  /**
   * Loads the sections from the `Info` object and returns an array of `Section` objects.
   * Each `Section` object contains an array of `Content` objects.
   * @returns An array of `Section` objects.
   */
  function loadSections() {
    const sects: Section[] = Info.sections.map((section) => {
      const sect: Section = {
        title: section.title,
        id: section.id,
        contents: section.contents.map((content: any) => {
          const cont: Content = {
            title: content.title,
            content: content.content,
            contentType: content.contentType,
            tags: content.tags?.map((tag: string) => {
              const t: Filter = { name: tag, active: false };
              if (ALWAYS_ACTIVE.includes(tag)) {
                t.active = true;
              }
              return t;
            }),
          };
          return cont;
        }),
      };
      return sect;
    });
    return sects;
  }

  /**
   * Returns an array of unique filters based on the tags of the contents in the sections.
   * @returns An array of Filter objects.
   */
  function loadFilters(): Filter[] {
    var filtLst: Filter[] = [];
    sections.forEach((section) => {
      section.contents.forEach((content) => {
        content.tags?.forEach((tag) => {
          if (!filtLst.includes(tag)) {
            filtLst.push(tag);
          }
        });
      });
    });
    return filtLst;
  }

  return (
    <div className="content" id="home">
      <div className="navbar">
        {sections.map((section) => (
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
        {sections
          .filter((section) => section.title !== "Home")
          .map((section) => (
            <div className="section">
              <h1 className="section-title" id={section.id}>
                {section.title}
              </h1>
              {section.contents.map((content) => getContent(content))}
              <hr />
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
