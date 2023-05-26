import React from "react";
import { Toolbar, AppBar, IconButton, Badge } from "@mui/material";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import AppleIcon from "@mui/icons-material/Apple";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = ({ totalitems }) => {
  const { pathname } = useLocation();
  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            LinkComponent={NavLink}
            to="/"
            color="inherit"
            aria-label="Apple"
          >
            <AppleIcon fontSize="large" />
          </IconButton>
          {pathname !== "/cart" && (
            <IconButton
              LinkComponent={NavLink}
              to="/cart"
              color="inherit"
              aria-label="Cart"
            >
              <Badge badgeContent={totalitems} color="primary">
                <LocalMallRoundedIcon />
              </Badge>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
