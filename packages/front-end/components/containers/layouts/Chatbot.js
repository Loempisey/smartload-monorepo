import React from "react";
import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { makeStyles } from "@mui/styles";
import { animate, motion } from "framer-motion";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles({
  readmore: {
    fontSize: "18px",
    color: "white",
    backgroundColor: "#145DA0",
    position: "absolute",
    marginTop: "45px",
    border: "2px solid #1E88E5 ",
    padding: "10px 20px",
    "&:hover": {
      backgroundColor: "white",
      color: "#145DA0",
      transition: ".2s ease-out",
    },
  },
});

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
              <img src="photo_2022-08-04_08-40-30.jpg" style={{ width: "400px", marginLeft: "50px", marginTop: "-15px", }}></img>
            </div>
          </motion.div>
        </Grid>
        <Grid item xs={10} sm={10} md={5}>
          <div>
            <h1
              style={{
                fontSize: "40px",
                color: "rgb(20, 93, 160)",
                marginTop: "100px",
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
            <div>
              <Link href="">
                <a className={classes.readmore}>Read More</a>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Third;
