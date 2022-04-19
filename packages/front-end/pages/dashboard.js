import React from "react";
import {  Paper,Grid} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Comment from '../components/presentations/tables/comment'
import Order from '../components/presentations/tables/order'
import {
  TableDashboard,
  LineChart,
  PieChart,
  HorizontalBarChart,
} from "../components/presentations/dashboards";
import {
  pieData,
  horizontalBarData,
  singleLineData,
  doubleData,
} from "../components/containers/layouts/staticData";
import LeftSideBar from "../components/containers/layouts/leftsidebar";
import BasicGrid from "../components/containers/layouts/smallbox";
const useStyles = makeStyles((theme) => ({
  chart: {
    height: 200,
  },
  charts:{
    padding : 40,
    marginLeft: 60,
    marginTop: 15,
    // [theme.breakpoints.up('sm')]: {
    //   padding: 0
    // }
  }
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <LeftSideBar>
      {/* <h1>Homepage</h1>  */}
      {/* <DashBox/> */}
      <BasicGrid/>
      <Comment/>
      <Order/>

      {/* <Orders/> */}
      {/* <Profile/> */}
      {/* <Dashboard/> */}
      {/* <Search/> */}
      </LeftSideBar>
      {/* <LeftSideBar/>
      <BasicGrid/>
      <Grid container className={classes.charts} justifyContent="space-evenly" spacing={3}>
        <Grid item xs={12} sm={6} >
          <Paper className={classes.chart} >
            <PieChart data={pieData} />
          </Paper>
        </Grid>
        <Comment/>
        
        <Grid item xs={12} sm={6} >
          <Paper className={classes.chart}>
            <LineChart data={doubleData} />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} >
          <Paper className={classes.chart}>
            <HorizontalBarChart data={horizontalBarData} />
          </Paper>
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Dashboard;
