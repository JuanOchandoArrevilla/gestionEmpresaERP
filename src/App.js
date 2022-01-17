import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PaginaViviendas from './pages/PaginaViviendas'
import PaginaReserva from './pages/PaginaReserva';
import PaginaListViviendas from './pages/PaginaListViviendas';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/viviendas" element={<PaginaViviendas />} />
          <Route path="/reserva" element={<PaginaReserva />} />
          <Route path="/listaViviendas" element={<PaginaListViviendas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
