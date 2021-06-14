function preload() { }
function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(500,200);
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Posenet is initialized");
}
function draw() {
    image(video, 0, 0, 300, 300);
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results);
        console.log("rightEye x = " + results[0].pose.rightEye.x);
        console.log("rightEye y = " + results[0].pose.rightEye.y);
    }
}
function takeSnapshot() {
    save("clown-nose-pic.png");
}