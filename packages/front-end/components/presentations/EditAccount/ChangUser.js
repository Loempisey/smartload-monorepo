import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { TextField, InputLabel, FormControl, OutlinedInput, Checkbox, Typography, Link, Grid, Paper, List, ListItem, IconButton, appBarClasses } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import updateData from '../../../utils/api/updateData';
// require('firebase/auth')

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

  setCurrentUser
  
  

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

  const handleChangeUserName = async (e) => {
    e.preventDefault();
    const username =e.target.username;
  
    console.log({username:username.value});
    try {
      const res = await updateData(
        `${process.env.NEXT_PUBLIC_API_URL}/user`,
        {
          username: username.value
        },
      );
      console.log("username update ==>", res)
      if(res.statusCode==200){
        setCurrentUser(res.data);
        handleClose();
      }
   
     
    } catch (error) {
      console.log(error);
    }
    // const currentUser = fireAuth.currentUser;
    // currentUser.updateProfile({
    //   displayName: e.target.username.value
    // }).then((res) => {
    //   console.info(res);
    //   setOpen(false);
    //   window.location.reload();
    // }).catch((err) => {
    //   console.error(err)
    // })
  }

  return (

    <div>
      <Button variant="text" onClick={handleClickOpen} style={{ padding: "0px" }}>
       Change Name
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
              <Button oautoFocus type='submit' variant='outlined' style={{margin:"10px", left:"-100px"}}>
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
// newUser setState({name:;;;;; , ...user})
// update user : newSignin(newUser){
  //  signin(newUser)
// }