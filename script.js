// VoiceCloneVIP Script Version 2

alert("VoiceCloneVIP Script OK");


import { auth } from "./firebase.js";


import {

    GoogleAuthProvider,

    signInWithPopup,

    signOut

} from "https://www.gstatic.com/firebasejs/12.17.1/firebase-auth.js";





// Elements

const loginBtn = document.querySelector(".login-btn");

const voiceFile = document.getElementById("voiceFile");

const voicePreview = document.getElementById("voicePreview");

const textInput = document.getElementById("textInput");

const generateBtn = document.querySelector(".generate-btn");

const statusBox = document.querySelector(".status");






// ======================
// Gmail Login
// ======================


const provider = new GoogleAuthProvider();



loginBtn.addEventListener("click", async ()=>{


    try{


        const result = await signInWithPopup(

            auth,

            provider

        );


        const user = result.user;



        loginBtn.innerHTML =
        "👤 " + user.email;



        statusBox.innerHTML =
        "✅ Login အောင်မြင်ပါပြီ";



    }


    catch(error){


        statusBox.innerHTML =
        "❌ Login Error : " + error.message;


    }


});








// ======================
// Voice Upload Preview
// ======================


voiceFile.addEventListener(
"change",

function(){


    const file = this.files[0];



    if(file){


        const audioURL =
        URL.createObjectURL(file);



        voicePreview.src =
        audioURL;



        statusBox.innerHTML =
        "🎧 အသံဖိုင် တင်ပြီးပါပြီ";


    }


});









// ======================
// Generate Voice
// ======================


generateBtn.addEventListener(
"click",

function(){


    const file =
    voiceFile.files[0];



    const text =
    textInput.value.trim();




    if(!file){


        statusBox.innerHTML =
        "❌ မူရင်းအသံ ဖိုင်တင်ပါ";


        return;

    }





    if(text === ""){


        statusBox.innerHTML =
        "❌ စာသားထည့်ပါ";


        return;


    }






    statusBox.innerHTML =
    "⏳ AI Voice ဖန်တီးနေပါသည်...";






    setTimeout(()=>{


        statusBox.innerHTML =
        "✅ Voice Generate ပြီးပါပြီ";


    },3000);



});







// ======================
// Check Login State
// ======================


auth.onAuthStateChanged((user)=>{


    if(user){


        loginBtn.innerHTML =
        "👤 " + user.email;


    }


});
