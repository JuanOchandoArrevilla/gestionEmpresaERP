import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
      <NavLink className="navbar-brand " to="/viviendas"  >
                Viviendas
              </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
          
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Reserva
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="/reserva">
                    Crear Reserva
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="">
                    Lista de reserva
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                    Something else here
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="#">
                Mantenimiento y limpieza
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Estadistica
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
  );
};

export default Navbar;
