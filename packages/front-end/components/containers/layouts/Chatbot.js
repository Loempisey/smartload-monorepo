import React from "react";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { color } from "@mui/system";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { animate, motion } from "framer-motion";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  readmore: {
    "&:hover": {
      backgroundColor: "#237FD4",
      transition: ".2s ease-out",
      color: "white",
      boxShadow: "0 10px 10px rgba(0,0,0,0.5)",
    },
  },
  register: {
    fontSize: "18px",
    color: "#145DA0",
    position: "absolute",
    marginTop: "45px",
    margin: "-70px",
    border: "2px solid #1E88E5 ",
    padding: "10px 20px",
    marginLeft: "635px",
    "&:hover": {
      backgroundColor: "#145DA0",
      color: "white",
      transition: ".2s ease-out",
    },
  },
});

// const fadeInup ={
//     initial:{
//         y:60,
//         opacity:0
//     },
//     animate: {
//         y:0,
//         opacity:1,
//         transition:{
//             duration:.6,
//             ease:easing
//         }
//     }
// };

const Third = () => {
  const classes = useStyles();
  return (
    <div
      style={{
        fontFamily: "'Quicksand', sans-serif",
        color: "#444",
        marginTop: 50,
      }}
    >
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item xs={10} sm={10} md={5}>
          <div
            style={{
              // position: "absolute",
              // width: "400px",
              // height: "400px",
              // borderRadius: "130px 280px 500px",
              // backgroundColor:"yellow",
              // opacity:"0.1",
              // zIndex:"999",
              // marginLeft:"980px",
              // marginTop:"180px",
              // overflow:"hidden",


            }}
          ></div>
          <motion.div
            fadeInUp={{
              initial: {
                y: 60,
                opacity: 0,
              },
            }}
            animate={{
              y: 0,
              opacity: 1,
              scale: 1.1,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            }}
          >
            <div>
              <img
                src="robot.png"
                style={{
                  width: "650px",
                  marginLeft: "-50px",
                  marginTop: "-15px",
                }}
              ></img>
            </div>
          </motion.div>
          <div>
            <Link href="">
              <a className={classes.register}>Read More</a>
            </Link>

            {/* <Link href="/">
              <a
                className={classes.readmore}
                style={{
                  fontSize: "18px",
                  color: "black",
                  position: "absolute",
                  marginTop: "-40px",
                  margin: "-70px",
                  border: "2px solid #1E88E5 ",
                  padding: "10px 20px",
                  marginLeft: "640px",
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
              className={classes.arrow}
              style={{
                marginLeft: "765px",
                marginTop: "-35px",
                position: "absolute",
                fontSize: "40px",
                color: "black",
                width: "30px",
              }}
            /> */}
          </div>
        </Grid>
        <Grid item xs={10} sm={10} md={5}>
          <div>
            <h1
              style={{
                fontSize: "40px",
                color: "rgb(20, 93, 160)",
                marginTop: "100px",
                marginLeft:"100px"
              }}
              id="chatbot"
            >
              Getting more easier with our Chatbot
            </h1>
            <p
              style={{
                fontSize: "18px",
                color: "black",
                fontWeight: "500",
                lineHeight: "25px",
                marginLeft:"100px"
              }}
            >
              Chatbots used to be good for answering only the simplest questions{" "}
              but now they can do a lot more. Thanks to advances in chatbot
              tech, a growing number of chatbot plugins and Facebook Messenger&apos;s
              chat tools for business, bots can handle several important
              customer service and marketing tasks for you. You can set up your
              chatbot with a menu sof questions and answers relevant to your
              business and customers.
            </p>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Third;
