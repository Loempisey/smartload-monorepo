import React from "react";
import { makeStyles, StylesContext } from "@mui/styles";
import { color, fontSize } from "@mui/system";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "next/link";
import { background } from "ui-box";
import Head from "../../containers/layouts/Head";
import Nav from "../../containers/layouts/Nav";
import LastFoot from "../../containers/layouts/Footer/lastfoot";
import Foot from "../../containers/layouts/Footer/foot";
import { Grid } from "@mui/material";
import Chatbot from "../layouts/chatbot"


const useStyles = makeStyles({
  head: {
    textAlign: "left",
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "30px",
    fontWeight: "bold",
    // color: "black",
    marginTop:"10px"
  },
  des: {
    textAlign: "center",
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "23px",
    marginTop: "-30px",
    color: "black",
  },
  small: {
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "'Quicksand', sans-serif",
    textAlign: "center",
    marginTop: "15px",
  },
  medium: {
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "'Quicksand', sans-serif",
    textAlign: "center",
    marginTop: "15px",
  },
  big: {
    fontSize: "24px",
    fontWeight: "bold",
    fontFamily: "'Quicksand', sans-serif",
    textAlign: "center",
    marginTop: "15px",
  },
  twenty_five: {
    fontSize: "30px",
    marginTop: "20px",
  },
  one: {
    fontSize: "30px",
    marginTop: "20px",
  },
  five: {
    fontSize: "30px",
    marginTop: "20px",
  },
  check: {
    fontSize: "30px",
    marginRight: "280px",
  },
  second_box: {
    marginTop: "60px",
  },
  register: {
    fontSize: "18px",
    color: "#1E88E5",
    position: "absolute",
    marginTop: "40px",
    margin: "-70px",
    border: "2px solid #1E88E5 ",
    padding: "10px 20px",
    marginLeft: "-90px",
    "&:hover": {
      backgroundColor: "#1E88E5",
      color: "white",
      transition: ".2s ease-out",
    },
  },
  hover_on: {
    
    "&:hover": {
      color: "white",
      // border: "3px solid #1E88E5",
      backgroundColor: "#D8A460",
      transition: ".2s ease-out"
    },
  },
  hover_on_1: {
    "&:hover": {
      color: "white",
      // border: "3px solid #18dc59",
      backgroundColor: "#4AB4DE",
      transition: ".2s ease-out"

    },
  },
  hover_on_2: {
    "&:hover": {
      color: "white",
      // border: "3px solid #ff930e",
      backgroundColor: "#ff930e",
      transition: ".2s ease-out"

    },
  },
  hover_on_3: {
    "&:hover": {
      color: "white",
      // border: "3px solid #ff930e",
      backgroundColor: "#1E88E5",
      transition: ".2s ease-out"

    },
  },

  back:{
    position:"absolute",
    fontSize:"20px",
    marginLeft:"650px",
    border: "2px solid #1E88E5 ",
    padding: "10px 20px",
    marginTop:"40px",

    "&:hover": {
        backgroundColor: "#1E88E5",
        color: "white",
        transition: ".2s ease-out",
      },
  

  },
});
const Package = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.head}>Dashboard</h1>
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            // paddingLeft: "50px",
            
            "& > :not(style)": {
              m: 3,
              width: 230,
              height: 145,
            },
          }}
        >
          <Paper elevation={3} className={classes.hover_on}>
            <Typography className={classes.small}>
              Total Income
              <p className={classes.twenty_five}>
                $ 25.00
              </p>
            </Typography>
          </Paper>
          <Paper elevation={3} className={classes.hover_on_1}>
            <Typography className={classes.medium}>
              Total Customer
              <p className={classes.one}>100 </p>
            </Typography>
          </Paper>
          <Paper elevation={3} className={classes.hover_on_2}>
            <Typography className={classes.big}>
              Total Video
              <p className={classes.five}>200 </p>
             
            </Typography>
          </Paper>
          <Paper elevation={3} className={classes.hover_on_3}>
            <Typography className={classes.big}>
              Total Comments
              <p className={classes.five}>500 </p>
             
            </Typography>
          </Paper>

        </Box>
      </div>
      {/* <div>
        <Link href="/">
          <a className={classes.back}>Back to Homepage</a>
        </Link>
      </div> */}
    </div>
  );
};

export default Package;
