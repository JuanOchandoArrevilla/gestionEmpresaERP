import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
     
        <div className="collapse navbar-collapse navbar-brand" id="navbarNavDropdown">
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
               Usuarios
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="/Usuario">
                    Crear Usuarios
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ListaUsuarios">
                    Lista de Usuarios
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                   Modificar Usuario
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                   Eliminar Usuario
                  </NavLink>
                </li>
              </ul>
            </li>


          <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Viviendas
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="/Viviendas">
                    Crear Viviendas
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ListaViviendas">
                    Lista de Viviendas
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="#">
                   no sabemos
                  </NavLink>
                </li>
              </ul>
            </li>

          
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
                  <NavLink className="dropdown-item" to="/Reservas">
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
                    Cancelar Reserva
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
