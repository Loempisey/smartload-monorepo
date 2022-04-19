import { Box, ListItem, ListItemIcon, ListItemText, MenuList, Typography } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import useSWR from 'swr';
import { fetcher } from "../../utils/api/fetcher";

const FetchData = () => {
    const { data, error } = useSWR('http://localhost:7777/api/v1/contact', fetcher)
    console.log(data)

    if (error) return `Error : ${error}`;
    if (!data) return `Loading ...`
    return (
        <Box>
            <Typography align="center" variant="h4">
                All User
            </Typography><hr/>
            <Box>
                <MenuList>
                    {data.data.map((user, index) => {
                        return (
                            <ListItem button key={index}>
                                <ListItemIcon><ListIcon /></ListItemIcon>
                                <ListItemText>
                                    {user.fullname} | {user.phone} 
                                </ListItemText>
                            </ListItem>
                        );
                    })}
                </MenuList>
            </Box>

        </Box>
    )
}

export default FetchData;