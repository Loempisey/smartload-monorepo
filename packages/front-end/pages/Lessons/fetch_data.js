import { Box, Button, ListItem, ListItemIcon, ListItemText, MenuList, Typography } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import useSWR from 'swr';
import fetcher from '../../utils/api/fetcher'
import postData from "../../utils/api/postData";

export async function getServerSideProps(ctx) {
    const res = await fetch(`http://localhost:3003/api/v1/order`)
    const users = await res.json();
    return {
        props: {
            users
        }
    }
}



const UserPage = ({ users }) => {
    console.log(users)
    const handleCreteUser=()=>{
        postData(`http://localhost:3003/api/v1/order`,{
            order_profile:"Picture",
            order_name:"LISA",
            order_location:"TK",
            order_phone_number:"01234567",
            order_status:"Black Shirt"
        })
    }
    return (
        <Box>
            <Typography align="center" variant="h4">
                All User
            </Typography><hr />
            <Box>
                <MenuList>
                    {users.data.map((user, index) => {
                        return (
                            <ListItem button key={index}>
                                <ListItemIcon><ListIcon /></ListItemIcon>
                                <ListItemText>
                                    {user.order_name} | {user.order_location} | {user.order_phone_number} | {user.order_status}
                                </ListItemText>
                            </ListItem>

                        );
                    })}
                </MenuList>
            </Box>
            <Button onClick={handleCreteUser}>CreateUser</Button>

        </Box>
    )
}



export default UserPage;