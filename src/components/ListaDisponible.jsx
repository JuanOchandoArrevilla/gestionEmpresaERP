import React, {useState} from "react";

const ListaDisponible = () => {

    const [fechas,setFechas] = useState({ 
        fecha_Entrada: "",
        fecha_Salida: "",
    }
    );

  return (
    <>

    
      <form className="formDisponible" >
        <label>Buscar Fecha Disponibles:</label>
        <br />
        <label>fecha entrada:</label>
        <input type="date" />
        <label>fecha salida:</label>
        <input type="date" />
        <button type="button" className="btn btn-success m-2">
          buscar
        </button>
        
      </form>

      <h1 className="listaDisponible">Lista de Proviedades Disponibles</h1>
    </>
  );
};

export default ListaDisponible;
