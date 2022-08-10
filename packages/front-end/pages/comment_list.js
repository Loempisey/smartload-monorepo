import CommentList from '../components/presentations/comments_list/CommentList'
import Pagination from '../components/containers/layouts/pagination'
import LeftSideBar from '../components/containers/layouts/leftsidebar';
import { Grid } from '@mui/material';
import AllCard from '../components/presentations/comments_list/AllCard';

// import Timeline from '../components/containers/layouts/timeline'
const CommentLists = () => {
    return(
        <div>
            <LeftSideBar>

            <h1>Comment List</h1>
            <hr style={{backgroundColor:"#0070f3",height:"2.5px"}}/>
            <AllCard/><br/>
            <hr style={{backgroundColor:"#0070f3",height:"2.5px"}}/><br/>
            <CommentList/>
            
            {/* <Pagination/> */}
            {/* <Timeline/> */}
            </LeftSideBar>
        </div>
    )
}
export default CommentLists;