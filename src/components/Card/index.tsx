import "./style.scss";

function Card() {
  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Nome personagem</h2>
          <p className="card-body">Descrição do personagem/origem</p>
          <p className="card-body">Poder: Fire</p>
          <p className="card-body">Origem</p>

          <a href="#" className="button">
            Ler mais
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
