import { Typography,Avatar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import LeftSideBar from "../components/containers/layouts/leftsidebar";
import SettingContent from '../components/presentations/settings/settingcontent'
const useStyles=makeStyles({
    header:{
        display:"flex",
        justifyContent:"space-between",
        
    }
})
const Setting = () => {
    const classes=useStyles();
    return(
        <div>
            <LeftSideBar>
                <SettingContent/>   
            </LeftSideBar>
        </div>
    )
}
export default Setting;

