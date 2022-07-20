import Historys from '../components/presentations/historys/history'
import Pagination from '../components/containers/layouts/pagination'
import LeftSideBar from '../components/containers/layouts/LeftSideBar';
import { Grid } from '@mui/material';

// import Timeline from '../components/containers/layouts/timeline'
const History = () => {
    return(
        <div>
            <LeftSideBar>

            <h1>History</h1>
            <Historys/>
            {/* <Pagination/> */}
            
            {/* <Timeline/> */}
            </LeftSideBar>
        </div>
    )
}
export default History;