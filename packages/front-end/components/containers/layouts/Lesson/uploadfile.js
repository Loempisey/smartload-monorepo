import React from "react";
import {fireStorage, StorageRef} from '../../../../services/firebase'
const UploadFilePage =()=>{
    const [url,seturl]= React.useState(null);
    const handleUploadFile =(e)=>{
        const file = e.target.files[0];
        seturl(file)
        const storageRef = fireStorage.ref('Avatar/');
        const fileRef = storageRef.child(file.name);
        fileRef.put(file)
        .then((res)=>{
            console.log("Success!")
        })
        .catch((err)=>{
            alert("Unsuccess!")
           
        })
    }


return(
    <div>
        
        {
            
            url && <img src={URL.createObjectURL(url)} alt="ProfileChhenglee" style={{width:300}}></img> 
        }
       
        <input onChange={handleUploadFile} multiple type="file" accept=".jpg , .png"></input>
        
    </div>
)
}
export default UploadFilePage;