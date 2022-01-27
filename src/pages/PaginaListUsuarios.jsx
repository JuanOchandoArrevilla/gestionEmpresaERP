import React from 'react';
import "./css/PageUsuario.css";
import ListaUsuarios from "../components/ListaUsuarios";


const PaginaListUsuarios = ({usersDB=[]}) => {
  return (
    <>
    <ListaUsuarios usersDB={usersDB}/>
  
  </>);
};

export default PaginaListUsuarios;
