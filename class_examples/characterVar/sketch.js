//These variables are global; available throughout our entire code/program
var pointX = 0;
var pointY = 0;
var faceColor = "blue";

var colorButton;

//"based off of this point, draw a character"
function setup() {
  // put setup code here
createCanvas(500,500);
pointX = width/2;
pointY = height/2;
//console.log("pointX " + pointX + "point Y" + pointY);
//console is PointX refers to print out the characters and add the value and you don't need this. Just a reference.

var message = "Hello"; //The scope of this variable is only available inside of the setup function. If used in the draw or any other function, you will receive  an error!
console.log(message);
//console.log(drawMessage); //error; drawMessage is not defined because it was ONLY declared in the draw

colorButton = createButton("Click to turn purple");//function that is part of the p5.dom library, it generates an html button
colorButton.position(20,20);
colorButton.mousePressed(function(){
  faceColor = "purple";
});

}

function draw() {
  // put drawing code here

//console.log(message); // error; message is not defined because the message variable is only in the setup's scope
var drawMessage = "This message is in the draw loop";
console.log(drawMessage);
  background(255);

//Use an if statemen to change the background colorButton
// what is going to be our condition

if(mouseX < width/2){
//do something
console.log("left hand side");
  background(255);
}

if (mouseX > width/2){
console.log("right hand side");
background("grey");
}

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
  //faceColor = "red";
}

function mouseReleased(){
  //faceColor = "blue";
}

function keyPressed(){
  faceColor = "white";
//conditional: if condition is true, then do what is inside the curly braces.
// == means one side = the other. Comparing.
//= is singular statement where a variable = the other side.
  if (key == "w"){
    //your action goes in here
    faceColor = "white";

    if(key == "r"){
      faceColor = "red";
    }

  }
} //end of key keyPressed

//end of document
