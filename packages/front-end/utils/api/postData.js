async function postData (url,_data){
    const res = await fetch(url,{
        method: "POST",
        body: JSON.stringify(_data),
        mode: 'no-cors',
        headers:{"Content-type": "application/json;charset=UTF-8"}
    });
    const users = res.json();
    return users;
}
export default postData;