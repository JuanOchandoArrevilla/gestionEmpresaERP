import React from "react";
import "./css/PageUsuario.css";
import FormUsuarios from "../components/FormUsuarios";
import ListaUsuarios from "../components/ListaUsuarios";

const paginaUsuarios = ({insertarUser, usersDB}) => {

 
  return (
    <>
      <FormUsuarios insertarUser={insertarUser} />
      <ListaUsuarios usersDB={usersDB} />
    </>
  );
};

export default paginaUsuarios;
