function preload(){
}
function setup(){
    canvas = createCanvas(680,520);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 20,20,640,480);
    fill(0,128,0);
    stroke(0,128,0);
    circle(50,50,70);
    circle(635,50,70);
    circle(50,475,70);
    circle(635,475,70);
    fill(0,0,128);
    stroke(255,255,255)
    rect(50,50,585,5)
    rect(50,475,585,5)
    rect(635,50,5,430)
    rect(50,50,5,425)
}
function take_snapshot(){
    save('picture');
}