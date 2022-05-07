async function updateData (url,data){
    const res = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(data),
        headers:{"Content-type": " application/json; charset=UTF-8 "}
    });
    const response = res.json();
    return response;
}
export default updateData;
