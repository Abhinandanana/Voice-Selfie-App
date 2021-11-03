var SpeechRecognition= window.webkitSpeechRecognition;

var recognition= new SpeechRecognition();

function Start(){
    document.getElementById("voice_output").innerHTML= "";
    recognition.start();
}

recognition.onresult= function(event) {
console.log(event);

var resultdata= event.results[0][0].transcript;

document.getElementById("voice_output").innerHTML= resultdata;

if (resultdata== "Take my selfie.") {
    console.log("taking your selfie");
    speak();
} else {
    document.getElementById("voice_output").innerHTML= "Say- Take My Selfie";
}
}

function speak(){
    var synth= window.speechSynthesis;

    data_speak= "Taking Your Selfie in 5 seconds";

    var utterThis= new SpeechSynthesisUtterance(data_speak);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function(){
        take_snapshot();
        save();
    }, 5000);
}

camera= document.getElementById("cam");

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function take_snapshot(){
Webcam.snap(function(data_url){
    document.getElementById("selfie_display").innerHTML= '<img id="selfie_result" src="'+data_url+'"/>';
});
}

function save(){
    link= document.getElementById("link");
    image= document.getElementById("selfie_result").src ;
    link.href= image;
    link.click();
}