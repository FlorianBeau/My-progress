import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import Home from "./pages/Home";
import Menu from "./components/Menu";
import TechnoAdd from "./pages/TechnoAdd";
import TechnoList from "./pages/TechnoList";
import "./css/app.css";
import { useLocalStorage } from "./hooks/useLocalstorage";

function App() {
  const [technos, setTechnos] = useState([]);
  const STORAGE_KEY = "technos";
  const [storedTechnos, setStoredTechnos] = useLocalStorage(STORAGE_KEY, []);

  useEffect(() => {
    console.log("UseEffect with []");
    setTechnos(storedTechnos);
  }, []);

  useEffect(() => {
    console.log("useEffect with [technos]");
    setStoredTechnos(technos);
  }, [technos]);

  // technos
  // [{ name: 'React', category: 'front', description: 'Learn React'}, { name: 'Node', category: 'back', description: 'Learn Node'}]

  function handleAddTechnos(techno) {
    console.log("handleAddTechnos", techno);
    setTechnos([...technos, { ...techno, technoid: uuidv4() }]);
  }

  function handleDeleteTechno(id) {
    setTechnos(technos.filter((tech) => tech.technoid !== id));
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
        <Route
          path="/list"
          element={
            <TechnoList
              technos={technos}
              handleDeleteTechno={handleDeleteTechno}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
