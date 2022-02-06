import React from 'react';

const ListaMantenimientos = ({dataMantenimiento = []}) => {
  return (
  <>
   <div className="listMantenimiento">
        <h1>Listado de los mantenimientos</h1>
        
        <div className="scroll">
          <table className="table table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">Tipo</th>
                <th scope="col">Nombre Empresa o Empleado</th>
                <th scope="col">Fecha Inicio</th>
                <th scope="col">Fecha Terminada</th>
                <th scope="col">Pago</th>
                <th scope="col">Provincia</th>
                <th scope="col">Municipio</th>
                <th scope="col">Localidad</th>
                <th scope="col">Direccion</th>
                
              </tr>
            </thead>
            <tbody>
              {dataMantenimiento.map((item) => {
                item.Fecha_Inicio = item.Fecha_Inicio.substring(0,10);
                item.Fecha_Terminada = item.Fecha_Terminada.substring(0,10);
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.Tipo}</th>
                    <td>{item.Nombre}</td>
                    <td>{item.Fecha_Inicio}</td>
                    <td>{item.Fecha_Terminada}</td>
                    <td>{`${item.Pago}€`}</td>  
                    <td>{item.Provincia}</td>
                    <td>{item.Municipio}</td>
                    <td>{item.Localidad}</td>
                    <td>{item.Direccion}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
  </>);
};

export default ListaMantenimientos;
