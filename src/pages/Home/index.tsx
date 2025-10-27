import { useEffect, useState } from "react";
import Card from "../../components/Card";
import NavBar from "../../components/Navbar/Navbar.component";
import "./style.scss";
import superHerosData from "../../assets/dados-basicos/super-heros.json";

interface Hero {
  id: number;
  name: string;
  power: string;
  img: string;
  description: string;
  lore: string;
  origin: string;
  sex: string;
}

const LOCAL_STORAGE_KEY = "superHerosData";

function Home() {
  const [heros, setHeros] = useState<Hero[]>([]);

  useEffect(() => {
    const storedHeros = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (storedHeros) {
      console.log("Carregando heróis do Local Storage...");
      try {
        const parsedHeros: Hero[] = JSON.parse(storedHeros);
        setHeros(parsedHeros);
      } catch (error) {
        console.error("Erro ao analisar dados do Local Storage:", error);
        loadHerosFromJson();
      }
    } else {
      loadHerosFromJson();
    }

    function loadHerosFromJson() {
      console.log(
        "Carregando heróis do arquivo JSON e salvando no Local Storage..."
      );
      const herosFromJson = superHerosData as Hero[];

      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(herosFromJson));

      setHeros(herosFromJson);
    }
  }, []);

  return (
    <>
      <NavBar />
      <div className="container-card break-line">
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
              lore={lore}
            ></Card>
          )
        )}
      </div>
    </>
  );
}

export default Home;
