import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";

import { Card } from "./components/card/card";
import { DropCard } from "./components/dropcard/dropcard";
import { FilterCard } from "./components/filter-card/filter-card";

import "./App.css";
import Info from "./info.json";
import { model } from "./types";

// TODO: Filter
// TODO: Expand all / collapse all
// TODO: Mobile compatibility

/**
 * The main component of the application.
 * It renders the navbar, landing page, and sections.
 * @returns The App component.
 */
const App = () => {
  const [sections, setSections] = useState<model.Section[]>(loadSections());
  const [filters, setFilters] = useState<model.Filter[]>(loadFilters());
  useEffect(filterDropCards, [filters]);

  /**
   * Returns the JSX element for the given content if it matches the active filters.
   * @param content - The content to render.
   * @returns The JSX element for the given content if it matches the active filters, otherwise null.
   */
  function getContent(content: model.Content) {
    switch (content.contentType) {
      case "card":
        return (
          <div className="card-container">
            <Card state={content} />
          </div>
        );
      case "dropcard":
        return (
          <div className="dropcard-container">
            <DropCard
              state={content}
              filters={filters}
              toggleFunc={(state: boolean) => {
                toggleDropCard(content);
              }}
            />
          </div>
        );
      case "dropcard-resume":
        content.urlText = "View resume";
        return (
          <div className="dropcard-container">
            <DropCard
              state={content}
              filters={filters}
              toggleFunc={(state: boolean) => {
                toggleDropCard(content, state);
              }}
            />
          </div>
        );
      case "filter-card":
        return (
          <div className="card-container">
            <FilterCard
              state={content}
              filters={filters}
              toggleFunc={toggleFilter}
              expandFunc={expandDropCards}
              collapseFunc={collapseDropCards}
              clearFunc={clearFilters}
            />
          </div>
        );
    }
  }

  /**
   * Loads the sections from the `Info` object and returns an array of `Section` objects.
   * Each `Section` object contains an array of `Content` objects.
   * @returns An array of `Section` objects.
   */
  function loadSections() {
    const sects: model.Section[] = Info.sections.map((section) => {
      const sect: model.Section = {
        title: section.title,
        id: section.id,
        contents: section.contents.map((content: any) => {
          const cont: model.Content = {
            title: content.title,
            subtitle: content.subtitle,
            content: content.content,
            contentType: content.contentType,
            tags: content.tags?.map((tag: string) => {
              const t: model.Filter = {
                name: tag,
                active: false,
              };
              return t;
            }),
            active: content.active,
            url: content.url,
            codeUrl: content.codeUrl,
            urlText: content.urlText,
            locked: content.locked,
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
  function loadFilters(): model.Filter[] {
    var filtLst: model.Filter[] = [];
    sections.forEach((section) => {
      section.contents.forEach((content) => {
        content.tags?.forEach((tag) => {
          if (!getActiveFiltersNames(filtLst).includes(tag.name)) {
            filtLst.push(tag);
          }
        });
      });
    });
    return filtLst;
  }

  /**
   * Returns an array of active filters.
   * @returns An array of Filter objects that are currently active.
   */
  function getActiveFilters() {
    return filters.filter((f) => f.active);
  }

  /**
   * Returns an array of names of active filters.
   * @param filtLst - An optional array of filters to get the names from. Defaults to the active filters.
   * @returns An array of names of active filters.
   */
  function getActiveFiltersNames(filtLst: model.Filter[] = getActiveFilters()) {
    return filtLst.map((f) => f.name);
  }

  /**
   * Toggles the active state of a filter.
   * @param filter - The name of the filter to toggle.
   */
  function toggleFilter(filter: string) {
    setFilters(
      filters.map((f) => {
        if (f.name === filter) {
          f.active = !f.active;
        }
        return f;
      })
    );
  }

  /**
   * Toggles the active state of a content item and updates the sections state accordingly.
   * @param content - The content item to toggle.
   * @param state - The new state to set for the content item. Defaults to the opposite of the current state.
   */
  function toggleDropCard(
    content: model.Content,
    state: boolean = !content.active
  ) {
    setSections(
      sections.map((section) => {
        section.contents.map((c) => {
          if (c.title === content.title) {
            c.active = state;
          }
          return c;
        });
        return section;
      })
    );
  }

  /**
   * Expands all drop cards by toggling their state to true.
   */
  function expandDropCards() {
    toggleAllDropCards(true);
  }

  /**
   * Collapses all drop cards by toggling them off.
   */
  function collapseDropCards() {
    toggleAllDropCards(false);
  }

  /**
   * Toggles the active state of all content cards in all sections.
   * @param state - The new active state to set for all content cards.
   */
  function toggleAllDropCards(state: boolean) {
    setSections(
      sections.map((section) => {
        section.contents.map((content) => {
          content.active = state;
          return content;
        });
        return section;
      })
    );
  }

  /**
   * Clears all active filters by setting their 'active' property to false.
   */
  function clearFilters() {
    setFilters(
      filters.map((f) => {
        f.active = false;
        return f;
      })
    );
  }

  /**
   * Filters the drop cards based on the active filters and updates the state of the sections.
   * @returns void
   */
  function filterDropCards(): void {
    setSections(
      sections.map((section) => {
        section.contents.map((content) => {
          if (
            getActiveFilters().length !== 0 &&
            getActiveFilters().every((f) =>
              content.tags?.some((t) => t.name === f.name)
            )
          ) {
            content.tagSelected = true;
            content.active = true;
          } else {
            content.active = false;
            content.tagSelected = false;
            if (content.contentType === "dropcard-resume") {
              content.tagSelected = true;
            }
          }
          return content;
        });
        return section;
      })
    );
  }

  return (
    <div className="content">
      <div className="navbar">
        <div className="navbarFixedContainer">
          <div className="navbarContainer">
            {sections.map((section) => (
              <a className="navItem" href={"#" + section.id}>
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="main" id="home">
        <div className="container">
          <div className="landing-title-container">
            <h1 className="landing-title anim-typewriter line-1">
              {Info.landing.title}
            </h1>
          </div>
          <div className="landing-subtitle-container">
            {Info.landing.subtitles.map((subtitle) => (
              <h2 className="landing-subtitle">{subtitle}</h2>
            ))}
          </div>
          <div className="landing-signature-container">
            <img
              src={"../assets/" + Info.landing.signatureName}
              alt="Signature"
              className="signature"
              loading="lazy"
            />
          </div>
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
          <div className="profile-picture-container">
            <img
              src={"../assets/" + Info.landing.pictureName}
              alt="Me"
              className="profile-picture"
              loading="lazy"
            />
          </div>
        </div>
        {sections
          .filter((section) => section.title !== "Home")
          .map((rank, i, section) => (
            <div className="section">
              <div className="section-header">
                <span className="section-title" id={section[i].id}>
                  {section[i].title}
                </span>
                <hr className="section-divider" />
              </div>
              {section[i].contents.map((content) => getContent(content))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
