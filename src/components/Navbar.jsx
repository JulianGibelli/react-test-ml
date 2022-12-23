import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="navbar-container-ul">
        <NavLink to="/" className="navbar-li animate__animated animate__bounce">
          🇦🇷
        </NavLink>

        <NavLink
          to="/category/remeras"
          style={({ isActive }) => ({
            color: isActive ? "#1d3557" : "#d90429",
            textDecoration: isActive ? "none" : "dashed",
            fontStyle: isActive ? "italic" : "normal"
          })}
        >
          <li>Remeras</li>
        </NavLink>
        <NavLink
          to="/category/pantalones"
          style={({ isActive }) => ({
            color: isActive ? "#1d3557" : "#d90429",
            textDecoration: isActive ? "none" : "dashed",
            fontStyle: isActive ? "italic" : "normal"
          })}
        >
          <li>Pantalones</li>
        </NavLink>
        <NavLink
          to="/category/zapatillas"
          style={({ isActive }) => ({
            color: isActive ? "#1d3557" : "#d90429",
            textDecoration: isActive ? "none" : "dashed",
            fontStyle: isActive ? "italic" : "normal"
          })}
        >
          <li>Zapatillas</li>
        </NavLink>
      </ul>
    </div>
  );
}
