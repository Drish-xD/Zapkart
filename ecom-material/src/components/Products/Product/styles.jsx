import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: "345px",
    margin: "0 auto",
  },
  image: {
    aspectRatio: "4/3",
    objectFit: "contain",
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    margin: "auto 1rem",
  },
});

export default useStyles;
