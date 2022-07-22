import { duration } from "@mui/material";
import { motion } from "framer-motion";
import { transition } from "ui-box/dist/src/enhancers";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  us: {
    "&:hover": {
      backgroundColor: "#1E88E5",
      color: "white",
      transition: ".2s ease-out",
    },
  },
  // circle:{
  //   position:"absolute",
  //   width:"450px",
  //   height:"450px",
  //   borderRadius:"225px",
  //   zIndex:"999",
  //   opacity:"0.1",
  //   backgroundColor:"yellow",
  //   top:"-300px",
  //   left:"-250px",
  // },
});
export default function Content() {
  const classes=useStyles();
  return (
    
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.3,
            opacity: 0,
          },
          visible: {
            scale: 1.5,
            opacity: 1,
            transition: {
              ease: [0.6, 0.01, -0.05, 0.95],
              // delay: .3
              duration: 1,
            },
          },
        }}
      >
        <div >
          <div className={classes.circle}></div>
          <h1
            style={{
              color: "#145DA0",
              fontFamily: "'Quicksand', sans-serif",
              marginTop:"70px",
              marginLeft:"20px",
              width:"450px"
            }}
          >
            The Better Digital Solution For your Business{" "}
          </h1>
          <p
            style={{
              fontSize: "12px",
              color: "black",
              fontFamily: "'Quicksand', sans-serif",
              fontWeight: "500",
              marginLeft:"20px"
            }}
          >
            Business is all about solving people&apos;s problems at a profit.
            <br></br>Sell the problem you solve, not the product you have.
            <div style={{display:'flex', marginTop: 40}}>
              <div>
                <a
                  href="#explore"
                  style={{
                    display: "block",
                    width: "130px",
                    height: "40px",
                    padding: "12px 0",
                    background: "#145DA0",
                    borderRadius: "1px",
                    color: "white",
                    textAlign: "center",
                    fontWeight: "600",
                    fontFamily: "'Quicksand', sans-serif",
                    margin:"10px"
                  }}
                >
                  Explore More
                </a>
              </div>

              <div>
                <a
                  href="#Contact"
                  className={classes.us}
                  style={{
                    position: "absolute",
                    display: "block",
                    width: "130px",
                    height: "40px",
                    padding: "12px 0",
                    background: "whitesmoke",
                    borderRadius: "1px solid",
                    color: "#145DA0",
                    textAlign: "center",
                    fontFamily: "'Quicksand', sans-serif",
                    border: "0px solid  ",
                    boxShadow: "0px 0px 0px 0px",
                    fontWeight: "600",
                    margin:"10px"
                  }}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </p>
        </div>
      </motion.div>
   
  );
}
