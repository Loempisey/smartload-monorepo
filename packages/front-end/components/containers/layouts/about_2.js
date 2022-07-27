import React from 'react';
import styles from '../../../styles/about.module.css'
import { makeStyles } from '@mui/styles';
import { animate, motion } from 'framer-motion';
import { Grid, Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
const useStyles = makeStyles({
    About: {
        display: "flex",
        justifyContent: "space-evenly",
        marginTop: "30px",


    },
    image: {
        width: "250px",
        height: "250px",
        borderRadius: "100%",
        // marginLeft:"10%"

    },
    descrip: {
        color: "black",
        height: "250px",
        width: "250px",
        padding: "5px",
        marginTop: "5px",
        textAlign: "center",
        fontFamily: "'Quicksand', sans-serif",
        color: "#444",


    }
})

const About_2 = () => {
    const styles = useStyles();
    return (
        <div className="container">
            <h2 style={{
                textAlign: "center", fontFamily: "'Quicksand', sans-serif",
                color: "#444",
            }}>Meet the Team</h2>
            <div className={styles.About}>

                <div className={styles.pisey}>
                    <div >
                        <img src="profile.png" className={styles.image} />
                    </div>

                    <div className={styles.descrip} >
                        <h3>Loem Pisey</h3>
                        <p>Meet with Pisey 20 years old. Currently I am studying at SabaiCode
                            as Computer Science Programing Student.
                        </p>
                        <Link href='https://www.facebook.com' target="_blank"><FacebookIcon sx={{ fontSize: 35 }} /></Link>
                        <Link href='https://www.instagram.com' target="_blank" style={{ color: "red", }} ><InstagramIcon sx={{ fontSize: 35 }} /></Link>
                    </div>

                </div>
                <div className={styles.chhenglee}>
                    <div >
                        <img src="photo_2022-05-29_20-06-26.jpg" className={styles.image} />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.descrip}>
                            <h3>Veng Chhengly</h3>
                            <p>I am Chhenglee 21 years old. Currently I am studying at SabaiCode
                                as Computer Science Programing Student.
                            </p>
                            <Link href='https://www.facebook.com/chhenglyveng' target="_blank"><FacebookIcon sx={{ fontSize: 35 }} /></Link>
                            <Link href='https://www.instagram.com/chhar_lee/' target="_blank" style={{ color: "red", }} ><InstagramIcon sx={{ fontSize: 35 }} /></Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
}

export default About_2;