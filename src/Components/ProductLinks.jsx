import React from "react";
import { NavLink } from "react-router-dom";

const ProductLinks = () => {
  const routeMap = [
    { route: "/pico-premium", title: "PICO PREMIUM" },
    { route: "/curelux", title: "CURELUX" },
    { route: "/titan", title: "TITAN" },
    { route: "/tridi", title: "Tridi" },
    { route: "/smicool", title: "SMI COOL" },
    { route: "/qmax", title: "Q-MAX/Q-MAX PREMIUM" },
    { route: "/sonopoint", title: "SONOPOINT" },
    { route: "/inpure", title: "Inpure" },
    { route: "/cryotwins", title: "CRYO-ZET & CRYO-Q" },
    { route: "/ds3000", title: "DS-3000E" },
    { route: "/pt4000", title: "PT-4000" },
  ];
  return (
    <>
      <div className="font-normal uppercase px-3 lg:px-8 relative group opacity-100 -mb-2">
        <div className="font-normal cursor-pointer">Products</div>
        <div className="bg-white space-x-3 w-[100vw] sm:w-auto border-primary rounded absolute hidden group-hover:flex group-hover:flex-col md:group-hover:flex-row items-center p-2 -left-28 sm:left-10 sm:top-6">
          <div className="flex flex-col flex-wrap space-y-2">
            {routeMap.map((routeData) => {
              return (
                <NavItem
                  route={routeData.route}
                  title={routeData.title}
                  key={routeData.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ title, route }) => (
  <NavLink
    className="product-link-text sm:w-auto"
    to={route}
    style={({ isActive }) => ({
      backgroundColor: !isActive ? "white" : "#532b7b",
      color: !isActive ? "#2D315E" : "white",
    })}
  >
    {title}
  </NavLink>
);

export default ProductLinks;
