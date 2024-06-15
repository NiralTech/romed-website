// Header.js
import React from "react";
import { NavLink } from "react-router-dom";

import logoLabel from "../assets/logo-label.png";
import logo from "../assets/logo.png";

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
    <NavLink
      to={route}
      className="link-text"
      style={({ isActive }) => ({
        fontWeight: isActive ? "bold" : "normal",
      })}
    >
      {routeDesc}
    </NavLink>
  );
};

const ProductLinks = () => {
  return (
    <>
      <div className="uppercase cursor-pointer relative group pt-6 px-2">
        <div className="pb-6">Products</div>
        <div className=" bg-white space-x-3 p-4 border-primaryrounded absolute -bottom-42 -left-20 md:-left-64 hidden group-hover:flex group-hover:flex-col md:group-hover:flex-row md:w-[600px] opacity-100 items-center ">
          <div className="flex flex-col">
            <NavLink className="product-link-text" to={"/pico-premium"}>
              PICO PREMIUM
            </NavLink>
            <NavLink className="product-link-text" to={"/curelux"}>CURELUX</NavLink>
            <NavLink className="product-link-text">TITAN</NavLink>
          </div>
          <div className="flex flex-col">
            <NavLink className="product-link-text" to={'/smicool'}>SMI COOL</NavLink>
            <NavLink className="product-link-text" to={'/qmax'}>Q-MAX/Q-MAX PREMIUM</NavLink>
            <NavLink className="product-link-text" to={'/sonopoint'}>SONOPOINT</NavLink>
          </div>
          <div className="flex flex-col">
            <NavLink className="product-link-text" to={"/cryotwins"}>CRYO-ZET & CRYO-Q</NavLink>
            <NavLink className="product-link-text" to={'/ds3000'}>DS-3000E</NavLink>
            <NavLink className="product-link-text">PT-4000</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
