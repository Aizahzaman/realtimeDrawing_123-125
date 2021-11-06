nose_x=0;
nose_y=0;
rightwrist_x=0;
leftwrist_x=0;
difference=0;

function preload(){

}

function setup(){
canvas=createCanvas(500,500);
canvas.position(800,200);
camera=createCapture(VIDEO);
camera.position(100,200);

myModel=ml5.poseNet(camera,modelLoaded);
myModel.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("model loaded");
}

function gotPoses(answer){
if(answer.length>0){
console.log(answer);
nose_x=answer[0].pose.nose.x;
nose_y=answer[0].pose.nose.y;
rightwrist_x=answer[0].pose.rightWrist.x;
leftwrist_x=answer[0].pose.leftWrist.x;
difference=leftwrist_x-rightwrist_x;
}
}

function draw(){
background("honeydew");    
fill("yellow");
square(nose_x,nose_y,difference)    
}