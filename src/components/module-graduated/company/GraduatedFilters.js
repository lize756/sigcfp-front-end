import React from "react";
import { Grid, Paper, Box } from "@mui/material";
import SalaryFilters from "./SalaryFilters";
import GenderFilters from "./GenderFilters";
import MobilityFilter from "./MobilityFilter";
import ExperienceFilters from "./ExperienceFilters";
import ProfessionFilters from "./ProfessionFilters";

const GraduatedFilters = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box>
            <ProfessionFilters />
          </Box>
          <Box mt={2}>
            <GenderFilters />
          </Box>
          <Box mt={2}>
            <ExperienceFilters />
          </Box>
          <Box mt={2}>
            <MobilityFilter />
          </Box>
          <Box mt={2}>
            <SalaryFilters />
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Paper color="primary" variant="outlined">
            HOLAA LALALLA
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default GraduatedFilters;
