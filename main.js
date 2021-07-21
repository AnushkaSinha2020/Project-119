function setup(){
    canvas= createCanvas(350 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/UNC675fpe/model.json', modelLoaded);
}

function modelLoaded(){
    console.log('Model Loaded!');
}

function draw(){
    image(video, 0 , 0 , 350, 300);
    classifier.classify(video, gotResult);
}

function gotResult(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        document.getElementById("result_person_name").innerHTML = result[0].label;
        document.getElementById("result_accuracy").innerHTML= result[0].confidence.toFixed(3);
    }
}