let resolution = window.innerHeight/80;
let rows;
let cols;
let lifegrid;
let canvas;
let r = [-1, 0, 1, 0, -1, 1, 1, -1]
let c = [0, -1, 0, 1, -1, 1, -1, 1]
let iter = 1;
let colorset = ["#FAF25B", "#F79577", "#77F7D7", "#A477F7", "#94A6A1"]
var button ; 
var pause = false
var hertzo2 = "............*..*...............n...........*...................n...........*...*...............n...**......****................n..****.........................n.**.**.........................n..**.....**.***................n........*.....**.......*....***n.......**.......*......*....*.*n........*.....**.......*....***n..**.....**.***................n.**.**.........................n..****.........................n...**......****................n...........*...*...............n...........*...................n............*..*..............."
var hertzo = "....*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*...n....**********************************************************...n.................................................................n..**************************************************************.n.*.................................*.......*..........*.........*n.****.**.*..*****..***************....*****....*******...********n.....*...**.....**.......*.......*........*............*.........n.******..*..*****..*****....******....*****....*******...********n.*......................*.........*........*..........*.........*n..**************************************************************.n.................................................................n....**********************************************************...n....*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..*..."
//var hertzo = "....**.*.........n....*.**....n............n.....***....n....*.*.*.**n....*...*.**n.**.*...*...n.**.*...*...n.....***....n............n.....**.*...n.....*.**..."
function create2D(rows, cols) {
    let ar = new Array(rows);
    for (let index = 0; index < ar.length; index++) {
        ar[index] = new Array(cols).fill(0)

    }

    return ar

}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    rows = 200
    cols = 200
    console.log("HII")
    // button = createButton('PAUSE');
    // button.style("color","red")
    // button.style('background','gainsboro')
//   button.position(0, 100);
//   button.mousePressed(()=>{
//     if(pause){
//         loop()
//         pause = false
//     }
//     else{
//         noLoop()
//         pause = true
//     }
// })
   frameRate(5)
   stroke(1)
   stroke('purple');
lifegrid = create2D(rows, cols)
    var r = 0 
    var col = 0
    // for(let ch = 0;ch<hertzo.length;ch++)
        
    //    { if(hertzo[ch]==='*'){
    //         lifegrid[col][r] = 1
    //     }
    //     col+=1
    //     if(hertzo[ch]==='n'){
    //         col = 0
    //         r+=1
    //     }

    // }
    r+=5
    col = 0
    for(let ch = 0;ch<hertzo2.length;ch++)
        
    { if(hertzo2[ch]==='*'){
         lifegrid[col][r] = 1
     }
     col+=1
     if(hertzo2[ch]==='n'){
         col = 0
         r+=1
     }

 }


    
    // lifegrid[floor(rows/2)-1][1] = 1
    // lifegrid[floor(rows/2)][0] = 1
    // lifegrid[floor(rows/2)][1] = 1
    // lifegrid[floor(rows/2)][2] = 1

    // lifegrid[6][floor(rows/2)-1] = 1
    // lifegrid[9][floor(rows/2)-1] = 1

    // lifegrid[5][floor(rows/2)] = 1

    // lifegrid[5][floor(rows/2)+1] = 1
    // lifegrid[9][floor(rows/2)+1] = 1

    // lifegrid[5][floor(rows/2)+2] = 1
    // lifegrid[6][floor(rows/2)+2] = 1
    // lifegrid[7][floor(rows/2)+2] = 1
    // lifegrid[8][floor(rows/2)+2] = 1

    r+=15
    col = 0
    for(let ch = 0;ch<hertzo.length;ch++)
        
       { if(hertzo[ch]==='*'){
            lifegrid[col][r] = 1
        }
        col+=1
        if(hertzo[ch]==='n'){
            col = 0
            r+=1
        }

    }
    

   

}


function draw() {
    background(0);
   
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (lifegrid[i][j] === 1) {
                // canvas.fillStyle="green"
                fill(colorset[floor(random(5))])
                rect(i * resolution, j * resolution, resolution - 1, resolution - 1);
                // strokeWeight(10)
                stroke(255)

            }
        }
    }

    
    

        let newlife = create2D(rows, cols)
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                let count = 0;

                for (let l = -1; l < 2; l++)
                    for (let m = -1; m < 2; m++) {
                        count += lifegrid[(i + l + rows) % rows][(j + m + cols) % cols]
                    }
                count -= lifegrid[i][j];

                if (lifegrid[i][j] == 1 && (count > 3 || count < 2)) {
                    newlife[i][j] = 0;
                }
                else if (lifegrid[i][j] == 0 && count == 3) {
                    newlife[i][j] = 1;
                } else {
                    newlife[i][j] = lifegrid[i][j]
                }
            }
        }
    

        lifegrid = newlife;




    }

function mousePressed() {
    if(pause)
    {
        lifegrid[floor(mouseX/resolution)][floor(mouseY/resolution)] = 1;
    fill(colorset[floor(random(5))])
    rect(floor(mouseX) * resolution-resolution, floor(mouseY) * resolution-resolution, resolution - 1, resolution - 1);
    stroke(255)
    updatePixels()
}
}
