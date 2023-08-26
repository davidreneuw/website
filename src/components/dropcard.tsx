import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Tag } from "./tag";

import "./dropcard.css";

interface DropCardProps {
  title: string;
  subtitle?: string;
  content: string[];
  tags?: string[];
  active: boolean;
  url?: string;
  codeUrl?: string;
  urlText?: string;
  locked?: boolean;
}

export function DropCard(props: DropCardProps) {
  const [active, setActive] = useState(props.active);

  function toggleActive() {
    if (props.locked) return;
    setActive(!active);
  }

  function getClass(baseClass: string) {
    return active ? baseClass + " active" : baseClass;
  }

  return (
    <div className={getClass("dropcard")} onClick={toggleActive}>
      <div className="dropcard-header">
        {props.urlText ? (
          <div className="header-text-resume">
            <span className="dropdown-title">{props.title}</span>
            {props.subtitle ? (
              <span className="dropdown-subtitle">{props.subtitle}</span>
            ) : (
              <></>
            )}
          </div>
        ) : (
          <div className="header-text">
            <span className="dropdown-title">{props.title}</span>
            {props.subtitle ? (
              <span className="dropdown-subtitle">{props.subtitle}</span>
            ) : (
              <></>
            )}
          </div>
        )}
        <div className="tags">
          {props.tags?.map((tag: string) => (
            <Tag tag={tag} />
          ))}
        </div>
        {props.urlText ? (
          <div />
        ) : (
          <div className="dropdown">
            <IoMdArrowDropright className="dropdown-arrow" />
          </div>
        )}
      </div>
      <div className={getClass("dropcard-details")} id="details">
        <div className="content-container">
          {props.content.map((c: string) => (
            <p className="dropdown-body">{c}</p>
          ))}
        </div>
        <div className="url-container">
          {props.codeUrl ? (
            <a
              className={getClass("url-button code-url")}
              href={props.codeUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span>View code</span>
            </a>
          ) : (
            <></>
          )}
          {props.url ? (
            <a
              className={getClass("url-button project-url")}
              href={props.url}
              target="_blank"
              rel="noreferrer noopener"
            >
              {props.urlText ? (
                <a
                  href="./davidrene_resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {props.urlText}
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
