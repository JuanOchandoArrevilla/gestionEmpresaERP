import React from 'react'
import Reserva from '../components/Reserva';
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
