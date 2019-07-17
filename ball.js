class Ball {
    constructor(x = 300, y = 250, r = 10, xspeed = 3, yspeed = 3) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    }

    show() {
        fill(0)
        ellipse(this.x, this.y, this.r);
    }

    // check the position of the ball if it's withing boundaries
    move() {

        // if it leaves the width, change direction
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

        if(this.x + this.r >  brick.x &&
            this.x - this.r < (brick.x + brick.w) &&
            this.y + this.r >  brick.y &&
            this.y - this.r < (brick.y + brick.h)) 
         {  
           return true; 
         }

    }


}