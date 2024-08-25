import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { ButtonTexts, NavigationConstants, svg } from '../../Constants';
import CustomButton from '../../utils/CustomButton';
import NavBar from '../Navbar/navbar';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <>
      <Box width="100%">
        <NavBar />
        <Box sx={{ position: 'absolute', display: "flex", justifyContent: "center", textAlign: "center", py: 4, height: "45vh", width: "100%", backgroundColor: "#f4f4f4" }}>
          {/* Main Title */}
          <Box display="flex" justifyContent="flex-start" width={40}>
            <img src={svg} alt="svg" />
          </Box>
          <Box paddingTop={15}>
            <Typography variant="subtitle1" sx={{ color: '#FFB74D', fontWeight: 'bold' }}>
              PORTFOLIO
            </Typography>
            <Box marginTop={4}>
              <Typography variant="h2" sx={{ fontWeight: 'normal' }}>
                Diverse, <span style={{ color: '#2979FF' }}>Impactful</span>, and <br />Reliable.
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ position: 'relative', zIndex: 999, top: 450 }} display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginBottom={20} marginLeft={{ xs: 2, md: 16, lg: 24 }} marginRight={{ xs: 2, md: 16, lg: 24 }}>
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
    </>
  )
}

export default Header
