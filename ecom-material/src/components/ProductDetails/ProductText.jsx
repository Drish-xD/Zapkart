import { Button, Paper, Typography, Box, IconButton } from "@mui/material";
import { Circle, CheckCircle } from "@mui/icons-material";
import React, { useState } from "react";

const ProductText = ({ product, onAddToCart }) => {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variant_groups[0].options[0]
  );

  const variantGroup = (variantgrp) => {
    return variantgrp.options.map((variant) => (
      <IconButton
        color="inherit"
        key={variant.name}
        onClick={() => setSelectedVariant(variant)}
      >
        {variant.id === selectedVariant.id ? (
          <CheckCircle
            sx={{
              color: `#${variant.name}`,
              border: `1.5px solid ${
                variant.id === selectedVariant.id ? "#000" : "#b3b3b3"
              }`,
              borderRadius: "50%",
            }}
          />
        ) : (
          <Circle
            sx={{
              color: `#${variant.name}`,
              border: `1.5px solid ${
                variant.id === selectedVariant.id ? "#000" : "#b3b3b3"
              }`,
              borderRadius: "50%",
            }}
          />
        )}
      </IconButton>
    ));
  };

  return (
    <>
      <Paper style={{ padding: "1rem" }} variant="outlined" square>
        <Typography variant="h4" component="h4" fontWeight="500">
          {product.name}
        </Typography>
        <Typography
          variant="body1"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <Box>
          <Typography variant="h6">Choose Color</Typography>
          {product.variant_groups.map((variantgrp) => variantGroup(variantgrp))}
        </Box>
        <Typography variant="h5" component="h5" fontWeight="500" mt={2}>
          {product.price.formatted_with_symbol}
        </Typography>
        <Button
          variant="contained"
          disableElevation
          sx={{ mt: 3 }}
          onClick={() =>
            onAddToCart(
              product.id,
              1,
              product.variant_groups[0].id,
              selectedVariant.id
            )
          }
        >
          Add To Cart
        </Button>
      </Paper>
    </>
  );
};

export default ProductText;
