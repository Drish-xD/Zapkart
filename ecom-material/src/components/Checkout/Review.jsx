import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";

const Review = ({ checkOutToken }) => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order Summary
      </Typography>
      <List disablePadding>
        {checkOutToken.live.line_items.map((item) => (
          <ListItem sx={{ py: 1 }} key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Color: ${item.variant.description} | Quantity: ${item.quantity} `}
            />
            <Typography variant="body1">
              {item.price.formatted_with_symbol}
            </Typography>
          </ListItem>
        ))}
        <Divider />
        <ListItem sx={{ py: 1 }}>
          <ListItemText primary="Total" />
          <Typography variant="body1" fontWeight={700}>
            {checkOutToken.live.subtotal.formatted_with_symbol}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
