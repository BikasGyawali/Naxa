import { makeStyles } from "@mui/styles";

const styles = makeStyles(theme => ({
  card: {
    transition: "transform 0.3s ease, box-shadow 0.8s ease",
    "&:hover, &:focus": {
      transform: "translateY(-5px) perspective(0px)",
      boxShadow: "0px 5px 5px rgba(128, 128, 128, 0.5)"
    },
  },
}));
export default styles;