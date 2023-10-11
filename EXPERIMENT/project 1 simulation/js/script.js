/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";


let pants;


/**
 * Description of preload
*/
function preload() {
    pants = loadImage(`assets/images/pants-pink.png`);
}


/**
 * Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);
}


/**
 * Description of draw()
*/
function draw() {
background(200);

imageMode(CENTER);
image(pants,width/4,height/4);


}