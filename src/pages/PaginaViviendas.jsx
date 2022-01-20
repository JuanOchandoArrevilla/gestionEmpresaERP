import React  from 'react'
import './css/PageVivienda.css'
import FormViviendas from '../components/FormViviendas'




const PaginaViviendas = ({insertVivienda}) => {

    return (
        <>     
        <FormViviendas insertVivienda={insertVivienda} /> 
        
        </>
    )
}

export default PaginaViviendas
