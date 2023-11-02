/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

//bg color
let bgColor = 0;

//paddle variable
let paddle;

//gravity variable
let gravityForce = 0.0025;

let balls = [];
let numBalls = 5;





"use strict";


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

   paddle = new Paddle(100,20);
   paddle.move();

   for (i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = (-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
   }
  
}


/**
 * Description of draw()
*/
function draw() {
    background(bgColor);

   
    paddle.display();
    paddle.keyPressed();
    paddle.OffScreen();

    for (i = 0; i < balls.length; i++) {
        let ball = balls[i];
        ball.gravity(gravityForce);
        ball.move();
        ball.bounce();
        ball.display();
    }
}

