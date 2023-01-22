import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <NavLink className="navbar-brand fs-1" to="/">
            TENDENCIA
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <button className="btn">
                <NavLink to="/login" className="btn btn-outline-dark"> 
                    <i className="fa fa-login "></i> login</NavLink>
                <NavLink to="/cart" className="btn btn-outline-dark ms-2"> 
                    <i className="fa fa-login "></i> cart</NavLink>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
