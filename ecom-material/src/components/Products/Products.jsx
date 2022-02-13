import React from "react";
import Product from "./Product/Product";
import { Box, Grid, Typography } from "@mui/material";

const Products = ({ products, onAddToCart }) => {
  return (
    <Box marginY="50px">
      <Typography variant="h3" component="h3" marginBottom="20px" textAlign="center">
        Products
      </Typography>
      <Grid container justifyContent="center" spacing={4} paddingX="2rem">
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
