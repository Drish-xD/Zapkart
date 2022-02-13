import React from 'react'
import { Toolbar, Typography, AppBar, IconButton, Badge } from '@mui/material'
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

const Navbar = () => {
    return (
        <>
        <AppBar position="fixed" color='secondary'>
            <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Navbar
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="Cart">
                <Badge badgeContent={4} color="primary">
                    <LocalMallRoundedIcon  />
                </Badge>
            </IconButton>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar
