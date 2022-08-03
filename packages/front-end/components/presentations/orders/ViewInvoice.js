import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { makeStyles } from "@mui/styles";
import VisibilityIcon from '@mui/icons-material/Visibility';


const emails = ['username@gmail.com', 'user02@gmail.com'];
const useStyles = makeStyles({
  avatar: {
    marginLeft: "70px",
    width: "80px",
    height: "80px"
  },
  dialog: {
    padding: "30px"
  }
})

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const classes = useStyles();
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}  >
      <div className={classes.dialog}>
        <DialogTitle style={{ textAlign: "center",paddingTop:"0px" }}>Invoice</DialogTitle>
        <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" className={classes.avatar} />
        <p>Name : Veng Chhenglee</p>
        <p>Phone : 069 64 94 90</p>
        <p>Date : 13/09/2022</p>
        <p>Code Item : 001,007</p>
        <p>Price : 10$</p>
        <p>Location : Toul Kok</p>
        <Button
          type="submit"
          variant="outlined"
          style={{ marginLeft: "45px" }}
        >Print</Button>
        <Button
          onClick={handleClose}
          variant="outlined"
          color="error"
          style={{ marginLeft: "5px" }}
        >Cancel</Button>
      </div>

    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div >

      <IconButton onClick={handleClickOpen} style={{ padding: "0px" }}>
        <Typography style={{ color: "black" }}><VisibilityIcon/></Typography>
      </IconButton>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
