import React,{} from 'react'


const ListaViviendas = ({viviendas = []}) => {
  
    return (
        <>
         <div className="tamañoListVivienda  tituloListVivienda">
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
                    <td>{item.Direccion}</td>  
                    <td>{item.Num_Habitacion}</td>
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
