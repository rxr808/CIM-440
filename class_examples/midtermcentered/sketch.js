var imageArray = [];
var projects = [false, false, false, false];


function preload(){
  //load media
  imageArray[0] = loadImage("patmcgrath1.jpg");
  imageArray[1] = loadImage("patmcgrath2.jpg");
imageArray[2] = loadImage("patmcgrath3.jpg");
imageArray[3] = loadImage("patmcgrath4.jpg");
}

function setup() {
  // put setup code here
  var cnv = createCanvas(2000,800);
  cnv.id("mycanvas");

  var container0 = createDiv();
  container0.id("container0");
  // # => designate an id, find an id = container0
  //.html injects html or text into another html tag
    //.style("css property", "value")

  select("#container0").style("width", "2000px");//setting width of container0
  select("#container0").style("margin", "20px auto");//center our container, margin: 0 auto; 0 refers to the top and bottom spacing of our container, the auto refers to the left and right spacing of our container
  //To center our container, you need to set a width and margin: 0 auto;
  cnv.parent("#container0");


  console.log("projects[0] " + projects[0]);

  work1Button = createButton("Work 1");
  work1Button.position(100,10);
  work1Button.mousePressed(function(){
projects[0] = true;
  });

  work2Button = createButton("Work 2");
  work2Button.position(500,10);
  work2Button.mousePressed(function(){
  projects[1] = true;
    });

    work3Button = createButton("Work 3");
    work3Button.position(1000,10);
    work3Button.mousePressed(function(){
    projects[2] = true;
      });

      work4Button = createButton("Work 4");
      work4Button.position(1400,10);
      work4Button.mousePressed(function(){
      projects[3] = true;
        });
}

function draw(){
  // put drawing code here
  background(255);

  if(projects[0] == true){
    image(imageArray[0],50,0, imageArray[0].width/10, imageArray[0].height/10);
  }

  if(projects[1] == true){
    image(imageArray[1],500,0, imageArray[1].width/10, imageArray[1].height/10);
  }

  if(projects[2] == true){
    image(imageArray[2],930,0, imageArray[2].width/10, imageArray[2].height/10);
  }

  if(projects[3] == true){
    image(imageArray[3],1300,0, imageArray[3].width/3, imageArray[3].height/3);
  }
//************
circleColor();



} //end of draw

function circleColor(){
  fill(0);
  ellipse(width/2,height/2,100,100);
}
