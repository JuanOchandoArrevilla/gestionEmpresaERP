import React from "react";
import "./css/PageUsuario.css";
import FormUsuarios from "../components/FormUsuarios";
const paginaUsuarios = ({insertarUser}) => {

 
  return (
    <>
      <FormUsuarios insertarUser={insertarUser} />
    </>
  );
};

export default paginaUsuarios;
