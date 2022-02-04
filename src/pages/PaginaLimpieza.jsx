import React from 'react';
import './css/PageLimpieza.css'
import FormLimpieza from "../components/FormLimpieza";
import ListaViviendas from '../components/ListaViviendas';


const PaginaLimpieza = ({viviendas = [], insertarLimpieza}) => {
  return (
  <>
  <FormLimpieza viviendas={viviendas} insertarLimpieza={insertarLimpieza}/>
  <div className="listViviendas"><ListaViviendas viviendas={viviendas} /> </div>
  
  </>);
};

export default PaginaLimpieza;
