leftwristX=0;
difference=0;
rightwristX=0;

function preload(){
}

function setup(){
  canvas = createCanvas(350, 350);
  canvas.center();

  video = createCapture(VIDEO);
  video.size(400 , 400);
  video.position(100 , 170);

  poseNet=ml5.poseNet(video , modelLoaded);
  poseNet.on('pose' , gotPoses);
}

function modelLoaded(){
  console.log("Posenet Is Iniatilised!");
}

function gotPoses(results){
  if(results.length > 0){
     console.log(results);

     leftwristX=results[0].pose.leftWrist.x;
     rightwristX=results[0].pose.rightWrist.x;
     difference=floor(rightwristX - leftwristX);

     console.log("leftWristX  = " + leftwristX  + " rightWristX = "+ rightwristX + " difference = " + difference);
  }

}

function draw(){
  background('wheat');

  fill('rebeccapurple');
  text('Pratham', 100, 60);
    textSize(difference);
}
