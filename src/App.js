import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Viendas from "./pages/Viviendas";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/viviendas" element={<Viendas />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
