class Brick {
    constructor(x = 300, y = 350, h = 30, w = 50) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }

    show() {
        image(img, this.x, this.y, this.w, this.h);
    }

    // main brick movement
    move() {
        if (this.x > 0) {
            if (keyIsDown(LEFT_ARROW)) {
                this.x -= 10;
            }
        }
        if (this.x < width - 50) {
            if (keyIsDown(RIGHT_ARROW)) {
                this.x += 10;
            }
        }
    }

    


}

