// VoiceCloneVIP Script Version 1


const voiceFile = document.getElementById("voiceFile");

const voicePreview = document.getElementById("voicePreview");

const textInput = document.getElementById("textInput");

const generateBtn = document.querySelector(".generate-btn");

const statusBox = document.querySelector(".status");

const loginBtn = document.querySelector(".login-btn");




// Voice Upload Preview

voiceFile.addEventListener("change", function(){


    const file = this.files[0];


    if(file){


        const audioURL = URL.createObjectURL(file);


        voicePreview.src = audioURL;


        statusBox.innerHTML =
        "🎧 မူရင်းအသံ တင်ပြီးပါပြီ";


    }


});





// Generate Button


generateBtn.addEventListener("click", function(){



    const file = voiceFile.files[0];

    const text = textInput.value.trim();



    if(!file){


        statusBox.innerHTML =
        "❌ ကျေးဇူးပြု၍ မူရင်းအသံတင်ပါ";


        return;


    }



    if(text === ""){


        statusBox.innerHTML =
        "❌ အသံထုတ်မည့် စာသားထည့်ပါ";


        return;


    }





    statusBox.innerHTML =
    "⏳ AI Voice ဖန်တီးနေပါသည်...";




    setTimeout(function(){


        statusBox.innerHTML =
        "✅ အသံဖန်တီးပြီးပါပြီ";


    },3000);



});






// Gmail Login Demo


loginBtn.addEventListener("click",function(){


    alert(
        "Gmail Login System ကို Firebase နဲ့ ချိတ်ဆက်သွားပါမည်"
    );


});
