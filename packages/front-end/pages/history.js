import His from '../components/presentations/historys/his'
import Pagination from '../components/containers/layouts/pagination'
import LeftSideBar from '../components/containers/layouts/leftsidebar';
import { Grid } from '@mui/material';

// import Timeline from '../components/containers/layouts/timeline'
const History = () => {
    return(
        <div>
            <LeftSideBar>

            <h1>History</h1>
            <His />
            <Pagination/>
            
            {/* <Timeline/> */}
            </LeftSideBar>
        </div>
    )
}
export default History;