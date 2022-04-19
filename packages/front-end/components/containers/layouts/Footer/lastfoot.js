import React from "react";
import { Grid } from "@mui/material";
const LastFoot = ({lastFoot}) => {
  return (
    <div
      style={
        {
          // color: "#777",
          // // borderTop: " 2px solid #eaeaea",
          // fontFamily: "'Quicksand', sans-serif",
          // marginLeft: "500px",
          // width: "80vh",
          // margin:"0 auto "
        }
      }
    >
      <div
        style={{
          borderTop: "2px solid #eaeaea ",
          width: "600px",
          margin: "0 auto",
        }}
      ></div>
      <h4
        style={{
          textAlign: "center",
          color: "#777",
          fontFamily: "'Quicksand', sans-serif",
        }}
      >
        {lastFoot}
        {/* @Copyright 2021 SmartLoad */}
      </h4>
    </div>
  );
};

export default LastFoot;

LastFoot.defaultProps = {
  lastFoot:'@Copyright 2021 SmartLoad',
}