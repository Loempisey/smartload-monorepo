import React from 'react';
import styles from '../../../styles/about.module.css'
import { makeStyles } from '@mui/styles';
import { Grid, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Footer from './Footer/foot';
import LastFoot from './Footer/lastfoot';
const useStyles = makeStyles({
    title: {
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "unset",
        fontFamily: "'Quicksand', sans-serif",
        color: "#145DA0",
    },
    smartload: {
        display: "flex",
        marginLeft: "10%",
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "25px",
        color: "#145DA0",

    },
    des: {
        textAlign: "left",
        marginTop: "5%",
        paddingRight: "10%",
    },
    image: {
        marginRight: "8%"
    },
    des1: {
        textAlign: "left",
        marginTop: "5%"
    },
    vision: {
        display: "flex",
        marginLeft: "10%",
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "25px",
        color: "#145DA0",


    },
    image1: {
        marginLeft: "15%"
    },
    mission: {
        display: "flex",
        marginLeft: "10%",
        fontFamily: "'Quicksand', sans-serif",
        fontSize: "25px",
        color: "#145DA0",

    },
    des2: {
        textAlign: "left",
        marginTop: "5%",
        paddingRight: "10%",
    },
    image2: {
        marginRight: "8%"
    },
    footer:{
        backgroundColor: "#F0FFF0",
        height: "55vh",
        paddingTop:"1px",
        
    },
    team: {
        display: "flex",
        justifyContent: "center",
        
        
    },
    pisey: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        marginRight: "20px",
        lineHeight: "0.1em"
    },
    chhenglee: {
        width: "150px",
        height: "150px",
        borderRadius: "50%",
        marginLeft: "20px"
    }

})

const About = () => {
    const styles = useStyles();
    return (
        <div className="container">
            <h1 className={styles.title}></h1>

            <div className={styles.smartload}>
                <div className={styles.image}>
                    <img style={{ width: "500px", height: "300px", marginTop:"30px" }} src="live_img.jpg"></img>
                </div>
                <div className={styles.des}>
                    <h2>SMARTLOAD</h2>
                    <Typography style={{color:"black", fontFamily: "'Quicksand', sans-serif", fontWeight:"500", fontSize:"18px"
}}>A Web Application that makes it easier for online shop sellers to manage their Facebook live sale without fear of losing customer.</Typography>
                </div>
            </div>

            <div className={styles.vision}>
                <div className={styles.des1}>
                    <h2>Our Vision</h2>
                    <Typography style={{color:"black", fontFamily: "'Quicksand', sans-serif", fontWeight:"500", fontSize:"18px"}}>We will launch the best service plateform to our consumer</Typography>
                </div>
                <div className={styles.image1}>
                    <img style={{ width: "500px", height: "500px" }} src="https://images.lawpath.com.au/2021/11/Hero_Run-a-Business.png" />
                </div>
            </div>

            <div className={styles.mission}>
                <div className={styles.image2}>
                    <img style={{ width: "500px", height: "500px" }} src="https://images.lawpath.com.au/2021/12/eCommerce.png"></img>
                </div>
                <div className={styles.des2}>
                    <h2>Our Mission</h2>
                    <Typography style={{color:"black", fontFamily: "'Quicksand', sans-serif", fontWeight:"500", fontSize:"18px"}}>We will provide the right Technology platform for online shop sellers that help them to grow faster on their business and reduce staff costs.</Typography>
                </div>

            </div>

            <div className={styles.footer}>
                <div style={{ textAlign: "center", fontFamily: "'Quicksand', sans-serif",
        fontSize: "25px",
 }}>
                    <h2>Our Team</h2>
                </div>

                <div className={styles.team}>
                    <div style={{ textAlign: "center",}} >
                        <img className={styles.pisey} src="pisey.jpg" /><br />
                        <span style={{ marginRight: "20px", fontFamily: "'Quicksand', sans-serif", fontSize:"18px" }}>Pisey Loem</span><br />
                        <span style={{ marginRight: "20px", fontFamily: "'Quicksand', sans-serif", fontSize:"18px"}}>Project Manager</span><br/><br/>
                        <Link style={{color:"#0000CD", padding:"10px"}} href="https://www.facebook.com/" target="_blank"><FacebookIcon /></Link>
                        <Link style={{color:"#FD1C03", padding:"10px"}} href="https://www.instagram.com/" target="_blank"><InstagramIcon/></Link>
                        <Link style={{padding:"10px"}} href="https://www.linkedin.com/in/pisey-loem" target="_blank"><LinkedInIcon/></Link>
                    </div>
                    <div style={{ textAlign: "center"}} >
                        <img className={styles.chhenglee} src="chhengly.jpg" /><br />
                        <span style={{ marginLeft: "20px", fontFamily: "'Quicksand', sans-serif", fontSize:"18px" }}>Chhengly Veng</span><br />
                        <span style={{ marginLeft: "20px", fontFamily: "'Quicksand', sans-serif", fontSize:"18px" }}>Full Stack Developer</span><br/><br/>
                        <Link style={{color:"#0000CD", padding:"10px"}} href="https://www.facebook.com/" target="_blank"><FacebookIcon/></Link>
                        <Link style={{color:"#FD1C03", padding:"10px"}} href="https://www.instagram.com/" target="_blank"><InstagramIcon/></Link>
                        <Link style={{padding:"10px"}} href="https://www.linkedin.com/feed/" target="_blank"><LinkedInIcon/></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;