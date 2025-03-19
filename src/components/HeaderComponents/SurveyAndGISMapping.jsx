import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigationHeaders from '../NavigationHeaders/navigationHeaders';

const SurveyAndGISMapping = ({ projects }) => {
  const [surveyAndGISMappingProjects, setSurveyAndGISMappingProjects] = useState([]);

  useEffect(() => {
    projects?.length !== 0 && setSurveyAndGISMappingProjects(projects)
  }, [projects])

  return (
    <>
      <Grid container>
        <NavigationHeaders projects={surveyAndGISMappingProjects} text="Surveying and GIS Mapping" />
      </Grid>
    </>
  )
}

export default SurveyAndGISMapping;