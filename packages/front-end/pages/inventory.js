import React from 'react'
import { fireStore } from '../services/firebase';
import { Typography } from '@mui/material';
import LeftSideBar from '../components/containers/layouts/leftsidebar';
import TableInventory from '../components/presentations/inventory/tables/tableinventory';
// import SettingContent from '../components/presentations/settings/settingcontent';
import {fetcher} from '../utils/api/fetcher'
import { columns } from '../components/presentations/inventory/tables/colums';
import useSWR from 'swr'
const Inventory = () => {
  
    console.log(process.env.NEXT_PUBLIC_API_URL)
    const {data,error} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/inventory`,fetcher);
   
   
      if(error) return 'Error';
      if(!data) return `Loading ...`
      console.log("API",data.data)
    return(
        <div>
            <LeftSideBar>
            <Typography style={{fontSize:"30px",fontWeight:"bold", marginBottom:"10px"}}>Inventory</Typography>
            <TableInventory columns={columns} rows={data?.data}/>
            </LeftSideBar>
        </div>
    )
}
export default Inventory;