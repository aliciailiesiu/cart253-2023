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
 //drawing an alien for second activity//
*/
function setup() {
createCanvas(640,480);
background(236, 207, 252);

//drawing body of alien//
noStroke();
fill(245, 39, 163);
ellipse(320,360,300,240);

//drawing head of alien//
fill(240, 7, 147);
ellipse(320,150,180,200);

//drawing eyes of alien//
fill(255);
stroke(0)
ellipse(320,150,45);
ellipse(370,150,45);
ellipse(270,150,45);
fill(0);
ellipse(320,150,20);
ellipse(370,150,20);
ellipse(270,150,20);

//drawing beauty mark of alien//
fill(0);
noStroke();
ellipse(297,175,5);

//drawing nostrils of alien//
fill(82, 13, 54);
ellipse(310,190,10,20);
ellipse(330,190,10,20);

//drawing mouth of alien//
stroke(209, 8, 8);
strokeWeight(5);
rectMode(CENTER);
rect(320,220,60,25);

//drawing antenas of alien//
noFill();
stroke(240, 7, 147);
strokeWeight(4);
arc(280,30, 10, 60, HALF_PI , PI);
arc(360,30,10,60 , QUARTER_PI,HALF_PI);
fill(165, 227, 77);
stroke(65, 99, 16);
ellipse(275,25,20);
ellipse(365,25,20);

//drawing a bow of alien//
fill(140, 145, 222);
noStroke();
ellipse(320,260,25);
triangle(325,260,360,240,360,280);
triangle(315,260,280,280,280,240);

//drawing eyebrows of alien//
fill(0);
triangle(270,100,280,120,260,120);
triangle(370,100,380,120,360,120);




 

}    


/**
 * Description of draw()
*/
function draw() {

}