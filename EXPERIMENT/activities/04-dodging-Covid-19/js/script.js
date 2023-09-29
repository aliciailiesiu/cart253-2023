/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

let covid19 = {
    x: 0,
    y: 250,
    size: 100,
    vx: 0,
    vy: 0,
    speed: 5,
    fill: {
        red:152,
        green:201,
        blue:83,
    }
   
}


let backgroundShade = {
    red: 247,
    green: 163,
    blue: 114,
}

let user = {
    x: 250,
    y: 250,
    size: 100,
    fill: 255,
}

let numStatic = 2000

/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {

    createCanvas(windowWidth, windowHeight);

    covid19.y = random(0,height);
    covid19.vx = covid19.speed;

    noCursor();
}




 //* Description of draw()
//*/
function draw() {

    background(backgroundShade.red,backgroundShade.green,backgroundShade.blue);

    //making static in background
    for (let i = 0; i < numStatic; i++ ) {
        let x = random(0,width);
        let y = random(0,height);
    
        push();
        stroke(0);
        point(x,y);
        pop();
    }

    //covid19 movement
    covid19.x = covid19.x + covid19.vx;
    covid19.y = covid19.y + covid19.vy;

    if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0,height);
}
    //user movement 
    user.x = mouseX;
    user.y = mouseY;

    // calculating distance between covid19 and user mouse
    let distance = dist(user.x,user.y,covid19.x,covid19.y);
    if (distance < covid19.size/2 + user.size/2 ) {
        noLoop();    
    }

    //making covid19
    push();
    fill(covid19.fill.red,covid19.fill.green,covid19.fill.blue);
    noStroke();
    ellipse(covid19.x,covid19.y,covid19.size);
    pop();

    //making the users circle
    push();
    fill(user.fill);
    ellipse(user.x,user.y,user.size);
    pop();


}