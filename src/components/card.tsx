import "./card.css";

function Card(props: any) {
  return (
    <div className="card">
      <div className="card-details">
        <p className="text-title" id={props.id}>
          {props.title}
        </p>
        <p className="text-body">{props.content}</p>
      </div>
    </div>
  );
}

export default Card;
