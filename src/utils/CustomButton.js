import { Button, Typography } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const CustomButton = ({ text, navigateTo, index, activeIndex }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(navigateTo);
  };

  return (
    <Button
      onClick={handleClick}
      sx={{
        textTransform: 'none',
        width: '100%',
        height: '100%',
        color: `${index === activeIndex ? '#184add' : "#989898"}`,
        '&:hover': {
          backgroundColor: '#ffdc1c',
          color: '#184add',
          borderRadius: 0,
        },
        backgroundColor: `${index === activeIndex ? '#ffdc1c' : ''}`,
      }}
    >
      <Typography
        sx={{
          fontWeight: 'bold',
        }}
      >
        {text}
      </Typography>
    </Button>
  );
};

export default CustomButton;
