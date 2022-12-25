
function start_mic(){
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dZu9Xij96/model.json',modelReady);
}

function modelReady() {
classifier.classify(gotResult);
}

function gotResult(error,results){
if (error) {
console.log(error);
} else {
console.log(results)
random_R = Math.floor(Math.random()*255)+1;
random_G = Math.floor(Math.random()*255)+1;
random_B = Math.floor(Math.random()*255)+1;
}
document.getElementById("result_label").innerHTML = "I Can Hear - " + results[0].label;
document.getElementById("result_confiedence").innerHTML = "Accuracy - " + (results[0].confidence*100).toFixed(2) + " %" ;
document.getElementById("result_label").style.color="rgb("+random_R+","+random_G+","+random_B+")";
document.getElementById("result_confiedence").style.color="rgb("+random_R+","+random_G+","+random_B+")";

if (results[0].label == "Cat") {
document.getElementById("img_div").innerHTML = "<img id='c' src='meow.gif'>"
}
if(results[0].label == "Dog"){
document.getElementById("img_div").innerHTML = "<img id='c' src='bark.gif'>" 
}
if(results[0].label == "Background Noise") {
document.getElementById("img_div").innerHTML = "<img id='c' src='background.png'>"
}
}

function Stop_mic() {
document.getElementById("img_div").innerHTML = "<img id='c' src=''"
document.getElementById("result_label").innerHTML = ""
document.getElementById("result_confiedence").innerHTML = ""
}
