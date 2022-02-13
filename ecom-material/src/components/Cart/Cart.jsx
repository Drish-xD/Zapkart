import { Alert, Container, Divider, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import CartItem from "./CartItem";
import SideBar from "./SideBar";

const Cart = ({ cart }) => {
  const isEmpty = !cart.line_items;

  const EmptyCart = () => {
    return <Alert severity="error">You have no items in your shopping cart, start adding some!</Alert>;
  };

  const FilledCart = () => {
    return (
      <Grid container rowSpacing={3}>
        {cart.line_items.map((item) => (
          <Grid item key={item.id} sx={{ width: "100%" }}>
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
      <Grid container columnSpacing={3}>
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: "1rem" }} variant="outlined" square>
            <Typography variant="h5" component="h5">
              Added Items
            </Typography>
            <Divider />
            {isEmpty ? <EmptyCart /> : <FilledCart />}
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper style={{ padding: "1rem" }} variant="outlined" square>
            <SideBar cart={cart} />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
