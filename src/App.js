import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import PaginaViviendas from "./pages/PaginaViviendas";
import PaginaReserva from "./pages/PaginaReserva";
import PaginaListViviendas from "./pages/PaginaListViviendas";
import { showAllviviendas, crearViviendas } from "./Services/services";


function App() {
  const [viviendas, setViviendas] = useState([]);

  useEffect(() => {
    showAllviviendas()
        .then((res) => {
        setViviendas(res.data);
        })
        .catch((error) => {
        console.log(error);
         });
   }, [viviendas]);

   const insertVivienda = (datos) => {
      crearViviendas(datos,setViviendas,viviendas);
   }

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/viviendas" element={<PaginaViviendas insertVivienda={insertVivienda} />}/>
          <Route path="/reserva" element={<PaginaReserva />} />
          <Route path="/listaViviendas" element={<PaginaListViviendas viviendas={viviendas} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
