import { useNavigate } from "react-router-dom";
import "./style.scss";

function Card(props: any) {
  const navigate = useNavigate();

  const editarHero = () => {
    navigate("/editar-hero", { state: props });
  };

  return (
    <div className="card">
      {/* Imagem do herói */}
      <div
        className="card-img"
        style={{ backgroundImage: `url(${props.img})` }}
      ></div>

      {/* Conteúdo do herói */}
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
  );
}

export default Card;
