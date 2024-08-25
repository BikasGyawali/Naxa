import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigationHeaders from '../NavigationHeaders/navigationHeaders';

const WebGISAndDataVisualization = ({ projects }) => {
  const [webGISAndDataVisualizationProjects, setWebGISAndDataVisualizationProjects] = useState([]);

  useEffect(() => {
    projects?.length !== 0 && setWebGISAndDataVisualizationProjects(projects)
  }, [projects])

  return (
    <>
      <Grid container>
        <NavigationHeaders projects={webGISAndDataVisualizationProjects} text="Web GIS and Data Visualization" />
      </Grid>
    </>
  )
}

export default WebGISAndDataVisualization;