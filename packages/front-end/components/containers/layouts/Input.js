import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil';
import { QUERY } from '../../states/mapState';
const Input = () => {
    // const setQuery = useSetRecoilState(QUERY)
    const [query,setQuery] = useRecoilState(QUERY)
    const handleOnChange = (e) =>{
        setQuery(e.target.value)

    }
    return (  
        <div>
            <input placeholder= "search" onChange ={handleOnChange}></input>
            {query}

        </div>
    );
}
 
export default Input;