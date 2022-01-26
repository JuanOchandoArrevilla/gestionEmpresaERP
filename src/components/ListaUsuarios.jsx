import React, {useState, useEffect} from "react";
import {deleteUser} from "../Services/services" 
import swal from 'sweetalert';
const ListaUsuarios = ({ usersDB = [] }) => {

  const [actualiza, setActualiza] = useState(usersDB)
  
  

  // useEffect(() => {
  //   setActualiza(usersDB)
    
  // },[usersDB] )


  const confirmarDeleteUser = (id, rol,name) => {
    if (rol === "administrador") {
      swal({
        title: "No se puede eliminar el usuario administrador",   
      })
    } else {
      swal({
        // title: "Are you sure?",
        text: `¿Esta seguro de eliminar el usuario ${name}`,
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
       .then((willDelete) => { 
        if (willDelete) {
           deleteUser(id)
            swal("usuario eliminado correctamente", {
             icon: "success",    
            });
        } 
      });
    }

  }
  
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
                <th scope="col">Acciones</th>
                
              </tr>
            </thead>
            <tbody>
              {
            actualiza !== undefined || actualiza.length > 0 ? 
              actualiza.map((item) => {
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
                        onClick={() => confirmarDeleteUser(item.id,item.roles, item.usuario)}
                      >
                        Borrar
                      </button>
                    </td>
                    
                  </tr>
                );
              })
            :
            null
            }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListaUsuarios;
