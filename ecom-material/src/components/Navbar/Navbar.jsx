import React from "react";
import { Toolbar, AppBar, IconButton, Badge } from "@mui/material";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import AppleIcon from "@mui/icons-material/Apple";

const Navbar = ({ totalitems }) => {
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton color="inherit" aria-label="Apple">
            <AppleIcon fontSize="large" />
          </IconButton>
          <IconButton color="inherit" aria-label="Cart">
            <Badge badgeContent={totalitems} color="primary">
              <LocalMallRoundedIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
