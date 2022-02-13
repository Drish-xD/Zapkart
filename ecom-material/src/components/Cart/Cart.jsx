import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  const isEmpty = !cart.line_items;

  const EmptyCart = () => {
    return <Typography variant="subtitle1">You have no items in your shopping cart, start adding some!</Typography>;
  };

  const FilledCart = () => {
    return (
      <Grid container spaceing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Container>
      <Typography variant="h3" component="h3" marginTop="70px" marginBottom="20px" textAlign="center">
        Your Shoping Cart
      </Typography>
      {isEmpty ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
