import React from "react";
import {fireStorage, storageRef} from '../../../../services/firebase'
const UploadDocument =()=>{
    const [url,seturl]= React.useState(null);
    const handleUploadDoc =(e)=>{
        const file = e.target.files[0];
        seturl(file)
        const storageRef = fireStorage.ref('documents/');
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
            
            url && <img src={URL.createObjectURL(url)} alt="upload" style={{width:100,borderRadius:50}}></img> 
        }
        <input onChange={handleUploadDoc} multiple type="file" accept=".pdf , .docx"></input>
        
    </div>
)
}
export default UploadDocument;