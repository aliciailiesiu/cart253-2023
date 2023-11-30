class MemoryBoxes {

    constructor(x,y,size)  {
        this.x = x;
        this.y = y;
        this.size = size;
        this.fill = {
            r:163,
            g:172,
            b:194
        };
        this.vx = 0;
        this.vy = 0;
        this.speed = 0.5;
        this.strokeweight = 1;
        this.stroke = {
            r:44,
            g:44,
            b:158
        };
        
        
        
    } 

//controled by the mouse only horizontally
setUpBox() {
    this.x = random(0,width);
    this.y = random(0,height);

    this.vx = this.vx + this.speed;
    this.vy = this.vy + this.speed;
}

move() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
}


//what the paddle will look like when it is displayed
display() {
    push();
    fill(this.fill.r,this.fill.g,this.fill.b);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.size);
    pop();
}

offScreen() {

    if (this.x > width) {
        this.vx = this.vx - 1
    }
    else if ( this.x < 0) {
        this.vx = this.vx + 1
    }
    
    if ( this.y < 0) {
        this.vy = this.vy + 1
    }
    else if ( this.y > height) {
        this.vy = this.vy - 1
    }
}

mousePressed() {
    // Calculate the distance between this flower and the mouse
    let d = dist(this.x,this.y,mouseX,mouseY);
    // Check if the distance is less than the head of the flower
    if (d < this.size/2) {
        push();
        fill(this.fill.r,this.fill.g,this.fill.b);
        rectMode(CENTER);
        stroke(this.stroke.r,this.stroke.g,this.stroke.b);
        this.strokeweight = this.strokeweight + 10;
        rect(this.x,this.y,this.size);
        pop();
        console.log(`clicked`)
        
    
  }

}
}