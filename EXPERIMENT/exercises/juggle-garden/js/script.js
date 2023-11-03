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

let score = 0;



let pinkText = {
    fill: {
        r:250,
        g:205,
        b:228
    }
};

let blueText = {
    fill: {
        r:107,
        g:190,
        b:242,
    }
}

//gravity variable
let gravityForce = 0.0025;

let balls = [];
let numBalls = 5;

let fastBalls = [];
let numFastBalls = 5



"use strict";


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

   paddle = new Paddle(300,20);
   paddle.move();

   for (i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = (-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
   }

   for (i = 0; i < numFastBalls; i++) {
    let x = random(0,width);
    let y = (-400,-100);
    let fastBall = new Fastball(x,y);
    fastBalls.push(fastBall);
   }
  
}


/**
 * Description of draw()
*/
function draw() {
    background(bgColor);

    push();
    fill(pinkText.fill.r,pinkText.fill.g,pinkText.fill.b);
    text(`ball count : ${score}`,width/8,height/8);
    pop();




   
    paddle.display();
    paddle.keyPressed();
    paddle.OffScreen();

    for (i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if(ball.active) {
            ball.gravity(gravityForce);
            ball.move();
            ball.bounce(paddle);
            ball.display();
        }
    }

    for (i = 0; i < fastBalls.length; i++) {
        let fastBall = fastBalls[i];
        if(fastBall.active) {
            fastBall.gravity(gravityForce);
            fastBall.move();
            fastBall.bounce(paddle);
            fastBall.display();
        }
    }



}

