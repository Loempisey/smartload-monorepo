import React from "react";
import {
  Avatar,
  Button,
  IconButton,
  ListItem,
  ListItemIcon,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { Dialog } from "@mui/material";
import { ListItemText } from "@mui/material";
import { List } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Switch from "@mui/material/Switch";
import { fireStore, fireStorage } from "../../../../services/firebase";
import PropTypes from "prop-types";
import { columns } from "./colums";
import deleteData from "../../../../utils/api/deleteData";
import postData from "../../../../utils/api/postData";
import updateData from "../../../../utils/api/updateData";
import { commaDecimal } from "validator/lib/alpha";
import ReactLoading from "react-loading";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Input = styled("input")({
  display: "none",
});

const TableCustomers = ({ columns = [], rows = [] }) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [file, setFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [update, setUpdate] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [id, setID] = React.useState("");
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [code, setCode] = React.useState("");
  const [avatar, setAvatar] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreateCustomer = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { avatar, name, phone, location, code } = e.target.elements;
      console.log({
        avatar: avatar.files[0],
        name: name.value,
        phone: phone.value,
        location: location.value,
        code: code.value,
      });
      const storageRef = fireStorage.ref("/profile");
      const fileRef = storageRef.child(avatar.files[0].name);
      await fileRef.put(avatar.files[0]);
      const url = await fileRef.getDownloadURL();
      console.log(url);
      await postData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/customer`, {
        avatar: url,
        name: name.value,
        phone: phone.value,
        location: location.value,
        code: code.value,
      });
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleDeleteCustomer = async (data) => {
    setOpenDelete(true);
    try {
      await deleteData(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/customer/${data._id}`
      );
      console.log("Delete success");
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateCustomer = (data) => {
    setOpenUpdate(true);
    setID(data._id);
    setName(data.name);
    setPhone(data.phone);
    setLocation(data.location);
    setCode(data.code);
  };

  const handleUpdateChange = async (e) => {
    e.preventDefault();
    console.log(id);
    const { name, phone, location, code } = e.target.elements;
    console.log({
      name: name.value,
      phone: phone.value,
      location: location.value,
      code: code.value,
    });

    const res = await updateData(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/customer/${id}`,
      {
        name: name.value,
        phone: phone.value,
        location: location.value,
        code: code.value,
      }
    );
    console.log("update", res);
  };

  return (
    <div>
      <div>
        <IconButton onClick={() => setOpen(true)}>
          <AddIcon color="primary" />
          <span
            style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "20px" }}
          >
            Create Customer
          </span>
        </IconButton>
        <div>
          <Dialog open={open} onClose={() => setOpen(false)}>
            <form onSubmit={handleCreateCustomer} style={{ padding: 16 }}>
              {loading && <ReactLoading color="#000000" />}
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  style={{ width: 100, height: 100 }}
                />
              )}
              <label htmlFor="icon-button-file">
                <Input
                  accept=".jpg, .png"
                  id="icon-button-file"
                  type="file"
                  position="absolute"
                  name="avatar"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />{" "}
                  <Typography style={{ padding: "10px" }}>
                    Choose Profile
                  </Typography>
                </IconButton>
              </label>
              <br />

              <TextField type="text" name="name" label="name" />
              <br />
              <br />
              <TextField type="number" name="phone" label="phone" />
              <br />
              <br />
              <TextField type="text" name="location" label="location" />
              <br />
              <br />
              <TextField type="number" name="code" label="code" />
              <br />
              <br />
              <Button
                type="submit"
                variant="outlined"
                style={{ marginLeft: "75px" }}
              >
                Create
              </Button>
            </form>
          </Dialog>
        </div>
        <div>
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {columns.map((column, index) => {
                      return (
                        <TableCell
                          key={column.id}
                          align={column.align}
                          style={{
                            textAlign: "left",
                            fontWeight: "bold",
                            fontSize: "medium",
                            backgroundColor: "whitesmoke",
                          }}
                        >
                          {column.label}
                          {index === 3 && <Switch defaultChecked />}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column, index) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ width: 50 }}
                              >
                                <div style={{ display: "flex" }}>
                                  {index === 0 && (
                                    <Avatar alt="profile" src={row.avatar} />
                                  )}
                                  <Typography
                                    style={{ marginLeft: 5, marginTop: "7px" }}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </Typography>

                                  {index === 3 && (
                                    <div>
                                      <IconButton
                                        // onClick={() => handleClickOpen()}
                                        onClick={() =>
                                          handleDeleteCustomer(row)
                                        }
                                      >
                                        <DeleteIcon color="error" />
                                      </IconButton>
                                      <IconButton
                                        onClick={() =>
                                          handleUpdateCustomer(row)
                                        }
                                      >
                                        <EditIcon color="primary" />
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
            <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)}>
              <form onSubmit={handleUpdateChange} style={{ padding: 16 }}>
                {file && (
                  <img
                    src={URL.createObjectURL(file)}
                    style={{ width: 100, height: 100 }}
                  />
                )}
                <label htmlFor="icon-button-file">
                  <Input
                    accept=".jpg, .png"
                    id="icon-button-file"
                    type="file"
                    position="absolute"
                    name="avatar"
                    onChange={(e) => setFile(e.target.files[0])}
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />{" "}
                    <Typography style={{ padding: "10px" }}>Upload</Typography>
                  </IconButton>
                </label>
                <br />
                <TextField
                  type="text"
                  value={name}
                  name="name"
                  label="name"
                  onChange={(_data) => setName(_data.target.value)}
                />
                <br />
                <br />
                <TextField
                  type="number"
                  value={phone}
                  name="phone"
                  label="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  type="text"
                  value={location}
                  name="location"
                  label="location"
                  onChange={(e) => setLocation(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  type="number"
                  value={code}
                  name="code"
                  label="code"
                  onChange={(e) => setCode(e.target.value)}
                />
                <br />
                <br />
                <Button type="submit" variant="outlined">
                  Update
                </Button>
              </form>
            </Dialog>
            <Dialog
              open={openDelete}
              onClose={()=> setOpenDelete(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <form onSubmit={handleDeleteCustomer}>
                <DialogTitle id="alert-dialog-title">
                  {"Delete Customer"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Are you sure want to delete ?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button autoFocus type="submit" color="error">
                    Delete
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableCustomers;

TableCustomers.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

TableCustomers.defaultProps = {
  columns: columns,
  rows: [
    {
      name: "Pisey",
    },
    {
      name: "Chengly",
    },
  ],
};
