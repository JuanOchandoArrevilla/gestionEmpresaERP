import React, {useState, useEffect} from 'react';
import "./css/PageListMantenimiento.css"
import ListaMantenimientos from "../components/ListaMantenimientos"
import {listaDataMantenimiento} from "../Services/services";

const PaginaListMantenimiento = () => {

  const [dataMantenimiento, setDataMantenimiento] = useState([]);

  useEffect (() => {
   

    
      listaDataMantenimiento()
      .then((res) => {
        setDataMantenimiento(res.data);
      });
   
  
  
   

  }, [])




  return (
  <>
  <ListaMantenimientos dataMantenimiento= {dataMantenimiento}/>
  
  </>);
};

export default PaginaListMantenimiento;
