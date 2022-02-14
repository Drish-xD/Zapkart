import { Button, Paper, Typography, Box } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import React from "react";

const ProductText = ({ product, onAddToCart }) => {
  console.log(product.variant_groups);
  const variantGroup = (variantgrp) => {
    return variantgrp.options.map((variant) => (
      <Button color="inherit" key={variant.name}>
        <CircleIcon sx={{ color: `#${variant.name}`, border: "1px solid #000", borderRadius: "50%" }} />
      </Button>
    ));
  };

  return (
    <>
      <Paper style={{ padding: "1rem" }} variant="outlined" square>
        <Typography variant="h4" component="h4" fontWeight="500">
          {product.name}
        </Typography>
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: product.description }} />
        <Box>
          <Typography variant="h6">Choose Color</Typography>
          {product.variant_groups.map((variantgrp) => variantGroup(variantgrp))}
        </Box>
        <Typography variant="h5" component="h5" fontWeight="500" mt={2}>
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
