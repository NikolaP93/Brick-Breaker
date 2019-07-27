class Brick {
    constructor(x = 300, y = 350, h = 30, w = 50,opacity=255) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = w;
        this.opacity = opacity;
    }

    show() {
        fill(255,150,0,this.opacity);
        rect(this.x, this.y, this.w, this.h);
        
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

