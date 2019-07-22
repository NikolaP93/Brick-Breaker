

class GameStatus {



    constructor(
        score = 0,
        gameStatus,
        
    ) {
        this.score = score;
        this.gameStatus = gameStatus;
        
    }

    newGame = () => {
        
        setup();
        score = 0;
        gameStatus = false;
    }

    displayLives = (lives) => {
        this.lives = lives;
        

        for (let i = this.lives; i > 0; i--) {
            image(livesimg, 20 * i, height - (height * 5 / 100), 15, 15)
        }

    }

    

    drawScore = () => {
        text('Score: ' + score, width - (width * 8 / 100), height - (height * 5 / 100), width - (width * 12 / 100), height - (height * 10 / 100));
    }

}