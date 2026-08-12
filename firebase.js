// Firebase Setup

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.1/firebase-app.js";

import { 
    getAuth 
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-firestore.js";



const firebaseConfig = {

    apiKey: "AIzaSyB6K8ivG_CGusSx4CA-6uozeF34QsBXfjA",

    authDomain: "voiceclonevip.firebaseapp.com",

    projectId: "voiceclonevip",

    storageBucket: "voiceclonevip.firebasestorage.app",

    messagingSenderId: "90382537521",

    appId: "1:90382537521:web:b48fbbe1fd2c589dae5610",

    measurementId: "G-HM74KZ2L71"

};



const app = initializeApp(firebaseConfig);


// Gmail Login အတွက်

const auth = getAuth(app);


// User Data သိမ်းရန်

const db = getFirestore(app);



export { auth, db };
