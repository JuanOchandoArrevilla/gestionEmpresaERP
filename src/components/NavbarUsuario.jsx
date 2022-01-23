import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const NavbarUsuario = ({ rolDB = [] }) => {
  let modulos = [rolDB];
  modulos = rolDB.split(",");
  
    
     

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
               
              <li className="nav-item">
              <NavLink className="nav-link" to={`/listado${item}`}>
               {item}
              </NavLink>
            </li>

              ))}
            </ul>
          </div>
        </div>
      </nav>

    
    </>
  );
};

export default NavbarUsuario;
