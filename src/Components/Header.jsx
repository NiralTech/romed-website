// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="bg-black h-20 fixed top-0 w-full z-0">
        <div className="flex justify-between items-center h-full lg:px-56">
          <h1 className="text-white font-bold text-lg uppercase">Roshmed</h1>
          <nav className="flex justify-around">
            <Link to="/" className="link-text">
              Home
            </Link>
            <Link to="/about" className="link-text">
              About
            </Link>
            <Link to="/services" className="link-text">
              Services
            </Link>
            <Link to="/contact" className="link-text">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
