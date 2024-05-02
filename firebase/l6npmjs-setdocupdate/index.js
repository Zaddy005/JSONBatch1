// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,setDoc,doc } from  "firebase/firestore";
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

// setDoc(doc(db,'products','myid1002'),{
//     name:"sponsor",
//     type:"food",
//     price:1000
// });

// setDoc(doc(db,'products','HdEpyfD0CkTcvVFpQn0o'),{
//     name:"deedo",
//     type:"food",
//     price:10000
// }).then(()=>{
//     console.log("Data Inserted");
// }).catch(error=>{
//     console.log(error);
// });

// Before Merge
// setDoc(doc(db,"products",'HdEpyfD0CkTcvVFpQn0o'),{
//     name:"speed",
//     type:"food",
//     price:50,
//     unit:"bot"
// }).then(()=>{
//     console.log("Data Inserted");
// }).catch(error=>{
//     console.log(error);
// });


// setDoc(doc(db,"products",'HdEpyfD0CkTcvVFpQn0o'),{
// }).then(()=>{
//     console.log("Data Inserted");
// }).catch(error=>{
//     console.log(error);
// });

// After Merge
// setDoc(doc(db,'products',"HdEpyfD0CkTcvVFpQn0o"),{
// },{merge:true}).then(()=>{
//     console.log("Data Insertd");
// }).catch((err)=>{
//     console.log(err);
// });

// Before Merge
// setDoc(doc(db,'products',"myid1002"),{
//     name:"deedo",
//     price:500,
//     type:"food"
// }).then(()=>{
//     console.log("Data Insertd");
// }).catch((err)=>{
//     console.log(err);
// });

// After Merge
// setDoc(doc(db,'products',"myid1002"),{
//     name:"Monster",
// },{merge:true}).then(()=>{
//     console.log("Updated");
// }).catch((err)=>{
//     console.log(err);
// });

// Before Merge
// setDoc(doc(db,'products',"myid1002"),{
//     stock:100,
//     promo:"30%"
// }).then(()=>{
//     console.log("Updated");
// }).catch((err)=>{
//     console.log(err);
// });

// After Merge
// setDoc(doc(db,'products',"myid1002"),{
//     name:"redbull",
//     price:1000,
//     type:"food",
//     unit:"bot",
//     stock:100,
//     promo:"30%"
// }).then(()=>{
//     console.log("Updated");
// }).catch((err)=>{
//     console.log(err);
// });

setDoc(doc(db,'products',"myid1002"),{
    stock:10,
    promo:"100%"
},{merge:true}).then(()=>{
    console.log("Updated");
}).catch((err)=>{
    console.log(err);
});