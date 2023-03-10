import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Button, Typography } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import SimpleDialogDemo from '../orders/ViewInvoice';

const rows = [

    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Chhenglee</Typography>
        </div>,
        date: <Typography>13/06/2022</Typography>,
        price: <Typography style={{ height: "30px" }}>10$</Typography>,
        action: <div>
            {/* <Menu /> */}
            <div><IconButton color="primary" >
                <VisibilityIcon />&nbsp; <SimpleDialogDemo />
            </IconButton></div>

        </div>


    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://planw.in/wp-content/uploads/2021/02/avatar-4.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Pisey</Typography>
        </div>,

        date: <Typography>11/05/2022</Typography>,
        price: <Typography style={{ height: "30px" }}>10$</Typography>,
        action: <div>
            {/* <Menu /> */}
            <div><IconButton color="primary" >
                <VisibilityIcon />&nbsp; <SimpleDialogDemo />
            </IconButton></div>

        </div>
    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://icon-library.com/images/4_avatar-512.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Phirun</Typography>
        </div>,
        date: <Typography>09/04/2022</Typography>,
        price: <Typography style={{ height: "30px" }}>10$</Typography>,
        action: <div>
            {/* <Menu /> */}
            <div><IconButton color="primary" >
                <VisibilityIcon />&nbsp; <SimpleDialogDemo />
            </IconButton></div>

        </div>
    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://vbdigital.com.au/wp-content/uploads/2019/10/iconfinder.avatar-8.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Sin Tou</Typography>
        </div>,

        date: <Typography>17/03/2022</Typography>,
        price: <Typography style={{ height: "30px" }}>10$</Typography>,
        action: <div>
            {/* <Menu /> */}
            <div><IconButton color="primary" >
                <VisibilityIcon />&nbsp; <SimpleDialogDemo />
            </IconButton></div>

        </div>
    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://art.ngfiles.com/images/1416000/1416404_alert222_script-alert-1-script.png?f1599429715' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Siv Mey</Typography>
        </div>,

        date: <Typography>13/03/2022</Typography>,
        price: <Typography style={{ height: "30px" }}>10$</Typography>,
        action: <div>
            {/* <Menu /> */}
            <div><IconButton color="primary" >
                <VisibilityIcon />&nbsp; <SimpleDialogDemo />
            </IconButton></div>

        </div>
    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://cdn1.iconfinder.com/data/icons/user-pictures/100/boy-512.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Vutey</Typography>
        </div>,

        date: <Typography>22/02/2022</Typography>,
        price: <Typography style={{ height: "30px" }}>10$</Typography>,
        action: <div>
            {/* <Menu /> */}
            <div><IconButton color="primary" >
                <VisibilityIcon />&nbsp; <SimpleDialogDemo />
            </IconButton></div>
            </div>
    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://www.smacgigworld.com/assets/img/avatar.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Bunlong</Typography>
        </div>,

        date: <Typography>20/02/2022</Typography>,
        price: <Typography style={{ height: "30px" }}>10$</Typography>,
        action: <div>
            {/* <Menu /> */}
            <div><IconButton color="primary" >
                <VisibilityIcon />&nbsp; <SimpleDialogDemo />
            </IconButton></div>

        </div>
    },
    {
        avatar: <div style={{ display: "flex" }}>
            <Avatar src='https://www.saharaprofessional.in/images/men1.png' alt="img" />
            <Typography style={{ marginLeft: "10px", marginTop: "7px" }}>Sreng Hong</Typography>
        </div>,

        date: <Typography>08/01/2022</Typography>,
        price: <Typography style={{ height: "30px" }}>10$</Typography>,
        action: <div>
            {/* <Menu /> */}
            <div><IconButton color="primary" >
                <VisibilityIcon />&nbsp; <SimpleDialogDemo />
            </IconButton></div>

        </div>
    },
];

export {
    rows
}