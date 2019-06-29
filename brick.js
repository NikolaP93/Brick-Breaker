class Brick {
    constructor(x = 300, y = 350, h = 10, w = 50) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
    }

    show() {
        fill(255 );
        image(img, this.x, this.y, this.w, this.h);
    }

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

