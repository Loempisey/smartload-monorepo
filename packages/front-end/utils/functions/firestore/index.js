import { firestore } from "../../../services/firebase";

function createDocument(collection_name, document) {
  firestore
    .collection(collection_name)
    .add(document)
    .then((res) => {
      console.info(res);
      console.info("Create a collection ", collection_name);
    })
    .catch((err) => {
      console.error(err);
    });
}

async function listAllDocument(collection_name) {
  let data = [];
  try {
    const doc = await firestore.collection(collection_name).get();
    doc.docs.forEach((item) => {
      if (item.exists) {
        data.push({id:item.id,...item});
      } else {
        console.log("No such document!");
      }
    });
  } catch (err) {
    
    console.error(err);
  }
  return data;
}

async function listADocument (collection_name,_id){
  let data={};
  try{
    const doc= await firestore.collection(collection_name).doc(_id).get();
    data = {id:doc.id,...doc.data()}
  }catch(err){
    
    console.error(err)
  }

  return data;
}

function deleteDocument(collection_name, _id) {
  firestore
    .collection(collection_name)
    .doc(_id)
    .delete()
    .then(() => {
      console.log("Deleted!");
    })
    .catch((err) => {
      console.error(err);
    });
}

function updateDocument(collection_name, _id, document) {
  firestore
    .collection(collection_name)
    .doc(_id)
    .update(document)
    .then((res) => {
      console.log("Updated!");
    })
    .catch((err) => {
      console.error(err);
    });
}

export { createDocument, updateDocument, deleteDocument, listAllDocument,listADocument };
