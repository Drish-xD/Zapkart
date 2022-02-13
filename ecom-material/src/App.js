import React, { useEffect, useState } from "react";
import { Navbar, Home, Products, Cart, Footer } from "./components/index";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { commerce } from "./lib/commerce";

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
      <div>
        <Navbar totalitems={cart.total_items} />
        <Home />
        <Products products={products} onAddToCart={hangleAddCart} />
        <Cart />
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
