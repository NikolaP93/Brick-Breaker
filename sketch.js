
let brick, status, score, song;
let bricks = [];
let gameStatus = true;

let currentScore = 0;

let initializers = {
    lives:3,
    gameStatus:true,
    currentScore:0
}

function mousePressed() {
    if (gameStatus) {
        ball.xspeed = 3;
        ball.yspeed = 3;
        gameStatus = !gameStatus;
    }
}


function init() {

    status = new GameStatus();
    highScore = 0;
    ball = new Ball();
    img = loadImage('images/brick.jpg');
    livesimg = loadImage('images/heart.png');
    backgroundimg = loadImage('images/spacebgr.jpg');

    if (initializers.lives === 3) {
        ball = new Ball();
        score = 0;
        brick = new Brick(width - (width * 7 / 100), height - (height * 10 / 100), height / 80, width / 12);
        //create bricks 12x6
        for (i = 0; i < 12; i++) {
            bricks[i] = [];

            for (j = 0; j < 6; j++) {

                bricks[i][j] = new Brick(5 + i * (width / 12), 10 + j * (height / 20), height / 30, width / 14)

            }
        }
    }

}

function removeBricks() {
    for (i = 0; i < 12; i++) {

        for (j = bricks[i].length - 1; j >= 0; j--) {
            bricks[i][j].show();

            // remove bricks
            if (ball.hits(bricks[i][j])) {
                currentScore++;
                song.play();

                bricks[i].splice(j, 1);
                
                score++;
                ball.yspeed = 3;

                //accelerate the ball
                if (ball.xspeed > 0) {

                    ball.xspeed = 3 + currentScore/10;
                    
                }
                if (ball.xspeed < 0) {
                    ball.xspeed = -3 - currentScore/10
                }

            }
        }
    }
}


function setup() {
    createCanvas(1200, 800);
    init();
    song = loadSound('tick.mp3');
}



function draw() {
    
    background(backgroundimg);
    fill(255);

    brick.showmain();
    brick.move();

    ball.show();
    ball.move();

    // game status / life counter
    if (ball.y > height + 50) {
        --initializers.lives;
        currentScore = 0;
        gameStatus = true;
        init();
        


        if (initializers.lives < 1) {
            if (confirm("Play again?")) {
                initializers.lives = 3;
                init();

            }
        }
    }

    //display lives
    status.displayLives(initializers.lives);
    //display score
    status.drawScore();


    //display bricks
    if (ball.hits(brick)) {
        ball.yspeed = -3;
    }
    removeBricks(currentScore);





}





