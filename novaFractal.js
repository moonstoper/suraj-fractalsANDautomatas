
/*
Zn+1 = Zn-(Zn^3-1)/(3Zn^2) + Zo
*/



var coloset1 = [ 225,12, 224,109,111]
var coloset2 = [ 255,143, 58,62,121]
var coloset3 = [ 225,148, 18,148,56]
var coloset4 = [ 225,58,88,58,200]
var x = window.innerWidth
var y = window.innerHeight
var minS;
var maxS; 
var iter = 40
var dp;
var aor;
var boi;
function createArray(width,height){
    var arr = new Array(width)
    for (var i = 0; i < arr.length; i++) {
         arr[i] = new Array(height).fill(5)
        
    }
    return arr
}

function setup() {
    
    createCanvas(150,150)
    // translate(width/2,height/2)
    minS = createSlider(-200,0,-5.1,0.01)
    maxS = createSlider(0,200,5,0.01)
    pixelDensity(1);
    // dp = createArray(width,height)
    console.log(width/3,height/3)
    // noLoop();
    // console.log(width)
    // drawF()
}

function draw() {
    aor = random(-1,1)
    boi = random(-2,2.5)
    
    background(0)
    loadPixels();
    for (var i = 0; i < width; i+=1) {
        for (var j = 0; j < height; j+=1) {
            //  a+ib = Zo //nova
            var a = map(i,0,width,minS.value(),maxS.value())
            var b = map(j,0,height,minS.value(),maxS.value())
            var ao = a 
            var bo = b 
            var n = 0;
            // debugger;
            // console.log(a,b)
            
            while (n<iter) {
                var a3 = a*a*a
                var b3 = b*b*b
                var a2 = a*a
                var b2 = b*b
                //z^3-1 part a^3+b^3+3a^2b+3b^2a
                var z3r = ( a3 - 1) - 3*(b2)*a
                var z3i = (-1*b3) + 3*(a2)*b 
                
                // var cdivident = z3r+z3i
                //3z^2 part 
                var z2r = 3*(a2) - 3*(b2)
                var z2i = 6*a*b
                
                //division part
                //  var comdivisor = 
                    var dr =( (z3r*z2r) + (z3i*z2i)) / (z2r*z2r) + (z2i*z2i);
                    var di = ((z3i*z2r)-(z3r*z2i)) / (z2r*z2r) + (z2i*z2i);
                
                    var a = a - dr + ao
                    var b = b - di + bo
                    
                    if(a + b > 32)
                    {   
                        // console.log("breaked")
                        
                        break;
                    }
                    //julian set
                    // var zr = a*a - b*b
                    // var  zi = 2*a*b
                    // a = zr+ ao
                    // b = zi + bo
                    // if(a*a + b*b > 16){
                        //     break;
                        // }
                        n+=1;
                    }
              
                
                    
                    
                    var bright = map(n,0,100,0,255)
                    console.log(ao)
                    if(ao<-2){
                        bright = 2;
                    }
                    if(ao<0 && ao>=-2){
                        bright = 3;
                    }
                    if(ao>0){
                        bright = 1;
                    }

                    if(n===iter){
                        bright = 0;
                    }
                   
                   
                    var pix = (i+j*width)*4
                    pixels[pix+0] = coloset1[bright]
                    pixels[pix+2] = coloset2[bright];
                    pixels[pix+1] = coloset3[bright];
                    pixels[pix+3] = 255
                    updatePixels()
                    
                }
                
            }
            
            updatePixels()
            scale(4)
            
}

