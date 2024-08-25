import { useDispatch, useSelector } from "react-redux";
import KeyHighlights from "./components/KeyHighlights/KeyHighlights";
import WebGISAndDataVisualization from "./components/HeaderComponents/WebGISAndDataVisualization";
import Portfolio from "./components/portfolio";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { getProjectsFetch } from "./action/projectInfo";
import { Box } from "@mui/material";
import TrainingAndCapacityBuilding from "./components/HeaderComponents/TrainingAndCapacityBuilding";
import SurveyAndGISMapping from "./components/HeaderComponents/SurveyAndGISMapping";
import DisasterRiskResilience from "./components/HeaderComponents/DisasterRiskResilience";
import SoftwareAndApplicationDevelopment from "./components/HeaderComponents/SoftwareAndApplicationDevelopment";
import InnovationInLandReformAndManagement from "./components/HeaderComponents/InnovationInLandReformAndManagement";
import OpenDataInitiatives from "./components/HeaderComponents/OpenDataInitiatives";
import EGovernance from "./components/HeaderComponents/EGovernance";
import FrontierTechnologies from "./components/HeaderComponents/FrontierTechnologies";

function App() {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.myReducer.projects);

  useEffect(() => {
    projects?.length === 0 && dispatch(getProjectsFetch());
  }, [projects, dispatch])

  return (
    <div>
      <Portfolio />
      <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" marginBottom={20} marginLeft={{ xs: 2, md: 16, lg: 24 }} marginRight={{ xs: 2, md: 16, lg: 24 }}>
        <Box marginTop={50}>
          <Routes>
            <Route path="/" element={<Navigate to="/portfolio/keyhighlights" />} />

            <Route path="/portfolio/keyhighlights" element={<KeyHighlights projects={projects} />} />
            <Route path="/portfolio/webgisanddatavisualization" element={<WebGISAndDataVisualization projects={projects} />} />
            <Route path="/portfolio/training&capacitybuilding" element={<TrainingAndCapacityBuilding projects={projects} />} />
            <Route path="/portfolio/surveyingandgismapping" element={<SurveyAndGISMapping projects={projects} />} />
            <Route path="/portfolio/disasterriskresilience" element={<DisasterRiskResilience projects={projects} />} />
            <Route path="/portfolio/software&applicationdevelopment" element={<SoftwareAndApplicationDevelopment projects={projects} />} />
            <Route path="/portfolio/innovationinlandreformandmanagement" element={<InnovationInLandReformAndManagement projects={projects} />} />
            <Route path="/portfolio/opendatainitiatives" element={<OpenDataInitiatives projects={projects} />} />
            <Route path="/portfolio/e-governance" element={<EGovernance projects={projects} />} />
            <Route path="/portfolio/frontiertechnologies" element={<FrontierTechnologies projects={projects} />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default App;
