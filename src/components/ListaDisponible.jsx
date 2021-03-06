import React, { useState } from "react";
import {listDisponible} from "../Services/services"

const ListaDisponible = ({numeroPropiedad}) => {
   
  const [fechas, setFechas] = useState({
    Fecha_Entrada: "",
    Fecha_Salida: "",
    Fecha_ini: "",
    Fecha_fin: "",

  });
  const [viviendasDisponibles, setViviendasDisponibles] = useState([])

   const consultaDisponibles = async(entrada, salida, entrada1, salida1) => {

    const viviendas = await listDisponible(entrada,salida, entrada1, salida1);
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
    fechas.Fecha_ini = fechas.Fecha_Entrada;
    fechas.Fecha_fin = fechas.Fecha_Salida;   
    consultaDisponibles(fechas.Fecha_Entrada, fechas.Fecha_Salida, fechas.Fecha_ini,fechas.Fecha_fin);
    numeroPropiedad(viviendasDisponibles);
  };

  return (
    <>
      <form className="formDisponible" onSubmit={handleSubmit}>
        <h1>Buscar Fecha Disponibles:</h1>
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

      <h1 className="listaDisponible" >Lista de Propiedades Disponibles</h1>
      <div className="tamaĆ±oListDisponible ">
      
        <div className="scrollDisponible">
          <table className="table table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">Numero De Propiedad</th>
                <th scope="col">Provincia</th>
                <th scope="col">Municipio</th>
                <th scope="col">Localidad</th>
                <th scope="col">Dirrecion</th>
                <th scope="col">NĀŗ Habitaciones</th>
                <th scope="col">BaĆ±os</th>
                <th scope="col">TamaĆ±o MTS</th>
                <th scope="col">Precio/Noche ā¬</th>
                
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
                    <td>{item.Direccion}</td>  
                    <td>{item.Num_Habitacion}</td>
                    <td>{item.BaĆ±os}</td>
                    <td>{item.TamaĆ±o_MTS}</td>
                    <td>{`${item.Precio_Noche} ā¬`}  </td>
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
