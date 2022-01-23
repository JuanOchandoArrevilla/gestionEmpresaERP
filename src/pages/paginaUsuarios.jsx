import React from "react";
import "./css/PageUsuario.css";
import FormUsuarios from "../components/FormUsuarios";
const paginaUsuarios = ({insertarUser}) => {

    // const test = (datos) => {

     
    //    let roles = datos.roles;

    //     let rol = "";
    //     for (let i = 0; i < roles.length; i++) {     
    //         rol += "," + roles[i]                        
    //       }
    //         rol = rol.slice(1)
    //         datos.roles = rol;
    //     console.log(JSON.stringify(datos));
    // }


  return (
    <>
      <FormUsuarios insertarUser={insertarUser} />
    </>
  );
};

export default paginaUsuarios;
