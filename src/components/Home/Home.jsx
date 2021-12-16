import React from 'react'
import { Container,Grid , Typography} from '@mui/material';
const Home = () => {
    return (
        <>
        <Container maxWidth="sm">
            <Grid  container justifyContent="center" alignItems="center" sx={{ height: '100vh', backgroundImage: 'url("../../assets/bg.jpg")' }}>
                <Typography color="inherit" >
                    Home
                </Typography>
            </Grid>
        </Container>
        </>
    )
}

export default Home
