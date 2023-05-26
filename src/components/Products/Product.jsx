import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import { AddShoppingCart, ProductionQuantityLimits } from "@mui/icons-material";

import useStyles from "./styles";
import { Link } from "react-router-dom";

const Product = ({ product, onAddToCart }) => {
  const classes = useStyles();
  return (
    <Card variant="outlined" className={classes.root}>
      <CardActionArea LinkComponent={Link} to={`/product/${product.id}`}>
        <CardMedia
          component="img"
          image={product.image.url}
          alt={product.name}
          className={classes.image}
        />
        <Divider />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        </CardContent>
      </CardActionArea>
      <div className={classes.content}>
        <Typography variant="h5" py={0.5}>
          {product.price.formatted_with_symbol}
        </Typography>
        <IconButton
          aria-label="add to shopping cart"
          onClick={() =>
            onAddToCart(
              product.id,
              1,
              product.variant_groups[0].id,
              product.variant_groups[0].options[0].id
            )
          }
          disabled={!product.inventory.available}
        >
          {!product.inventory.available ? (
            <ProductionQuantityLimits />
          ) : (
            <AddShoppingCart />
          )}
        </IconButton>
      </div>
    </Card>
  );
};

export default Product;
