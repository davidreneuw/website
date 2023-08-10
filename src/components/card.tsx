import "./card.css";

function Card(props: any) {
  return (
    <div className="card">
      <div className="card-details">
        <h2 className="text-title" id={props.id}>
          {props.title}
        </h2>
        <p className="text-body">{props.content}</p>
      </div>
    </div>
  );
}

export default Card;
