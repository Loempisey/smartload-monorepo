import { Profiler } from 'react';
import { Button, Typography} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Avatar from '@mui/material/Avatar';


export default function Data({src,profile,payment,status,done}){
    return(
    <div>
        
            
            <div >
            <Avatar src={src} alt="img"/>
                <Typography>{profile}</Typography>
                <Button>{payment}</Button>
                <Button>{status}</Button>
                <IconButton color="primary" aria-label="add to shopping cart">
                <CheckCircleOutlineIcon />
                    {done}
                </IconButton>
            </div>
        
    </div>
    )
}