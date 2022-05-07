import { useRecoilValue } from 'recoil'
import Login from '../components/containers/layouts/Login'
import { LOADINGSTATE, USERSTATE } from '../states/userState'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
export default function Signin(){
    // const router=useRouter();
    // const user =useRecoilValue(USERSTATE);
    // const loading =useRecoilValue(LOADINGSTATE);

    // useEffect(()=>{
    //     if(user){
    //         router.push('/signin')
    //     }
    // },[user,loading])
    
    return(
        <div>
            <Login/>
        </div>
    )
}