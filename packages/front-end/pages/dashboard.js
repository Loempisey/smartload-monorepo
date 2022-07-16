import React from "react";
import {  Paper,Grid} from "@mui/material";
import { makeStyles } from "@mui/styles";
import SimplePaper from './../components/containers/layouts/total'
import BasicGrid from "../components/containers/layouts/SmallBox";
// import Comment from '../components/containers/layouts/comment';

// import {
//   TableDashboard,
//   LineChart,
//   PieChart,
//   HorizontalBarChart,
// } from "../components/presentations/dashboards";
// import {
//   pieData,
//   horizontalBarData,
//   singleLineData,
//   doubleData,
// } from "../components/containers/layouts/staticData";
import LeftSideBar from "../components/containers/layouts/leftsidebar";
import CalendarsDateRangePicker from "../components/containers/layouts/from";
import BasicDateRangePicker from "../components/containers/layouts/from";
import BasicDatePicker from "../components/containers/layouts/from";
import { Line } from "react-chartjs-2";
import { CustomLineChart } from "../components/containers/layouts/lineChat";
import FilterTotal from "../components/presentations/filterData/filterTotal";
import FilterGraph from "../components/presentations/filterData/filterGraph";
import FromTo from "../components/presentations/filterData/fromTo";
const useStyles = makeStyles((theme) => ({
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      
      
      
      {/* <h1>Homepage</h1>  */}
      {/* <DashBox/> */}
      {/* <BasicGrid/> */}
      {/* <Comment/> */}
      {/* <Orders/> */}
      {/* <Profile/> */}
      {/* <Dashboard/> */}
      {/* <Search/> */}
      {/* </LeftSideBar> */}
       <LeftSideBar> 
      {/* <BasicGrid/> */}
      <Grid container className={classes.charts} >
        <Grid item xs={12}  >
        {/* <FromTo/> */}
          <FilterTotal/>
          
        </Grid>
        <Grid item xs={12} sm={10} >
          
          <FilterGraph/>
          
        </Grid>
      </Grid> 
      </LeftSideBar>
    </div>
  );
};

export default Dashboard;
