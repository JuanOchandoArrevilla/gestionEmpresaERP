import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"></li>
          <li className="nav-item">
            <h6 className="nav-link" >
              <NavLink className="navbar-brand " to="/viviendas"  >
                Viviendas
              </NavLink>
            </h6>
          </li>
          <li className="nav-item">
            <h6 className="nav-link" >
              <NavLink className="navbar-brand" to="/reserva">
                Reserva
              </NavLink>
            </h6>
          </li>
          <li className="nav-item">
            <h6 className="nav-link" >
              <NavLink className="navbar-brand" to="/stadistica">
                Stadistica
              </NavLink>
            </h6>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
