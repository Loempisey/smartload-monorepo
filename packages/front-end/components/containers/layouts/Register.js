import * as React from 'react';
import { TextField, InputLabel, FormControl, OutlinedInput, Checkbox, Typography, Link, Button, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { fireAuth } from '../../../services/firebase';
import { useRouter } from 'next/router';


const useStyles = makeStyles({
  container: {
    textAlign: "center",
    // marginLeft: "30%",
    marginTop: "4%",
    position: "absolute",
    lineHeight: "1.8cm",
    padding: "10px",
    borderRadius: "15px"
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
    borderColor: "#1976D2",
    width:""
  },
  link: {
    textDecoration: "none",
  }
})

export default function Register() {

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
  const handleCreateUser = (e) => {
    e.preventDefault();
    setLoading(true);
    const {fullname, username, email, password } = e.target.elements;
    setError("")
    fireAuth.createUserWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        const user = fireAuth.currentUser;
        user.updateProfile({
          displayName: username.value,
        
        }).then((res)=>{
          console.log("Sign up successful!")
        }).catch((err)=>{
          console.error(err)
        });
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
        <Grid item sm={4}>
        </Grid>
        <Grid item xs={12} md={8} sm={5}>
          <Paper className={classes.container} elevation={5}>
            <Typography className={classes.title}> Sign Up</Typography>

            <form onSubmit={handleCreateUser} className="mt-8 space-y-6" >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  type="text"
                  name="fullname"
                  label="Full Name"
                  placeholder="Full Name"
                  variant="outlined"
                  className={classes.textfield}
                />
              </div>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  type="text"
                  name="username"
                  label="Username"
                  placeholder="Username"
                  variant="outlined"
                  className={classes.textfield}
                />
              </div>
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
                <div style={{ width: "80%", marginLeft: "38px", display: "flex", marginTop: "5px" }}>
                  <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} />
                  <Typography style={{ textAlign: "left" }}>You&apos;re agreeing to our Term of <Link href="#" className={classes.link} >Service </Link>and our<Link href="#" className={classes.link}> Privacy</Link></Typography>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Link href="/dashboard" className={classes.link}>
                    <Button variant="outlined" type="submit" className={classes.button}>
                      {
                        loading?'Loading...':'Signup'
                      }
                    </Button>
                    <Typography color="error" className="mt-2 text-center text-sm text-red-600">{error}</Typography>
                  </Link>
                </div>
                <div style={{ marginTop: "5px" }}>
                  <Typography>Already have an account? <Link href="/signin" className={classes.link}>Login</Link></Typography>
                </div>
              </div>
            </form>
          </Paper>
        </Grid>
        <Grid item sm={4}>
        </Grid>
      </Grid>
    </div>


  );
}