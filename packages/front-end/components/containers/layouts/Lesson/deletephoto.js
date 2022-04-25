import {fireStorage} from '../../../../services/firebase'
import React from "react";
const DeleteImage = () => {
  const [url,setUrl]=React.useState(null);
  const handleDeleteImage=()=>{
    const storageRef= fireStorage.ref('Avatar/');
    const fileRef= storageRef.child('20211031100754_IMG_8385.JPG');
    fileRef.delete()
    .then((res)=>{
      console.log(res)
    }).catch((err)=>{
      console.error(err)
    })
  }
  return ( 
    <div>
        
        <button onClick={handleDeleteImage}>Delete Image</button>
    </div>
   );
}
 
export default DeleteImage;