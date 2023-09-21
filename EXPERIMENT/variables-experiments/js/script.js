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
let backgroundShade = 0;
let circleX = 0;
let circleY = 250;
let circleSize = 100;
let speed = 1;
let acceleration = 0.2;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(backgroundShade);
  ellipse(circleX,circleY,circleSize);
  circleX = circleX + speed;
  speed += acceleration;
}