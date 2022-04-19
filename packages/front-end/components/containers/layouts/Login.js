import * as React from 'react';
import { TextField, InputLabel, FormControl, OutlinedInput, Checkbox, Typography, Link, Button, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {fireAuth} from '../../../services/firebase'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {useAuth} from '../layouts/AuthUserProvider'
// import { Container,Row, Col } from 'reactstrap';


const useStyles = makeStyles({
  container: {
    textAlign: "center",
    // marginLeft: "35%",
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

export default function Login() {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,

  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const classes = useStyles();
  const router = useRouter();

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  // const {signInWithEmailAndPassword} = useAuth();

  const handleSigninUser = (e) => {
    e.preventDefault();
    setLoading(true);
    const { email, password } = e.target.elements;
    setError("")
    // signInWithEmailAndPassword(email, password)
    fireAuth.signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        console.log('Success');
        router.push('/dashboard')
        setLoading(false)
      }).catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false)
      })
  }
  return (

    <div>
      <Grid container spacing={1}>
        <Grid item xs={4}></Grid>
        <Grid item xs={12} md={8} sm={5}>
          <Paper className={classes.container} elevation={5}>
            <Typography className={classes.title}> Login</Typography>

            <form onSubmit={handleSigninUser} className="mt-8 space-y-6" >

              <div>

                <TextField
                  required
                  id="outlined-required"
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="Email"
                  variant="outlined"
                  className={classes.textfield}
                />
              </div>

              <div>
                <FormControl variant="outlined" className={classes.textfield}>
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
                </FormControl>
                <div style={{ width: "80%", marginLeft: "35px", display: "flex", marginTop: "5px" }}>
                  <Typography style={{ textAlign: "left" }}><Link href="/forgot" className={classes.link} >Forgot Password? </Link></Typography>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Link href="/dashboard" className={classes.link}>
                    <Button variant="outlined" type="submit" className={classes.button}>

                      {
                        loading ? 'Loading ...' : 'Login'
                      }
                    </Button>
                    <Typography color="error" className="mt-2 text-center text-sm text-red-600">{error}</Typography>
                    {' '}
                  </Link>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <Typography>Don&apos;t have an account? <Link href="/signup" className={classes.link}>Sign Up</Link></Typography>
                </div>
              </div>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>   
  </div>
  );
}