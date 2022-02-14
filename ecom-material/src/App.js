import React, { useEffect, useState } from "react";
import { Navbar, Home, Products, Cart, Footer } from "./components/index";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const res = await commerce.products.list();
    setProducts(res.data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const hangleAddCart = async (productId, quantity) => {
    const res = await commerce.cart.add(productId, quantity);
    setCart(res.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar totalitems={cart.total_items} />
        <Routes>
          <Route
            exact
            element={
              <>
                <Home />
                <Products products={products} onAddToCart={hangleAddCart} />
              </>
            }
            path="/"
          />
          <Route element={<Cart cart={cart} />} path="/cart" />
          <Route element={<Products products={products} onAddToCart={hangleAddCart} />} path="/products" />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
