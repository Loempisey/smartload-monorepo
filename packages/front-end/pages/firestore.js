import {firestore} from '../services/firebase'
import { TextField, Button } from "@material-ui/core";
import React from 'react'
import { Snapshot } from "recoil";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { IconButton } from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from '@material-ui/icons/Edit';
import { Dialog } from "@material-ui/core";

const FireStore = () => {
    const [products, setProducts] = React.useState([]);
    const [id, setID] = React.useState("");
    const [name, setName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [open, setopen] = React.useState(false)

    const handleCreateADocument = (e) => {
        e.preventDefault()
        const { name, price } = e.target.elements;
        console.log(name.value, price.value);
        firestore.collection('products')
            .add({
                name: name.value,
                price: price.value,
            }).then((res) => {
                console.info('Success');
                e.target.rest();
            }).catch((err) => {
                console.error(err)
            })
    }
    const handleDeleteProduct = (data) => {
        firestore
            .collection('products')
            .doc(data.id)
            .delete()
            .then((res) => {
                alert("success");
            }).catch((err) => {
                console.error(res.message);
            });
    };
    const handleUpdateProduct = (data) => {
        console.log(data);
        setID(data.id);
        setName(data.name);
        setPrice(data.price);
        setopen(true);

    }
    const handleSubmitChange=(e)=>{
        e.preventDefault();
        firestore.collection('products').doc(id).update(
          {
            name,price
          }
        ).then((res)=>{
          console.log("Updated");
          console.log(res);
          setopen(false);
        }).catch((err)=>{
          console.error(err.message)
        })
        console.log({id,name,price})
        
      }
    React.useEffect(() => {
        firestore.collection('products')
            .onSnapshot((snapshot) => {
                const product = snapshot.docs.map((doc) => {
                    return (
                        {
                            id: doc.id,
                            ...doc.data()
                        }
                    )
                });
                setProducts(product)
                console.log(products)
            })
    }, [])
    return (
        <div>
            <form onSubmit={handleCreateADocument}>
                <TextField type="text" name="name" label="name" variant="standard" /><br></br>
                <TextField type="number" name="price" label="price" variant="standard" /><br></br><br></br>
                <button type="submit" variant="standard">Create</button><br></br><br></br>
            </form>
            <div>
                <List>
                    {
                        products.map((item, index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <IconButton onClick={() => handleDeleteProduct(item)}><DeleteIcon color="secondary" /></IconButton>
                                        <IconButton onClick={() => handleUpdateProduct(item)}><EditIcon color="primary" /></IconButton>
                                    </ListItemIcon>
                                    <ListItemText primary={item.name} secondary={item.price + "$"} />
                                </ListItem>
                            )
                        })
                    }
                </List>
                <Dialog open={open} onClose={() => setopen(false)} >
                    <form style={{ padding: 16 }} onSubmit={handleSubmitChange}>
                        <TextField type="text" name="name" label="name" variant="standard" value={name} onChange={(e) => setName(e.target.value)} /><br></br>
                        <TextField type="number" name="price" label="price" variant="standard" value={price} onChange={(e) => setPrice(e.target.value)} /><br></br><br></br>
                        <Button type="submit" variant="standard">Save Change</Button><br></br><br></br>
                    </form>
                </Dialog>
            </div>


        </div>
    );
}
export default FireStore;