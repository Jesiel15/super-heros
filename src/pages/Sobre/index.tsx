import { Link } from "react-router-dom";
import "./style.scss";
import Navbar from "../../components/Navbar/Navbar.component";

function About() {
  return (
    <>
      <Navbar />
      <div className="about">
        <h1>
          Este projeto é uma plataforma interativa dedicada ao universo dos
          super-heróis. Aqui você pode explorar e criar perfis detalhados de
          heróis, suas habilidades, histórias e muito mais!
        </h1>
        <Link to="/">
          <button className="button-voltar">Voltar</button>
        </Link>
      </div>
    </>
  );
}

export default About;
