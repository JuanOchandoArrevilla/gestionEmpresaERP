import React from "react";
import "./css/PageLogin.css";
import Login from "../components/Login";
import Registro from "../components/Registro";

const PaginaLogin = () => {
  return (
    <>
      <Login />
      <Registro/>
    </>
  );
};

export default PaginaLogin;
