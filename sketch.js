
let brick;
let bricks = [];
let status;
let score;
let gameStatus = true;
let lives = 3;
let counter = 0;


function mousePressed() {
    if (gameStatus) {
        ball.xspeed = 3;
        ball.yspeed = 3;
        gameStatus = !gameStatus;
    }
}

function removeBricks() {
    
    
    
    for (i = 0; i < 12; i++) {
        for (j = 0; j < bricks[i].length; j++) {


            // remove bricks
            
            if (ball.hits(bricks[i][j])) {
                bricks[i].splice(j, 1);
                score++;
                ball.yspeed = 3;

                //accelerate the ball on impact
                if (ball.xspeed > 0) {
                    ball.xspeed = 3 + score / 10
                }
                if (ball.xspeed < 0) {
                    ball.xspeed = -3 - score / 10;
                }
            }
        }
    }
}

function newGame() {
    
   
    status = new GameStatus();

    ball = new Ball();
    
    img = loadImage('images/brick.jpg');
    livesimg = loadImage('images/heart.png');
    backgroundimg = loadImage('images/spacebgr.jpg');

    if (lives === 3) {
        ball = new Ball();
        score = 0;
        brick = new Brick(width - (width * 7 / 100), height - (height * 10 / 100), height / 80, width / 12);
        //create bricks 12x6
        for (i = 0; i < 12; i++) {
            bricks[i] = [];

            for (j = 0; j < 6; j++) {
                bricks[i][j] = new Brick(5 + i * (width * 1 / 10), 10 + j * 30, 20, width / 12);
            }
        }

            
    }

    removeBricks();

    

}

function setup() {
    createCanvas(800, 600);
    newGame();
}



function draw() {
    counter++;
    background(backgroundimg);
    fill(255);

    brick.showmain();
    brick.move();

    ball.show();
    ball.move();
    
    // game status / lives counter
    if (ball.y > height + 50) {
        --lives;
        gameStatus = true;
        newGame();
        

        if (lives < 1) {
            if (confirm("Play again?")) {
                lives = 3;
                newGame();
                
            }
        }
    }
    //display lives
    status.displayLives(lives);
    //display score
    status.drawScore();



    if (ball.hits(brick)) {
        ball.yspeed = -3;
    }

    // display the bricks
    for (i = 0; i < 12; i++) {
        
        for (j = bricks[i].length - 1; j >= 0; j--) {
            bricks[i][j].show();

            // remove bricks
            if (ball.hits(bricks[i][j])) {
             
                
                    if(counter>30) {
                        bricks[i].splice(j, 1);
                
                    }
                    
                


                score++;
                ball.yspeed = 3;

                //accelerate the ball
                if (ball.xspeed > 0) {
                    ball.xspeed = 3 + score / 10
                }
                if (ball.xspeed < 0) {
                    ball.xspeed = -3 - score / 10;
                }
            }
        }
    }


}





