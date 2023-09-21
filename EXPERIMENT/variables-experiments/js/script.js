/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

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
// Canvas is the size of the window
createCanvas(windowWidth,200);
}


/**
 * Description of draw()
*/
function draw() {
    background(255,0,0);
  // Draw a square in the centre of the canvas
  rectMode(CENTER);
  rect(width/2,height/2,100,100);
}