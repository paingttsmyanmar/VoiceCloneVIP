// VoiceCloneVIP Script


const generateBtn = document.querySelector(".generate-btn");
const loginBtn = document.querySelector(".login-btn");

const voiceFile = document.getElementById("voiceFile");
const textInput = document.getElementById("textInput");

const statusBox = document.querySelector(".status");



// Gmail Login Button

loginBtn.addEventListener("click", function(){

    alert(
        "Gmail Login System will be connected soon!"
    );

});




// Generate Voice Button

generateBtn.addEventListener("click", function(){


    let file = voiceFile.files[0];

    let text = textInput.value.trim();



    if(!file){

        statusBox.innerHTML =
        "❌ Please upload your voice sample.";

        return;

    }



    if(text === ""){


        statusBox.innerHTML =
        "❌ Please enter your text.";

        return;

    }



    statusBox.innerHTML =
    "⏳ Processing Voice Clone...";



    // Demo Processing

    setTimeout(function(){


        statusBox.innerHTML =
        "✅ Voice Clone Completed!";


    },3000);



});




// File Upload Check

voiceFile.addEventListener(
"change",
function(){


    if(this.files.length > 0){


        statusBox.innerHTML =
        "🎤 Voice File Uploaded: "
        + this.files[0].name;


    }


});
