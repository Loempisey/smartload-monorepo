import {customToast} from './../../components/Toast/index'
async function postData (url, body){
    try{
        const data = await fetch(url, {
            method: "POST",
            body: JSON.stringify(body),
            headers:{"Content-type": " application/json; charset=UTF-8 "},
        });
        console.log("response ==>", data)
        customToast(data.status, "successful")    
    }catch (error){
        console.log(error)
        // console.error(error)
        // customToast(undefined, "Internal Server error")
    }
   
}
export default postData;
