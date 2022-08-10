import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import Link from 'next/link'
import { style } from '@mui/system';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PropTypes from 'prop-types'
import { columns } from './columns';
import { rows } from './rows';
import deleteData from "../../../utils/api/deleteData";
import { Icon, Button, IconButton, Typography } from '@mui/material';
import { Dialog } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";




const OrderTable = ({ columns = [], rows = [] }) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [openBlock, setOpenBlock] = React.useState(false);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleBlockComment = async (data) => {
        setOpenBlock(true);
        try {
            await deleteData(
                `${ process.env.NEXT_PUBLIC_API_URL } / api / v1 / comment / ${ data._id }`
            );
            console.log("Delete success");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
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
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.No}>
                                            {columns.map((column, index) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        <div style={{ display: "flex" }}>
                                                            <Typography>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </Typography>

                                                            {index === 5 && (
                                                                <div>
                                                                    <IconButton>
                                                                        <QuestionAnswerIcon color="primary" />
                                                                    </IconButton>
                                                                    <IconButton onClick={() => handleBlockComment(row)}>
                                                                        <RemoveCircleIcon color="error" />
                                                                    </IconButton>
                                                                </div>
                                                            )}
                                                        </div>

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
            <div>
                <Dialog
                    open={openBlock}
                    onClose={() => setOpenBlock(false)}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <form onSubmit={handleBlockComment}>
                        <DialogTitle id="alert-dialog-title">
                            {"Delete Product"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure want to delete ?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions style={{ marginRight: "55x" }}>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button autoFocus type="submit" color="error">
                                Delete
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>

        </div>

    );
}

export default OrderTable;

OrderTable.propTypes = {
    columns: PropTypes.array.isRequired,
    rows: PropTypes.array.isRequired
}

OrderTable.defaultProps = {
    columns: columns,
    rows: rows
}