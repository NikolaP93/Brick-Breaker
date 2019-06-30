
let brick;
let bricks = [];
let counter = 0;

function setup() {
    createCanvas(600, 400);
    brick = new Brick(300,350,10,50);
    ball = new Ball ();
    img = loadImage('brick.jpg');

    
}

function draw() {
    background(255);
    fill(255 );

    brick.show();
    brick.move();
    ball.move();
    ball.show();

    if(ball.hits(brick)) {
        ball.yspeed = -3
    }

    
    for(i=0;i<12;i++) {
        bricks[i] = [];
        
        for(j=0;j<6;j++) { 
            bricks[i][j] = new Brick(i*50, j*30, 20, 40);
            bricks[i][j].show();

            if(ball.hits(bricks[i][j])) {
                ball.yspeed = 3;
                bricks[i].splice(j,1);
                console.log(bricks[i][j])
            }
                
        }
           
    }

    
    

    
    
    
}

