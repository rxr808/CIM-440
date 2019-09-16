
var bunnyImage;

function preload(){
// used to load media (first function preload, then setup, then draw)
bunnyImage = loadImage("bunny.jpg");
}

function setup() {
  // put setup code here
createCanvas(400,400);
}

function draw() {
  // put drawing code here
//image var, x position, y position
image(bunnyImage,0,0)
//image var, x position, y position, width, height
//dividing the width and height by a number scales proportionally
image(bunnyImage,0,0,bunnyImage.width/4,bunnyImage.height/4);
//DON'T choose a random size
image(bunnyImage, 200, 200, 154, 200);
}
