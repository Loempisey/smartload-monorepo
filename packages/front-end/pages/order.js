import { Typography } from "@mui/material";
import LeftSideBar from "../components/containers/layouts/leftsidebar";
import DateFilter from "../components/presentations/datefilter/DateFilter";
import OrderTable from "../components/presentations/orders/ordertable";

const Order = () => {
    return(
        <div>
            <LeftSideBar>
            <Typography style={{fontSize:"30px",fontWeight:"bold", marginBottom:"10px"}}>Order History</Typography>
            <div style={{float:"Right",marginBottom:"10px"}}><DateFilter/></div>
            <OrderTable/>
            </LeftSideBar>
        </div>
    )
}
export default Order;