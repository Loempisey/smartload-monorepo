import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { TextField, InputLabel, FormControl, OutlinedInput, Checkbox, Typography, Link, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import router, { useRouter } from 'next/router';
import { fireAuth, fireStore } from '../../../services/firebase';

import { useRecoilValue } from 'recoil';
import { USERSTATE } from '../../../states/userState';
const useStyles = makeStyles({

  textfield: {
    width: "500px",

  },
  link: {
    textDecoration: "none",
  },
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
    width: "100%"
  },
  title: {
    fontSize: "30px",
    marginBottom: "15px"
  },
  button: {
    paddding:"20px",
    margin:"10px",
    // // borderRadius: "25px",
    // color: "#1976D2",
    // borderColor: "#1976D2"
  },
  link: {
    textDecoration: "none",
  }
})

export default function ChangPass() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const userInfo = useRecoilValue(USERSTATE)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [error, setError] = React.useState('')
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,

  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const classes = useStyles();

  const handleChangePassword = (e) => {
    e.preventDefault();
    const old_password = e.target.elements.old_password.value;
    const new_password = e.target.elements.new_password.value;
    const verify_password = e.target.elements.verify_password.value;
    setError('')
    if (new_password == verify_password) {
      fireAuth.signInWithEmailAndPassword(
        userInfo.email, old_password
      ).then((auth) => {
        const user = fireAuth.currentUser
        user.updatePassword(new_password)
          .then((res) => {
            console.log("change Password Success");
            handleClose()
          }).catch((err) => {
            console.error(err);
            setError(err.message)
          })
      }).catch((err) => {
        setError(err.message)
      })
    } else {
      setError("Verify Password is fail!")
    }



  }




  return (
    <div>
      <Button variant="text" type="submit" onClick={handleClickOpen} style={{ padding: "0px" }}>
        Change Password
      </Button>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <form onSubmit={handleChangePassword}>
          <DialogTitle id="responsive-dialog-title">
            {"Change Password"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ lineHeight: "1.9cm", marginTop: "10px", width: "350px" }}>
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="Password"
                  variant="outlined"
                  className={classes.textfield}
                  name="old_password"
                  type="password"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="New Password"
                  variant="outlined"
                  className={classes.textfield}
                  name="new_password"
                  type="password"

                />
                <TextField
                  required
                  id="outlined-required"
                  label="Confirm Password"
                  variant="outlined"
                  className={classes.textfield}
                  name="verify_password"
                  type="password"

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
                {error && <Typography color='secondary'>{error}</Typography>}
                <div style={{ textAlign:"center" }}>
                  <Button autoFocus onClick={handleClose} color="error" className={classes.button} variant='outlined'>
                    Cancel
                  </Button>

                  <Button type="submit" color="primary" className={classes.button} variant='outlined'>Saved </Button>
                </div>

              </div>

              <div style={{ width: "80%", marginLeft: "10px", display: "flex", marginTop: "5px" }}>
                <Typography style={{ textAlign: "left" }}><Link href="/forgot" className={classes.link} >Forgot Password? </Link></Typography>
              </div>
            </DialogContentText>
          </DialogContent>
        </form>
      </Dialog>
    </div>
  );
}
