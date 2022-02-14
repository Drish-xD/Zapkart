import React from "react";
import Product from "./Product/Product";
import { Box, Grid, Typography, Link } from "@mui/material";
import { NavLink } from "react-router-dom";

const Products = ({ products, onAddToCart }) => {
  return (
    <Box marginY="70px">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link component={NavLink} to="/products" underline="hover" color="text.primary">
          <Typography variant="h3" component="h3" marginBottom="20px">
            Products
          </Typography>
        </Link>
      </div>
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
