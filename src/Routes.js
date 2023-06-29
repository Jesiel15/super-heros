import Home from "./pages/Home";
import Page404 from "./pages/Page404";

import { Routes, Route } from "react-router-dom";

const RoutesClass = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default RoutesClass;