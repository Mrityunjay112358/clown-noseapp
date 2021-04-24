noseX = 0;
noseY = 0;
eyeX = 0;
eyeY = 0;
function preload(){
clown_nose = loadImage("https://i.postimg.cc/kg4Jnn0B/Clown-Nose.png");
sunglasses = loadImage("https://i.postimg.cc/W4T7DH7F/sunglass-photo.png");
}

function setup(){
   canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    posenet = ml5.poseNet(video,modelLoaded);
posenet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("model loaded");
}
 

function draw(){
    image(video,0,0,300,300);
   // circle(noseX,noseY,20);
    image(clown_nose,noseX,noseY,30,30);
    //fill(255,0,0);
    //stroke(177, 252, 3);
    image(sunglasses,eyeX,eyeY,70,50);
}

function take_snapshot(){
    save("ClownNose.png");
}

function gotPoses(results){
 
     if(results.length>0){
         console.log(results);
         noseX=results[0].pose.nose.x-10;
         console.log("noseX "+noseX);
         noseY=results[0].pose.nose.y-10;
         console.log("noseY "+noseY)
         eyeX=results[0].pose.leftEye.x-45;
         eyeY=results[0].pose.leftEye.y-20;
     }
 
}