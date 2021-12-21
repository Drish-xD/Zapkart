import React from 'react'
import { Grid , Typography} from '@mui/material';
const Home = () => {
    return (
        <>
        <div style={{ backgroundImage: `url(${require('../../assets/bg.jpg')})`, backgroundSize: `cover`}}>
            <Grid  container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                <Typography color="white" >
                    Home
                </Typography>
            </Grid>
        </div>
        </>
    )
}

export default Home
