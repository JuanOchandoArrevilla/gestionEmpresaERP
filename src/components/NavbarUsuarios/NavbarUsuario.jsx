import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavbarUsuario = ({ rolDB = [] }) => {
  let modulos = [rolDB];
  modulos = rolDB.split(",");
  
  const navigate = useNavigate();
    
  const handleClick = () => {
    navigate("/")
    window.location.reload();
  }

  return (
    
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse navbar-brand"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              
              {modulos.map((item) => (
               
              <li key={item} className="nav-item" >
              <NavLink  className="nav-link" to={`/listado${item}`}>
               {item}
              </NavLink>
            </li>

              ))}
            </ul>
          </div>
          <button onClick={() => handleClick()}>Cerrar Sesion</button>
        </div>
      </nav>

    
    </>
  );
};

export default NavbarUsuario;
