import React from "react";
import { NavLink } from "react-router-dom";

const ProductLinks = () => {
  return (
    <>
      <div className="link-text relative group">
        <div className="">Products</div>
        <div className=" bg-white space-x-3 p-4 border-primaryrounded absolute -bottom-42 -left-20 md:-left-64 hidden group-hover:flex group-hover:flex-col md:group-hover:flex-row md:w-[600px] opacity-100 items-center ">
          <div className="flex flex-col">
            <NavLink className="product-link-text" to={"/pico-premium"}>
              PICO PREMIUM
            </NavLink>
            <NavLink className="product-link-text" to={"/curelux"}>
              CURELUX
            </NavLink>
            <NavLink className="product-link-text" to={"/titan"}>
              TITAN
            </NavLink>
          </div>
          <div className="flex flex-col">
            <NavLink className="product-link-text" to={"/smicool"}>
              SMI COOL
            </NavLink>
            <NavLink className="product-link-text" to={"/qmax"}>
              Q-MAX/Q-MAX PREMIUM
            </NavLink>
            <NavLink className="product-link-text" to={"/sonopoint"}>
              SONOPOINT
            </NavLink>
          </div>
          <div className="flex flex-col">
            <NavLink className="product-link-text" to={"/cryotwins"}>
              CRYO-ZET & CRYO-Q
            </NavLink>
            <NavLink className="product-link-text" to={"/ds3000"}>
              DS-3000E
            </NavLink>
            <NavLink className="product-link-text" to={'/pt4000'}>PT-4000</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductLinks;
