import React from "react";
import {fireStorage, storageRef} from '../../../../services/firebase'
const UploadFilePage =()=>{
    const [loading, setLoading] = React.useState(false);
    const [url,seturl]= React.useState(null);
    const handleUploadFile =(e)=>{
        const file = e.target.files[0];
        setLoading(true)
        seturl(file)
        const storageRef = fireStorage.ref("ProfileChhenglee");
        const fileRef = storageRef.child(file.name)
        fileRef.put(file)
        .then((res)=>{
            console.log("Success!")
            setLoading(false)
        })
        .catch((err)=>{
            alert("Unsuccess!")
            setLoading(false)
        })
    }

return(
    <div>
        
        {
            
            url && <img src={URL.createObjectURL(url)} alt="upload" style={{width:380,borderRadius:50}}></img> 
        }
       
        <input onChange={handleUploadFile} multiple type="file" accept=".Jpg,.png"></input>
        {
            loading&&(<span>Please waiting , your file is uploading</span>)
        }
    </div>
)
}
export default UploadFilePage;