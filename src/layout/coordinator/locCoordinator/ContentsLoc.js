import React, { useEffect } from "react";
import { Typography, Paper, Card, Grid, CardActionArea } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";

import RequestIcon from "@mui/icons-material/PostAdd";
import ReportIcon from "@mui/icons-material/Assessment";
import { lightBlue } from "@mui/material/colors";
import { purple } from "@mui/material/colors";

import { useNavigate } from "react-router";

import { useDispatch, useSelector } from "react-redux";
import { getperson } from "../../../components/store/slices/PersonSlice";
import { getCompanies } from "../../../components/store/slices/CompanySlice";
import { getInternRequests } from "../../../components/store/slices/InternRequestSlice";

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "auto",
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
  marginBottom: theme.spacing(3),
}));

const ContentsLoc = () => {
  let navigate = useNavigate();
  // Allow to send the elements of store
  const dispatch = useDispatch();
  //Redux
  // Get person id of the store
  const userPersonId = useSelector((state) => state.userLogin.userPersonId);
  //Get acces_token of the user that start section
  const ACCESS_TOKEN =
    "Bearer " + useSelector((state) => state.userLogin).responseUserLogin.token;

  //Axios
  useEffect(() => {
    //Adde to store the person that user login
    dispatch(getperson(ACCESS_TOKEN, userPersonId));
    // Added to store of list of companies
    dispatch(getCompanies(ACCESS_TOKEN));
    // Added to store of list of intern requests inside in database
    dispatch(getInternRequests(ACCESS_TOKEN));
  }, []);

  return (
    <div>
      <Paper sx={{ mt: 5, mb: 5 }}>
        <Typography
          variant="h4"
          sx={{ opacity: 1, color: "#072079", textAlign: "center" }}
        >
          ¡BIENVENIDOS/AS!
        </Typography>

        <Grid
          container
          spacing={5}
          p={4}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Grid item xs="auto">
            <Card
              sx={{
                width: 210,
                height: 220,
                textAlign: "center",
                py: 5,
                boxShadow: 2,
                bgcolor: lightBlue[50],
              }}
            >
              <CardActionArea
                onClick={() => {
                  navigate("/location/careers");
                }}
              >
                <IconWrapperStyle
                  sx={{
                    color: (theme) => theme.palette["primary"].dark,
                    backgroundImage: (theme) =>
                      `linear-gradient(135deg, ${alpha(
                        theme.palette["primary"].dark,
                        0
                      )} 0%, ${alpha(
                        theme.palette["primary"].dark,
                        0.24
                      )} 100%)`,
                  }}
                >
                  <RequestIcon color="primary" />
                </IconWrapperStyle>
                <Typography
                  variant="subtitle2"
                  sx={{ opacity: 0.72, color: "#072079" }}
                >
                  Modulo
                </Typography>

                <Typography variant="h5" sx={{ color: "#072079" }}>
                  Practicantes
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs="auto">
            <Card
              sx={{
                width: 210,
                height: 220,
                textAlign: "center",
                py: 5,
                boxShadow: 2,
                bgcolor: purple[50],
              }}
            >
              <CardActionArea
                onClick={() => {
                  navigate("/location/report");
                }}
              >
                <IconWrapperStyle
                  sx={{
                    color: (theme) => theme.palette["secondary"].dark,
                    backgroundImage: (theme) =>
                      `linear-gradient(135deg, ${alpha(
                        theme.palette["secondary"].dark,
                        0
                      )} 0%, ${alpha(
                        theme.palette["secondary"].dark,
                        0.24
                      )} 100%)`,
                  }}
                >
                  <ReportIcon color="secondary" />
                </IconWrapperStyle>

                <Typography
                  variant="subtitle2"
                  sx={{ opacity: 0.72, color: "#072079" }}
                >
                  Modulo
                </Typography>

                <Typography variant="h5" sx={{ color: "#072079", opacity: 1 }}>
                  Reportes
                </Typography>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ContentsLoc;