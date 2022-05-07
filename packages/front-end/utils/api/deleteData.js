async function deleteData (url){
    const res = await fetch(url, {
        method: "DELETE",
        headers:{"Content-type": " application/json; charset=UTF-8 "}
    });
    const data = res.json();
    return data;
}
export default deleteData;
