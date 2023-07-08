import { useEffect, useState } from "react";
import "./style.scss";

function Card(props: any) {
  const [loading, setloading] = useState(false);

  useEffect(() => {
    var img = props.img;
    const element = document.getElementById(props.id);
    if (element) {
      element.style.backgroundImage = "url(" + img + ")";
    } else {
      setloading(true);
    }
  });

  return (
    <div>
      {loading ? (
        <>
          <div className="card" id={props.id}>
            <div className="card-content">
              <h2 className="card-title">{props.name}</h2>
              <p className="card-body">Descrição: {props.description}</p>
              <p className="card-body">Poder: {props.power}</p>
              <p className="card-body">Sexo: {props.sex}</p>
              <p className="card-body">Origem: {props.origin}</p>
              <a href="#" className="button">
                Ler mais
              </a>
            </div>
          </div>
        </>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}

export default Card;
