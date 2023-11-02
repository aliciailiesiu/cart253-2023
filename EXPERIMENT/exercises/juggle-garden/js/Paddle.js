class Paddle {
    //constructing the parameters of paddle
    constructor(w,h) {
        this.width = w;
        this.height = h;
        this.x = undefined;
        this.y = height - this.height/2;
        this.fill = {
            r:155,
            b:245,
            g:66,
        };
        this.bounce = 400
        this.bounced = false;
    }
    //controled by the mouse only horizontally
    move() {
        this.x = mouseX
    }
    //what the paddle will look like when it is displayed
    display() {
        push();
        fill(this.fill.r,this.fill.b,this.fill.g);
        noStroke();
        rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
    }

    mousePressed() {

        if (this.bounced) {
            this.y = this.bounce;
        }

        
        // if(this.y = this.bounce ) {
        //     this.bounced = false;
        // }
        
        
    }
}

