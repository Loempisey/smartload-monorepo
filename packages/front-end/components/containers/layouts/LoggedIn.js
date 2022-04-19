import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../../AuthUserProvider';
import {fireAuth} from '../../../services/firebase'
import Dashboard from '../../../pages/dashboard';
import Customer from '../../../pages/customer';
import Login from './Login';
import Order from '../../../pages/order';
import History from '../../../pages/history';

const LoggedIn = () =>{
    const router = useRouter();
  
    fireAuth.onAuthStateChanged(user=>{
      if(!user){
        router.push('/')
      }
          
    })
  
    return (
        <div>
          <Login></Login>
          <Dashboard></Dashboard>
          <Customer></Customer>
          <Order></Order>
          <History></History>
          
        </div>
        
    )
  }
  export default LoggedIn;