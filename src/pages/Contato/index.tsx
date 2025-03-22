import { Link } from "react-router-dom";
import "./style.scss";
import Navbar from "../../components/Navbar/Navbar.component";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact">
        <h1>Contato</h1>
        <div className="contact-info">
          <h2>Email:</h2>
          <p>fariajesiel@gmail.com</p>

          <h2>Celular:</h2>
          <p>(61) 9 8189-8269</p>
        </div>

        <Link to="/">
          <button className="button-voltar">Voltar</button>
        </Link>
      </div>
    </>
  );
}

export default Contact;
