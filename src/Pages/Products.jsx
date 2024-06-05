import React from "react";

import product1Svg from "../assets/impure/product-1.svg";
import Header from "../Components/Header";

export default function Products() {
  return (
    <div className="h-screen">
      <Header />
      <div className="md:mt-20">
        <div className="absolute top-0 h-screen -z-10">
          <img
            src={product1Svg}
            alt=""
            className="object-cover h-screen lg:h-auto md:w-full"
          />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
