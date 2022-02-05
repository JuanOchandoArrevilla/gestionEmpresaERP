import React from 'react';

const ListaMantenimientos = ({mantenimiento = []}) => {
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
                <th scope="col">numero de vivienda</th>
                
              </tr>
            </thead>
            <tbody>
              {mantenimiento.map((item) => {
                item.Fecha_Inicio = item.Fecha_Inicio.substring(0,10);
                item.Fecha_Terminada = item.Fecha_Terminada.substring(0,10);
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.Tipo}</th>
                    <td>{item.Nombre}</td>
                    <td>{item.Fecha_Inicio}</td>
                    <td>{item.Fecha_Terminada}</td>
                    <td>{`${item.Pago}€`}</td>  
                    <td>{item.Num_propiedad_Vivienda}</td>
                   
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
