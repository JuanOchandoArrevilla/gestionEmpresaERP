import React,{useState,useEffect} from 'react'
import {showAllviviendas} from '../Services/services.js'

const ListaViviendas = () => {

    const [viviendas,setViviendas] = useState([]);

    useEffect(() => {
        showAllviviendas()
            .then((res) => {
            setViviendas(res.data);
            }).catch((error) => {
                console.log(error);
              });
    },[viviendas] );

    return (
        <>
         <div className="tamañoListVivienda tituloListVivienda">
        <h1>Listado de Viviendas</h1>
        
        <div className="scroll">
          <table className="table table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">Numero De Propiedad</th>
                <th scope="col">Provincia</th>
                <th scope="col">Municipio</th>
                <th scope="col">Localidad</th>
                <th scope="col">Dirrecion</th>
                <th scope="col">Nº Habitaciones</th>
                <th scope="col">Nº Personas</th>
                <th scope="col">Baños</th>
                <th scope="col">Tamaño MTS</th>
                <th scope="col">Precio/Noche €</th>
                
              </tr>
            </thead>
            <tbody>
              {viviendas.map((item) => {
                return (
                  <tr key={item.Num_propiedad}>
                    <th scope="row">{item.Num_propiedad}</th>
                    <td>{item.Provincia}</td>
                    <td>{item.Municipio}</td>
                    <td>{item.Localidad}</td>
                    <td>{item.Dirrecion}</td>  
                    <td>{item.Num_Habitacion}</td>
                    <td>{item.Num_Personas}</td>
                    <td>{item.Baños}</td>
                    <td>{item.Tamaño_MTS}</td>
                    <td>{`${item.Precio_Noche} €`} </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
            
        </>
    )
}

export default ListaViviendas
