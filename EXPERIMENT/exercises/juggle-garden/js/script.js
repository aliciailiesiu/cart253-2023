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



let greenText = {
    fill: {
        r:155,
        g:245,
        b:66
    },
};

let titleText = 60;
let smallText = 20;
let align1 = 40;
let align2 = 60;
let align3 = 80;
let align4 = 100;




//gravity variable
let gravityForce = 0.0025;

let balls = [];
let numBalls = 5;

let fastBalls = [];
let numFastBalls = 5

let state = `simulation` //other possible states : `simulation`, `lose`, `win`


"use strict";


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

   paddle = new Paddle(300,20);
   paddle.move();

   
  
}


/**
 * Description of draw()
*/
function draw() {
    background(bgColor);



//     let noMoreBalls = true; // Are they all dead? Assume they are...
// for (let i = 0; i < balls.length; i++) {
//   if (balls[i].alive) {
//     noMoreBalls = false; // We found a living flower
//     break; // Stop searching the flowers
//   }
// }

//     let noMorefastBalls = true;
// for (let i = 0; i < fastBalls.length; i++) {
//   if (fastBalls[i].alive) {
//     noMorefastBalls = false; // We found a living flower
//     break; // Stop searching the flowers
//   }
// }


// if (noMoreBalls && noMorefastBalls) {
//     state = `lose`;
// }


    // if (state === `title`) {
        // push();
        // fill(greenText.fill.r,greenText.fill.g,greenText.fill.b);
        // textAlign(CENTER,CENTER);
        // textSize(titleText);
        // text(`PRESS ENTER TO START`,width/2,height/2);
        // pop();

        // push();
        // fill(greenText.fill.r,greenText.fill.g,greenText.fill.b);
        // textAlign(CENTER,CENTER);
        // textSize(smallText);
        // text(`Use arrows to move paddle`,width/2,height/2 + align1);
        // pop();

        // push();
        // fill(greenText.fill.r,greenText.fill.g,greenText.fill.b);
        // textAlign(CENTER,CENTER);
        // textSize(smallText);
        // text(`pink ball = 1 point`,width/2,height/2 + align2);
        // pop();

        // push();
        // fill(greenText.fill.r,greenText.fill.g,greenText.fill.b);
        // textAlign(CENTER,CENTER);
        // textSize(smallText);
        // text(`blue ball = 2 points`,width/2,height/2 + align3);
        // pop();

        // push();
        // fill(greenText.fill.r,greenText.fill.g,greenText.fill.b);
        // textAlign(CENTER,CENTER);
        // textSize(smallText);
        // text(`Make 10 points to win the game!`,width/2,height/2 + align4);
        // pop();

    // }
    //  if (state === `simulation`) {

    push();
    fill(greenText.fill.r,greenText.fill.g,greenText.fill.b);
    text(`ball count : ${score}`,width/8,height/8);
    pop();
   
    paddle.display();
    paddle.keyPressed();
    paddle.OffScreen();

    console.log("ball");
    for (i = 0; i < balls.length; i++) {
        let ball = balls[i];
        if(ball.active) {
            ball.gravity(gravityForce);
            ball.move();
            ball.bounce(paddle);
            ball.display();
        }
    }

    console.log("Fastball");
    for (i = 0; i < fastBalls.length; i++) {
        let fastBall = fastBalls[i];
        if(fastBall.active) {
            fastBall.gravity(gravityForce);
            fastBall.move();
            fastBall.bounce(paddle);
            fastBall.display();
        }
    }
// }
// }
// else if (state === `lose`) {

// }
// }

// function keyPressed() {
//     // if (state === `title` && keyCode === ENTER) {
//         if ( keyCode === ENTER) {
//         state = `simulation`;
//     }
}