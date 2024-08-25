import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigationHeaders from '../NavigationHeaders/navigationHeaders';

const FrontierTechnologies = ({ projects }) => {
  const [frontierTechnologiesProjects, setFrontierTechnologiesProjects] = useState([]);

  useEffect(() => {
    projects?.length !== 0 && setFrontierTechnologiesProjects(projects)
  }, [projects])

  return (
    <>
      <Grid container>
        <NavigationHeaders projects={frontierTechnologiesProjects} text="Frontier Technologies" />
      </Grid>
    </>
  )
}

export default FrontierTechnologies;