import React from "react";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
import { ClassNames } from "@emotion/react";

const useStyles = makeStyles({

  register: {
    fontSize: "18px",
    color: "white",
    position: "absolute",
    marginTop: "10px",
    margin: "-70px",
    border: "2px solid #1E88E5 ",
    padding: "10px 20px",
    marginLeft: "100px",
    backgroundColor:"#145DA0",
    "&:hover": {
      backgroundColor: "white",
      color: "#145DA0",
      transition: ".2s ease-out",
    },
  },

});

const Fourth = () => {
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
              Get started with us{" "}
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
              {" "}
             SmartLoad&apos;s Dashboard service.
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
            }}
          >
            A dashboard is a type of graphical user interface which often
            provides at-a-glance views of key performance indicators (KPIs)
            relevant to a particular objective or business process. ... The
            &ldquo;dashboard&rdquo; is often accessible by a web browser and is
            usually linked to regularly updating data sources.
            A dashboard is a type of graphical user interface which often
            provides at-a-glance views of key performance indicators (KPIs).
          </p>
          <div>
          <Link href="">
                  <a className={classes.register}>Read More</a>
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Fourth;
