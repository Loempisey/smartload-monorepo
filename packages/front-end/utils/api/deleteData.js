import Cookies from 'js-cookie'
import {customToast} from './../../components/Toast'
async function deleteData (url){
    let data;

    try {
        const res = await fetch(url, {
            method: "DELETE",
            headers:{
                "Content-type": " application/json; charset=UTF-8 ",
               
            }
        });
         data = await res.json();
         customToast(data.statusCode,data?.message)
    } catch (error) {
        console.error(error)
    }
    return data;

}
export default deleteData;

