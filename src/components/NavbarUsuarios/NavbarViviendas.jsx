import React from 'react';
import { NavLink } from "react-router-dom";
const NavbarViviendas = () => {
  return (
  <>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <div
            className="collapse navbar-collapse navbar-brand"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
             
               
              <li className="nav-item">
              <NavLink className="nav-link" to="/Viviendas">
                Crear Vivienda
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ListaViviendas">
                Lista de Viviendas
              </NavLink>
            </li>

              
            </ul>
          </div>
        </div>
      </nav>
  </>);
};

export default NavbarViviendas;
