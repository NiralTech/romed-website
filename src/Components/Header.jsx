// Header.js
import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoLabel from "../assets/logo-label.png";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <>
      <header className="fixed z-0 w-full h-20 top-5 md:top-0">
        <div className="flex flex-col items-center justify-around h-full lg:justify-between lg:px-56 md:flex-row">
          {/* <h1 className="text-sm font-bold text-black uppercase lg:text-lg">
            Roshmed
          </h1> */}
          <div className="flex mb-5 md:mb-0">
            <div className="">
              <img className="h-10 w-50" src={logo} alt="" />
            </div>
            <div className="">
              <img className="h-10 w-50" src={logoLabel} alt="" />
            </div>
          </div>
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
              to="/products"
              className="link-text"
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
              })}
            >
              Products
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
