import React from 'react';
import { NavLink } from "react-router-dom";

 const NavbarReservas = () => {

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
              <NavLink className="nav-link" to="/Reservas">
                Crear Reserva
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/ListaReservas">
                Lista de Reserva
              </NavLink>
            </li>

              
            </ul>
          </div>
        </div>
      </nav>
  </>);
};

export default NavbarReservas;