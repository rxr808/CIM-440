
var bunnyImage;
var show
var hide

var showAndHide = false;

function preload(){
// used to load media (first function preload, then setup, then draw)
bunnyImage = loadImage("bunny.jpg");
}

function setup() {
  // put setup code here
  createCanvas(400,400);
  show = createButton("Show");
  hide = createButton("Hide");
  show.mousePressed(function(){
    showAndHide = true;
  });

  hide.mousePressed(function(){
    showAndHide = false;
  });
}

function draw() {
  background(255);
if(showAndHide == true){
image(bunnyImage,0,0,bunnyImage.width/4,bunnyImage.height/4);
}

text("Click and show",10,10);
}
