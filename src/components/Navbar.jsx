import React from "react";
import { NavLink,useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

    const handleClick = () => {
      navigate("/")
      window.location.reload();
    }
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
                Reservas
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
                  <NavLink className="dropdown-item" to="/ListaReservas">
                    Lista de reserva
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
                Mantenimientos
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="/Mantenimientos">
                    Informe Mantenimiento o Limpieza
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ListaMantenimientos">
                    Lista de Mantenimiento o Limpieza
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
                Gastos
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="/Gastos">
                    Informe de Gastos o Facturas 
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/ListaGastos">
                    Lista de Gastos o Facturas
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
               Estadistica
              </NavLink>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <NavLink className="dropdown-item" to="/Estadistica">
                    Informe de Estadisticas
                  </NavLink>
                </li>
                
                
              </ul>
            </li>
          
          </ul>
          
        </div>
        <button onClick={() => handleClick()}>Cerrar Sesion</button>
      </div>
      
    </nav>
    
  );
};

export default Navbar;
