// Header.js
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-0 w-full h-20 bg-black">
        <div className="flex items-center justify-between h-full lg:px-56">
          <h1 className="text-sm font-bold text-white uppercase lg:text-lg">
            Roshmed
          </h1>
          <nav className="flex justify-around">
            <NavLink
              to="/"
              className="link-text"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="link-text"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="link-text"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="link-text"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Contact
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
