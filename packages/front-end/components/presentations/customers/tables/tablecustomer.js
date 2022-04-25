import React from "react";
import { Avatar, Button, IconButton, ListItem, ListItemIcon, TextField, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Dialog } from "@mui/material";
import { ListItemText } from "@mui/material";
import { List } from "@mui/material";
import { styled } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Switch from '@mui/material/Switch';
import { fireStore, fireStorage } from '../../../../services/firebase';
import PropTypes from 'prop-types'
import { columns } from "./colums";
const Input = styled("input")({
  display: "none",
});


const TableCustomers = ({columns=[],rows=[]}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  const [update, setUpdate] = React.useState([])
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false)
  const [id, setID] = React.useState("")
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [location, setLocation] = React.useState("")
  const [code, setCode] = React.useState("")


  const handleCreateCustomer = (e) => {
    e.preventDefault();
    const { avatar, name, phone, location, code } = e.target.elements;
    console.log(name.value, phone.value, location.value, code.value, avatar.files[0]);
    const storageRef = fireStorage.ref('/profile');
    const fileRef = storageRef.child('avatar.files[0].name');
    fileRef.put(avatar.files[0])
      .then((res) => {
        fileRef.getDownloadURL()
          .then((res) => {
            console.log(res);
            fireStore.collection('customer')
              .add({
                avatar: res,
                name: name.value,
                phone: phone.value,
                location: location.value,
                code: code.value,

              }).then((res) => {
                console.info('success')
                setOpen(false)

              }).catch((err) => {
                console.error(err.message)
              })
          })
      })
  };

  const handleDeleteCustomer = (data) => {
    console.log(data)
    fireStore
      .collection('customer')
      .doc(data.id)
      .delete()
      .then((res) => {
        console.info('success')
      }).catch((err) => {
        console.error(err.message);
      });
  };

  const handleUpdateCustomer = (data) => {
    setOpenUpdate(true);
    setID(data.id);
    setName(data.name);
    setPhone(data.phone)
    setLocation(data.location)
    setCode(data.code);

  }
  const handleUpdateChange = (e) => {
    e.preventDefault();
    fireStore
      .collection('customer')
      .doc(id)
      .update(
        {
          name, phone, location, code
        }
      ).then((res) => {
        console.info('success')
        setOpenUpdate(false)

      }).catch((err) => {
        console.error(err.message)
      })


  }

 

  return (
    <div>
      <div>
        <IconButton onClick={() => setOpen(true)}>
          < AddIcon color="primary" />
          <span style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "20px" }}>Create Customer</span>
        </IconButton>
        <div>
          <Dialog open={open} onClose={() => setOpen(false)} >
            <form onSubmit={handleCreateCustomer} style={{ padding: 16 }}>
              <label htmlFor="icon-button-file">
                <Input
                  accept=".jpg, .png"
                  id="icon-button-file"
                  type="file"
                  position="absolute"
                  name="avatar"
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCamera />{" "}
                  <Typography style={{ padding: "10px", }}>
                    Choose Profile
                  </Typography>
                </IconButton>
              </label><br />
              <TextField type="text" name="name" label="name" /><br /><br />
              <TextField type="number" name="phone" label="phone" /><br /><br />
              <TextField type="text" name="location" label="location" /><br /><br />
              <TextField type="number" name="code" label="code" /><br /><br />
              <Button type="submit" variant="outlined" style={{ marginLeft: "75px" }}>Create</Button>
            </form>
          </Dialog>
        </div>
        <div>


          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader aria-label="sticky table">
                <TableHead>
                  <TableRow>
                    {
                      columns.map((column, index) => {
                        return (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ textAlign: "left", fontWeight: "bold", fontSize: "medium", backgroundColor: "whitesmoke" }}
                          >
                            {column.label}
                            {index === 3 && <Switch defaultChecked />}
                          </TableCell>
                        )
                      })
                    }
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                          {columns.map((column, index) => {
                            const value = row[column.id];
                            return (
                              <TableCell key={column.id} align={column.align} style={{ width: 50, }}>
                                <div style={{ display: 'flex', }}>
                                  {
                                    index === 0 && <Avatar alt="profile" src={row.avatar} />
                                  }
                                  <Typography style={{ marginLeft: 5, marginTop: "7px" }}>
                                    {column.format && typeof value === 'number'
                                      ? column.format(value)
                                      : value}
                                  </Typography>

                                  {index === 3 && (
                                    <div >
                                      <IconButton onClick={() => handleDeleteCustomer(row)} >
                                        < DeleteIcon color="error" />
                                      </IconButton>
                                      <IconButton onClick={() => handleUpdateCustomer(row)}>
                                        < EditIcon color="primary" />
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
            <Dialog open={openUpdate} onClose={() => setOpenUpdate(false)} >
              <form onSubmit={handleUpdateChange} style={{ padding: 16 }} >
                <label htmlFor="icon-button-file">
                  <Input
                    accept=".jpg, .png"
                    id="icon-button-file"
                    type="file"
                    position="absolute"
                    name="avatar"
                  />
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                  >
                    <PhotoCamera />{" "}
                    <Typography style={{ padding: "10px", }}>
                      Upload
                    </Typography>
                  </IconButton>
                </label><br />
                <TextField type="text" value={name} name="name" label="name" onChange={(e) => setName(e.target.value)} /><br /><br />
                <TextField type="number" value={phone} name="phone" label="phone" onChange={(e) => setPhone(e.target.value)} /><br /><br />
                <TextField type="text" value={location} name="location" label="location" onChange={(e) => setLocation(e.target.value)} /><br /><br />
                <TextField type="number" value={code} name="code" label="code" onChange={(e) => setCode(e.target.value)} /><br /><br />
                <Button type="submit" variant="outlined">Update</Button>
              </form>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TableCustomers;

TableCustomers.propTypes={
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired
}

TableCustomers.defaultProps={
  columns:columns,
  rows: [
    {
      name:"Pisey"
    },
    {
      name:"Chengly"
    }
  ]
}