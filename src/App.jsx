import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Careers from "./Pages/Careers";
import PicoPremium from "./Pages/PicoPremium";
import CureLux from "./Pages/CureLux";
import SmiCool from "./Pages/SmiCool";
import CryoTwins from "./Pages/CryoTwins";
import Qmax from "./Pages/Qmax";
import Ds3000 from "./Pages/Ds3000";
import Sonopoint from "./Pages/Sonopoint";

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="/pico-premium" element={<PicoPremium />} />
      <Route path="/curelux" element={<CureLux />} />
      <Route path="/smicool" element={<SmiCool />} />
      <Route path="/cryotwins" element={<CryoTwins />} />
      <Route path="/qmax" element={<Qmax />} />
      <Route path="/ds3000" element={<Ds3000 />} />
      <Route path="/sonopoint" element={<Sonopoint />} />

    </Routes>
  );
};

export default App;
