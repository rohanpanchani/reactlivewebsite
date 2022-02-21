import React from "react";
import { Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import Menu from "./Menu";
import Error from "./Error";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
