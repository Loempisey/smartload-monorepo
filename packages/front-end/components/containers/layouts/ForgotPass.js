import * as React from 'react';
import { TextField, InputLabel, FormControl, OutlinedInput, Checkbox, Typography, Link, Button, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { fireAuth } from '../../../services/firebase';
import router, { useRouter } from 'next/router';
const useStyles = makeStyles({
    container: {
        textAlign: "center",
        marginLeft: "35%",
        position: "absolute",
        marginTop: "10%",
        lineHeight: "1.8cm",
        padding: "10px",
        width: "30%",
        borderRadius: "15px",
    },
    textfield: {
        width: "80%"
    },
    title: {
        fontSize: "30px",
        marginBottom: "15px"
    },
    button: {
        borderRadius: "25px",
        color: "#1976D2",
        borderColor: "#1976D2"
    },
    link: {
        textDecoration: "none",
    }
})
export default function Forgotpass() {

    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,

    });
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    const classes = useStyles();
    const router = useRouter();
    const [error,setError] = React.useState("");
    const handleForgotPassword = (e) =>{
        e.preventDefault()
        const {email} = e.target.elements;
        console.log(email.value);
        fireAuth.sendPasswordResetEmail(email.value)
        .then( (res) =>{
            alert("Please check your email")
            router.push("/signin")
            // setShowMessage(true)
            //     setIsForgotPassword(true)
                // setError("");
        }).catch((err)=>{
            console.error(err)
            setError(e?.message)
        })
    }
    return (

        <div>
            <Grid item sm={5}>
                <Paper className={classes.container} elevation={5}>
                    <Typography className={classes.title}>Forgot Password</Typography>
                    <Typography style={{ marginBottom: "20px" }}>Please enter your email</Typography>
                    <form onSubmit={handleForgotPassword}>
                        <div>
                            <TextField
                                required
                                id="outlined-required"
                                label="Email"
                                variant="outlined"
                                className={classes.textfield}
                                name="email"
                            />
                        </div>

                        <div>
                            {/* <FormControl variant="outlined" className={classes.textfield}>
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                    required
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    value={values.password}
                    onChange={handleChange('password')}
                    label="Password"
                    name="password"

                  />
                </FormControl> */}
                            {/* <div style={{ width: "80%", marginLeft: "35px", display: "flex", marginTop: "5px" }}>
                  <Typography style={{ textAlign: "left" }}><Link href="/forgot" className={classes.link} >Forgot Password? </Link></Typography>

                </div> */}
                            <div style={{ marginTop: "10px" }}>
                                <Button type="submit" variant="outlined" className={classes.button}>Send</Button>
                            </div>
                            <div style={{ marginTop: "5px" }}>
                                <Typography>Don&apos;t have an account? <Link href="/signup" className={classes.link}>Sing Up</Link></Typography>
                            </div>
                        </div>

                    </form>
                </Paper>
            </Grid>
        </div>
    );
}