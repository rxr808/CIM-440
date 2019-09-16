var noseX = 215;
var noseY = 225;
var eyeSize = 20;
var mouthX = 225;
var mouthY = 300;

function setup() {
  // put setup code here
  createCanvas(1000,1000);
  background(210, 180, 140);
}


function draw() {
  // put drawing code here



  if(mouseX < width/2){
  //do something
  console.log("left hand side");
    background("blue");
  }
//mouseX is greater than but including 200 or width/2 --> greater than or less than signs are not inclusive
  if (mouseX > width/2){
  console.log("right hand side");
  background("pink");
  }

  pointX = mouseX;
  pointY = mouseY;


strokeWeight(1);
//left eye
ellipse(200, 200, eyeSize, eyeSize);
//right eye
ellipse(250, 200, eyeSize, eyeSize);

//nose
//  rect(80,200,100,30);// rect starts drawing from top left hand corner
rect(noseX, noseY, 20, 50);

//mouth
fill("red"); //css color
arc(mouthX, mouthY, 100, 100, 0, PI); // 0 to 180


//triangle(10,10,20,20,0,20)
//(x,y) (x,y) (x,y)
//point 1 (x,y) = 10,10
//point 2 (x,y) = 20,20
//point 3 (x,y) = 0,20
//testing
fill(255); //grayscale
}
