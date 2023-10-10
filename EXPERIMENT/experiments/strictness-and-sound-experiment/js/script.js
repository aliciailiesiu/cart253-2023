/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";


let tools;

/**
 * Description of preload
*/
function preload() {
    tools = loadSound(`assets/sounds/tools.wav`);
}


/**
 * Description of setup
*/
function setup() {
    createCanvas(500,500);
}


/**
 * Description of draw()
*/
function draw() {
    background(0);
}

function mousePressed() {
   tools.play();
}