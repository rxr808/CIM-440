var hitX = 100;
var hitY = 100;
var threshold = 20;
var hitDistance = 0;

function setup() {
  // put setup code here
  createCanvas(400,400)
}


function draw() {
//put drawing code here
ellipse(hitX,hitY,threshold*2,threshold*2);
hitDistance = dist(mouseX, mouseY, hitX, hitY);
console.log("hitDistance " + hitDistance);
if(hitDIstance <= threshold){
  //do something, if hitDistance less than or equal to 20, 0-20
fill(127);
text("click me", hitX, hitY+30);
}else{
//if top is false, then execute code in else statement
fill(255);
}
// our variable hitDistance ^

//if(hitDistance > threshold){
  //do something, if hitDistance is greater than not equal than 21, 21 to infinity
//fill(255);
//}
function mousePressed (){
  if (hitDistance <= threshold){
    //do something
    fill (127);
  }
}
}
