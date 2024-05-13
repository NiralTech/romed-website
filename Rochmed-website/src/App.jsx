import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import About from "./About";
import Products from "./Pages/Products";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <Routes>
      {/* <Header /> */}

      <Route path="/" exact element={<Home />} />
      {/* <Route path="/about" component={About} /> */}
      <Route path="/Products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default App;
