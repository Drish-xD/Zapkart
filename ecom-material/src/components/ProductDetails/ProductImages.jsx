import { Grid, ImageList, ImageListItem, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import useStyles from "./styles";

const ProductImages = ({ productImg }) => {
  const [image, setImage] = useState(productImg[0].url);
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const classes = useStyles();

  useEffect(() => {
    window.addEventListener("resize", () => setWinWidth(window.innerWidth));
    return () => window.removeEventListener("resize", () => setWinWidth(window.innerWidth));
  });

  return (
    <>
      <Paper style={{ padding: "1rem" }} variant="outlined" square>
        <Grid container px={1} spacing={2} className={classes.griddirec}>
          <Grid item xs={12} md={3}>
            <ImageList cols={winWidth > "900" ? 1 : 4} gap={12} sx={{ my: 0 }}>
              {productImg.map((item) => (
                <ImageListItem key={item.url} className={classes.img_list}>
                  <img src={item.url} alt={item.filename} className={classes.imgs} onClick={() => setImage(item.url)} loading="lazy" />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid item xs={12} md={9} width="100%">
            <img src={image} alt={productImg.id} className={classes.main_img} />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default ProductImages;
