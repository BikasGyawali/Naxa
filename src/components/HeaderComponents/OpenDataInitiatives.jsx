import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigationHeaders from '../NavigationHeaders/navigationHeaders';

const OpenDataInitiatives = ({ projects }) => {
  const [openDataInitiativesProjects, setOpenDataInitiativesProjects] = useState([]);

  useEffect(() => {
    projects?.length !== 0 && setOpenDataInitiativesProjects(projects)
  }, [projects])

  return (
    <>
      <Grid container>
        <NavigationHeaders projects={openDataInitiativesProjects} text="Open Data Initiatives" />
      </Grid>
    </>
  )
}

export default OpenDataInitiatives;