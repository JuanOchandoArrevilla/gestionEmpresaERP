import React from 'react'
import Reserva from '../components/FormReserva';
import ListaViviendas from '../components/ListaViviendas';


const PaginaReserva = () => {
    return (
        <> 
        
        <div className="paginaTamanoVivienda">
          <Reserva /> 
          <ListaViviendas /> 
          </div>
        </>
    )
}

export default PaginaReserva
