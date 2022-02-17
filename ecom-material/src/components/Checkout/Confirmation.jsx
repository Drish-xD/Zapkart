import { Button, Divider, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Confirmation = () => {
  return (
    <div>
      <Typography variant="h6">Order Confirmed.</Typography>
      <Typography variant="h6">
        Thank you for your purchase, FirstName Last Name
      </Typography>
      <Divider />
      <Typography variant="subtitle1">Order ref: 864884894984</Typography>
      <br />
      <Button
        LinkComponent={Link}
        to="/"
        color="success"
        variant="contained"
        disableElevation
      >
        Back To Home
      </Button>
    </div>
  );
};

export default Confirmation;
