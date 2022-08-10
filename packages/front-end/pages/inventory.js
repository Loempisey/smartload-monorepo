import React from 'react'
import { fireStore } from '../services/firebase';
import { containerClasses, Typography } from '@mui/material';
import {fetcher} from './../utils/api/fetcher'
import { columns } from '../components/presentations/customers/tables/colums';
import useSocket from './../utils/sockets/useSocket';
import {useEffect, useState} from 'react';

// const Customer = ({customer}) => {
//     const [allcustomers, setAllCustomers] = React.useState(customer);
//     const socket = useSocket(process.env.NEXT_PUBLIC_API_URL);
//     //socket.io
//     React.useEffect(()=>{
//         if(socket){
//             socket.on('customer', (data) =>{
//                 setAllCustomers(data);
//             });
//         }
//     },[socket])
    
//     console.log(process.env.NEXT_PUBLIC_API_URL)
//     const {data, error} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/customer`,fetcher);

import LeftSideBar from '../components/containers/layouts/leftsidebar';
import TableInventory from '../components/presentations/inventory/tables/tableinventory';
// import SettingContent from '../components/presentations/settings/settingcontent';
import useSWR from 'swr'

const Inventory = ({}) => {
   
    const [allInventories, setAllInventories] = React.useState([]);
    const socket = useSocket(process.env.NEXT_PUBLIC_API_URL);
    const {data,error} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/inventory`,fetcher);
   
   
    React.useEffect(()=>{
        if(socket){
            socket.on('inventory', (data) =>{
                setAllInventories(data);
            });
        }
    }, [socket])

    React.useEffect(()=>{
        if(data?.data){
            setAllInventories(data.data)
        }
    },[data])


      if(error) return 'Error';
      if(!data) return `Loading ...`
      console.log("API data ==> ",data)


//socket.io
    return(
        <div>
            <LeftSideBar>
            <Typography style={{fontSize:"30px",fontWeight:"bold", marginBottom:"10px"}}>Inventory</Typography>
            <TableInventory columns={columns} rows={allInventories}/>
            </LeftSideBar>
        </div>
    )
}
export default Inventory;
