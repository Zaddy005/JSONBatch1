import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getFirestore,collection,addDoc,getDocs,updateDoc,deleteDoc,doc } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCz7A2NAB7Uiew2pxyP-AyFohGZWpsoG_k",
    authDomain: "my-first-project-dc7dd.firebaseapp.com",
    projectId: "my-first-project-dc7dd",
    storageBucket: "my-first-project-dc7dd.appspot.com",
    messagingSenderId: "654401605320",
    appId: "1:654401605320:web:ff7c0c2d890e2060495ffd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const dbRef = collection(db,'mytasks');

var getform = document.getElementById('form');
var gettextbox = document.getElementById('textbox');
var getul = document.getElementById('list-group');


getform.addEventListener('submit',function(e){
    addnew();
    e.preventDefault();
});

// Get Datas
let tasks = [];
const getdatas = async ()=>{
    try{
        const docSnap = await getDoc();
        console.log(docSnap);
    }catch(err){
        console.log("Get Data Error : " + err);
    }
}

async function addnew(){
    const todotext = gettextbox.value;
    console.log(todotext);
    if(gettextbox.getAttribute('task-id')){
        // update Data
        try{
            await addDoc(dbRef,{
                todo:todotext,
                done:false
            });
        }catch(err){
            console.log("Update Data Error : " + err);
        }

    }else{
        // Create Data
        try{

        }catch(err){
            console.log("Create Data Error : " + err);
        }
    }
}

//31TD
// Docs > overview > Firebase fundamentals > Web iocn > available libraries documentation > Available Firebase JS SDKs (from the CDN)
