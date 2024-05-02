// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,updateDoc,doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCz7A2NAB7Uiew2pxyP-AyFohGZWpsoG_k",
    authDomain: "my-first-project-dc7dd.firebaseapp.com",
    projectId: "my-first-project-dc7dd",
    storageBucket: "my-first-project-dc7dd.appspot.com",
    messagingSenderId: "654401605320",
    appId: "1:654401605320:web:ff7c0c2d890e2060495ffd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// updateDoc(doc(db,'products','myid1002'),{
//     name:"Speed"
// });

// const dbRef = doc(db,'products','myid1002');
// const data = {
//     name:"deedo"
// }
// updateDoc(dbRef,data);

const dbRef = doc(db,'products','myid1002');
const data = {
    name:"babimind",
    type:"non-food",
    price:2000,
    unit:"bot"
}

updateDoc(dbRef,data).then(()=>{
    console.log('Updated');
}).catch((error)=>{
    console.log(error);
});