mustashX = 0;
mustashY = 0;

function preload() {
    mustash = loadImage('https://i.postimg.cc/Y0sWX6sN/th-id-OIP.jpg');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        mustashX = results[0].pose.nose.x - 25;
        mustashY = results[0].pose.nose.y + 15;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustash, mustashX, mustashY, 30, 30);
}

function take_snapshot() {
    save('funnyMustashFilter.png');
}
