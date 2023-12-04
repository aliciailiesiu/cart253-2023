class MemoryBoxes {

    constructor(x, y, size, memoryScene,fill) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.fill = fill;
        this.vx = 0;
        this.vy = 0;
        this.speed = 0.5;
        this.strokeweight = 1;
        this.stroke = {
            r: 44,
            g: 44,
            b: 158
        };
        this.memoryScene = memoryScene; // The scene this memory box goes to
        


    }

    //controled by the mouse only horizontally
    setUpBox() {
        this.x = random(0, width);
        this.y = random(0, height);

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
        fill(this.fill);
        noStroke();
        rectMode(CENTER);
        rect(this.x, this.y, this.size);
        pop();
    }

    offScreen() {

        if (this.x > width) {
            this.vx = this.vx - 1
        }
        else if (this.x < 0) {
            this.vx = this.vx + 1
        }

        if (this.y < 0) {
            this.vy = this.vy + 1
        }
        else if (this.y > height) {
            this.vy = this.vy - 1
        }
    }

    mousePressed() {
        // Calculate the distance between this box and the mouse
        let d = dist(this.x, this.y, mouseX, mouseY);
        // Check if the distance is less than half of the square
        //if it is make strokeweight thicker
        if (d < this.size / 2) {
            // Start this memory box's scene (the one in this.memoryScene)
            state = new this.memoryScene();
        }
    }
}