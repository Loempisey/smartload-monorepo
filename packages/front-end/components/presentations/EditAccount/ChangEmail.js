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
import { fireAuth } from '../../../services/firebase'
import { getAuth, updateEmail } from "firebase/auth";
import { useRecoilValue } from 'recoil';
import { USERSTATE } from '../../../states/userState';
import PropTypes from 'prop-types'
const useStyles = makeStyles({
  textfield: {
    width: "100%",
  },
  link: {
    textDecoration: "none",
  },
  change_email: {
    margin: "10px",

  },
})

export default function ChangEmail({
  name,
}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const userInfo = useRecoilValue(USERSTATE);
  const [error, setError] = React.useState('')
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,

  });

  const classes = useStyles();

  const handleChangeEmail = (e) => {
    e.preventDefault();
    const newEmail = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    setError('');
    fireAuth.signInWithEmailAndPassword(
      userInfo.email, password
    ).then((auth) => {
      auth.user.updateEmail(newEmail)
        .then((res) => {
          console.log("Update Email Success");
          handleClose()
          window.location.reload();

        }).catch((err) => {
          setError(err.message)
        })
    }).catch((err) => {
      setError(err.message)
    })
  }

  return (
    <div>
      <Button variant="text" onClick={handleClickOpen} style={{ padding: "0px" }}>
        {name}
      </Button>
      <Dialog
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <form onSubmit={handleChangeEmail}>
          <DialogTitle id="responsive-dialog-title">
            {"Change Email"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ lineHeight: "1.9cm", width: "350px", marginTop: "10px" }} >
              <div>
                <TextField
                  required
                  id="outlined-required"
                  label="New Email"
                  placeholder="Email"
                  variant="outlined"
                  className={classes.textfield}
                  name="email"
                />
              </div>
              <div>
                <FormControl variant="outlined" className={classes.textfield}>
                  <InputLabel htmlFor="outlined-adornment-password">Your Password</InputLabel>
                  <OutlinedInput
                    required
                    id="outlined-adornment-password"
                    type={values.showPassword ? 'text' : 'password'}
                    name='password'
                    className={classes.textfield}
                    label="Password"

                  />
                </FormControl>
                {
                  error && (<Typography color="secondary">{error}</Typography>)
                }
              </div>
              {/* <div style={{ width: "80%", marginLeft: "10px", display: "flex", marginTop: "5px" }}>
                  <Typography style={{ textAlign: "left" }}><Link href="#" className={classes.link} >Forgot Password? </Link></Typography>
                </div> */}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div style={{textAlign:"center", marginTop:"-20px"}}>
              <Button autoFocus onClick={handleClose} color="error" className={classes.chang_email} variant='outlined' style={{left:"-100px",margin:"-7px"}}>
                Cancel
              </Button>
              <Button autoFocus type='submit' className={classes.change_email} variant='outlined' style={{left:"-80px", }}>
                Saved
              </Button>
            </div>
          </DialogActions >
        </form>
      </Dialog>
    </div>
  );
}

ChangEmail.propTypes={
  name: PropTypes.string,
  
}

ChangEmail.defaultProps={
  name: 'Chang Password',
  
}
