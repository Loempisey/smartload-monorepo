<<<<<<< HEAD
=======
// import { display } from "@mui/lab/node_modules/@mui/system";
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087
import Link from "next/link";
import { flex } from "ui-box";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  // bg:{
  //   position:"absolute",
  //   width:"215vh",
  //   height:"30vh",
  //   backgroundColor:"yellow",
  //   opacity:"0.08",
  //   marginLeft:"-300px",
  //   marginTop:"-55px",
  //   overflow:"hidden",

  // },
  
})


export default function Footer() {
  const classes=useStyles();
  return (
    <div
      style={{
        display: "flex",
        padding: "50px 0",
        marginTop: "20px",
        color: "black",
        fontFamily: "'Quicksand', sans-serif",
        justifyContent:'center',
      }}
    >
      <Grid container spacing={8} justifyContent={'center'}>
        <Grid item xs={6} sm={3} md={2}>
        <div className={classes.bg}></div>
          <div>
            <h4
              style={{
                marginTop: "-20px",
                fontSize: "20px",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              SmartLoad
            </h4>
            <p
              style={{
                marginLeft: "-105px",
                textAlign: "center",
                marginTop: "-15px",
              }}
            >
              The new digital solution for your 
              business.{" "}
            </p>
          </div>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <div>
            <h4
              style={{
                marginTop: "-20px",
                fontSize: "20px",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              About
            </h4>
            <p style={{ marginTop: "-15px" }}>
              Home <br></br>Service <br></br>Contact <br></br>Features
            </p>
          </div>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <div>
            <h4
              style={{
                marginTop: "-20px",
                fontSize: "20px",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              Privacy
            </h4>
            <p style={{ marginTop: "-15px" }}>
              {" "}
              Privacy <br></br>Policy<br></br>Payments<br></br>FQAs
            </p>
          </div>
        </Grid>
        <Grid item xs={6} sm={3} md={2}>
          <div>
            <h4
              style={{
                marginTop: "-20px",
                fontSize: "20px",
                fontFamily: "'Quicksand', sans-serif",
              }}
            >
              Social Media
            </h4>
            <div
              style={{
                display: "flex",
                textAlign: "center",
                marginTop: "-15px",
              }}
            >
              <Link href="https://www.facebook.com/" >
                <a target="_blank"><img src="/fb.png" width={40} height={40} /></a>
              </Link>
              <Link href="https://www.gmail.com/">
                <a target="_blank"><img src="/email.png" width={40} height={40} /></a>
              </Link>
              <Link href="https://www.instagram.com/">
                <a target="_blank"><img src="/ig.png" width={40} height={40} /></a>
              </Link>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
