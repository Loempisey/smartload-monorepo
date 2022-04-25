import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { TextField, InputLabel, FormControl, OutlinedInput, Checkbox, Typography, Link, Grid, Paper, List, ListItem, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { FireStore, fireAuth } from '../../../services/firebase'
import PropTypes from 'prop-types'
require('firebase/auth')

const useStyles = makeStyles({
  textfield: {
    width: "100%",

  },
  link: {
    textDecoration: "none",
  },
  username: {
    // fontFamily: "'Quicksand', sans-serif",
    // fontSize: "20px",
    // fontWeight: "600"
  },
})

export default function ChangUser({
  name,
  
  

}) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  // const [username,setUsername]=React.useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();

  const handleChangeUserName = (e) => {
    e.preventDefault();
    const currentUser = fireAuth.currentUser;
    currentUser.updateProfile({
      displayName: e.target.username.value
    }).then((res) => {
      console.info(res);
      setOpen(false);
      window.location.reload();
    }).catch((err) => {
      console.error(err)
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
        <form onSubmit={handleChangeUserName}>
          <DialogTitle id="responsive-dialog-title" className={classes.username} >
            {"UserName"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ marginTop: "10px", width: "350px" }}>
              <div>
                <TextField

                  id="outlined-required"
                  label="Username"
                  name='username'
                  placeholder="Username"
                  variant="outlined"
                  className={classes.textfield}
                />
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <div >
              <Button autoFocus onClick={handleClose} color="error" variant='outlined' style={{margin:"10px", left:"-100px"}}>
                Cancel
              </Button>
              <Button autoFocus type='submit' variant='outlined' style={{margin:"10px", left:"-100px"}}>
                Save
              </Button>

            </div>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

ChangUser.propTypes={
  name: PropTypes.string,
  
  
}

ChangUser.defaultProps={
  name: 'Chang Username',
  
 
}