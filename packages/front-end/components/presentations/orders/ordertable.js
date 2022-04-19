import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import Link from 'next/link'
import { style } from '@mui/system';
import Menu from './Menu';


const columns = [
    { id: 'avatar', minWidth: 50, label: "Name" },

    {
        id: 'payment',
        label: 'Payment',
        minWidth: 170,
        align: 'left',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },

    { id: 'action', label: 'Action', minWidth: 100, align: 'center' },
];


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

export default function OrderTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth, fontWeight: "bold", fontSize: "medium", backgroundColor: "whitesmoke" }}
                                >
                                    {column.label}

                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}

                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
