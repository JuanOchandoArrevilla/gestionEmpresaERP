import React from 'react';
import './css/PageMantenimientos.css'
import FormMantenimientos from "../components/FormMantenimientos";
import ListaViviendas from '../components/ListaViviendas';


const paginaMantenimiento = ({viviendas = [], insertarMantenimiento}) => {
  return (
  <>
  <FormMantenimientos viviendas={viviendas} insertarMantenimiento={insertarMantenimiento}/>
  <div className="listViviendas"><ListaViviendas viviendas={viviendas} /> </div>
  
  </>);
};

export default paginaMantenimiento;
