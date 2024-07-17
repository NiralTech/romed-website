import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Careers from "./Pages/Careers";
import PicoPremium from "./Pages/products/PicoPremium";
import CureLux from "./Pages/products/CureLux";
import SmiCool from "./Pages/products/SmiCool";
import CryoTwins from "./Pages/products/CryoTwins";
import Qmax from "./Pages/products/Qmax";
import Ds3000 from "./Pages/products/Ds3000";
import Sonopoint from "./Pages/products/Sonopoint";
import Titan from "./Pages/products/Titan";
import Pt4000 from "./Pages/products/Pt4000";
import Consumables from "./Pages/Consumables";
import Tridi from "./Pages/products/Tridi";
import Registration from "./Pages/Registration";
import Inpure from "./Pages/products/Inpure";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/consumables" element={<Consumables />} />
      <Route path="/registration" element={<Registration />} />

      <Route path="/pico-premium" element={<PicoPremium />} />
      <Route path="/curelux" element={<CureLux />} />
      <Route path="/smicool" element={<SmiCool />} />
      <Route path="/cryotwins" element={<CryoTwins />} />
      <Route path="/qmax" element={<Qmax />} />
      <Route path="/ds3000" element={<Ds3000 />} />
      <Route path="/sonopoint" element={<Sonopoint />} />
      <Route path="/titan" element={<Titan />} />
      <Route path="/pt4000" element={<Pt4000 />} />
      <Route path="/tridi" element={<Tridi />} />
      <Route path="/inpure" element={<Inpure />} />
    </Routes>
  );
};

export default App;
