import React from 'react'
import ListaViviendas from '../components/ListaViviendas'

const PaginaListViviendas = ({viviendas = []}) => {

    return (
        <>
            <ListaViviendas viviendas={viviendas} />        
        </>
    )
}

export default PaginaListViviendas
