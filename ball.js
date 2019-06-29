class Ball {
    constructor(x = 300, y = 250, r = 20, xspeed = 3, yspeed = 3) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }

    show() {
        fill(0)
        ellipse(this.x, this.y, this.r * 2);
    }

    move() {

        if (this.x > width) {
            this.xspeed = -this.xspeed;
        }
        else if (this.x < 0) {
            this.xspeed = Math.abs(this.xspeed);
        }

        if (this.y > height + 25) {
            return true;
        } if (this.y < 0) {
            this.yspeed = Math.abs(this.yspeed)
        }


        this.x += this.xspeed;
        this.y += this.yspeed;
    }

    hits(brick) {
        
        let xdist = Math.abs(this.x - brick.x + brick.w / 2);
        let ydist = Math.abs(this.y - brick.y - brick.h/2);
        
        if(xdist > (brick.x/2 + this.r)) {
            return false;
        }

        if (ydist > (brick.h/2 + this.r)){
            return false;
        }

        if(xdist <= (brick.w/2)) {
            return true;
        }

        if(ydist <= (brick.h/2)) {
            return true;
        }

        let dx = xdist - brick.w/2;
        let dy = ydist - brick.h/2;
        if (dx*dx + dy*dy <= (this.r*this.r)) {
            this.yspeed = -3;
        } else {
            console.log("nope")
        }

    }
}