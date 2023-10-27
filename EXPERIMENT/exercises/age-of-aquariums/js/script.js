//Alicia Iliesiu
//this is an exterminator simulation, the point is to never be able to exterminate all the flies or to just try to touch the bug to make the simulation end.


"use strict";

//creating array of flies
let flies = [];
//total number of flies
let totalFlies = 20;

//images 
let sprayImage;
let flyImage;
let bugImage;

//user variable
let user = {
    x: undefined,
    y: undefined,
    width: 80,
    height: 90
};

//bug variable
let bug = {
    x: undefined,
    y: undefined,
    size: 30,
    vx: 0,
    vy: 0,
    speed: 10,
};

//background shade
let bgShade = {
    fill: {
    red: 190,
    green: 145,
    blue: 227
    }
};

//white fill for the text
let whiteFill = 255;

//the time that is showed 
let actualTime = {
    size: 25
};

//the text instruction
let textInstruction = {
    size: 15
};

let currentTimeInSeconds; // Store the current time
let targetTime ; // Use this to set a time in the future 
let timerAmount = 30; // Timers are 10 seconds in the future 
let timerIsOn = false; // Check if your timer is on

let state = `title` // other possible states : `simulation`, `bug`, `lose`

//this is where all the images are preloaded and the program only starts once they are loaded
function preload() {
    sprayImage = loadImage(`assets/images/spray.png`);
    flyImage = loadImage(`assets/images/fly.png`);
    bugImage = loadImage(`assets/images/bug.png`);
}

//this where I set up what I want to happen one time at the begginning of the program
function setup() {
    createCanvas(600, 600);

    bugSetup();
    fliesSetup();    
}

function bugSetup() {
    //bug set up
    bug.x = random(0,width);
    bug.y = random(0,height);
}

function fliesSetup() {
    //flies set up
    for (let i = 0; i < totalFlies; i++) {
        let fly = createFly(random(0, width), random(0, height));
        flies.push(fly);
    }
}

// createFlies(x,y)
// Creates a new JavaScript Object describing a fly and returns it
function createFly(x, y) {
  let fly = {
    x: x,
    y: y,
    size: 70,
    vx: 0,
    vy: 0,
    speed: 2,
    totalFlies: 10,
    smaller1:30,
    smaller2:10,
    faster1:3,
    faster2:4
  };
  return fly;
}

// draw()
// Moves and displays our images
function draw() {
    background(bgShade.fill.red,bgShade.fill.green,bgShade.fill.blue);//purple background

  //time managing function
    timeCount();

    if (state === `title`) {
        title();
    }
    else if (state === `simulation`) {
        simulation();
    }
    else if (state === `lose`) {
        lose();
    }
    else if (state === `caughtBug`) {
        caughtBug();
    }
}

function timeCount() {
    // Timer gets set when you press the mouse, it sets
    // a boolean to ON 
    if(timerIsOn){ 
        // If its on, say its on!
        console.log('timer is on');   
        // If its on, AND the current time is past the
        //target time, say done and set it to false 
        if(currentTimeInSeconds > targetTime) { 
            print("DONE")
            timerIsOn = false;
        }
    } else { 
        // If timer is off, say off.
        console.log('timer off') 
    }
}

function title() {
    instructionDisplay();
    //text
    text(`YOU HAVE 30 SECONDS TO KILL ALL THE FLIES`,width/2,height/2);
    text(`PRESS ENTER TO START`,width/2,height/2 + textInstruction.size);
}

function instructionDisplay() {
    //display of instruction
    textAlign(CENTER,CENTER);
    fill(whiteFill);
    textSize(textInstruction.size);
}

function simulation() {
    fliesSettings();
    timeAndInstruction();
    moveUser();
    displayUser();
    displayBug();
    moveBug();
}

function fliesSettings() {
    //flies settings
    for (let i = 0; i < flies.length; i++) {
        moveFly(flies[i]);
        displayFly(flies[i]);
        flySmaller(flies[i]);
        fliesLeftAfterTimer(flies[i]);
    }
}

function timeAndInstruction() {
    // Round up the miliseconds to seconds 
    currentTimeInSeconds = round(millis()/1000); 
    
    //this makes the timer show us how much time has passed
    textAlign(CENTER);
    fill(whiteFill);
    textSize(actualTime.size);
    text('Time: ' +currentTimeInSeconds, width/2,height/8,); // This is just since your sketch started

    instructionDisplay();
    text('THE FLIES WILL GET SMALLER AND FASTER BE QUICK', width/2,height/6,);
    text('(You automatically win if you touch the bug)', width/2,height/4,);
}

//user is controlled by the mouvements of the mouse
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

//displays the user , which is a spray
function displayUser() {
    push();
    imageMode(CENTER);
    image(sprayImage,user.x,user.y,user.width,user.height);
    pop();
}

//we can now see the bug bc we are displaying it
function displayBug() {
    push();
    imageMode(CENTER);
    noCursor();
    image(bugImage,bug.x,bug.y,bug.size,bug.size);
    pop();
}

//this makes the bug move
function moveBug() {
    //making the bug velocity to a changing number so it moves more like a bug
    let change = random(0, 1);
    if (change < 0.05) {
        bug.vx = random(-bug.speed, bug.speed);
        bug.vy = random(-bug.speed, bug.speed);
    }

    // Move the bug
    bug.x = bug.x + bug.vx;
    bug.y = bug.y + bug.vy;

    // Constrain the bug to the canvas
    bug.x = constrain(bug.x, 0, width);
    bug.y = constrain(bug.y, 0, height);    
}

// moveFly(fly)
// Chooses whether the provided fly changes direction and moves it
function moveFly(fly) {
    // Choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
        fly.vx = random(-fly.speed, fly.speed);
        fly.vy = random(-fly.speed, fly.speed);
    }

    // Move the fly
    fly.x = fly.x + fly.vx;
    fly.y = fly.y + fly.vy;

    // Constrain the fly to the canvas
    fly.x = constrain(fly.x, 0, width);
    fly.y = constrain(fly.y, 0, height);    
}

// displayFly(fly)
// Displays the provided fly on the canvas
function displayFly(fly) {
    push();
    imageMode(CENTER);
    image(flyImage,fly.x,fly.y,fly.size,fly.size);
    pop();
}

//the bug changes features every 10 seconds
function flySmaller(fly) {
    if (currentTimeInSeconds === timerAmount *1/3) {
        fly.size = fly.smaller1;
        fly.speed = fly.faster1;
        
    }
    if (currentTimeInSeconds === timerAmount *2/3) {
        fly.size = fly.smaller2;
        fly.speed = fly.faster2;
    }
}

//this function is to see if there are any flies left after the set timer which is 30 sec
function fliesLeftAfterTimer(fly) {
    //if the number of flies is bigger than 0 when the timer goes off you lose
    if(fly.totalFlies > 0 && timerIsOn === false) {
        state = `lose`;
    }
}

function lose() {
    //text if you lose
    console.log('loserrrr')
    instructionDisplay();
    text('TOO SLOW', width/2,height/2,);
}

function caughtBug() {
    //text if you touch the bug
    console.log('bug')
    instructionDisplay();
    text('PROFESSIONAL EXTERMINATOR WHAT??', width/2,height/2,);
}

// mousePressed() checks whether a fly in the array was clicked
// and removes it if so
function mousePressed() {
    if (state === `simulation`) {
        touchedFlies();
        touchedBug();
    }  
}

function keyPressed() {
    //makes the timer start
    if (keyCode === ENTER && state === `title`) {
        state = `simulation`; 
        targetTime = timerAmount;
        timerIsOn = true;
    }
}

function touchedFlies() {
    // Use a for loop to examine every fly in the array one by one
    for (let i = 0; i < flies.length; i++) {
        // Store the current fly in the fly variable
        let fly = flies[i];
        // Calculate the distance between the mouse position and the fish
        let d = dist(mouseX, mouseY, fly.x, fly.y);
            // If the distance means the mouse was clicked inside the fish
            if (d < fly.size / 2) {
                // Remove the fish using the splice() function which takes two arguments
                // - The index to start remove elements from (i in our case)
                // - The number of elements to remove from that position (just one for us)
                flies.splice(i, 1);
                // Now that we've found our fish to remove, we don't want to continue
                // going through the loop, so we end it prematurely with break
                // This forces the for-loop to stop immediately
                break;
            }
    }
}

//this is triggered only if the user touches the bug with the mouse
function touchedBug() {
    let d = dist(mouseX, mouseY, bug.x, bug.y);
    // If the distance means the mouse was clicked inside the fish
    if (d < bug.size / 2) {
        state = `caughtBug`
    }
}