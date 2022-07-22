async function signUp (url, body){
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(body),
        headers:{"Content-type": " application/json; charset=UTF-8 "},
    });
    const data = res.json();
    return data;
}
export default signUp;