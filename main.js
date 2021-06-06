 var noseX = 0;
 var noseY = 0;
function preload() {
    clown_nostril=loadImage('https://i.postimg.cc/mgfnQhFH/mostashe-removebg-preview.png');
    clown_glasses=loadImage('https://i.postimg.cc/L5w22R5M/glasses-removebg-preview.png');
 }
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 299.99);
    video.hide()
    var posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}
function draw() {
    image(video, 0, 0, 300, 300);
   // fill(255,0,0);
//     // stroke(0,200,0);
//     // circle(noseX,noseY,20);
   image(clown_nostril,noseX-12.5,noseY,30,30);
   image(clown_glasses,noseX-50,noseY-75,100,100);

 }
 function takeSnapShot() {
     save('UWU.png');
 }
 function modelLoaded() {
     console.log('posenet is initialize');
 }
 function gotPoses(results) {
     if (results.length > 0) {
         console.log(results);
         noseX = results[0].pose.nose.x;
         noseY = results[0].pose.nose.y;
         console.log("nose X = " + noseX)

         console.log("nose Y = " + noseY);
     }
 }