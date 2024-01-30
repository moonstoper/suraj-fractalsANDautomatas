
/*
newZ = Z-(Z^3-1)/(3Z^2)+C
*/
let angle;
let colorset = ["#663980", "#883DFF", "#CC74FF", "#746080", "#883DFF"]
let loops = 0;
let lh = 20
let air = 1;
let thic = 1
let inc = true;
let heightTree ;
function setup() {

    createCanvas(window.innerWidth, window.innerHeight)
    heightTree = window.innerHeight>window.innerWidth?window.innerWidth:window.innerHeight
    console.log("HI");
    angle = 0.33

    // lh = 100
    // fractaldraw()
}

function draw() {
   
    background(0);
    stroke(255);
    fill(255)
    translate(width / 2, height)
   
    if (inc) {
        air += 0.01
    } else {
        air -= 0.01
        
    }
    // console.log(air)
    if (air > 15) {
        inc = false
    }
    if (air < -15) {
        inc = true;
    }
 
    // lh = 200
    if(lh<heightTree/5) lh+=1;
    fractaldraw(lh, true)
    // console.log(lh)

}

function fractaldraw(lh, l) {
    // console.log(lh)

    stroke(colorset[0])
    if (lh < 10) {
        stroke(255);
        strokeWeight(1)
        if (l)
            fill(255);
        else {
            fill(255)
        }
        ellipse(air, -lh, 2, );
        line(0, 0, air, -lh);
        return
    }
    strokeWeight(lh/8)
    line(0, 0, air, -lh)
    translate(air, -lh)

    push()
    rotate(angle)
    fractaldraw(lh * .75, false)
    pop()
    // push()
    // rotate(-0.42)
    // fractaldraw(lh * .75, false)
    // pop()
    // push()
    // push()
    // rotate(0)
    // fractaldraw(lh * .5, true)
    // pop()
    push()
    rotate(-angle)
    fractaldraw(lh * .75, true)
    pop()



}
