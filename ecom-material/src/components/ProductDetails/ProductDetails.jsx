import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import ProductImages from "./ProductImages";
import ProductText from "./ProductText";

const ProductDetails = ({ products, onAddToCart }) => {
  const { id } = useParams();
  const product = products.find((x) => x.id === id);
  if (!product) {
    return (
      <>
        <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
          <CircularProgress color="inherit" />
          <Typography variant="h5">Loading...</Typography>
        </Container>
      </>
    );
  }
  return (
    <Container>
      <Typography variant="h3" component="h3" marginTop="70px" marginBottom="20px" textAlign="center">
        Product
      </Typography>
      <Grid container columnSpacing={3}>
        <Grid item xs={12} md={7}>
          <ProductImages productImg={product.assets} />
        </Grid>
        <Grid item xs={12} md={5}>
          <ProductText product={product} onAddToCart={onAddToCart} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
