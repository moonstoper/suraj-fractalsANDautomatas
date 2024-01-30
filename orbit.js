let rmod;
let colorsetting;
let colormod;
let el1X, el1Y, el1Rad, el1rotateAngle, el1rotateAngleMod, el1OrbAlt, el1XMod;
let el2X, el2Y, el2Rad, el2rotateAngle, el2rotateAngleMod, el2OrbAlt;
let el3X, el3Y, el3Rad, el3rotateAngle, el3rotateAngleMod, el3OrbAlt;
let margin;
// Converts from degrees to radians.
Math.radians = function(degrees) {
    return degrees * Math.PI / 180;
  };
   
// Converts from radians to degrees.
Math.degrees = function(radians) {
return radians * 180 / Math.PI;
};
function setup() {
  createCanvas(windowWidth-5, windowHeight-5);
  
  colorsetting = 180;
  colormod = 0.5;
  margin = windowWidth * 0.4;
  
  el3rotateAngle = 50;
  el3rotateAngleMod = 2.5;
  el3Rad = 3;
  el3OrbAlt = 20;

  el2rotateAngle = 0;
  el2rotateAngleMod = 1;
  el2Rad = 4;
  el2OrbAltx = 100;
  el2OrbAlty = 400;
  
  el1rotateAngle = 0;
  el1rotateAngleMod = 2;
  el1Rad = 180;
  el1OrbAlt = 100;
  el1X = el1Rad/2 + margin;
  el1XMod = 5;


  frameRate(100000);
  background(0);
}

function draw() {
  
  background(0);

  fill(255);
  noStroke();

  // ellipse(el3X, el3Y, el3Rad, el3Rad);
  el3rotateAngle = el3rotateAngle + el3rotateAngleMod;
  if(el2rotateAngle >= 360){
    el2rotateAngle = 0;
  }
  el3X = el2X + el3OrbAlt * cos(Math.radians(el3rotateAngle));
  el3Y = el2Y + el3OrbAlt * sin(Math.radians(el3rotateAngle));
// ------------

  fill(0, 150, 255);
  noStroke();

  ellipse(el2X, el2Y, el2Rad, el2Rad);
  el2rotateAngle = el2rotateAngle + el2rotateAngleMod;
  if(el2rotateAngle >= 360){
    el2rotateAngle = 0;
  }
  el2X = el1X + el2OrbAltx * cos(Math.radians(el2rotateAngle));
  el2Y = el1Y + el2OrbAlty * sin(Math.radians(el2rotateAngle));

// ------------
  noStroke();
  fill(colorsetting, colorsetting - 20, 0);
  colorsetting = colorsetting + colormod;
  if (colorsetting <= 160 || colorsetting >= 210){
    colormod = -colormod;
  }

  ellipse(el1X, el1Y, el1Rad, el1Rad);
  el1rotateAngle = el1rotateAngle + el1rotateAngleMod;
  if(el1rotateAngle >= 360){
    el1rotateAngle = 0;
  }
  
  el1X = el1X + el1XMod;
  el1Y = windowHeight/2;
  if(el1X <= (el1Rad/2 + margin) || el1X >= windowWidth - (el1Rad/2) - margin){
    el1XMod = -el1XMod;
  }
  
//   el1X = windowWidth/2 + el1OrbAlt * cos(Math.radians(el1rotateAngle));
//   el1Y = windowHeight/2 + el1OrbAlt * sin(Math.radians(el1rotateAngle));
}