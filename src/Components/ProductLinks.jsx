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
        <div className="font-normal">Products</div>
        <div className="bg-white space-x-3 p-4 border-primary rounded absolute -bottom-42 -left-20 md:-left-64 hidden group-hover:flex group-hover:flex-col md:group-hover:flex-row md:w-[600px]  items-center">
          <div className="flex flex-col md:flex-row md:flex-wrap">
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
  <NavLink className="product-link-text" to={route}>
    {title}
  </NavLink>
);

export default ProductLinks;
