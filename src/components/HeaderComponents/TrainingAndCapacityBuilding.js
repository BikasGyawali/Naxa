import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigationHeaders from '../NavigationHeaders/navigationHeaders';

const TrainingAndCapacityBuilding = ({ projects }) => {
  const [trainingAndCapacityBuildingProjects, setTrainingAndCapacityBuildingProjects] = useState([]);

  useEffect(() => {
    projects?.length !== 0 && setTrainingAndCapacityBuildingProjects(projects)
  }, [projects])

  return (
    <>
      <Grid container>
        <NavigationHeaders projects={trainingAndCapacityBuildingProjects} text="Training & Capacity Building" />
      </Grid>
    </>
  )
}

export default TrainingAndCapacityBuilding;