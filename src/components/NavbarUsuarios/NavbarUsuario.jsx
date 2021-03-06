import React from 'react';
import { NavLink } from "react-router-dom";

const NavbarUsuario = () => {
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
                <NavLink className="nav-link" to="/Usuario">
                Crear Usuarios
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/ListaUsuarios">
                Lista de Usuarios
                </NavLink>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
  
  
  </>);
};

export default NavbarUsuario;
