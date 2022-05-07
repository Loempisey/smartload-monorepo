import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Button, Typography } from '@mui/material';
import Menu from './Menu';

const rows = [

    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Chhenglee</Typography>
        </div>,

        payment: <Button style={{ backgroundColor: "#EB3223", color: "white", height: "30px" }}>Unpaid</Button>,
        status: <Button style={{ backgroundColor: "#5686E1", color: "white", height: "30px" }}>Pending</Button>,
        action: <div>
            <IconButton color="error" aria-label="add to shopping cart">
                <Menu/>
            </IconButton>
        </div>


    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://planw.in/wp-content/uploads/2021/02/avatar-4.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Chhenglee</Typography>
        </div>,

        payment: <Button style={{ backgroundColor: "#EB3223", color: "white", height: "30px" }}>Unpaid</Button>,
        status: <Button style={{ backgroundColor: "#5686E1", color: "white", height: "30px" }}>Pending</Button>,
        action: <div>
            <IconButton color="error" aria-label="add to shopping cart">
                <Menu/>
            </IconButton>
        </div>
    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://icon-library.com/images/4_avatar-512.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Chhenglee</Typography>
        </div>,
        // <Button style={{ backgroundColor: "#2FC862", color: "black", height: "30px" }}>Paid</Button>,
        payment: <Button style={{ backgroundColor: "#EB3223", color: "white", height: "30px" }}>Unpaid</Button>,
        status: <Button style={{ backgroundColor: "#5686E1", color: "white", height: "30px" }}>Pending</Button>,
        action: <div>
            <IconButton color="error" aria-label="add to shopping cart">
                <Menu/>
            </IconButton>
        </div>
    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://vbdigital.com.au/wp-content/uploads/2019/10/iconfinder.avatar-8.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Chhenglee</Typography>
        </div>,

        payment: <Button style={{ backgroundColor: "#EB3223", color: "white", height: "30px" }}>Unpaid</Button>,
        status: <Button style={{ backgroundColor: "#5686E1", color: "white", height: "30px" }}>Pending</Button>,
        action: <div>
            <IconButton color="error" aria-label="add to shopping cart">
                <Menu/>
            </IconButton>
        </div>
    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://art.ngfiles.com/images/1416000/1416404_alert222_script-alert-1-script.png?f1599429715' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Chhenglee</Typography>
        </div>,

        payment: <Button style={{ backgroundColor: "#EB3223", color: "white", height: "30px" }}>Unpaid</Button>,
        status: <Button style={{ backgroundColor: "#5686E1", color: "white", height: "30px" }}>Pending</Button>,
        action: <div>
            <IconButton color="error" aria-label="add to shopping cart">
                <Menu/>
            </IconButton>
        </div>
    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/boy-512.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Chhenglee</Typography>
        </div>,

        payment: <Button style={{ backgroundColor: "#EB3223", color: "white", height: "30px" }}>Unpaid</Button>,
        status: <Button style={{ backgroundColor: "#5686E1", color: "white", height: "30px" }}>Pending</Button>,
        action: <div>
<IconButton color="error" aria-label="add to shopping cart">
                <Menu/>
            </IconButton>
        </div>
    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://www.smacgigworld.com/assets/img/avatar.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Chhenglee</Typography>
        </div>,

        payment: <Button style={{ backgroundColor: "#EB3223", color: "white", height: "30px" }}>Unpaid</Button>,
        status: <Button style={{ backgroundColor: "#5686E1", color: "white", height: "30px" }}>Pending</Button>,
        action: <div>
            <IconButton color="error" aria-label="add to shopping cart">
                <Menu/>
            </IconButton>
        </div>
    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Chhenglee</Typography>
        </div>,

        payment: <Button style={{ backgroundColor: "#EB3223", color: "white", height: "30px" }}>Unpaid</Button>,
        status: <Button style={{ backgroundColor: "#5686E1", color: "white", height: "30px" }}>Pending</Button>,
        action: <div>
            <IconButton color="error" aria-label="add to shopping cart">
                <Menu/>
            </IconButton>
        </div>
    },
];

export {
    rows
}