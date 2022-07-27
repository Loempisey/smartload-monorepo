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
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
import useSocket from "../../../../utils/sockets/useSocket";
=======
import DateFilter from "../../datefilter/DateFilter";
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js

const Input = styled("input")({
  display: "none",
});

<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
const TableCustomers = ({ columns = [], rows = [] }) => {
  const [allCustomers, setAllCustomers] = React.useState(rows);
  const [currentCustomer,setCurrentCustomer]=React.useState({});
  const socket = useSocket(process.env.NEXT_PUBLIC_API_URL);
  //socket.io
  React.useEffect(()=>{
      if(socket){
          socket.on('customer', (data) =>{
              setAllCustomers(data)
          });
      }
  },[socket])

=======
const TableInventory = ({ columns = [], rows = [] }) => {
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [file, setFile] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [update, setUpdate] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [openUpdate, setOpenUpdate] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [id, setID] = React.useState("");
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [qty, setQty] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [avatar, setAvatar] = React.useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleClose = () => {
    setOpen(false);
    setOpenDelete(false);
    setOpenUpdate(false)
  };

  const handleCreateInventory = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
      const { avatar, name, phone, location, code } = e.target.elements;
      console.log(name.value)
=======
      const { avatar, name, price, description, qty, category } = e.target.elements;
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
      console.log({
        avatar: avatar.files[0],
        name: name.value,
        price: price.value,
        description: description.value,
        qty: qty.value,
        category: category.value,
      });
      const storageRef = fireStorage.ref("/profile");
      const fileRef = storageRef.child(avatar.files[0].name);
      await fileRef.put(avatar.files[0]);
      const url = await fileRef.getDownloadURL();
      console.log(url);
      await postData(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/inventory`, {
        avatar: url,
        name: name.value,
        price: price.value,
        description: description.value,
        qty: qty.value,
        category: category.value,
      });
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
  const handleDeleteCustomer = async (e) => {
   e.preventDefault();
    try {
      await deleteData(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/customer/${currentCustomer._id}`
=======
  const handleDeleteInventory = async (data) => {
    setOpenDelete(true);
    try {
      await deleteData(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/inventory/${data._id}`
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
      );
      console.log("Delete success");
      setOpenDelete(false)
    } catch (error) {
      console.log(error);
    }
  };

<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
  const handleUpdateCustomer = (data) => {
    setOpenUpdate(true)
=======
  const handleUpdateInventory = (data) => {
    setOpenUpdate(true);

>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
    setID(data._id);
    setName(data.name);
    setPrice(data.price);
    setDescription(data.description);
    setQty(data.qty);
    setCategory(data.category);
  };

  const handleUpdateChange = async (e) => {
    e.preventDefault();
    console.log(id);
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
    const { name, phone, location, code } = e.target.elements;
    console.log({
      name: name.value,
      phone: phone.value,
      location: location.value,
      code: code.value,
    });

    try{
      const res = await updateData(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/customer/${id}`,
        {
          name: name.value,
          phone: phone.value,
          location: location.value,
          code: code.value,
        }
      );
      console.log("Update success", res);
      setOpenUpdate(false);  
    }catch(error){
      console.log(error);
    }

  };
=======
    setLoading(true);
    try {
      const { name, price, description, qty, category } = e.target.elements;
      console.log({
        name: name.value,
        price: price.value,
        description: description.value,
        qty: qty.value,
        category: category.value,
      });

      const res = await updateData(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/inventory/${id}`,
        {
          name: name.value,
          price: price.value,
          description: description.value,
          qty: qty.value,
          category: category.value,
        });
      setLoading(false);
      setOpen(false);
      console.log("update", res);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js

  return (
    <div>
      <div>
        <div style={{ border: "1px", borderColor: "black", backgroundColor: "#0070f3", width: "150px", float: "right", marginBottom: "10px", textAlign: "center" }}>
          <IconButton onClick={() => setOpen(true)} >
            <AddIcon style={{ color: "white" }} />
            <span
              style={{ fontFamily: "'Quicksand', sans-serif", fontSize: "15px", color: "white" }}
            >
              New Product
            </span>
          </IconButton>
        </div>
        {/* <div style={{float:"Right",marginBottom:"10px"}}><DateFilter/></div> */}

        <div>
          <Dialog open={open} onClose={() => setOpen(false)}>
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
            <form onSubmit={handleCreateCustomer} style={{ paddingLeft:50,paddingRight:50,paddingBottom:40,paddingTop:40 }}>
             
              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  style={{ width: 100, height: 100,marginLeft:"65px"}}
                />
              )}
              {loading && <ReactLoading  type="cubes" style={{marginLeft:"80px",width:"50px",height:"10px"}}/>}
=======
            <form onSubmit={handleCreateInventory} style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 10, paddingTop: 10 }}>

              {file && (
                <img
                  src={URL.createObjectURL(file)}
                  style={{ width: "75px", height: "75px", marginLeft: "65px" }}
                />
              )}
              {loading && <ReactLoading type="cubes" style={{ marginLeft: "80px", width: "50px", height: "10px" }} />}
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
              <label htmlFor="icon-button-file">
                <Input
                  accept=".jpg, .png"
                  id="icon-button-file"
                  type="file"
                  position="absolute"
                  name="avatar"
                  onChange={(e) => setFile(e.target.files[0])}
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
                /><br/>
=======
                /><br />
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
                  style={{marginLeft:"50px"}}
                >
                  <PhotoCamera />{" "}
                  <Typography style={{ padding: "0px" }}>
                    Choose Profile
=======
                  style={{ marginLeft: "45px" }}
                >
                  <PhotoCamera />{" "}
                  <Typography style={{ padding: "0px" }}>
                    Choose Image
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
                  </Typography>
                </IconButton>
              </label>
              <br />

<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
              <TextField type="text" name="name" label="name" style={{width:"100%"}} />
=======
              <TextField type="text" name="name" label="name" style={{ width: "100%" }} />
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
              <br />
              <br />
              <TextField type="number" name="price" label="price" />
              <br />
              <br />
              <TextField type="text" name="description" label="description" />
              <br />
              <br />
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
              <TextField type="number" name="code" label="code"  style={{width:"100%"}} />
=======
              <TextField type="text" name="qty" label="qty" />
              <br />
              <br />
              <TextField type="text" name="category" label="category" />
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
              <br />
              <br />
              <Button 
              onClick={handleClose} 
              variant="outlined"
              color="error"
              style={{ marginLeft: "15px" }}
              
              >Cancel</Button>
              <Button
                type="submit"
                variant="outlined"
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
                style={{ marginLeft: "10px" }}
              >
                Create
              </Button>
              
=======
                style={{ marginLeft: "20px" }}
              >
                Create
              </Button>
              <Button
                onClick={handleClose}
                variant="outlined"
                color="error"
                style={{ marginLeft: "5px" }}
              >Cancel</Button>
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
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
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
                          {/* {index === 3 && <Switch defaultChecked />} */}
=======
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allCustomers
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
                                  {index === 1 && (
                                    <Avatar alt="image" src={row.avatar} />
                                  )}
                                  <Typography
                                    style={{ marginLeft: 5, marginTop: "7px" }}
                                  >
                                    {column.format && typeof value === "number"
                                      ? column.format(value)
                                      : value}
                                  </Typography>

                                  {index === 6 && (
                                    <div>
                                      <IconButton
                                        // onClick={() => handleClickOpen()}
                                        onClick={() =>
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
                                          {
                                            setCurrentCustomer(row);
                                            setOpenDelete(true)
                                          }
                                         
=======
                                          handleDeleteInventory(row)
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
                                        }
                                      >
                                        <DeleteIcon color="error" />
                                      </IconButton>
                                      <IconButton
                                        onClick={() =>
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
                                         
                                          handleUpdateCustomer(row)
=======
                                          handleUpdateInventory(row)
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
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
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
              <form onSubmit={handleUpdateChange} style={{ paddingLeft:50,paddingRight:50,paddingBottom:40,paddingTop:40 }}>
                {file && (
                  <img
                    src={URL.createObjectURL(file)}
                    style={{ width: 100, height: 100,marginLeft:"65px" }}
                  />
                )}
                {loading && <ReactLoading  type="cubes" style={{marginLeft:"80px",width:"50px",height:"10px"}}/>}
=======
              <form onSubmit={handleUpdateChange} style={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 10, paddingTop: 10 }}>
                {file && (
                  <img
                    src={URL.createObjectURL(file)}
                    style={{ width: 80, height: 80, marginLeft: "65px" }}
                  />
                )}
                {loading && <ReactLoading type="cubes" style={{ marginLeft: "80px", width: "50px", height: "10px" }} />}
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
                <label htmlFor="icon-button-file">
                  <Input
                    accept=".jpg, .png"
                    id="icon-button-file"
                    type="file"
                    position="absolute"
                    name="avatar"
                    onChange={(e) => setFile(e.target.files[0])}
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
                  /><br/>
=======
                  /><br />
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
                  <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
                    style={{marginLeft:"60px"}}
                  >
                    <PhotoCamera />{" "}
                    <Typography style={{ padding: "0px" }}>Upload</Typography>
=======
                    style={{ marginLeft: "50px" }}
                  >
                    <PhotoCamera />{" "}
                    <Typography style={{ padding: "0px" }}>New Image</Typography>
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
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
                  value={price}
                  name="price"
                  label="price"
                  onChange={(e) => setPrice(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  type="text"
                  value={description}
                  name="description"
                  label="description"
                  onChange={(e) => setDescription(e.target.value)}
                />
                <br />
                <br />
                <TextField
                  type="text"
                  value={qty}
                  name="qty"
                  label="qty"
                  onChange={(e) => setQty(e.target.value)}
                />
                <br />
                <br />
<<<<<<< HEAD:packages/front-end/components/presentations/customers/tables/tablecustomer.js
                <Button 
              onClick={handleClose} 
              variant="outlined"
              color="error"
              style={{marginLeft:"15px"}}
            
              >Cancel</Button>
                <Button autoFocus type="submit" variant="outlined" style={{ marginLeft: "10px" }}>
=======
                <TextField
                  type="text"
                  value={category}
                  name="category"
                  label="category"
                  onChange={(e) => setCategory(e.target.value)}
                />
                <br />
                <br />
                <Button type="submit" variant="outlined" style={{ marginLeft: "20px" }}>
>>>>>>> afffeda078a063df4a69b24d84bd9fa318d67087:packages/front-end/components/presentations/inventory/tables/tableinventory.js
                  Update
                </Button>
                <Button
                  onClick={handleClose}
                  variant="outlined"
                  color="error"
                  style={{ marginLeft: "5px" }}
                >Cancel</Button>
              </form>
            </Dialog>
            <Dialog
              open={openDelete}
              onClose={() => setOpenDelete(false)}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <form onSubmit={handleDeleteInventory}>
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
      </div>
    </div>
  );
};

export default TableInventory;

TableInventory.propTypes = {
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
};

TableInventory.defaultProps = {
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
