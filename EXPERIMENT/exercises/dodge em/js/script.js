/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";



//making rectangle proprieties
let covid19 = {
    x: 0,
    y: 250,
    width: 50,
    height: 50,
    vx: 0,
    vy: 0,
    speed: 2,
    fill : {
        red: 245,
        green: 42,
        blue: 143,
    }
}



let backgroundShade= {
    red:172,
    green:230,
    blue:212,
}

let angle = 0

/**
 * load scarred woman image
*/
let kittyImage;
function preload() {
    kittyImage = loadImage("assets/images/kitty.png");
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();
}

/**
 * Description of draw()
*/
function draw() {

    background(backgroundShade.red,backgroundShade.green,backgroundShade.blue);

    //load image as the user mouse
    imageMode(CENTER);
    image(kittyImage,mouseX,mouseY,150,150);


// If the mouse x position is GREATER than the rect x position, it must be to the RIGHT of the rect
if (mouseX > covid19.x) {
    // So set the rect's x velocity to a POSITIVE number to move it to the RIGHT
    covid19.vx = covid19.speed;
  }
  // Or if the mouse x position is LESS than the rect x position, it must be to the LEFT of the rect
  else if (mouseX < covid19.x) {
    // So set the rect's x velocity to a NEGATIVE number to move it to the LEFT
    covid19.vx = -covid19.speed;
  }

  // If the mouse position is GREATER than the rect y position, it must be BELOW the rect
  if (mouseY > covid19.y) {
    // So set the rect's x velocity to a POSITIVE number to move it DOWN
    covid19.vy = covid19.speed;
  }
  // Or if the mouse y position is LESS than the rect y position, it must be ABOVE the rect
  else if (mouseY < covid19.y) {
    // So set the rect's x velocity to a NEGATIVE number to move it UP
    covid19.vy = -covid19.speed;
  }

  // Then we actually APPLY these changes to `vx` and `vy` to the rect's position


  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;



    // And draw the rect at its new position
    push();
    rectMode(CENTER);
    translate(covid19.x,covid19.y)
    rotate(angle);
    fill(covid19.fill.red,covid19.fill.green,covid19.fill.blue);
    noStroke();
    rect(0,0,covid19.width,covid19.height);
    pop();
  
  angle = angle + 1
  



}