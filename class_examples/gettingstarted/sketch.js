function setup() {
  // put setup code here
  //sets size of canvas
  createCanvas(500,500); //function: building blocks of library; (W,H);
//sets color of background
background("green");
background(0); //black
background(255); //white
background(200); //grayscale 0-255 - grayish white decimal
background(255,0,0); //RGB decimal full red
background(127,255,0); // chartruse
background('#ffffff'); // RGB hex code for white

fill(0,255,0); //adjusts innner shape color
stroke(violet); //outer edge color of the ellipse
ellipse(50,50,100,100); //points of a circle - ellipse A

fill(0,255,0); //set ellipse B color stroke fill to red
stroke(white); //set ellipse B color stroke to white
ellipse(100,100,50,50); ellipse B
}

function draw() {
  // put drawing code here
}
