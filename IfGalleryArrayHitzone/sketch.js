// Sloth image "IMG_3883" by JohnHedtke is licensed under CC BY-NC-SA 2.0 https://search.creativecommons.org/photos/217faedd-d06a-48ba-91f7-f4d4c6dafa04
// Puppy image "puppies" by www.petian.net is licensed under CC BY-NC-ND 2.0  https://search.creativecommons.org/photos/4f271583-e45d-4faf-bfc8-7291c7c1e3c3
// dinosaur "Rupenhorn Dinosaur #4" by Kristian_Laban is licensed under CC BY-NC 2.0 https://search.creativecommons.org/photos/96213ba5-e9b6-4f2f-91e4-da28b9fcad22
// hedgehog "Ggo-Buk" by Kimu_tae is licensed under CC BY-NC-ND 2.0
// kitty "kitty" by devaburger is licensed under CC BY-NC-SA 2.0

var currentImage = 0;


var hitX = [100,200];
var hitY = [300,300];
var hitSize = 50;

var imageArray = [];


function preload(){
  //load media
  imageArray[0] = loadImage("images/puppy.jpg");
  imageArray[1] = loadImage("images/dinosaur.jpg");
imageArray[2] = loadImage("images/sloth.jpg");
imageArray[3] = loadImage("images/hedgehog.jpg");
imageArray[4] = loadImage("images/kitty.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);


}

function draw() {
  // put drawing code here
  background(255);
  console.log("currentImage " + currentImage);
  image(imageArray[currentImage],0,0,imageArray[currentImage].width/4,imageArray[currentImage].height/4);

rect (hitX[0],hitY[0],hitSize, hitSize);
rect (hitX[1],hitY[1],hitSize,hitSize);

} //end of draw

function mousePressed(){

if(mouseX > hitX[0] && mouseX < hitX[0] + hitSize && mouseY > hitY[0] && mouseY < hitY[0] + hitSize){
  console.log("Button 0");
  currentImage = currentImage + 1;
  if(currentImage == 5){
    currentImage = 0;



  } // end of currentImage == 4 if statement
} // button 0 end of hitzone

if(mouseX > hitX[1] && mouseX < hitX[1] + hitSize && mouseY > hitY[1] && mouseY < hitY[1] + hitSize){
  console.log("Button 1");
  currentImage = currentImage - 1;
  if(currentImage == -1){
    currentImage = 4;
  } //end of currentImage == -1 ?
} // button -1 end of hitzone

} // end mousePressed



// == means youre asking and comparing - anyhting inside an if-statement is a comparison and == usually
