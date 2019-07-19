
let brick;
let bricks = [];


function setup() {
    createCanvas(600, 400);
    brick = new Brick(300, 350, 10, 50);
    ball = new Ball();
    img = loadImage('brick.jpg');

    //create bricks 12x6
    for (i = 0; i < 12; i++) {
        bricks[i] = [];

        for (j = 0; j < 6; j++) {
            bricks[i][j] = new Brick(i * 50, j * 30, 20, 40);
        }
    }

}

function draw() {
    background(255);
    fill(255);

    brick.show();
    brick.move();
    ball.move();
    ball.show();

    //check for collision and change direction between the main brick and the ball
    if (ball.hits(brick)) {
        ball.yspeed = -3
    }

    // display the bricks
    for (i = 0; i < 12; i++) {
        for (j = 0; j < bricks[i].length; j++) {
            bricks[i][j].show();

            // remove bricks
            if (ball.hits(bricks[i][j])) {
                ball.yspeed = 3;
                bricks[i].splice(j, 1);
                
            } 
        }
    }


}



