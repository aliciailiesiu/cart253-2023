class Paddle {
    //constructing the parameters of paddle
    constructor(w,h) {
        this.width = w;
        this.height = h;
        this.x = 0;
        this.y = height - this.height/2;
        this.fill = {
            r:155,
            b:245,
            g:66,
        };
        this.vx = 0;
        this.vy = 0;
        this.speed = 5
        
    }


    //controled by the mouse only horizontally
    move() {

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;

        this.vx = this.vx + this.speed;
        this.vy = this.vy + this.speed;
    }
    //what the paddle will look like when it is displayed
    display() {
        push();
        fill(this.fill.r,this.fill.b,this.fill.g);
        noStroke();
        rectMode(CORNER);
        rect(this.x,this.y,this.width,this.height);
    }

    //making the paddle move with the keypressed function
    keyPressed() {
       
        if ( keyCode === LEFT_ARROW) {
            this.x = this.x - this.speed;
        }
        else if ( keyCode === RIGHT_ARROW) {
            this.x = this.x + this.speed;
        }
    }

    OffScreen() {
        //blocks the paddle from going off the screen
        this.x = constrain(this.x,0,width - this.width);
        this.y = constrain(this.y,0,height - this.height);
    }

}
