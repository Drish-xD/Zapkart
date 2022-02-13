import React from "react";
import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  bgimage: {
    display: "block",
    margin: "1rem auto",
    objectFit: "contain",
    width: "100%",
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <div>
        <Grid container justifyContent="center" alignContent="space-around" sx={{ aspectRatio: "18/9", marginTop: "60px" }}>
          <Grid item xs={12} textAlign="center">
            <Typography variant="h1" component="h1" fontWeight="800">
              Apple Store
            </Typography>
            <Typography variant="h4">
              The best experiences. <br /> Only on Apple.
            </Typography>
          </Grid>
          <Grid item xs={11}>
            <img src="./images/bg.jpg" alt="Home" className={classes.bgimage} />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Home;
