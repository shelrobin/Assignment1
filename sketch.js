/*
  // A loop is structued like this:
  keyword (condition) {
    stuff that happens
  }

  // while loop
  // (condition)
  while (keep going as long as this evaluates to true) {
    // stuff happens
  }

  // for loop:
  // (variable assignment; condition to run while true; change to iterator)
  for(var i = 0; i < 20; i = i+ 1) {
    // stuff happens
  }
*/

function setup() {
createCanvas(600,600);
noStroke();
background(23,100,24);

x=0;
fill(0)
while (x<width){
    y=0
  while (y<height){
    rect(x,y,9,9);
    y=y+10;
  }
    x=x+10
}
}

