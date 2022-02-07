import React from 'react';
import Estadistica from '../components/Estadistica';
const PaginaEstadistica = ({gastos = [], mantenimiento = []}) => {


  return (
  
  <>
  <Estadistica gastos={gastos} mantenimiento={mantenimiento}/>
  
  </>);
};

export default PaginaEstadistica;
