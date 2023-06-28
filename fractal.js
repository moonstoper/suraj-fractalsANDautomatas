
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
    heightTree = height>width?width:height
    console.log("HI");
    angle = 0.33

    // lh = 100
    // fractaldraw()
}

function draw() {
    background(000);
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
 
    fractaldraw(lh, true)
    
    if (lh < heightTree/5) lh += 1

}

function fractaldraw(lh, l) {
    // console.log(lh)

    stroke(colorset[0])
    if (lh < 10) {
        stroke(colorset[0]);
        strokeWeight(1)
        if (l)
            fill(colorset[1]);
        else {
            fill(colorset[2])
        }
        ellipse(air, -lh, 10, 10);
        line(0, 0, air, -lh);
        return
    }

    line(0, 0, air, -lh)
    translate(air, -lh)

    push()
    rotate(angle)
    fractaldraw(lh * .75, false)
    pop()
    push()
    rotate(-angle)
    fractaldraw(lh * .75, true)
    pop()



}
