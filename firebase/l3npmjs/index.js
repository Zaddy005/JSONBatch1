// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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
console.log(app);

const db = getFirestore(app);
console.log(db);

// =In Terminal
// cd l3npmjs
// node index.js