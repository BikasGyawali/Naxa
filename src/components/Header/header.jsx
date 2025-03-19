import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ButtonTexts, NavigationConstants } from '../../Constants';
import CustomButton from '../../utils/CustomButton';
import NavBar from '../Navbar/navbar';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Box width="100%" sx={{ position: 'relative' }}>
      <NavBar />
      <Box sx={{ display: "flex", justifyContent: "center", textAlign: "center", py: 4, height: "50vh", width: "100%", backgroundColor: "#f4f4f4" }}>
        {/* Main Title */}
        <Box paddingTop={8} style={{ position: "absolute" }}>
          <Typography variant="subtitle1" sx={{ color: '#FFB74D', fontWeight: 'bold' }}>
            PORTFOLIO
          </Typography>
          <Box marginTop={4}>
            <Typography variant="h2" sx={{ fontWeight: 'normal', fontSize: { xs: "1.4rem", sm: "2rem", md: "2.6rem", xl: "3rem" } }}>
              Diverse, <span style={{ color: '#2979FF' }}>Impactful</span>, and <br />Reliable.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ top: { xs: 300, sm: 340, md: 370, xl: 400 } }} position="absolute" zIndex="999" display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginLeft={{ xs: 2, md: 16, lg: 24 }} marginRight={{ xs: 2, md: 16, lg: 24 }}>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              {ButtonTexts.map((text, index) => (
                <Grid item xs={12} sm={6} md={2.4} key={index} onClick={() => setActiveIndex(index)}>
                  <CustomButton index={index} text={text} activeIndex={activeIndex} navigateTo={NavigationConstants[index]} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default Header
