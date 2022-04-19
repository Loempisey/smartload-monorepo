import {fireStorage} from '../../services/firebase'
import Uploaddoc from '../Uploaddoc'
const Testing  = () => {
    const handleUploadFiles = (e) =>{
        e.preventDefault();
        const file = e.target.files[0]
        const storageRef = fireStorage.ref('upload/');
        const fileRef = storageRef.child(file.name);
        fileRef.put(file)
        .then((res)=>{
            console.log("success")
        }).catch((err)=>{
            console.log("unsuccess")
        })
    }
    return ( 
        <div>
            <input onChange={handleUploadFiles} multiple type="file" accept=".jpg, .png"></input>
            <Uploaddoc/>
        </div>
     );
}
export default Testing ;

