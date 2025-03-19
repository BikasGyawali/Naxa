import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigationHeaders from '../NavigationHeaders/navigationHeaders';

const DisasterRiskResilience = ({ projects }) => {
  const [disasterRiskResilienceProjects, setDisasterRiskResilienceProjects] = useState([]);

  useEffect(() => {
    projects?.length !== 0 && setDisasterRiskResilienceProjects(projects)
  }, [projects])

  return (
    <>
      <Grid container>
        <NavigationHeaders projects={disasterRiskResilienceProjects} text="Disaster Risk Resilience" />
      </Grid>
    </>
  )
}

export default DisasterRiskResilience;