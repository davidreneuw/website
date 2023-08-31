import { model } from "../../types";
import { Tag } from "../tag/tag";
import "./filter-card.css";

export function FilterCard(props: model.FilterCardProps) {
  return (
    <div className="filter-card">
      <div className="filter-card-details">
        <span className="filter-card-title">{props.title}</span>
        {props.content.map((c: string) => (
          <p className="card-body">{c}</p>
        ))}
        <div className="filter-card-filters">
          {props.filters.map((f: model.Filter) => (
            <div
              className={f.active ? "filter-toggle active" : "filter-toggle"}
              onClick={() => props.toggleFunc(f.name)}
            >
              <Tag tag={f.name} />
            </div>
          ))}
        </div>
        <div className="filter-actions">
          <div className={"filter-action"} onClick={() => props.clearFunc()}>
            <span>Clear filters</span>
          </div>
          <div className={"filter-action"} onClick={() => props.expandFunc()}>
            <span>Expand all</span>
          </div>
          <div className={"filter-action"} onClick={() => props.collapseFunc()}>
            <span>Collapse all</span>
          </div>
        </div>
      </div>
    </div>
  );
}
