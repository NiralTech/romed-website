// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 z-0 w-full h-20 bg-black">
        <div className="flex items-center justify-between h-full lg:px-56">
          <h1 className="text-sm font-bold text-white uppercase lg:text-lg">Roshmed</h1>
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
