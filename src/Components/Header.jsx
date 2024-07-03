// Header.js
import React from "react";
import { NavLink } from "react-router-dom";

import logoLabel from "@/assets/logo-label.png";
import logo from "@/assets/logo.png";

import ProductLinks from "./ProductLinks";

const Header = () => {
  return (
    <>
      <header className="fixed z-0 w-full h-32 md:h-20 top-0">
        <div className="flex flex-col items-center justify-around h-full lg:justify-between lg:px-56 md:flex-row bg-white">
          <HeaderLogo logo={logo} logoLabel={logoLabel} />
          <nav className="flex justify-around items-center">
            <HeaderLink route={"/"} routeDesc={"Home"} />
            <HeaderLink route={"/about"} routeDesc={"About"} />
            <ProductLinks />
            <HeaderLink route={"/consumables"} routeDesc={"Consumables"} />
            <HeaderLink route={"/careers"} routeDesc={"Join Us"} />
            <HeaderLink route={"/contact"} routeDesc={"Contact"} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

const HeaderLogo = ({ logo, logoLabel }) => (
  <div className="flex mb-5 md:mb-0">
    <div className="">
      <img className="h-10 w-50" src={logo} alt="" />
    </div>
    <div className="">
      <img className="h-10 w-50" src={logoLabel} alt="" />
    </div>
  </div>
);

const HeaderLink = ({ route, routeDesc }) => {
  return (
    <>
      <div className="flex flex-col group">
        <div className="mx-10 group-hover:border-solid border-transparent group-hover:border-accent border-t-2 transition-all duration-300 ease-in mb-2"></div>
        <NavLink
          to={route}
          className="link-text"
          style={({ isActive }) => ({
            fontWeight: isActive ? "bolder" : "normal",
          })}
        >
          {routeDesc}
        </NavLink>
      </div>
    </>
  );
};
