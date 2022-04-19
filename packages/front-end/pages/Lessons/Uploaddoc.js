import { fireStorage } from "../../services/firebase";
const Document = () => {
    const handleUploadFiles = (e) =>{
        e.preventDefault();
        const file = e.target.files[0]
        const storageRef = fireStorage.ref('document/');
        const fileRef = storageRef.child(file.name);
        fileRef.put(file)
        .then((res)=>{
            console.log("done")
        }).catch((err)=>{
            console.log("fail")
        })
    }

    return (  
        <div>  
            <input onChange={handleUploadFiles} multiple type="file" accept=".docx, .pdf"></input>
        </div>
    );
}

export default Document;
