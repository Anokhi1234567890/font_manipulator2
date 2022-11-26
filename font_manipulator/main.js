function setup(){
    canvas = createCanvas(400,400);
    canvas.position(550,300)

    video = createCapture(VIDEO);
    video.size(550,550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet is initailized');
}

function gotPoses(results){
    if(results.length > 0);
    {
        console.log(results);
    }
}