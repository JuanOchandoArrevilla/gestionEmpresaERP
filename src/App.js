import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PaginaViviendas from './pages/PaginaViviendas'
import PaginaReserva from './pages/PaginaReserva';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/viviendas" element={<PaginaViviendas />} />
          <Route path="/reserva" element={<PaginaReserva />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
