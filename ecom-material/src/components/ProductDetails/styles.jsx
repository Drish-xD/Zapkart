import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  img_list: {
    alignItems: "center",
    "@media (min-width:900px)": {
      alignItems: "flex-start",
    },
  },
  imgs: {
    objectFit: "contain",
    width: "73% !important",
    border: "1px solid #000",
    "@media (max-width:900px)": {
      width: "80% !important",
    },
  },
  main_img: {
    objectFit: "contain",
    width: "100%",
    border: "1px solid #000",
  },
  griddirec: {
    flexDirection: "row",
    "@media (max-width:900px)": {
      flexDirection: "column-reverse",
    },
  },
});

export default useStyles;
