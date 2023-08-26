import { FaJava, FaReact } from "react-icons/fa";
import {
  SiBlazor,
  SiCsharp,
  SiCss3,
  SiDjango,
  SiDotnet,
  SiGnubash,
  SiHtml5,
  SiLinux,
  SiMicrosoftazure,
  SiPython,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { Tooltip } from "react-tooltip";
import "./tag.css";

const iconSize = 40;

const iconMap = new Map<string, JSX.Element>([
  ["info", <div />],
  ["react", <FaReact size={iconSize} />],
  ["typescript", <SiTypescript size={iconSize} />],
  ["vercel", <SiVercel size={iconSize} />],
  ["blazor", <SiBlazor size={iconSize} />],
  ["azure", <SiMicrosoftazure size={iconSize} />],
  ["csharp", <SiCsharp size={iconSize} />],
  ["css", <SiCss3 size={iconSize} />],
  ["python", <SiPython size={iconSize} />],
  ["linux", <SiLinux size={iconSize} />],
  ["django", <SiDjango size={iconSize} />],
  ["html", <SiHtml5 size={iconSize} />],
  ["bash", <SiGnubash size={iconSize} />],
  ["java", <FaJava size={iconSize} />],
  ["dotnet", <SiDotnet size={iconSize} />],
]);

interface TagProps {
  tag: string;
}

export function Tag(props: TagProps) {
  return (
    <>
      <div className="tag" data-tooltip-id={props.tag}>
        {iconMap.get(props.tag) || (
          <div className="missing-tag">{props.tag.charAt(0).toUpperCase()}</div>
        )}
      </div>
      <Tooltip
        id={props.tag}
        place="top"
        content={props.tag.charAt(0).toUpperCase() + props.tag.slice(1)}
      />
    </>
  );
}
