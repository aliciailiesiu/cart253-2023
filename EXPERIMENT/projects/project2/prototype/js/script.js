// /**
//  * anything project
//  * Alicia Iliesiu
//  * 
//  * 
//  */

"use strict";

let boxes = [];
let numBoxes = 40;

// Player rotation.
let theta = 0;

let px = 0;
let py = 0;
let pz = 0;

function setup(){
	
	createCanvas(windowWidth,
				 windowHeight,WEBGL);
	background(random(255),0,random(255));
	
	for (let i = 0; i < numBoxes; i++){
        let _x = random(-width, width);
        let _y = random(-width, width);
        let _z = random(-width, width);
        let box = new Box(_x,_y,_z);
		boxes.push(box);
	}

}

function draw(){
	background(200,0,200);
	
    checkInput();
	
	// Position at centre of 
	// world, then rotate by
	// player's rotation.
	translate(0,0,700);
	rotateY(radians(theta));
	
	
	// Now move to player's position.
	translate(px, py, pz);
	
	for (let i = 0; i < boxes.length; i++){	
		boxes[i].render();
	}
}
	
function checkInput() {
    // Left arrow
	if (keyIsDown(37)) {
        theta = theta - 1;
   }
   // Right arrow
   if (keyIsDown(39)) {
       theta = theta + 1;
   }
   
   // Move forwards please! :)
   // Up arrow.
   if (keyIsDown(38)) {
       px += sin(-radians(theta));
       pz += cos(-radians(theta));
   }

}

