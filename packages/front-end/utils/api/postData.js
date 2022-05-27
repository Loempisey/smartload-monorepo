import {customToast} from './../../components/Toast/index'
async function postData (url, body){
    try{
        const res = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers:{"Content-type": " application/json; charset=UTF-8 "},
        });
        console.log(data)
        customToast(data.statusCode, data.message)    
    }catch (error){
        console.error(error)
        customToast(undefined, "Internal Server error")
    }
   
}
export default postData;

