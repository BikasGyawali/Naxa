import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import NavigationHeaders from '../NavigationHeaders/navigationHeaders';

const EGovernance = ({ projects }) => {
  const [eGovernanceProjects, setEGovernanceProjects] = useState([]);

  useEffect(() => {
    projects?.length !== 0 && setEGovernanceProjects(projects)
  }, [projects])

  return (
    <>
      <Grid container>
        <NavigationHeaders projects={eGovernanceProjects} text="E-Governance" />
      </Grid>
    </>
  )
}

export default EGovernance;