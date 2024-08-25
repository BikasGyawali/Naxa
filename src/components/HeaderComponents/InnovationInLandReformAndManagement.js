import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigationHeaders from '../NavigationHeaders/navigationHeaders';

const InnovationInLandReformAndManagement = ({ projects }) => {
  const [innovationInLandReformAndManagementProjects, setInnovationInLandReformAndManagementProjects] = useState([]);

  useEffect(() => {
    projects?.length !== 0 && setInnovationInLandReformAndManagementProjects(projects)
  }, [projects])

  return (
    <>
      <Grid container>
        <NavigationHeaders projects={innovationInLandReformAndManagementProjects} text="Innovation in Land Reform and Management" />
      </Grid>
    </>
  )
}

export default InnovationInLandReformAndManagement;