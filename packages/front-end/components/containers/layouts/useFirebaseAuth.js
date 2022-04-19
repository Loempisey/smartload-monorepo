import { useState,useEffect } from "react";
import {fireAuth} from '../../../services/firebase'
const formatAuthUser = (user) =>({
    uid: user.id,
    email: user.email
});

const useFirebaseAuth = () => {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authStateChanged = async (authState) =>{
        if(!authState){
            setAuthUser(null)
            setLoading(false)
            return;
        }

        setLoading(true)
        var formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        setLoading(false)
    };
    // useEffect(()=>{
    //     const unsubscribe = Firebase.auth().onAuthStateChanged(authStateChanged);
    //     return()=>unsubscribe();
    // }, []);
    return (  
       authUser,
       loading
    );
}
 
export default useFirebaseAuth;