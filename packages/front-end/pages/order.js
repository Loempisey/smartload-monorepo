import { Typography } from "@mui/material";
import LeftSideBar from "../components/containers/layouts/leftsidebar";
import OrderTable from "../components/presentations/orders/ordertable";

const Order = () => {
    return(
        <div>
            <LeftSideBar>
            <Typography style={{fontSize:"30px",fontWeight:"bold", marginBottom:"10px"}}>Orders</Typography>
            <OrderTable/>
            </LeftSideBar>
        </div>
    )
}
export default Order;