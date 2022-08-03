import React from "react";
const CountContext=React.createContext();
const CountContextProvider=({children})=>{
    const [count,setCount]=React.useState(0);
    const [query, setQuery]=React.useState("");
    return(
        <CountContext.Provider value={{count,setCount,query, setQuery}}>
            {children}
        </CountContext.Provider>
    )
}
export{
    CountContext,
    CountContextProvider
}