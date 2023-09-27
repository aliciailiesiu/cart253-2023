/**
 * i-like-to-move-it
 * Alicia Iliesiu
 * 
 * In this exercise the circle starts at the left of the screen and starts moving to the right
 * the size of the circle varies using mouseX
 * the color of the cicrcle also varies using mouseX and mouseY
 * will apply map to control the color of the circle
 * will make circle go faster than the rest of shapes
 * two triangles moving towards the center acting like a gate (the goal is for the circle to pass the gate before it reaches the middle)
 * the triangles will be constrained to stop moving once they reach the middle
 * triangles move slower than the circle

"use strict";

/**
 * Description of preload
*/
function preload() {
//object in the triangle up from the screen
}
let triangleUp = {
    x1:250,
    y1:50,
    x2:200,
    y2:0,
    x3:300,
    y3:0,
    
}

let triangleHeightDifference = 50


//object in the triangle down from the screen

let triangleDown = {
    x1:250,
    y1:450,
    x2:200,
    y2:500,
    x3:300,
    y3:500,
    
}

let speed = 1 


let triangleColor = {
    red:31,
    green:17,
    blue:107,
}

    


// create variable for background color
let backgroundColor = {
    red:229,
    green:194,
    blue:237,
}

let movingCircle = {
    x:0,
    y:250,
    w:35,
    speed:3
}




function setup() {
createCanvas(500,500);
background(backgroundColor.red,backgroundColor.green,backgroundColor.blue);

}



function draw() {
    
    //drawing triangle going down
    noStroke();
    fill(triangleColor.red,triangleColor.green,triangleColor.blue);
    triangle(triangleUp.x1,triangleUp.y1,triangleUp.x2,triangleUp.y2,triangleUp.x3,triangleUp.y3);
    triangleUp.y1=  triangleUp.y1 + speed;
    triangleUp.y2=  triangleUp.y2 + speed;
    triangleUp.y3=  triangleUp.y3 + speed;

    //making it stop in the middle//
    triangleUp.y1= constrain(triangleUp.y1,0, width/2);
    triangleUp.y2= constrain(triangleUp.y2,0,width/2 - triangleHeightDifference);
    triangleUp.y3= constrain(triangleUp.y3,0,width/2 - triangleHeightDifference);
   

    //drawing triangle coming up//
    noStroke();
    triangle(triangleDown.x1,triangleDown.y1,triangleDown.x2,triangleDown.y2,triangleDown.x3,triangleDown.y3);
    triangleDown.y1=  triangleDown.y1 - speed;
    triangleDown.y2=  triangleDown.y2 - speed;
    triangleDown.y3=  triangleDown.y3 - speed;

    //triangleDown.y1= constrain(triangleDown.y1,width,-width/2);
    //triangleDown.y2= constrain(triangleDown.y2,width,width/2 + triangleHeightDifference);
    //triangleDown.y3= constrain(triangleDown.y3, width,width/2 + triangleHeightDifference);

    //drawing moving circle//
    movingCircle.x += movingCircle.speed
    ellipse(movingCircle.x, movingCircle.y, movingCircle.w);
    
    
    
    



    
    
   
  


}