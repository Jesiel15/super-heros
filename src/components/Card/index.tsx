import "./style.scss";

function Card(props: any) {
  console.log("props",props)
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">{props.name}</h2>
          <p className="card-body">{props.description}</p>
          <p className="card-body">Poder: {props.power}</p>
          <p className="card-body">{props.origin}</p>

          <a href="#" className="button">
            Ler mais
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
