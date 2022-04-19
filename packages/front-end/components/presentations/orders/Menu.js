import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ListTwoToneIcon from '@mui/icons-material/ListTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import Link from 'next/link';
import IconButton from '@mui/material/IconButton';
import VerifiedIcon from '@mui/icons-material/Verified';
import PaidIcon from '@mui/icons-material/Paid';


export default function Menu() {
    const [anchorEl, setAnchorEl] = React.useState(null);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    return (
        <div>
            <Button aria-describedby={id} onClick={handleClick}>
                <ListTwoToneIcon fontSize="large" />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div style={{ display: "block" }}>
                    <div><Link href="https://www.facebook.com/">
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <MapsUgcOutlinedIcon />&nbsp;<Typography style={{ color: "black" }}>Chart</Typography>
                        </IconButton>
                    </Link></div>
                    <div><IconButton color="primary" aria-label="add to shopping cart">
                        <PaidIcon />&nbsp;<Typography style={{ color: "black" }}>Paid</Typography>
                    </IconButton></div>
                    <div><IconButton color="primary" aria-label="add to shopping cart">
                        <VerifiedIcon />&nbsp;<Typography style={{ color: "black" }}>Delivered</Typography>
                    </IconButton></div>
                    <div><IconButton color="error" aria-label="add to shopping cart">  
                            <DeleteIcon/>&nbsp;<Typography style={{ color: "black" }}>Delete</Typography>
                    </IconButton></div>
                </div>
            </Popover>
        </div>
    );
}
