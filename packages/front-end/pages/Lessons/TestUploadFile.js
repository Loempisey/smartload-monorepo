import DeleteImage from "../../components/containers/layouts/deletephoto";
import DrafUploadFilePage from "../components/containers/layouts/draf";
import UploadDocument from "../components/containers/layouts/uploaddoc";
import UploadFilePage from "../components/containers/layouts/uploadfile";

export default function TestUploadFile(){
    return(
        <div>
            <UploadFilePage></UploadFilePage>
            <UploadDocument></UploadDocument>
            <DeleteImage></DeleteImage>
        </div>
    )
}