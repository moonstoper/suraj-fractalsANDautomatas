let a = 0;
function setup() {
    createCanvas(400, 400)
    console.log("test")
    textSize(35)
    fill(55, 100, 153);
    text('TEST', 10, 30);
    
}

function draw() {
    push()
    let offset = 0
    background(0)
    stroke(0,0,255)
    strokeWeight(2)
    
    stroke(255)
    line(0,height/2,width,height/2)
    translate(width/2,height/2)
    rectMode(CENTER);
    // let inc = TWO_PI / 25.0;
    fill("#0000ff")
    for (let i = 0; i < width; i+=20) {
    let h = map(sin(a+offset),-1,1,0,100)
    rect(i-width/2+10/2,0,20,h);
    
    
    offset+=0.1;
    
}
    a+=0.05;
    pop()
}
