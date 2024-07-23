// Header.js
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import logoLabel from "@/assets/logo-label.png";
import logo from "@/assets/logo.png";

import ProductLinks from "./ProductLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navClicked = (open) => setOpen(open);
  return (
    <>
      <header className="fixed z-50 sm:h-32 md:h-20 top-0 w-[100vw]">
        <div className="w-full flex flex-col sm:justify-between h-full items-center lg:justify-between lg:px-56 sm:flex-row bg-white">
          <HeaderLogo
            logo={logo}
            logoLabel={logoLabel}
            navClicked={navClicked}
          />

          <nav className="hidden sm:flex flex-row justify-around items-center bg-white">
            <HeaderNavBar />
          </nav>
          {open ? (
            <nav className="sm:hidden flex flex-col justify-around items-center bg-white w-full">
              <HeaderNavBar />
            </nav>
          ) : (
            ""
          )}
        </div>
      </header>
    </>
  );
};

export default Header;

const HeaderNavBar = () => (
  <>
    <HeaderLink route={"/"} routeDesc={"Home"} />
    <HeaderLink route={"/about"} routeDesc={"About"} />
    <ProductLinks />
    <HeaderLink route={"/consumables"} routeDesc={"Consumables"} />
    <HeaderLink route={"/careers"} routeDesc={"Join Us"} />
    <HeaderLink route={"/contact"} routeDesc={"Contact"} />
  </>
);

const HeaderLogo = ({ logo, logoLabel, navClicked }) => {
  const [open, setOpen] = useState(true);

  const onHamburger = (isOpen) => {
    setOpen(!isOpen);
    navClicked(open);
  };

  return (
    <div className="flex justify-between w-full items-center p-2 ">
      <div className="flex md:mb-0">
        <div className="">
          <img className="h-10 w-50" src={logo} alt="" />
        </div>
        <div className="">
          <img className="h-10 w-50" src={logoLabel} alt="" />
        </div>
      </div>
      {open ? (
        <GiHamburgerMenu
          className="sm:hidden"
          size={"2.5em"}
          onClick={() => onHamburger(true)}
        />
      ) : (
        <IoMdClose
          className="sm:hidden"
          size={"2.5em"}
          onClick={() => onHamburger(false)}
        />
      )}
    </div>
  );
};

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
            // backgroundColor: isActive ? "gray" : "white",
          })}
        >
          {routeDesc}
        </NavLink>
      </div>
    </>
  );
};
