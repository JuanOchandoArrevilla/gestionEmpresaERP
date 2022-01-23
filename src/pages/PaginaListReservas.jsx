import React from 'react';
import ListaReservas from "../components/ListaReservas";

const PaginaListReservas = ({reservas = []}) => {
  return (
  <>
  <ListaReservas reservas={reservas}/>
  </>);
};

export default PaginaListReservas;
