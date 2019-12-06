var rSlider, gSlider, bSlider;
var rSlider1, gSlider1, bSlider1;

var dress1;

var mannequin = -1;

var button0;

function preload(){
  //load media
dress1 = loadImage("assets/mannequinillustrations.png");
dress2 = loadImage("assets/mannequinbusinesssuit.png");}

function setup() {
  // create canvas
  createCanvas(1952, 1123);
  textSize(15);
  noStroke();

  // create sliders
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(20, 50);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(20, 80);

  rSlider1 = createSlider(0, 255, 100);
  rSlider1.position(20, 120);
  gSlider1 = createSlider(0, 255, 0);
  gSlider1.position(20, 150);
  bSlider1 = createSlider(0, 255, 255);
  bSlider1.position(20, 180);

  button0 = createButton("mannequin 0");
  button0.position(200,200);
  button0.mousePressed(function(){
    mannequin = 0;
  });

  button1 = createButton("mannequin 1");
  button1.position(200,400);
  button1.mousePressed(function(){
    mannequin = 1;
  });
}

function draw() {

  background(255);

  text("PRESS THE BUTTONS AND CHANGE HER OUTFIT COLORS!",500,20)

  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();

  const r1 = rSlider1.value();
  const g1 = gSlider1.value();
  const b1 = bSlider1.value();

if(mannequin == 0){

  fill(r, g, b); // top fill

//top shape
  beginShape();
vertex(1148, 245);
vertex(1198, 245);
vertex(1230, 313);
vertex(1205, 377);
vertex(1134, 377);
vertex(1120, 320);
endShape(CLOSE);

fill(r1, g1, b1); //bottom fill


//bottomshape
  beginShape();
vertex(1130, 391);
vertex(1206, 400);
vertex(1209, 466);
vertex(1216, 519);
vertex(1243, 794);
vertex(1100, 890);
endShape(CLOSE);

image(dress1,180,0);

}else if(mannequin == 1){

  fill(r, g, b);
//business top shape
  beginShape();
vertex(744, 190);
vertex(789, 195);
vertex(828, 418);
vertex(799, 439);
vertex(765, 281);
vertex(726, 367);
vertex(792, 505);
vertex(600, 485);
vertex(663, 360);
vertex(643, 286);
vertex(653, 370);
vertex(630, 391);
vertex(624, 223);
vertex(681, 190);
vertex(685, 391);
endShape(CLOSE);

fill(r1, g1, b1);

//business bottom shape
  beginShape();
vertex(600, 495);
vertex(757, 512);
vertex(725, 1022);
vertex(714, 1022);
vertex(685, 523);
vertex(665, 521);
vertex(708, 1022);
vertex(690, 1024);
endShape(CLOSE);

image(dress2,160,0);


}




  fill("black");


  text('red', rSlider.x * 2 + rSlider.width, 35);
  text('green', gSlider.x * 2 + gSlider.width, 65);
  text('blue', bSlider.x * 2 + bSlider.width, 95);

  text('red', rSlider1.x * 2 + rSlider1.width, 135);
  text('green', gSlider1.x * 2 + gSlider1.width, 165);
  text('blue', bSlider1.x * 2 + bSlider1.width, 195);


}
