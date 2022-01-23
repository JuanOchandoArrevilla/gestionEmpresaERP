import React from "react";

const ListaUsuarios = ({ usersDB }) => {
  return (
    <>
      <div className="tamañoListUsuario tituloListUsuario">
        <h1 className="">Lista de usuarios</h1>
        <div className="scroll">
          <table className="table table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">Usuario</th>
                <th scope="col">Password</th>
                <th scope="col">Roles</th>
                
                
              </tr>
            </thead>
            <tbody>
              {usersDB.map((item) => {
                return (
                  <tr key={item.id}>
                    <th scope="row">{item.usuario}</th>
                    <td>{item.password}</td>
                    <td>{item.roles}</td>
                    <td>
                      <button className="btn-warning"  >Editar</button>
                      {"  "}
                      <button
                        className="btn-danger"
                       
                      >
                        Borrar
                      </button>
                    </td>
                    
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

export default ListaUsuarios;
