
/*
newZ = Z-(Z^3-1)/(3Z^2)+C
*/
let angle;
let colorset = ["#663980", "#883DFF", "#CC74FF", "#746080", "#883DFF"]
let loops = 0;
let lh = 20
let air = 2;
let thic = 1
let inc = true;
let heightTree ;
const SNOWFLAKES = [];
const Y_AXIS = 1;
const X_AXIS = 2;
function setup() {

    createCanvas(window.innerWidth, window.innerHeight,WEBGL)
    heightTree = window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth
    console.log("HI");
    angle = 150
    angleMode(DEGREES);
    // lh = 100
    // fractaldraw()
    stroke('#997950');
    fill('#e9b1cd')
    b1 = color(255);
    b2 = color(0);
    c1 = color(204, 102, 0);
    c2 = color(0, 102, 153);
    for(let y=0; y<height; y++){
        n = map(y,0,height,0,1);
        let newc = lerpColor(c1,c2,n);
        stroke(newc);
        line(0,y,width, y);
      }
   
      
}

function draw() {
    background(240);
    // setGradient(0, 0, width, height, b1, b2, Y_AXIS);
    translate(0,heightTree/2, 0)
    
    // noLoop()
    // normalMaterial();
    // normalMaterial();
    
    rotateY(frameCount);
    // line(10,100,0,0,-100)
    // rotateY(120)
    // rotateX(50)
    // ellipse(1,0,7,10)
    // rotateX(-50)
    cylinder(20,50,6,1)
    fractaldraw(100, true)

}

function fractaldraw(lh, l) {
    
    // strokeWeight(1)
    line(0,0,0,0,-lh,0)
    translate(0,-lh,0)
    if(lh>10)
   { 
    for(let i = 0;i<2;i++){
        rotateY(angle)
        push()
        rotateZ(angle/4)
        fractaldraw(lh*0.75,true)
        pop()
    }
    }
    else{
        ellipse(0,0,lh,10)
    }




}

function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
  
    if (axis === Y_AXIS) {
      // Top to bottom gradient
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      // Left to right gradient
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }