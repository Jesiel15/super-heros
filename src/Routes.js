import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import CadastrarHero from "./pages/CadastrarHero";
import EditarHero from "./pages/EditarHero/EditarHero.component";

const RoutesClass = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/cadastrar-hero" element={<CadastrarHero />} />
      <Route path="/editar-hero" element={<EditarHero />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default RoutesClass;