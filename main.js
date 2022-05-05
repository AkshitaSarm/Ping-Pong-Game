RightWristX = 0;
RightWristY = 0;
RightWrist = 0;
GameStatus = " ";

function setup(){
    canvas = createCanvas( 400, 400);
    canvas.center();
    canvas.parent('canvas');
    video = createCapture(VIDEO);
    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model is initialised!!");
}
function gotPoses(results){
   if(results.length > 0){
      RightWristX = results[0].length.pose.RightWrist.x;
      RightWristY = results[0].length.pose.RightWrist.y;
   }
}

function draw(){
    image(video, 0, 0, 400, 400);
    if(RightWrist > 0.2){
        fill("#ffff00");
        stroke("#ffff00");
        circle();
    }
}

function StartGame(){
    GameStatus = "Start";
    document.getElementById("Status").innerHTML = "Game is loading";    
}


