import {customToast} from './../../components/Toast'
import Cookies from 'js-cookie'
async function updateData (url,data){
    let token ={}
     token = Cookies.get('token_user');

     try {
         token = JSON.parse(token)  
         console.log(token) // JSON.stringify()
     } catch (error) {
         console.log(error);
     }

    try{
        const res = await fetch(url, {
            method: "PUT",
            body: JSON.stringify(data),
            headers:{"Content-type": " application/json; charset=UTF-8 ",
            "x-access-token":token.token
        }
        });
        data = await res.json();
        customToast(data.statusCode, data.message)
    }catch(error){
        console.error(error)
    }
    return data;
}
export default updateData;
