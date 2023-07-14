import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.component";
import api from "../../services/api";
import "./EditarHero.style.scss";

function EditarHero() {
  const location = useLocation();
  const navigate = useNavigate();

  const [id, setId] = useState();
  const [inputs, setInputs] = useState({
    name: "",
    power: "",
    img: "",
    description: "",
    lore: "",
    origin: "",
    sex: "",
  });

  useEffect(() => {
    if (location.state) {
      setInputs(location.state);
      setId(location.state.id);
    } else {
      navigate("/");
    }
  }, []);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const loadImage = (url: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = function () {
        resolve(img);
      };
      img.onerror = function () {
        reject(new Error("Ocorreu um erro ao carregar a imagem."));
      };
    });
  };

  const tratarCampoVazio = (inputs: any): boolean => {
    if (inputs.name.length === 0) {
      alert("Infomre o nome do herói!");
    } else if (inputs.power.length === 0) {
      alert("Infomre o poder do herói!");
    } else if (inputs.img.length === 0) {
      alert("Infomre o link da imagem do herói!");
    } else if (inputs.description.length === 0) {
      alert("Infomre a descrição do herói!");
    } else if (inputs.lore.length === 0) {
      alert("Infomre a lore do herói!");
    } else if (inputs.origin.length === 0) {
      alert("Infomre a origem do herói!");
    } else if (inputs.sex.length === 0) {
      alert("Infomre o sexo do herói!");
    } else {
      return true;
    }
    return false;
  };

  const editarHero = (event: any) => {
    api
      .put("/" + id, {
        name: event.target.name.value,
        power: event.target.power.value,
        img: event.target.img.value,
        description: event.target.description.value,
        lore: event.target.lore.value,
        origin: event.target.origin.value,
        sex: event.target.sex.value,
      })
      .then(() => {
        alert("Herói editado com sucesso!");
      })
      .catch((error) => {
        console.error(error);
        alert(error);
      });
  };

  const tratarImgValida = (inputs: any, event: any) => {
    loadImage(inputs.img)
      .then((img) => {
        console.log("Carregou a imagem:", img);
        if (tratarCampoVazio(inputs)) {
          editarHero(event);
        }
      })
      .catch((error) => {
        alert("Informe uma imagem válida:!");
        console.error("Ocorreu um erro ao carregar a imagem:", error);
      });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    tratarImgValida(inputs, event);
  };

  return (
    <>
      <Navbar />
      <div className="container-cadastrar-hero">
        {inputs.img ? (
          <div className="img-logo-editar">
            <img alt="Imagem inválida!" src={inputs.img} />
          </div>
        ) : (
          <></>
        )}
        <div className="form-cadastrar-hero">
          <p className="p-title">Editar Herói</p>
          <form onSubmit={handleSubmit}>
            <div className="form-cadastrar">
              <div>
                <label className="form-label-inputs">
                  Nome:
                  <input
                    type="text"
                    name="name"
                    value={inputs.name || ""}
                    onChange={handleChange}
                  />
                </label>
                <label className="form-label-inputs">
                  Poder:
                  <input
                    type="text"
                    name="power"
                    value={inputs.power || ""}
                    onChange={handleChange}
                  />
                </label>
                <label className="form-label-inputs">
                  Imagem:
                  <input
                    type="text"
                    name="img"
                    value={inputs.img || ""}
                    onChange={handleChange}
                  />
                </label>

                <label className="form-label-inputs">
                  Origem:
                  <input
                    type="text"
                    name="origin"
                    value={inputs.origin || ""}
                    onChange={handleChange}
                  />
                </label>
                <label className="form-label-inputs">
                  Sexo:
                  <input
                    type="text"
                    name="sex"
                    value={inputs.sex || ""}
                    onChange={handleChange}
                  />
                </label>
              </div>
              <div className="form-textarea">
                <label className="form-label-inputs">
                  Descrição:
                  <textarea
                    rows={2}
                    cols={40}
                    name="description"
                    value={inputs.description || ""}
                    onChange={handleChange}
                  />
                </label>
                <label>
                  Lore:
                  <textarea
                    rows={10}
                    cols={40}
                    name="lore"
                    value={inputs.lore || ""}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>

            <Link to="/">
              <button className="button-voltar">Voltar</button>
            </Link>
            <input
              className="input-button"
              type="submit"
              value="Salvar Herói"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default EditarHero;
