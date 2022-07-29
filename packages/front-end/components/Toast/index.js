// import { success } from "concurrently/src/defaults";
import { toast } from "react-toastify";

const character = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar : false,
    closeOnclick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,

};

function customToast(statusCode, message) {
    console.log(statusCode)
    if (statusCode == 200 || statusCode == 201){
        toast.success(message, character);
    }else if(statusCode == 400 || statusCode == 404 || statusCode == 500){
        toast.error(message, character);
    }else{
        toast.error(message, character);
    }
}

async function customPromiseToast(fetchAPI){
    const data = await toast.promise(fetchAPI, {
        pending: "Operater is progressing",
        success: "Operater is success",
        error: "Operater is error",

    });
    customTost(data.statusCode, data?.message);
}

export{
    customToast,
    customPromiseToast,
}


