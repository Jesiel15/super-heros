import { useEffect, useState } from "react";
import Card from "../../components/Card";
import api from "../../services/api";
import "./style.scss";

function Home() {
  const [heros, setHeros] = useState([]);

  useEffect(() => {
    api.get("/").then(({ data }) => {
      setHeros(data);
    });
  }, []);

  return (
    <>
      <div className="container">
        {heros?.map(({ id, name, power, img, description, lore, origin }) => (
          <Card
            key={id}
            description={description}
            name={name}
            power={power}
            img={img}
            origin={origin}
          ></Card>
        ))}
      </div>
    </>
  );
}

export default Home;
