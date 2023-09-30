/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";
let rectangle = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 2,
    scale: 1,
    angle: 0
  }
  
  function setup() {
    createCanvas(500, 500);
    rectangle.vx = rectangle.speed;
  }
  
  function draw() {
    background(0);
  
    // Move the rectangle according to its velocirty
    rectangle.x = rectangle.x + rectangle.vx;
    rectangle.y = rectangle.y + rectangle.vy;
  
    // Increase the rectangle's scale and angle
    rectangle.scale = rectangle.scale + 0.01;
    rectangle.angle = rectangle.angle + 0.05;
  
    // Display the rectangle
    push();
    rectMode(CENTER); // Centered
    translate(rectangle.x, rectangle.y); // Translate to rectangle position
    scale(rectangle.scale); // Apply scale
    rotate(rectangle.angle); // Apply rotation
    rect(0, 0, rectangle.size, rectangle.size); // Draw rectangle at 0,0 because of translate()
    pop();
  }





























/**
 * Description of preload
*/
function preload() {

}

//let backgroundShade=0
    //let circle= {
        //x:0,
       // y:250,
       // size:100,
       // speed:1,
        

   // }
/**
 * Description of setup
*/

//let displayCircle = false;


//let caterpillar = {
   // x: 0,
    //y: 250,
   // segmentSize: 6,
    //totalSegments: 100,
    //segmentSpacing: 5
//}



//function setup() {
    //createCanvas(500,500);
//}


/**
 * Description of draw()
*/
//function draw() {
//background(0);
//noStroke();
//fill(197, 227, 134);


//let x = caterpillar.x;
//for(let i = 0; i < caterpillar.totalSegments; i++) {
   // ellipse(x, caterpillar.y,caterpillar.segmentSize);
    //x = x + caterpillar.segmentSpacing;
//}
 





//}

































   // if (mouseIsPressed) {
   // background(255)//if the mouse is pressed then background will be white
   // displayCircle = true; //if mouse is pressed the displaycircle variable becomes true
   // }
    //else {
      //  background (0); //if mouse is not pressed then background is black
  //  }

    //if (displayCircle) {
       //ellipse(width/2,height/2,100,100);//if displaycirle is true then it will make an ellipse
   // }
    //fill(255,0,0);





   // if (keyIsPressed === true){
    //background(255); //if any key is pressed then background turns white
    //}
    //else {
     //   background(0); //when key is not pressed it is black
   // }

























//background(backgroundShade);


//circle.x= circle.x + circle.speed;
//if the circle is off the right side
//if (circle.x > width) {
//move it back to the left
    //circle.speed = -circle.speed;}

//if the circle is off the left side
//if (circle.x < 0) {

//this moves it back to the right bc by going to the left the circle speed is negative and by making it negative again it would become positive
//circle.speed= -circle.speed;

//this makes the circle stop when it reaches x=0
  // circle.x = circle.speed }

//fill(circle.fill);

//if the mouse is ont the left side of the canvas
//if (mouseX < width/3){
    //use a red fill
  //  fill(255,0,0);}

//else if (mouseX< 2 * width/3) {
    //fill(0,255,0);}

//else {
 //   fill(0,0,255);}
   // ellipse(circle.x, circle.y,circle.size);


