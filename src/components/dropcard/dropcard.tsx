import { IoMdArrowDropright } from "react-icons/io";
import { model } from "../../types";
import { Tag } from "../tag/tag";

import "./dropcard.css";

export function DropCard(props: model.DropCardProps) {
  function getClass(baseClass: string) {
    var cardClass = baseClass;
    if (props.state.locked || props.state.active) {
      cardClass += " active";
    }
    if (props.state.tagSelected) {
      cardClass += " tag-selected";
    }
    return cardClass;
  }

  function toggle() {
    props.toggleFunc(!props.state.active);
  }

  return (
    <div className={getClass("dropcard")} onClick={toggle}>
      <div className="dropcard-header">
        {props.state.urlText ? (
          <div className="header-text-resume">
            <span className="dropdown-title">{props.state.title}</span>
            {props.state.subtitle ? (
              <span className="dropdown-subtitle">{props.state.subtitle}</span>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="header-text">
            <span className="dropdown-title">{props.state.title}</span>
            {props.state.subtitle ? (
              <span className="dropdown-subtitle">{props.state.subtitle}</span>
            ) : (
              <></>
            )}
          </div>
        )}
        <div className="tags">
          {props.state.tags?.map((tag: model.Filter) => (
            <Tag tag={tag} />
          ))}
        </div>
        {props.state.urlText ? (
          <div />
        ) : (
          <div className="dropdown">
            <IoMdArrowDropright className="dropdown-arrow" />
          </div>
        )}
      </div>
      <div className={getClass("dropcard-details")} id="details">
        <div className="content-container">
          {props.state.content.map((c: string) => (
            <p className="dropdown-body">{c}</p>
          ))}
        </div>
        <div className="url-container">
          {props.state.codeUrl ? (
            <a
              className={getClass("url-button code-url")}
              href={props.state.codeUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>View code</span>
            </a>
          ) : (
            <></>
          )}
          {props.state.url ? (
            <a
              className={getClass("url-button project-url")}
              href={props.state.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.state.urlText ? (
                <a
                  href="./davidrene_resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {props.state.urlText}
                </a>
              ) : (
                <span>View project</span>
              )}
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
