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


const useStyles = makeStyles({
  head: {
    textAlign: "center",
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "50px",
    color: "#145DA0",
    marginTop:"70px"
  },
  des: {
    textAlign: "center",
    fontFamily: "'Quicksand', sans-serif",
    fontSize: "23px",
    marginTop: "-30px",
    color: "black",
  },
  small: {
    fontSize: "28px",
    fontWeight: "bold",
    fontFamily: "'Quicksand', sans-serif",
    textAlign: "center",
    marginTop: "25px",
  },
  medium: {
    fontSize: "28px",
    fontWeight: "bold",
    fontFamily: "'Quicksand', sans-serif",
    textAlign: "center",
    marginTop: "25px",
  },
  big: {
    fontSize: "28px",
    fontWeight: "bold",
    fontFamily: "'Quicksand', sans-serif",
    textAlign: "center",
    marginTop: "25px",
  },
  first_underline: {
    width: "90px",
    height: "3px",
    border: "0 none",
    background: "#1E88E5",
  },
  second_underline: {
    width: "90px",
    height: "3px",
    border: "0 none",
    background: "#F7DC6F",
  },
  third_underline: {
    width: "90px",
    height: "3px",
    border: "0 none",
    background: "#ff930e",
  },
  twenty_five: {
    fontSize: "60px",
    marginTop: "30px",
    marginRight: "50px",
  },
  one: {
    fontSize: "60px",
    marginTop: "30px",
    marginRight: "50px",
  },
  five: {
    fontSize: "60px",
    marginTop: "30px",
    marginRight: "50px",
  },
  month: {
    fontSize: "16px",
    marginTop: "-45px",
    marginLeft: "200px",
    color: "grey",
  },
  month_1: {
    fontSize: "16px",
    marginTop: "-105px",
    marginLeft: "180px",
    color: "grey",
  },
  month_2: {
    fontSize: "16px",
    marginTop: "-105px",
    marginLeft: "180px",
    color: "grey",
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
      border: "3px solid #1E88E5",
    },
  },
  hover_on_1: {
    "&:hover": {
      border: "3px solid #18dc59",
    },
  },
  hover_on_2: {
    "&:hover": {
      border: "3px solid #ff930e",
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
      <Head />
      <Nav />
      <h1 className={classes.head}>Pricing Plan</h1>
      <p className={classes.des}>Find a plan that is right for your business.</p>
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 3,
              width: 360,
              height: 550,
            },
          }}
        >
          <Paper elevation={3} className={classes.hover_on}>
            <Typography className={classes.small}>
              Small Business
              <hr className={classes.first_underline}></hr>
              <p className={classes.twenty_five}>
                $ 25<p className={classes.month}>/ month</p>{" "}
              </p>
              <div>
                <CheckCircleOutlineIcon
                  className={classes.check}
                  color="primary"
                />
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "-40px",
                    marginRight: "70px",
                  }}
                >
                  Easy to use
                </p>
              </div>
              <div>
                <CheckCircleOutlineIcon
                  className={classes.check}
                  color="primary"
                />
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "-40px",
                    marginRight: "10px",
                  }}
                >
                  Support live sales
                </p>
              </div>
              <div>
                <CheckCircleOutlineIcon
                  className={classes.check}
                  color="primary"
                />
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "-40px",
                    marginRight: "-30px",
                  }}
                >
                  Business Management
                </p>
              </div>
              <div>
                <Link href="">
                  <a className={classes.register}>Register Now</a>
                </Link>
              </div>
            </Typography>
          </Paper>
          <Paper elevation={3} className={classes.hover_on_1}>
            <Typography className={classes.medium}>
              Medium Business
              <hr className={classes.second_underline}></hr>
              <p className={classes.one}>$ 100 </p>
              <p className={classes.month_1}>/ month</p>
              <div className={classes.second_box}>
                <CheckCircleOutlineIcon
                  className={classes.check}
                  color="primary"
                />
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "-40px",
                    marginRight: "70px",
                  }}
                >
                  Easy to use
                </p>
              </div>
              <div>
                <CheckCircleOutlineIcon
                  className={classes.check}
                  color="primary"
                />
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "-40px",
                    marginRight: "10px",
                  }}
                >
                  Support live sales
                </p>
              </div>
              <div>
                <CheckCircleOutlineIcon
                  className={classes.check}
                  color="primary"
                />
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "-40px",
                    marginRight: "-30px",
                  }}
                >
                  Business Management
                </p>
              </div>
              <div>
                <Link href="">
                  <a className={classes.register}>Register Now</a>
                </Link>
              </div>
            </Typography>
          </Paper>
          <Paper elevation={3} className={classes.hover_on_2}>
            <Typography className={classes.big}>
              Big Business
              <hr className={classes.third_underline}></hr>
              <p className={classes.five}>$ 150 </p>
              <p className={classes.month_2}>/ month</p>
              <div className={classes.second_box}>
                <CheckCircleOutlineIcon
                  className={classes.check}
                  color="primary"
                />
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "-40px",
                    marginRight: "70px",
                  }}
                >
                  Easy to use
                </p>
              </div>
              <div>
                <CheckCircleOutlineIcon
                  className={classes.check}
                  color="primary"
                />
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "-40px",
                    marginRight: "10px",
                  }}
                >
                  Support live sales
                </p>
              </div>
              <div>
                <CheckCircleOutlineIcon
                  className={classes.check}
                  color="primary"
                />
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "-40px",
                    marginRight: "-30px",
                  }}
                >
                  Business Management
                </p>
              </div>
              <div>
                <Link href="">
                  <a className={classes.register}>Register Now</a>
                </Link>
              </div>
            </Typography>
          </Paper>
        </Box>
      </div>
      {/* <div>
        <Link href="/">
          <a className={classes.back}>Back to Homepage</a>
        </Link>
      </div> */}
      <Foot />
      <LastFoot />
    </div>
  );
};

export default Package;
