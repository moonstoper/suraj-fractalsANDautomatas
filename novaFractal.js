
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
    
    createCanvas(window.innerWidth,window.innerHeight-50)
    // translate(width/2,height/2)
    // minS = createSlider(-200,0,-5.1,0.01)
    // maxS = createSlider(0,200,5,0.01)
    pixelDensity(1);
    // dp = createArray(width,height)
    console.log(width/3,height/3)
    // noLoop();
    // console.log(width)
    // drawF()
    background(0)
    aor = -1
    
    
}

function draw() {
    
    
    // background(0)
    aor+=.1
    if(aor==1){
        aor = -1
    }
    loadPixels();
    for (var i = 0; i < width; i+=1) {
        for (var j = 0; j < height; j+=1) {
            //  a+ib = Zo //nova
          
            var a = map(i,0,width,-2.5,2)
            var b = map(j,0,height,-5,1)
          
            var n = 0;
            // debugger;
            // console.log(a,b)
            var bright = 0
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
                
                     a = a - dr + aor
                     b = b - di + aor
                    
                    if(a2 - b2 > 16)
                    {   
                        
                        break;
                    }
                    // julian set
                    
                    // var zr = a*a - b*b
                    // var  zi = 2*a*b
                    // a = zr+ aor
                    // b = zi + boi
                    // let Z = new Complex(map(x, 0, width, -2.5, 1), map(y, 0, height, 1, -1))
                    // Z.multSelf(Z.copy()).addSelf(C)
                    // if(a*a +b*b> 4){
                    //         break;
                    //     }
                 

                  

                    n+=1
                    bright = n/iter
                }
                
                    
                    
                const norm = map(n, 0, iter, 0, 1);
                 bright = map(sqrt(norm), 0, 1, 0, 255);
                    if(n==iter){
                        bright = 0
                    }
                    const c = palette(bright)
                    
                    var pix = (i+j*width)*4
                    pixels[pix+0] = c.r
                    pixels[pix+2] = c.g
                    pixels[pix+1] = c.b
                    // pixels[pix+3] = 255
                    // pixels[pix+3] = 255
                    // updatePixels()
                    
                }
                
            }
            
            updatePixels()
            scale(4)


            
}


function palette(t){
    // http://iquilezles.org/www/articles/palettes/palettes.htm
    // color(t) = a + b * cos[2π(c*t+d)]
      const a = { x:0.5, y:0.5, z:0.5 }
      const b = { x:0.5, y:0.5, z:0.5 }
      const c = { x:1.0, y:1.0, z:1.0 }
      const d = { x:0.0, y:0.1, z:0.2 }
    
      return {
      r: (a.x + b.x * cos(TWO_PI * (c.x * t + d.x))) * 255,
          g: (a.y + b.y * cos(TWO_PI * (c.y * t + d.y))) * 255,
          b: (a.z + b.z * cos(TWO_PI * (c.z * t + d.z))) * 255
    }
  }