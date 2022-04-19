import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import "firebase/analytics"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCP8Bydr0C5VHlsIW7hPyUtLwBKcpln7dg",
  authDomain: "smartload-cd5e9.firebaseapp.com",
  projectId: "smartload-cd5e9",
  storageBucket: "smartload-cd5e9.appspot.com",
  messagingSenderId: "89629647270",
  appId: "1:89629647270:web:9cb64670577a9c00c36f67",
  measurementId: "G-842HJVFP5K"
};
if(!firebase.apps.length){
  const app= firebase.initializeApp(firebaseConfig);
  // console.log(app)
}
const fireStore = firebase.firestore();// database
const fireStorage = firebase.storage();
const fireAuth= firebase.auth();
console.log(fireAuth)

export  {
  fireStore,// Database
  fireStorage,// storage
  fireAuth, // authentication
  
}

// Server Side Rendering (SSR)

//JS => REACTJS => NextJS