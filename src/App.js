import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Menu from "./components/Menu";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import "./css/app.css";

function App() {
  const [technos, setTechnos] = useState([]);
  // technos
  // [{ name: 'React', category: 'front', description: 'Learn React'}, { name: 'Node', category: 'back', description: 'Learn Node'}]

  function handleAddTechnos(techno) {
    console.log("handleAddTechnos", techno);
    setTechnos([...technos, techno]);
  }

  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/add"
          element={<TechnoAdd handleAddTechno={handleAddTechnos} />}
        />
        <Route path="/list" element={<TechnoList technos={technos} />} />
      </Routes>
    </>
  );
}

export default App;
