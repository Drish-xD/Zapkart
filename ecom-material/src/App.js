import React, { useEffect, useState } from "react";
import { Navbar, Home, Products, Cart, Footer, ProductDetails } from "./components/index";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material";
import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

let theme = createTheme();
theme = responsiveFontSizes(theme);

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };

  const handleUpdateQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity: quantity });
    setCart(cart);
  };

  const handleRemoveItem = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const deleteCart = async () => {
    setCart(await commerce.cart.empty());
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
                <Products products={products} onAddToCart={handleAddCart} />
              </>
            }
            path="/"
          />
          <Route element={<Cart cart={cart} onUpdateCartQty={handleUpdateQty} onRemoveItem={handleRemoveItem} onRemoveAll={deleteCart} />} path="/cart" />
          <Route element={<Products products={products} onAddToCart={handleAddCart} />} path="/products" />
          <Route element={<ProductDetails products={products} onAddToCart={handleAddCart} />} path="/product/:id" />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
