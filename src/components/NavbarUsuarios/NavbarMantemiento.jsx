import React from "react";
import { NavLink } from "react-router-dom";

const NavbarLimpieza = () => {
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
                <NavLink className="nav-link" to="/Mantenimientos">
                Informe Mantenimiento o Limpieza
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/ListaMantenimientos">
                Lista de Mantenimiento o Limpieza
                </NavLink>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarLimpieza;
