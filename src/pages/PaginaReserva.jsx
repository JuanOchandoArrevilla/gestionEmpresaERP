import React, { useState, useEffect } from "react";
import "./css/PageReserva.css";
import FormReserva from "../components/FormReserva";
import ListaDisponible from "../components/ListaDisponible";

const PaginaReserva = () => {
  const [numPropiedad, setNumeroPropiedad] = useState([]);

  const numeroPropiedad = (num) => {
    setNumeroPropiedad(num);
  };

  return (
    <>
      <FormReserva numPropiedad={numPropiedad} />
      <ListaDisponible numeroPropiedad={numeroPropiedad} />
    </>
  );
};

export default PaginaReserva;
