import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { size } from 'lodash';
import { makeStyles } from '@mui/styles';
import { Grid } from '@mui/material';
import React, { useState } from 'react';
import useRef from 'react';
import {fireStore, fireAuth} from '../../../services/firebase';
import emailjs from 'emailjs-com'
const useStyles = makeStyles({
    // content: {
    //     display: "flex",
    //     // justifyContent:"space-evenly",
    //     marginTop: "10px",
    //     border: "1.5px",
    //     borderRadius: "5px",
    //     borderStyle: "solid",
    //     borderColor: "whitesmoke",
    //     padding: "10px",
    // },
    // textfield: {
    //     marginLeft: "25%",
    //     width: "30%"
    // },
    send: {
        "&:hover": {
            backgroundColor: '#145DA0',
            color: "white",

        }
    }

});

const Contact = () => {
    const classes = useStyles()

    
    function handleSendEmail  (e)  {
        e.preventDefault();
        const { fullname, email, phonenumber, textarea } = e.target.elements;
        console.log(fullname.value, email.value, phonenumber.value, textarea.value);
        fireStore.collection('message')
            .add({
                fullname: fullname.value,
                email: email.value,
                phone: phonenumber.value,
                text: textarea.value,
            }).then((res) => {
                console.log('success')
            }).catch((err) => {
                console.error(err?.message)
            })
        emailjs.sendForm('service_6k2jm7n', 'template_hhpd6vb',e.target,"user_rAXiPI1sWT6liGYtkltrp")
          .then((res) => {
              alert("message is sent!")
          }).catch((err)=>{
              console.error(err)
          })
          
      };
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={4}>

                </Grid>
                <Grid item xs={6}>
                    <div style={{ textAlign: "center",marginLeft:"-150px", marginTop: "100px",marginBottom:"50px" }}>
                        <h3 style={{ fontSize: "36px", fontWeight: "500", color: "#145DA0", fontFamily: "'Quicksand', sans-serif",}} id='Contact'>Contact Us</h3>
                        <p style={{ fontWeight: "500", marginTop: "-30px", fontFamily: "'Quicksand', sans-serif",  fontSize:"18px" }}>Reach us with this information to start with our service.</p>

                    </div>
                </Grid>
                
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6} sm={12}>
                    <div style={{
                        // position: "absolute",
                        // minHeight: "100vh",
                        padding: "-20px 100px",
                        display: "block",
                        // justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        // marginLeft: "60px",

}} >
                        <div style={{ width: "100%", display: "inline-block", justifyContent: "center", alignItems: "center",marginLeft:"200px" }}>
                            <div>
                                <div style={{ display: "flex" }}>
                                    <LocationOnIcon style={{ minWidth: "60px", height: "60px", justifyContent: "center", alignItems: "center", borderRadius: "50%", color: "rgb(20, 93, 160)" }} />
                                    <h3 style={{ marginLeft: "20px", fontFamily: "'Quicksand', sans-serif", }}>Address</h3>
                                </div>
                                <p style={{ display: "flex", marginLeft: "80px", marginTop: "-15px", fontFamily: "'Quicksand', sans-serif",fontWeight:"500" }}>Boeng Keng Korng Bei, <br></br>Toul Sleng, Phnom Penh</p>
                            </div>
                            <div>
                                <div style={{ display: "flex" }}>
                                    <PhoneIcon style={{ minWidth: "60px", height: "60px", justifyContent: "center", alignItems: "center", borderRadius: "50%", color: "rgb(20, 93, 160)" }} />
                                    <h3 style={{ marginLeft: "20px", fontFamily: "'Quicksand', sans-serif", }}>Phone </h3>

                                </div>
                                <p style={{ display: "flex", marginLeft: "80px", marginTop: "-15px",fontFamily: "'Quicksand', sans-serif", fontWeight:"500" }}>+855 86638609 / 98765432</p>
                            </div>
                            <div>
                                <div style={{ display: "flex" }}>
                                    <MailOutlineIcon style={{ minWidth: "60px", height: "60px", justifyContent: "center", alignItems: "center", borderRadius: "50%", color: "rgb(20, 93, 160)" }} />
                                    <h3 style={{ marginLeft: "20px" , fontFamily: "'Quicksand', sans-serif",}}>Email</h3>

                                </div>
                                <p style={{ display: "flex", marginLeft: "80px", marginTop: "-15px", fontFamily: "'Quicksand', sans-serif", fontWeight:"500" }}>smartloadofficial @gmail.com</p>
                            </div>
                        </div>
                    </div>

                </Grid>
               

                <Grid item xs={12} md={4} sm={12}>
                    <div style={{ display: "flex", justifyContent: "center", marginTop: "-10px", marginLeft: "100px", background: "#eaeaea", width: "400px", height: "400px", borderRadius: "20px" }}>
                        {/* <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 2, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off" >
                        </Box> */}
                        <form  onSubmit={handleSendEmail} >
                            <h2 style={{ color: "rgb(20, 93, 160)", fontFamily: "'Quicksand', sans-serif", }}>Send Message</h2>
                            <TextField required id="standard-basic" type="text" name="fullname" label="Full Name" variant="standard" style={{ display: "block", margin: "15px", fontFamily: "'Quicksand', sans-serif", }} />
                            <TextField required id="standard-basic" type="text" name="email" label="Email" variant="standard" style={{ display: "block", margin: "15px", fontFamily: "'Quicksand', sans-serif",}} />
                            <TextField id="standard-basic" type="number" name="phonenumber" label="Phone Number" variant="standard" style={{ display: "block", margin: "15px" , fontFamily: "'Quicksand', sans-serif",}} />
                            <TextField id="standard-basic" type="text" name="textarea" label="Your Message" variant="standard" style={{ display: "block", margin: "15px" , fontFamily: "'Quicksand', sans-serif",}} />

<div style={{ padding: "10px" }}>
                                <Button type="submit" style={{ width: "100px", height: "40px", border: "1px outset rgb(73, 121, 255)", fontSize: "15px", position: "absolute", marginLeft: "60px", fontFamily: "'Quicksand', sans-serif", }} className={classes.send} >Submit</Button>
                            </div>
                        </form>
                    </div>
                </Grid >
            </Grid>
        </div>
    );
}

export default Contact;