var btn_red;
var btn_green;
var btn_blue;
var btn_yellow;
var btn_indigo;
var btn_violet;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  

  btn_red = createButton("RED")
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg)

  btn_green = createButton("GREEN")
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg)

  btn_blue = createButton("BLUE")
  btn_blue.position(100,100);
  btn_blue.mousePressed(blue_bg)

  btn_yellow = createButton("YELLOW")
  btn_yellow.position(250,100);
  btn_yellow.mousePressed(yellow_bg)

  btn_cyan = createButton("CYAN")
  btn_cyan.position(100,150);
  btn_cyan.mousePressed(cyan_bg)

  btn_purple = createButton("PURPLE")
  btn_purple.position(250,150);
  btn_purple.mousePressed(purple_bg)
}

function draw() {
  background(r,g,b);
}

function red_bg()
{
  r = 255
  g = 0 
  b = 0
}

function green_bg()
{
  r = 0
  g = 255
  b = 0
}

function blue_bg()
{
  r = 0
  g = 0 
  b = 255
}

function yellow_bg()
{
  r = 255
  g = 255
  b = 0
}

function cyan_bg()
{
  r = 0
  g = 255 
  b = 255
}

function purple_bg()
{
  r = 127
  g = 0
  b = 255
}
