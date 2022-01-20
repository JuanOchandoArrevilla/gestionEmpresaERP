import { BrowserRouter, Routes, Route } from "react-router-dom";

import PaginaLogin from "./pages/PaginaLogin";
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import PaginaViviendas from "./pages/PaginaViviendas";
import PaginaReserva from "./pages/PaginaReserva";
import PaginaListViviendas from "./pages/PaginaListViviendas";
import { showAllviviendas, crearViviendas } from "./Services/services";


function App() {

  const [viviendas, setViviendas] = useState([]);
  const [iniciarSesion, setIniciarSesion] = useState(false);

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
        
        <Routes>
          <Route path="/" element={ iniciarSesion ? <Navbar /> : <PaginaLogin /> } />
          <Route path="/viviendas" element={iniciarSesion ? <PaginaViviendas insertVivienda={insertVivienda} /> : null}/>
          <Route path="/reserva" element={iniciarSesion ? <PaginaReserva /> : null} />
          <Route path="/listaViviendas" element={iniciarSesion ? <PaginaListViviendas viviendas={viviendas} /> : null} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
