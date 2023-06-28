let resolution = window.innerHeight/50;
let rows;
let cols;
let lifegrid;
let canvas;
let r = [-1, 0, 1, 0, -1, 1, 1, -1]
let c = [0, -1, 0, 1, -1, 1, -1, 1]
let iter = 1;
let colorset = ["#AB2C72","#F7E772","#F759B0","#40E6F7","##359FAB"]

function create2D(rows, cols) {
    let ar = new Array(rows);
    for (let index = 0; index < ar.length; index++) {
        ar[index] = new Array(cols).fill(0)

    }

    return ar

}
function setup() {
    createCanvas(window.innerWidth, window.innerHeight)
    rows = ceil(window.innerWidth / resolution)
    cols = ceil(window.innerHeight/ resolution)
    console.log("HII")
    
   
   
    lifegrid = create2D(rows, cols)
    for (let index = 0; index < rows; index++) {
        for (let col = 0; col < cols; col++) {
            lifegrid[index][col] = floor(random(2))

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
                stroke(255)

            }
        }
    }

        // if(mouseIsPressed===true){
        //     lifegrid[floor(mouseX/resolution)][floor(mouseY/resolution)] = 1;
        //     fill(colorset[floor(random(5))])
        //     rect(floor(mouseX) * resolution-resolution, floor(mouseY) * resolution-resolution, resolution - 1, resolution - 1);
        //     stroke(255)
        // }

    

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


