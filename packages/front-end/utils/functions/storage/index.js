import { fireStorage } from "../../../services/firebase";

function uploadfile(file, ref) {
  const storageRef = fireStorage.ref(ref);
  const fileRef = storageRef.child(file.name);
  fileRef
    .put(file)
    .then((res) => {
      console.info(res);
    })
    .catch((err) => {
      console.error(err);
    });
}



function getUrl(ref, key) {
  const storageRef = fireStorage.ref(ref);
  const fileRef = storageRef.child(key);
  fileRef
    .getDownloadURL()
    .then((res) => {
      console.log("URL::", res);
    })
    .catch((e) => {
      console.log(e);
    });
}

function deletefile(ref, key) {
  const storageRef = fireStorage.ref(ref);
  const fileRef = storageRef.child(key);
  fileRef
    .delete()
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log(e);
    });
}

export {
    uploadfile,
    getUrl,
    deletefile
}