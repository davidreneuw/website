import "./card.css";

function Card(props: any) {
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
