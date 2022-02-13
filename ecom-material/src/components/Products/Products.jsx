import React from "react";
import Product from "./Product/Product";
import { Grid } from "@mui/material";

const Products = ({ products, onAddToCart }) => {
  return (
    <div>
      <Grid container justifyContent="center" spacing={4} marginTop="70px" paddingX="2rem">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Products;
