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




"use strict";

/**
 * Description of preload
*/
function preload() {


}


/**
 * Description of setup
*/
function setup() {
    createCanvas(windowWidth,windowHeight);

   paddle = new Paddle(300,20);
}


/**
 * Description of draw()
*/
function draw() {
    background(bgColor);

    paddle.move();
    paddle.display();
    paddle.mousePressed();
}

// function mousePressed() {
    
// }