import React,{useState, useEffect} from 'react';
import './css/PageReserva.css'
import ListaReservas from "../components/ListaReservas";
import {listaDataReservas} from '../Services/services';


const PaginaListReservas = () => {

  const [dataReserva, setDataReserva] = useState([]);

  useEffect(() => {

    listaDataReservas()
      .then((res) => {
        setDataReserva(res.data);
      })

  }, [])



  return (
  <>
  <ListaReservas dataReserva= {dataReserva}/>
  </>);
};

export default PaginaListReservas;
