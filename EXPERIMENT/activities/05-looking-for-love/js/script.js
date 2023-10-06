/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

//"use strict";


let juliette = {
    x: 250,
    y: 0,
    size: 100,
    speed: 1,
    fill: {
        red:245,
        green:149,
        blue:194,
    },
    vx: 0,
    vy: 0,
}

let romeo = {
    x: 250,
    y: 500,
    size: 100,
    speed: 3,
    fill: {
        red:255,
        green:0,
        blue:0,
    },
    vx: 0,
    vy: 0,
}

let bg = 0;

let state = `title`; //possible state: title, animation, ending, love ending
/**
 * Description of preload
*/
function preload() {

}


/**
 * Description of setup
*/
function setup() {
createCanvas(500,500);

setUpCircle();
}

function setUpCircle() {
juliette.vx = random(-juliette.speed,juliette.speed);
juliette.vy = random(-juliette.speed,juliette.speed);

romeo.vx = random(-romeo.speed,romeo.speed);
romeo.vy = random(-romeo.speed,romeo.speed);
}


function draw() {
background(bg);

if (state ===  `title`) {
    title();
}
else if (state === `simulation`) {
    simulation();
}
else if (state === `love`) {
    love();
}
else if (state === `sadness`) {
    sadness();
}

}

function simulation() {
    move();
    offScreen();
    overlap();
    display();    
} 


function keyPressed() {
    //animation starts
   if (state === `title`) {
    //displaying the circles
    state = `simulation`
}
} 

function title() {
    fill(255);
    textSize(60);
    textAlign(CENTER,CENTER);
    text(`Romeo & Juliette`,width/2,height/2);
}

function love() {
    fill(255);
    textSize(60);
    textAlign(CENTER,CENTER);
    text(`LOVEEEE`,width/2,height/2);
}

function sadness() {
    fill(255);
    textSize(60);
    textAlign(CENTER,CENTER);
    text(`HEARTBREAK`,width/2,height/2);
}
function move() {
     //making circle 1 move
     juliette.x = juliette.x + juliette.vx;
     juliette.y = juliette.y + juliette.vy;
 
     //making circle 2 move
     romeo.x = romeo.x + romeo.vx;
     romeo.y = romeo.y + romeo.vy;
}

function offScreen() {
     //if juliette or romeo go anywhere outside the screen simultatiom = over
     if (juliette.x > width || juliette.x < 0 || juliette.y > height || juliette.y < 0 || romeo.x > width || romeo.y > height || romeo.y > height || romeo.y < 0) {
        state = `sadness`;    
    }
    
}

function overlap() {
    // check if circles overlap    
    let d = dist(juliette.x,juliette.y,romeo.x,romeo.y)
    if (d < juliette.size/2 + romeo.size/2) {
        state = `love`
    }    
}

function display() {
    push();
    fill(juliette.fill.red,juliette.fill.green,juliette.fill.blue);
    ellipse(juliette.x,juliette.y,juliette.size)
    pop();

    push();
    fill(romeo.fill.red,romeo.fill.green,romeo.fill.blue);
    ellipse(romeo.x,romeo.y,romeo.size)
    pop();
}