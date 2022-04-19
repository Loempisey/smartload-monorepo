import React from 'react'
import { fireStore } from '../services/firebase';
import { Typography } from '@mui/material';
import LeftSideBar from '../components/containers/layouts/leftsidebar';
import TableCustomer from '../components/presentations/customers/tables/tablecustomer';
// import SettingContent from '../components/presentations/settings/settingcontent';
import { columns } from '../components/presentations/customers/tables/colums';
const Customer = () => {
    const [customers,setCustomers]=React.useState([])
    React.useEffect(() => {
        fireStore
          .collection('customer')
          .onSnapshot((snapshot) => {
            const customer = snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            });
            setCustomers(customer);
          });
      }, [])
    return(
        <div>
            <LeftSideBar>
            <Typography style={{fontSize:"30px",fontWeight:"bold", marginBottom:"10px"}}>Customers</Typography>
            <TableCustomer columns={columns} rows={customers}/>
            </LeftSideBar>
        </div>
    )
}
export default Customer;