import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigationHeaders from '../NavigationHeaders/navigationHeaders';

const SoftwareAndApplicationDevelopment = ({ projects }) => {
  const [softwareAndApplicationDevelopmentProjects, setSoftwareAndApplicationDevelopmentProjects] = useState([]);

  useEffect(() => {
    projects?.length !== 0 && setSoftwareAndApplicationDevelopmentProjects(projects)
  }, [projects])

  return (
    <>
      <Grid container>
        <NavigationHeaders projects={softwareAndApplicationDevelopmentProjects} text="Software & Application Development" />
      </Grid>
    </>
  )
}

export default SoftwareAndApplicationDevelopment;