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

let bg = {
    red:0,
    green:0,
    blue:0
}
let circle1 = {
    x:0,
    y:250,
    speed:1,
    size:100,
    growthRate:1,
    fill:255,
    alpha:200,

}
let circle2 = {
    x:500,
    y:250,
    size:75,
    sizeRatio:0.75,
    speed:-1,
    fill:255,
    alpha:200
}

/**
 * Description of setup
*/
function setup() {
createCanvas(500,500);
noStroke();
}

/**
 * Description of draw()
*/
function draw() {
    //background//
background(bg.red,bg.green,bg.blue);
bg.red = map(circle1.size,100,width,0,255);

//circle 1//
circle1.x = circle1.x + circle1.speed ;
circle1.size = circle1.growthRate;
circle1.size= constrain(circle1.size,0,width);
circle1.x = constrain(circle1.x,0,width/2);
fill(circle1.fill,circle1.alpha);
ellipse(circle1.x,circle1.y,circle1.size);



//circle 2//
circle2.x = circle2.x + circle2.speed;
circle2.x = constrain(circle2.x,width/2,width);
circle2.size = circle1.size * circle2.sizeRatio;
fill(circle2.fill,circle2.alpha);
ellipse(circle2.x,circle2.y,circle2.size);
}