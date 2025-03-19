import { makeStyles } from "@mui/styles";

const styles = makeStyles(theme => ({
  button: {
    textTransform: 'none',
    width: '100%',
    height: '100%',
    color: "#989898",
    '&:hover': {
      backgroundColor: '#ffdc1c',
      color: '#184add',
      borderRadius: 0
    }
  }
}));
export default styles;