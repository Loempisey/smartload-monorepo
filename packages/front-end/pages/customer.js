import React from 'react'
import { fireStore } from '../services/firebase';
import { Typography } from '@mui/material';
import LeftSideBar from '../components/containers/layouts/leftsidebar';
import TableCustomer from '../components/presentations/customers/tables/tablecustomer';
// import SettingContent from '../components/presentations/settings/settingcontent';
import {fetcher} from './../utils/api/fetcher'
import { columns } from '../components/presentations/customers/tables/colums';
import useSWR from 'swr'
const Customer = () => {
  
    console.log(process.env.NEXT_PUBLIC_API_URL)
    const {data,error} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/customer`,fetcher);
   
   
      if(error) return 'Error';
      if(!data) return `Loading ...`
      console.log("API",data.data)
    return(
        <div>
            <LeftSideBar>
            <Typography style={{fontSize:"30px",fontWeight:"bold", marginBottom:"10px"}}>Customers</Typography>
            <TableCustomer columns={columns} rows={data?.data}/>
            </LeftSideBar>
        </div>
    )
}
export default Customer;