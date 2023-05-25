createCanvas()
     createCanvas(30, 40)

circle(30, 30, 20);
ellipse(56, 46, 55, 55);
ellipse(56, 46, 55, 55);
function setup()
{
    canvas =createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide()
   
}
function draw() {
    image(video,0,0,640,480);
 
}