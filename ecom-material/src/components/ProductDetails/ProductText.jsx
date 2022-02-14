import { Button, Paper, Typography } from "@mui/material";
import React from "react";

const ProductText = ({ product, onAddToCart }) => {
  return (
    <>
      <Paper style={{ padding: "1rem" }} variant="outlined" square>
        <Typography variant="h4" component="h4" fontWeight="500">
          {product.name}
        </Typography>
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: product.description }} />
        <Typography variant="h5" component="h5" fontWeight="500">
          {product.price.formatted_with_symbol}
        </Typography>
        <Button variant="contained" disableElevation sx={{ mt: 3 }} onClick={() => onAddToCart(product.id, 1)}>
          Add To Cart
        </Button>
      </Paper>
    </>
  );
};

export default ProductText;
