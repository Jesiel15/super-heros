import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

function Card(props: any) {
  const navigate = useNavigate()
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

  const editarHero = () => {
    navigate("/editar-hero",{ state: props})
  }

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
              <a href="#" className="button" onClick={editarHero}>
                Editar Herói
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
