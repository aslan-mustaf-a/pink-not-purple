var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

 btn_red = createButton("red");
 btn_red.position(100,50);
 btn_red.mousePressed(red_bg);
}



function draw() {
  background(r,g,b);
  
}

