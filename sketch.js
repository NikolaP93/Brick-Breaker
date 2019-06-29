
let brick;
let bricks = [];

function setup() {
    createCanvas(600, 400);
    brick = new Brick();
    ball = new Ball ();
    img = loadImage('brick.jpg');
}

function draw() {
    background(255);
    fill(255 );

    brick.show();
    brick.move();

    ball.show();
    ball.move()
    ball.hits(brick);

    
    

    for(i=0;i<12;i++) {
        bricks[i] = [];
        for(j=0;j<6;j++) { 
            bricks[i][j] = new Brick(i*50, j*30, 20, 40);
            bricks[i][j].show();
        }
        
    }
    
}

// class Bubble {
//     constructor(x,y,r=20) {
//         this.x = x;
//         this.y = y;
//         this.r = r;
//         this.red = 0;
//         this.green = 0;
//         this.blue = 0;
//     }

//     show() {
//         stroke(255);
//         strokeWeight(4)
//         fill(this.red,this.green,this.blue)
//         ellipse(this.x, this.y, this.r*2);
//     }

//     move() {
//         let a = 5;
//         this.x += 3;
//         // width + 20 because if sooner , it "blinks" away
//         if(this.x>width+20) {
//             this.x = -20;
//             a += 15;
//             this.red += 30;
//             this.green += 5;
//             this.blue += 15;
//         }


        
//     }

//     intersects(other) {
//         let d = dist(this.x, this.y, other.x, other.y);
//         return (d < this.r + other.r);
//     }

//     changeColor(red,green,blue) {
//         this.red = red;
//         this.green = green;
//         this.blue = blue;
//     }
// }





