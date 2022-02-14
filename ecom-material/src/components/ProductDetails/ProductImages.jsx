import { Grid, ImageList, ImageListItem, Paper } from "@mui/material";
import React, { useState } from "react";

const ProductImages = ({ productImg }) => {
  const [image, setImage] = useState(productImg[0].url);
  console.log(productImg);
  return (
    <>
      <Paper style={{ padding: "1rem" }} variant="outlined" square>
        <Grid container px={1}>
          <Grid item xs={7} md={3}>
            <ImageList cols={1}>
              {productImg.map((item) => (
                <ImageListItem key={item.url}>
                  <img src={item.url} alt="" style={{ objectFit: "contain", width: "7rem", border: "1px solid #000" }} onClick={() => setImage(item.url)} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid item xs={7} md={9} my={2}>
            <img src={image} alt="" style={{ objectFit: "contain", width: "100%", border: "1px solid #000" }} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ProductImages;
