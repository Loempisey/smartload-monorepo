// import React from 'react';
// import styles from '../../../styles/about.module.css'
// import { makeStyles } from '@mui/styles';
// import { animate, motion } from 'framer-motion';
// import { Grid, Link } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// const useStyles = makeStyles({
//     About: {
//         display: "flex",
//         justifyContent: "space-evenly",
//         marginTop: "30px",

//     },
//     image: {
//         position: "absolute",
//         width: "400px",
//         height: "300px",
//         "&:hover": {
//             display: "none",
//             borderRadius: "40px",
//             opacity: "0.9",


//         }

//     },
//     text: {
//         border: "1px solid white",
//         color: "white",
//         width: "400px",
//         height: "300px",
//         position: "hidden",
//         padding: "20px",
//         fontWeight: "900",
//         textAlign: "center",
//         fontSize: "15px",
//         color: "white",
//         fontFamily: "cursive",
//         transition: "background 0.5s, color 0.5s",
//         "&:hover": {
//             opacity: "0.7",
//             backgroundColor: "black",
//             color: "black",

//         },
//     },
//     chhenglee: {
//         marginLeft: "20px",
//     },
//     descrip: {
//         border: "2px solid white",
//         color: "white",
//         fontWeight: "1000",
//         height: "250px",
//         padding: "5px",
//         marginTop: "5px",
//         transition: "borderColor 0.5s",


//     }
// })

// const About = () => {
//     const styles = useStyles();
//     return (
//         <div className="container">
//             <h2 style={{
//                 textAlign: "center", fontFamily: "'Quicksand', sans-serif",
//                 color: "#444",
//             }}>Meet the Team</h2>
//             <div className={styles.About}>
//                         <div className={styles.pisey}>
//                             <div >
//                                 <img src="IMG_7138.JPG" className={styles.image} />
//                             </div>
//                             <div className={styles.text}>
//                                 <div className={styles.descrip} >
//                                     <h2>Loem Pisey</h2>
//                                     <p>Meet with Pisey 20 years old. Currently I am studying at SabaiCode
//                                         as Computer Science Programing Student.
//                                     </p>
//                                     <Link href='https://www.facebook.com' target="_blank"><FacebookIcon sx={{ fontSize: 35 }} /></Link>
//                                     <Link href='https://www.instagram.com' target="_blank" style={{ color: "red", }} ><InstagramIcon sx={{ fontSize: 35 }} /></Link>
//                                 </div>
//                             </div>
//                         </div>
//                     <div className={styles.chhenglee}>
//                         <div >
//                             <img src="chhenglee2.jpg" className={styles.image} />
//                         </div>
//                         <div className={styles.text}>
//                             <div className={styles.descrip}>
//                                 <h2>Veng Chhengly</h2>
//                                 <p>I am Chhenglee 21 years old. Currently I am studying at SabaiCode
//                                     as Computer Science Programing Student.
//                                 </p>
//                                 <Link href='https://www.facebook.com/chhenglyveng' target="_blank"><FacebookIcon sx={{ fontSize: 35 }} /></Link>
//                                 <Link href='https://www.instagram.com/chhar_lee/' target="_blank" style={{ color: "red", }} ><InstagramIcon sx={{ fontSize: 35 }} /></Link>
//                             </div>
//                         </div>
//                     </div>
//             </div>

//         </div>


//     );
// }

// export default About;



// import React from 'react';
// import styles from '../../../styles/about.module.css'
// import { makeStyles } from '@mui/styles';
// import { animate, motion } from 'framer-motion';
// import { Grid, Link } from '@mui/material';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// const useStyles = makeStyles({
//     About: {
//         display: "flex",
//         justifyContent: "space-evenly",
//         marginTop: "30px",


//     },
//     image: {
//         width: "250px",
//         height: "250px",
//         borderRadius: "100%",
//         // marginLeft:"10%"

//     },
//     descrip: {
//         color: "black",
//         height: "250px",
//         width: "250px",
//         padding: "5px",
//         marginTop: "5px",
//         textAlign: "center",
//         fontFamily: "'Quicksand', sans-serif",
//         color: "#444",


//     }
// })

// const About = () => {
//     const styles = useStyles();
//     return (
//         <div className="container">
//             <h2 style={{
//                 textAlign: "center", fontFamily: "'Quicksand', sans-serif",
//                 color: "#444",
//             }}>Meet the Team</h2>
//             <div className={styles.About}>

//                 <div className={styles.pisey}>
//                     <div >
//                         <img src="profile.png" className={styles.image} />
//                     </div>

//                     <div className={styles.descrip} >
//                         <h3>Loem Pisey</h3>
//                         <p>Meet with Pisey 20 years old. Currently I am studying at SabaiCode
//                             as Computer Science Programing Student.
//                         </p>
//                         <Link href='https://www.facebook.com' target="_blank"><FacebookIcon sx={{ fontSize: 35 }} /></Link>
//                         <Link href='https://www.instagram.com' target="_blank" style={{ color: "red", }} ><InstagramIcon sx={{ fontSize: 35 }} /></Link>
//                     </div>

//                 </div>
//                 <div className={styles.chhenglee}>
//                     <div >
//                         <img src="photo_2022-05-29_20-06-26.jpg" className={styles.image} />
//                     </div>
//                     <div className={styles.text}>
//                         <div className={styles.descrip}>
//                             <h3>Veng Chhengly</h3>
//                             <p>I am Chhenglee 21 years old. Currently I am studying at SabaiCode
//                                 as Computer Science Programing Student.
//                             </p>
//                             <Link href='https://www.facebook.com/chhenglyveng' target="_blank"><FacebookIcon sx={{ fontSize: 35 }} /></Link>
//                             <Link href='https://www.instagram.com/chhar_lee/' target="_blank" style={{ color: "red", }} ><InstagramIcon sx={{ fontSize: 35 }} /></Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>


//     );
// }

// export default About;

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
        fontSize: "35px",
        fontWeight: "unset"
    },
    smartload: {
        display: "flex",
        marginLeft: "10%"
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
        marginLeft: "10%"
    },
    image1: {
        marginLeft: "15%"
    },
    mission: {
        display: "flex",
        marginLeft: "10%"
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
        paddingTop:"1px"
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
            <h1 className={styles.title}>About Us</h1>

            <div className={styles.smartload}>
                <div className={styles.image}>
                    <img style={{ width: "500px", height: "300px" }} src="photo_2022-08-04_08-40-25.jpg"></img>
                </div>
                <div className={styles.des}>
                    <h2>What is SMARTLOAD</h2>
                    <Typography>A Web Application that makes it easier for online shop sellers to manage their Facebook live sale.</Typography>
                </div>
            </div>

            <div className={styles.vision}>
                <div className={styles.des1}>
                    <h2>Our Vision</h2>
                    <Typography>launch the best service plateform to our customer</Typography>
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
                    <Typography>provide the right Technology platform for online shop sellers that help them to grow faster on their business and reduce staff costs.</Typography>
                </div>

            </div>

            <div className={styles.footer}>
                <div style={{ textAlign: "center" }}>
                    <h3>Our Team</h3>
                </div>

                <div className={styles.team}>
                    <div style={{ textAlign: "center",}} >
                        <img className={styles.pisey} src="photo_2022-08-02_12-35-26.jpg" /><br />
                        <span style={{ marginRight: "20px" }}>Pisey</span><br />
                        <span style={{ marginRight: "20px" }}>Back-End Developer</span><br/><br/>
                        <Link style={{color:"#0000CD"}} href="https://www.facebook.com/" target="_blank"><FacebookIcon/></Link>
                        <Link style={{color:"#FD1C03"}} href="https://www.instagram.com/" target="_blank"><InstagramIcon/></Link>
                        <Link href="https://www.linkedin.com/feed/" target="_blank"><LinkedInIcon/></Link>
                    </div>
                    <div style={{ textAlign: "center",}} >
                        <img className={styles.chhenglee} src="photo_2022-06-21_15-51-50 (2).jpg" /><br />
                        <span style={{ marginLeft: "20px" }}>Chhenglee</span><br />
                        <span style={{ marginLeft: "20px" }}>Front-End Developer</span><br/><br/>
                        <Link style={{color:"#0000CD"}} href="https://www.facebook.com/" target="_blank"><FacebookIcon/></Link>
                        <Link style={{color:"#FD1C03"}} href="https://www.instagram.com/" target="_blank"><InstagramIcon/></Link>
                        <Link href="https://www.linkedin.com/feed/" target="_blank"><LinkedInIcon/></Link>
                    </div>
                </div>
            </div>
        

        </div>
    );
}

export default About;