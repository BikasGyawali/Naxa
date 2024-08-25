import { Box, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import HtmlRenderer from '../../utils/HTMLRenderer';
import styles from './styles';
import AOS from "aos";
import "aos/dist/aos.css";

const KeyHighlights = ({ projects }) => {
  const classes = styles();
  const [keyHighlightProjects, setKeyHighlightProjects] = useState([]);

  const getBackgroundColor = (projectTitle) => {
    if (projectTitle === "Identification and Mapping of Humanitarian Open Spaces") return '#184add';
    if (projectTitle === "Local Trails and Infrastructure Mapping") return '#1281ad';
    if (projectTitle === "GIS-based Municipal  data management and Mapping for Disaster preparedness") return '#184add';
    if (projectTitle === "National Innovation Digital Network") return '#333333';
    if (projectTitle === "Sakchyam Data Visualization Tool") return '#b30732';
    if (projectTitle === "Hamro Swasthya") return '#f8e1e5';
    if (projectTitle === "Study and Engineering design of four glacial lakes for GLOF risk reduction") return '#efefef';
    if (projectTitle === "Web-based dynamic Data Visualization System (DVS)") return '#184add';
    if (projectTitle === "Nepal Hydro Portal (Hydro Map)") return '#25a596';
    if (projectTitle === "FieldSight") return '#efefef';
    return '#ffffff';
  }

  const getTextColor = (projectTitle) => {
    if (projectTitle === "Identification and Mapping of Humanitarian Open Spaces") return '#ffffff';
    if (projectTitle === "Local Trails and Infrastructure Mapping") return '#ffffff';
    if (projectTitle === "GIS-based Municipal  data management and Mapping for Disaster preparedness") return '#ffffff';
    if (projectTitle === "National Innovation Digital Network") return '#ffffff';
    if (projectTitle === "Sakchyam Data Visualization Tool") return '#ffffff';
    if (projectTitle === "Web-based dynamic Data Visualization System (DVS)") return '#ffffff';
    if (projectTitle === "Nepal Hydro Portal (Hydro Map)") return '#ffffff';
    return '#000000';
  }

  useEffect(() => {
    projects?.length >= 0 && setKeyHighlightProjects(projects)
  }, [projects])

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Grid container spacing={5} rowSpacing={{ xs: 8 }}>
        {
          keyHighlightProjects?.length > 0 ? (keyHighlightProjects.filter((projects) => projects.is_key_highlight)
            .map((project, index) => (
              <Grid item xs={12} md={6} key={project.id}>
                <Box data-aos={(index !== 0 && index !== 1) && "fade-up"}>
                  <Card className={classes.card} square style={{ backgroundColor: getBackgroundColor(project.title) }}>
                    <CardContent>
                      <Box padding={2}>
                        <Typography variant="h5" color={getTextColor(project.title)} sx={{ fontWeight: 'bold' }}>{project.title}</Typography>
                      </Box>
                      <HtmlRenderer color={getTextColor(project.title)} htmlContent={project.subtitle} />
                      <Box paddingBottom={8}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <Box paddingLeft={2}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#FFB74D' }}>Client</Typography>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: "0.9rem" }} color={getTextColor(project.title)}>{project.clients}</Typography>
                            </Box>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Box paddingLeft={2}>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#FFB74D' }}>Time Duration</Typography>
                              <Typography variant="subtitle1" sx={{ fontWeight: 'bold', fontSize: "0.9rem" }} color={getTextColor(project.title)}>{project.start_date} - {project.end_date}</Typography>
                            </Box>
                          </Grid>
                        </Grid>
                      </Box>
                      <CardMedia
                        sx={{
                          height: { xs: 200, sm: 300, md: 400 },
                          objectFit: "cover",
                        }}
                        image={project.photo}
                        title={project.title}
                      />
                    </CardContent>
                  </Card>
                </Box>
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
      </Grid>
    </>
  )
}

export default KeyHighlights;