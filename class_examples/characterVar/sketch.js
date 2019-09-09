var pointX = 0;
var pointY = 0;
var faceColor = "blue";

//"based off of this point, draw a character"
function setup() {
  // put setup code here
createCanvas(500,500);
pointX = width/2;
pointY = height/2;
console.log("pointX " + pointX + "point Y" + pointY);
//console is PointX refers to print out the characters and add the value and you don't need this. Just a reference.
}

function draw() {
  // put drawing code here

  background(255);
  //pointX = 100;
  //pointY = 100;
  pointX = mouseX;
  pointY = mouseY;

fill(faceColor);
rect(pointX - 100, pointY - 100, 200, 200) //face

ellipse(pointX, pointY, 10, 10);
ellipse(pointX + 20, pointY - 20, 30,30);
ellipse(pointX - 20, pointY - 20, 30,30);
//check back to this

arc(pointX, pointY + 10, 50, 50, 0, PI);
//(x,y,width, height, start, end)
//half of circle = PI and a quadrant is HALF_PI

//ellipse(point2, point2, 10,10);

} //end of draw



function mousePressed(){
  faceColor = "red";
}

function mouseReleased(){
  faceColor = "blue";
}

function keyPressed(){
  faceColor = "white";
}
