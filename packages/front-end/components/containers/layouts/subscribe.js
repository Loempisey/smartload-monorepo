import React from "react";
import { Button, TextField } from "@mui/material";
import Link from "next/link";
import { background } from "ui-box";
import { Grid } from "@mui/material";

const Subcribe = ({title,subTitle,sub}) => {
  return (
    <div style={{ textAlign: "center", padding: "-20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}></Grid>
        <Grid item xs={4}>
          <div style={{ marginTop: "80px", textAlign: "center" }}>
            <h2
              style={{
                textAlign: "center",
                color: "#145DA0",
                fontSize: "30px",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              {title}
              {/* Ready to Subscribe ? */}
            </h2>
          </div>

          <p
            style={{
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: "500",
              fontSize: "17px",
            }}
          >
            {subTitle}
            {/* Subscribe to get the lastest news and updates. <br></br> No Spam, we
            promise. */}
          </p>

          <div style={{ margin: "40px" }}>
            <TextField
              placeholder="Enter your email address"
              style={{ width: "300px", color: "#777", marginLeft: "-100px" }}
            ></TextField>
            {/* <Link href="/page"> */}
            <Button
              style={{
                position: "absolute",
                display: "inline-block",
                width: "120px",
                height: "55px",
                margin: "65px auto",
                background: "#145DA0",
                border: "0px solid ",
                boxShadow: "0px 0px 0px ",
                color: "white",
                marginLeft: "10px",
                fontFamily: "'Quicksand', sans-serif",
                borderRadius: "2px",
                textAlign: "center",
                marginTop: "0px",
              }}
            >
              {sub}
              {/* Subcribe */}
            </Button>

            {/* </Link> */}
          </div>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default Subcribe;

Subcribe.defaultProps = {
  title: 'Ready to Subscribe ?',
  subTitle: 'Subscribe to get the lastest news and updates. No Spam, we promise.',
  sub: 'Subcribe',
}

