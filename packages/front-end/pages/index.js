import Head from "../components/containers/layouts/Head";
import Lay from "../components/containers/layouts/Lay";
import Content from "../components/containers/layouts/Content";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Business_Grow from "../components/containers/layouts/Business_grow";
import Footer from "../components/containers/layouts/Footer/foot";
import Chatbot from "../components/containers/layouts/chatbot";
import Dashboard from "../components/containers/layouts/dashboard";
import Contact from "../components/containers/layouts/contact";
import LastFoot from "../components/containers/layouts/Footer/lastfoot";
import Subcribe from "../components/containers/layouts/subscribe";
import { ClassNames } from "@emotion/react";
import { makeStyles } from "@mui/styles";
import { useRouter } from "next/router";
import { useEffect } from "react";
import About from "../components/containers/layouts/about";
import Grid from "@mui/material/Grid";
import { useRecoilValue }from "recoil";
import { USERSTATE, LOADINGSTATE } from "../states/userState";


const useStyles = makeStyles({
  content:{
    paddingLeft: 125,
    paddingTop:100
  },
});

export default function Home() {
  const classes = useStyles();
  const user = useRecoilValue(USERSTATE);
  const loading = useRecoilValue(LOADINGSTATE);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [user, loading]);

  // const notify = () => toast("Wow so easy!");
  
  // const router = useRouter();
  return (
    <div className="max-width">
      <Head />
      <Lay />
      {/* <button onClick={notify}>Click here!</button> */}
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item xs={10} sm={5}>
          <div className={classes.content}>
            <Content />
          </div>
        </Grid>
        <Grid item xs={10} sm={10} md={5}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.3,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  ease: [0.6, 0.01, -0.05, 0.95],
                  // delay: .3
                  duration: 1,
                },
              },
            }}
          >
            <div>
              <img
                src="wn.png"
                style={{
                  width: "450px",
                  marginLeft:"150px",
                  marginTop:"-40px"
                }}
              ></img>
            </div>
          </motion.div>
        </Grid>
      </Grid>
      <Chatbot />
      <Business_Grow />
      <Dashboard/>
      <Contact />
      <Subcribe />
      {/* <About/> */}
      <Footer />
      <LastFoot /> 
    </div>
  );
}
