// Header.js
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="  bg-slate-600 h-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className=" text-black font-bold text-lg ml-9">
          <h1>ROCHMED</h1>
        </div>
        <nav className=" mr-9">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-black font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-black font-bold">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-black font-bold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-black font-bold">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
