import React from 'react';
import "./css/PageGastos.css"
import FormGastos from '../components/FormGastos';
import ListaViviendas from '../components/ListaViviendas';

const PaginaGastos = ({viviendas = [], insertarGastos}) => {
  return (
  
  <>
  <FormGastos viviendas={viviendas} insertarGastos={insertarGastos}/>
  <div className="listGastos"><ListaViviendas viviendas={viviendas} /> </div>
  </>);
};

export default PaginaGastos;
