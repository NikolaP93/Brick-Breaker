class Ball {
    constructor(x = random(width*1/5, width*4/5), y = height / 2, r = 10 + height / 500, xspeed = 0, yspeed = 0) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }

    show() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.r);
    }

    update() {
        let history = [];
        let v = createVector(ball.x,ball.y);
        history.push(v.x,v.y);
        for(i=0;i<history.length;i++) {
            ellipse(v[i].x,v[i].y)
        }
    }

    // check the position of the ball if it's withing boundaries
    move() {

        // if it leaves the w, change direction
        if (this.x > width) {
            this.xspeed = -this.xspeed;
        }
        else if (this.x < 0) {
            this.xspeed = Math.abs(this.xspeed);
        }

        //if it leaves the height, change direction

        if (this.y > height + 50) {
            return true;
        }

        if (this.y < 0) {
            this.yspeed = Math.abs(this.yspeed)
        }



        this.x += this.xspeed;
        this.y += this.yspeed;
        
    }



    hits(brick) {

        // check if the circle is intersecting with the brick, still need to test if the ball is inside the brick



        // if (this.x + this.r > brick.x &&
        //     this.x - this.r < (brick.x + brick.w) &&
        //     this.y + this.r > brick.y &&
        //     this.y - this.r < (brick.y + brick.h)
        // ) {
        //     return true;
        // }

        var distX = Math.abs(this.x - brick.x - brick.w / 2);
        var distY = Math.abs(this.y - brick.y - brick.h / 2);

        if (distX > (brick.w / 2 + this.r)) { return false; }
        if (distY > (brick.h / 2 + this.r)) { return false; }

        if (distX <= (brick.w / 2)) { return true; }
        if (distY <= (brick.h / 2)) { return true; }

        var dx = distX - brick.w / 2;
        var dy = distY - brick.h / 2;
        return (dx * dx + dy * dy <= (this.r * this.r));




    }
}