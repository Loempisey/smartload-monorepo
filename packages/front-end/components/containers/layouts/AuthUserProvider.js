import { createContext, useContext, Context } from "react";
import useFirebaseAuth from "./useFirebaseAuth";

const authUserContext = createContext({
    authUser: null,
    loading: true
})

const AuthUserProvider = ({children}) => {
    const auth = useFirebaseAuth ();
    return (  
        <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>
    );
}
export const useAuth = () => useContext(authUserContext);
 
export default AuthUserProvider;


