import { Link } from "react-router-dom";
import "./style.scss";

function Page404() {
  return (
    <div>
      <div className="page40">
        <h1>Pagina 404</h1>
        <Link to="/">
          <button className="button-voltar">Voltar</button>
        </Link>
      </div>
    </div>
  );
}

export default Page404;
