import React from 'react'
import { fireStore } from '../services/firebase';
import { Typography } from '@mui/material';
import LeftSideBar from '../components/containers/layouts/leftsidebar';
import TableCustomer from '../components/presentations/customers/tables/tablecustomer';
// import SettingContent from '../components/presentations/settings/settingcontent';
import {fetcher} from './../utils/api/fetcher'
import { columns } from '../components/presentations/customers/tables/colums';
import useSocket from './../utils/sockets/useSocket';
import {useEffect, useState} from 'react';
import useSWR from 'swr';

const Customer = ({customer}) => {
    // const [allcustomers, setAllCustomers] = React.useState(customer);
    // const socket = useSocket(process.env.NEXT_PUBLIC_API_URL);
    // //socket.io
    // React.useEffect(()=>{
    //     if(socket){
    //         socket.on('customer', (data) =>{
    //             setAllCustomers(data);
    //         });
    //     }
    // },[socket])
    
    console.log(process.env.NEXT_PUBLIC_API_URL)
    const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/customer`,fetcher);
      if(error) return 'Error';
      if(!data) return `Loading ...`
      console.log("API data ==> ",data.data)


//socket.io
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
