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
let circleSize;
let backgroundColor=0;
let circleX=250;
let circleY=250;
function setup() {
// Canvas is the size of the window
createCanvas(500,500);
circleSize = 200;
}


/**
 * Description of draw()
*/
function draw() {
    background(backgroundColor);
  ellipse(circleX,circleY,circleSize);
  
}