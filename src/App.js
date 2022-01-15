import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Viendas from "./pages/Viviendas";
import Reserva from "./pages/Reserva";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/viviendas" element={<Viendas />} />
          <Route path="/reserva" element={<Reserva />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
