import { makeStyles } from "@mui/styles";

const styles = makeStyles(theme => ({
  card: {
    margin: 20,
    transition: "transform 0.8s ease box-shadow 0.8s ease",
    "&:hover, &:focus": {
      transform: "scale(1.2px) perspective(0px)",
      boxShadow: "5px 5px 5px rgba(128, 128, 128, 0.3)",
    },
  },
  cardContent: {
    backgroundColor: "rgba(128, 128, 128, 0.1)",
    transition: "backgroundColor 0.8s ease",
    "&:hover, &:focus": {
      backgroundColor: "#ffffff"
    },
  },
}));
export default styles;