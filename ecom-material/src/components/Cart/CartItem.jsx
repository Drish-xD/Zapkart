import React from "react";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import { Cancel, AddCircle, RemoveCircle } from "@mui/icons-material";

const CartItem = ({ item }) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Card sx={{ display: "flex", flexGrow: "1", justifyContent: "space-between", alignItems: "center", flexDirection: { xs: "column", md: "row" } }}>
        <CardMedia component="img" sx={{ width: 80 }} image={item.image.url} alt={item.name} />
        <Typography component="h5" variant="h5">
          {item.name}
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton aria-label="Decrease Quantity">
            <RemoveCircle />
          </IconButton>
          <Typography variant="subtitle1" color="text.secondary" component="div" mx={1}>
            {item.quantity}
          </Typography>
          <IconButton aria-label="Increase Quantity">
            <AddCircle />
          </IconButton>
        </div>
        <Typography variant="subtitle1" component="div" mx={2}>
          {item.price.formatted_with_symbol}
        </Typography>
      </Card>
      <Box sx={{ display: "block", marginY: "auto", p: 1 }}>
        <IconButton aria-label="Remove from Cart">
          <Cancel color="error" />
        </IconButton>
      </Box>
    </div>
  );
};

export default CartItem;
