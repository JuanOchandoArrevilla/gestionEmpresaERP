import React from 'react';
import './css/PageReserva.css'
import ListaReservas from "../components/ListaReservas";

const PaginaListReservas = ({reservas }) => {
  return (
  <>
  <ListaReservas reservas={reservas}/>
  </>);
};

export default PaginaListReservas;
