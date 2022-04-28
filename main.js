function setup(){
    canvas = createCanvas( 400, 400);
    canvas.center();
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model is initialise!!");
}


function draw(){
    image(video, 0, 0, 400, 400);
}