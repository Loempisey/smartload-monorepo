import { Typography,Avatar } from "@mui/material";
import { makeStyles } from '@mui/styles';

import LeftSideBar from "../components/containers/layouts/LeftSideBar";
import SettingContent from '../components/presentations/settings/settingcontent'
const useStyles=makeStyles({
    header:{
        display:"flex",
        justifyContent:"space-between",
        
    }
})
const Setting = ({user}) => {
    console.log(user)
    const classes=useStyles();
    return(
        <div>
            <LeftSideBar>
                <SettingContent userInfo={user}/>   
            </LeftSideBar>
        </div>
    )
}
export default Setting;




