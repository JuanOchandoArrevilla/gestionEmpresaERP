import React, { useState } from "react";
import {listDisponible} from "../Services/services"

const ListaDisponible = () => {
   
  const [fechas, setFechas] = useState({
    Fecha_Entrada: "",
    Fecha_Salida: "",
  });
  const [viviendasDisponibles, setViviendasDisponibles] = useState([])

   const consultaDisponibles = async(entrada, salida) => {
    const viviendas = await listDisponible(entrada,salida);
     setViviendasDisponibles(viviendas);
   
   }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFechas((data) => ({
      ...data,
      [name]: value,
    }));
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();   
    consultaDisponibles(fechas.Fecha_Entrada, fechas.Fecha_Salida);
    
  };

  return (
    <>
      <form className="formDisponible" onSubmit={handleSubmit}>
        <label>Buscar Fecha Disponibles:</label>
        <br />
        <label>fecha entrada:</label>
        <input
          type="date"
          name="Fecha_Entrada"
          value={fechas.Fecha_Entrada}
          onChange={handleChange}
        />
        <label>fecha salida:</label>
        <input
          type="date"
          name="Fecha_Salida"
          value={fechas.Fecha_Salida}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-success m-2">
          buscar
        </button>
      </form>

      <h1 className="listaDisponible" >Lista de Proviedades Disponibles</h1>
      <div className="tamañoListDisponible ">
      
        <div className="scrollDisponible">
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
              {viviendasDisponibles.map((item) => {
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
  );
};

export default ListaDisponible;
