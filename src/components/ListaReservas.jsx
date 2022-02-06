import React from 'react';

const ListaReservas = ({dataReserva = []}) => {
  return (
  <>
    <div className="listReserva">
        <h1>Listado de reservas</h1>
        
        <div className="scroll">
          <table className="table table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">Numero De Reservación</th>
                <th scope="col">Nombre</th>
                <th scope="col">Fecha Entrada</th>
                <th scope="col">Fecha Salida</th>
                <th scope="col">Telefono</th>
                <th scope="col">Email</th>
                <th scope="col">Precio</th>
                <th scope="col">Provincia</th>
                <th scope="col">Municipio</th>
                <th scope="col">Localidad</th>
                <th scope="col">Direccion</th>
              </tr>
            </thead>
            <tbody>
              {dataReserva.map((item) => {
                  
                  item.Fecha_Entrada = item.Fecha_Entrada.substring(0,10);
                  item.Fecha_Salida = item.Fecha_Salida.substring(0,10);
                return (
                    
                  <tr key={item.Num_Reservacion}>
                    <th scope="row">{item.Num_Reservacion}</th>
                    <td>{item.Nombre}</td>
                    <td>{item.Fecha_Entrada}</td>
                    <td>{item.Fecha_Salida}</td>
                    <td>{item.Telefono}</td>  
                    <td>{item.Email}</td>
                    <td>{`${item.Precio_Total} €`}</td>
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

export default ListaReservas;
