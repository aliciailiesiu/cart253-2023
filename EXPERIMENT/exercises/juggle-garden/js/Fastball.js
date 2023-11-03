class Fastball {

    constructor(x,y){
        this.x = x;
        this.y = y;
        this.fill = {
            r:107,
            g:190,
            b:242
        };
        this.vx = 0;
        this.vy = 0;
        this.ax = 0;
        this.ay = 0;
        this.maxSpeed = 10;
        this.size = 20;
        this.active = true;
        this.score = 0;
    }

    //gravity of the ball
    gravity(force){
        this.ay = this.ay + force;    
    }

    //making Fastball move
    move() {
        this.vx = this.vx + this.ax;
        this.vy = this.vy + this.ay;

        this.vx = constrain(this.vx,-this.maxSpeed,this.maxSpeed);
        this.vy = constrain(this.vy,-this.maxSpeed,this.maxSpeed);

        this.x = this.x + this.vx;
        this.y = this.y + this.vy; 

        if (this.y - this.size/2 > height)
        this.active = false;
    }

    //how to make it bounce on the paddle when it touches it
    bounce(paddle) {
        //if the ball touches the paddle
        if (this.x > paddle.x - paddle.width/2 && 
        this.x < paddle.x + paddle.width/2 && 
        this.y + this.size/2 > paddle.y - paddle.height/2 && this.y - this.size/2 < paddle.y - paddle.height/2) {

            //bounce slightly on the left or the right
            let dx = this.x - paddle.x;
            this.vx = this.vx + map(dx,-paddle.width/2,paddle.width/2,-2,2);
            // bounce 
            this.vy = -this.vy;
            this.ay = 0;
            //if ball bounces on paddle the score goes up
            this.score++;
        }    
    }

    //display of ball
    display() {
        push();
        fill(this.fill.r,this.fill.g,this.fill.b);
        noStroke();
        ellipse(this.x,this.y,this.size);
        pop();

    }



}
