import React from 'react'
import styles from './styles'
import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import HtmlRenderer from '../../utils/HTMLRenderer';

const NavigationHeaders = ({ projects, text }) => {
  const classes = styles();

  return (
    <div>
      {
        projects?.length > 0 ? (projects.filter((projects) => projects?.category_title.includes(text))
          .map((project) => (
            <Grid item xs={12}>
              <Card className={classes.card} square>
                <CardContent className={classes.cardContent}>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={4} key={project.id}>
                      <CardMedia
                        sx={{
                          height: { xs: 300 },
                          objectFit: "cover",
                        }}
                        image={project.photo}
                        title={project.title}
                      />
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Box padding={2}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{project.title}</Typography>
                      </Box>
                      <HtmlRenderer htmlContent={project.subtitle} />
                      <Box paddingBottom={8}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <Box paddingLeft={2}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#FFB74D' }}>Client</Typography>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{project.clients}</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box paddingLeft={2}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#FFB74D' }}>Time Duration</Typography>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>{project.start_date} - {project.end_date}</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))
        ) : (
          <>
            <Box display="flex" alignItems="center" justifyContent="center" alignContent="center" width="100%">
              <Typography variant='h1'>Loading...</Typography>
            </Box>
          </>
        )
      }
    </div>
  )
}

export default NavigationHeaders
