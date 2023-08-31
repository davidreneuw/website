import { model } from "../../types";
import "./card.css";

export function Card(props: model.CardProps) {
  return (
    <div className="card">
      <div className="card-details">
        <span className="card-title">{props.title}</span>
        {props.content.map((c: string) => (
          <p className="card-body">{c}</p>
        ))}
      </div>
    </div>
  );
}

export default Card;
