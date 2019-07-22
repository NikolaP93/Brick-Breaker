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

    showmain = () => {
        
        fill(255)
        rect(this.x, this.y, this.w, this.h)
    }



    // main brick movement
    move() {
        
        if(mouseX>this.w/2 && mouseX<width-this.w/2) {
            this.x = mouseX - this.w/2 ;
        }
        
        
        



    }




}

