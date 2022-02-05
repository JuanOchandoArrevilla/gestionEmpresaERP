import React from 'react';
import "./css/PageListMantenimiento.css"
import ListaMantenimientos from "../components/ListaMantenimientos"

const PaginaListMantenimiento = ({mantenimiento = []}) => {
  return (
  <>
  <ListaMantenimientos mantenimiento={mantenimiento}/>
  
  </>);
};

export default PaginaListMantenimiento;
