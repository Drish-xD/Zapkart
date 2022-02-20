import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home, Cart, ShowProducts, ShowProduct, Checkout } from "./screens";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/Products" element={<ShowProducts />} />
          <Route path="/Products/:id" element={<ShowProduct />} />
          <Route path="/cart/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
