import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar.component";
import "./style.scss";

function CadastrarHero() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    power: "",
    img: "",
    description: "",
    lore: "",
    origin: "",
    sex: "",
  });

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const tratarCampoVazio = (inputs: any): boolean => {
    if (inputs.name.length === 0) {
      alert("Infome o nome do herói!");
    } else if (inputs.power.length === 0) {
      alert("Infome o poder do herói!");
    } else if (inputs.img.length === 0) {
      alert("Infome o link da imagem do herói!");
    } else if (inputs.description.length === 0) {
      alert("Infome a descrição do herói!");
    } else if (inputs.lore.length === 0) {
      alert("Infome a lore do herói!");
    } else if (inputs.origin.length === 0) {
      alert("Infome a origem do herói!");
    } else if (inputs.sex.length === 0) {
      alert("Infome o sexo do herói!");
    } else {
      return true;
    }
    return false;
  };

  const gerarNovoId = (): string => {
    return Date.now().toString();
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // if (tratarCampoVazio(inputs)) {
    //   api
    //     .post("/", {
    //       name: event.target.name.value,
    //       power: event.target.power.value,
    //       img: event.target.img.value,
    //       description: event.target.description.value,
    //       lore: event.target.lore.value,
    //       origin: event.target.origin.value,
    //       sex: event.target.sex.value,
    //     })
    //     .then(() => {
    //       alert("Herói adicionado!");
    //     });
    // }
    if (tratarCampoVazio(inputs)) {
      try {
        const storedData = localStorage.getItem("superHerosData");
        const superHerosData = storedData ? JSON.parse(storedData) : [];

        const novoHeroi = {
          id: gerarNovoId(),
          ...inputs,
        };

        superHerosData.push(novoHeroi);

        localStorage.setItem("superHerosData", JSON.stringify(superHerosData));

        alert("Herói adicionado com sucesso no localStorage!");

        navigate("/");
      } catch (error) {
        console.error("Erro ao adicionar o herói no localStorage:", error);
        alert("Ocorreu um erro ao salvar o novo herói. Verifique o console.");
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container-cadastrar-hero">
        <div className="form-cadastrar-hero">
          <p className="p-title">Adicionar Herói</p>
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
                <label className="form-label-inputs input-sexo">
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
                <label className="form-label-inputs">
                  Lore:
                  <textarea
                    rows={10}
                    cols={40}
                    name="lore"
                    value={inputs.lore || ""}
                    onChange={handleChange}
                  />
                </label>
                {/* Renderização da imagem logo após o campo Lore */}
                {inputs.img && (
                  <div className="img-logo-editar">
                    <img alt="Imagem inválida!" src={inputs.img} />
                  </div>
                )}
              </div>
            </div>

            <Link to="/">
              <button className="button-voltar">Voltar</button>
            </Link>
            <input
              className="input-button"
              type="submit"
              value="Adicionar Herói"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default CadastrarHero;
