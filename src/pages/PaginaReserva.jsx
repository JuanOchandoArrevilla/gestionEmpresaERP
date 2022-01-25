import React from "react";
import "./css/PageReserva.css";
import FormReserva from "../components/FormReserva";
import ListaDisponible from "../components/ListaDisponible";

const PaginaReserva = () => {
  return (
    <>
      <FormReserva />
      <ListaDisponible    />
    </>
  );
};

export default PaginaReserva;
