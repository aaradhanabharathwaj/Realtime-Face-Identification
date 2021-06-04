function setup(){
    canvas= createCanvas(390,300);        
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/oQZTquJDU/model.json",modelLoaded);
}
function draw(){
image(video,0,0,390,300);
classifier.classify(video,gotresults);
}
function modelLoaded(){
    console.log("Model Loaded !!")
}
function gotresults(error,results){
    if(error){
console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object").innerHTML=results[0].label;
        document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
}