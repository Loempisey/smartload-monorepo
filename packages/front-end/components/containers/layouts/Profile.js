import * as React from 'react';
import { useEffect } from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import {fireAuth} from './../../../services/firebase'
export default function ProfilePopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const userInfo = fireAuth.currentUser;
    useEffect(()=>{
        console.log(userInfo)
        localStorage.setItem("userInfo",userInfo)
    });
    if (!userInfo) return <div/>;
  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
          <img style={{borderRadius:100,width:50}} src={userInfo.photoURL}/> 
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <div style={{display:"block"}}>
        <Typography sx={{ p: 1 }}>
          {
            userInfo.displayName
          }
        </Typography>
        <div>
        {/* <Typography sx={{ p: 1 }}>chhenglee@gmail.com</Typography> */}
        </div>
        </div>
       
      </Popover>
    </div>
  );
}
