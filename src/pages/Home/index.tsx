import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import NavBar from "../../components/Navbar/Navbar.component";
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
      <NavBar />
      <div className="container">
        {heros?.map(
          ({ id, name, power, img, description, lore, origin, sex }) => (
            <Card
              key={id}
              id={id}
              description={description}
              name={name}
              power={power}
              img={img}
              origin={origin}
              sex={sex}
            ></Card>
          )
        )}
      </div>
    </>
  );
}

export default Home;
