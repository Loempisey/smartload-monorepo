import React from "react";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles({
  // content: {
  //     display: "flex",
  //     // justifyContent:"space-evenly",
  //     marginTop: "10px",
  //     border: "1.5px",
  //     borderRadius: "5px",
  //     borderStyle: "solid",
  //     borderColor: "whitesmoke",
  //     padding: "10px",
  // },
  // textfield: {
  //     marginLeft: "25%",
  //     width: "30%"
  // },
  read: {
    "&:hover": {
      backgroundColor: "#237FD4",
      transition: ".3s ease-out",
      boxShadow: "0 10px 10px rgba(0,0,0,0.5)",
      color: "white",
    },
  },

  register: {
    fontSize: "18px",
    color: "#1E88E5",
    position: "absolute",
    marginTop: "10px",
    margin: "-70px",
    border: "2px solid #1E88E5 ",
    padding: "10px 20px",
    marginLeft: "100px",
    "&:hover": {
      backgroundColor: "#145DA0",
      color: "white",
      transition: ".2s ease-out",
    },
  },

});

const Fourth = ({title,subTitle,desc}) => {
  const classes = useStyles();
  return (
    <div style={{ fontFamily: "'Quicksand', sans-serif" }}>
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item xs={10} sm={10} md={5}>
          <div>
            <img
              src="pix.png"
              style={{
                marginTop: "50px",
                width: "690px",
                marginLeft: "-70px",
              }}
            ></img>
          </div>
        </Grid>
        <Grid item xs={10} sm={10} md={5}>
            <div>
            <h4
              style={{
                color: "#145DA0",
                fontWeight: "bolder",
                fontSize: "40px",
                textAlign: "center",
                letterSpacing: "0.5px",
                marginTop: "100px",
                marginLeft:"100px"
                
              }}
              id="dashboard"
            >
              {title}
             
            </h4>

            <p
              style={{
                fontSize: "18px",
                color: "black",
                textAlign: "center",
                marginTop: "-35px",
                fontWeight: "900",
                marginLeft:"100px"
              }}
            >
              {subTitle}
            
            </p>

            </div>
          <p
            style={{
              fontSize: "18px",
              color: "black",
              fontWeight: "500",
              lineHeight: "25px",
              marginLeft:"55x",
              marginLeft:"100px"

              //   marginLeft: "500px",
              //   paddingLeft: "100px",
              //   fontSize: "18px",
              //   color: "black",
              //   marginTop: "-380px",
              //   fontWeight: "500",
              //   lineHeight: "25px",
            }}
          >
            {
              desc
            }
           
          </p>
          <div>
          <Link href="">
                  <a className={classes.register}>Read More</a>
            </Link>

            {/* <Link href="/page">
          <a
            className={classes.read}
            style={{
              fontSize: "18px",
              color: "black",
              position: "absolute",
              marginTop: "10px",
              margin: "-70px",
              border: "2px solid #1E88E5 ",
              padding: "10px 20px",
              marginLeft: "0px",
              width: "175px",
              "&:hover": {
                color: "white",
                backgroundColor: "#1E88E5",
                transition: ".2s ease-out",
          },
            }}
          >
            Read More
          </a>
        </Link>
        <ArrowRightAltIcon
          style={{
            marginLeft: "130px",
            marginTop: "15px",
            position: "absolute",
            fontSize: "40px",
            color: "black",
            width: "30px",
          }}
        /> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Fourth;

Fourth.defaultProps={
  title:' Get started with us',
  subTitle:' SmartLoad&apos;s Dashboard service.',
  desc:" A dashboard is a type of graphical user interface which often provides at-a-glance views of key performance indicators (KPIs) relevant to a particular objective or business process. ... The &ldquo;dashboard&rdquo; is often accessible by a web browser and is usually linked to regularly updating data sources. A dashboard is a type of graphical user interface which often provides at-a-glance views of key performance indicators (KPIs)."
}
