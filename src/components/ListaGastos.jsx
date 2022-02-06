import React from 'react';



const ListaGastos = ({dataGastos = []}) => {
    
  return (
  <>
     <div className="listMantenimiento">
        <h1>Lista de facturas de gastos</h1>
        
        <div className="scroll">
          <table className="table table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">Tipo</th>
                <th scope="col">Fecha</th>
                <th scope="col">Pago</th>
                <th scope="col">Provincia</th>
                <th scope="col">Municipio</th>
                <th scope="col">Localidad</th>
                <th scope="col">Direccion</th>
                
              </tr>
            </thead>
            <tbody>
              {dataGastos.map((item) => {
                item.Fecha = item.Fecha.substring(0,10);
                
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.Tipo}</th>
                    <td>{item.Fecha}</td>
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

export default ListaGastos;
