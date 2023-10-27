"use strict";

let flies = [];
let totalFlies = 10;



let sprayImage;
let flyImage;

// 



let user = {
    x: undefined,
    y: undefined,
    width: 80,
    height: 90
};

let bgShade = {
    fill: {
    red: 190,
    green: 145,
    blue: 227
    }
};

let whiteFill = 255;


let actualTime = {
    size: 25
};

let textInstruction = {
    size: 15
};



let currentTimeInSeconds; // Store the current time
let targetTime ; // Use this to set a time in the future 
let timerAmount = 30; // Timers are 10 seconds in the future 
let timerIsOn = false; // Check if your timer is on





let state = `title` // other possible states : `simulation`, `win`, `lose`

function preload() {
    sprayImage = loadImage(`assets/images/spray.png`);
    flyImage = loadImage(`assets/images/fly.png`);
}




function setup() {
  createCanvas(600, 600);

  
  

    for (let i = 0; i < totalFlies; i++) {
        let fly = createFly(random(0, width), random(0, height));
        flies.push(fly);
    }

    

}



// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFly(x, y) {
  let fly = {
    x: x,
    y: y,
    size: 70,
    vx: 0,
    vy: 0,
    speed: 2,
    totalFlies: 10
  };
  return fly;
}

// draw()
// Moves and displays our fish
function draw() {
  background(bgShade.fill.red,bgShade.fill.green,bgShade.fill.blue);

  timeCount();

if (state === `title`) {
    textAlign(CENTER,CENTER);
    fill(whiteFill);
    textSize(textInstruction.size);
    text(`YOU HAVE 30 SECONDS TO KILL ALL THE FLIES`,width/2,height/2);

    textAlign(CENTER,CENTER);
    fill(whiteFill);
    textSize(textInstruction.size);
    text(`PRESS ENTER TO START`,width/2,height/2 + textInstruction.size);
}
else if (state === `simulation`) {

    for (let i = 0; i < flies.length; i++) {
        moveFly(flies[i]);
        displayFly(flies[i]);
        flySmaller(flies[i]);
        noMoreFlies(flies[i]);

    // for (let i = 0; i < totalFlies; i++)
    //     fliesLeftAfterTimer(flies[i])
    }
    // \
        // fill(255);
        // textAlign(CENTER,CENTER);
        // text('targetTime is on!  It is set  for: ' +targetTime +'', width/2,height/2);
        // text('timeramount is on, it is set for: '+timerAmount +'', width/2, height/4)
       
        
        // targetTime = currentTimeInSeconds + timerAmount;
        // targetTime = timerAmount;
        // timerIsOn = true;

    timeAndInstruction();
    moveUser();
    displayUser();

}
else if (state === `lose`) {
    console.log('loserrrr')
    fill(whiteFill);
    textSize(textInstruction.size);
    text('TOO SLOW', width/2,height/2,);
}
else if (state === `win`) {
    console.log('winnerrr')
    fill(whiteFill);
    textSize(textInstruction.size);
    text('THAT WAS JUST LUCK TRY AGAIN', width/2,height/2,);
}


// for (let i = 0; i < flies.length; i++) {
//     flyGrows(flies[i]);
//     }

}

function timeAndInstruction() {
    currentTimeInSeconds = round(millis()/1000); 
    // Round up the miliseconds to seconds 
    textAlign(CENTER);
    fill(whiteFill);
    textSize(actualTime.size);
    text('Time: ' +currentTimeInSeconds, width/2,height/8,); // This is just since your sketch started

    fill(whiteFill);
    textSize(textInstruction.size);
    text('THE FLIES WILL GET SMALLER AND FASTER BE QUICK', width/2,height/6,);
}


function timeCount() {
    // currentTimeInSeconds = round(millis()/1000); 
    // // Round up the miliseconds to seconds 
    // fill(textInstruction.fill);
    // textSize(textInstruction.size);
    // text('Time: ' +currentTimeInSeconds, width/2,height/8,); // This is just since your sketch started

    

    // Timer gets set when you press the mouse, it sets
    // a boolean to ON 
    if(timerIsOn){ 
        // If its on, say its on!
        print("timer is on");   
        // text('Timer is on!  It is set  for: ' +timerAmount +' seconds', 10, 250);
        // If its on, AND the current time is past the
        // target time, say done and set it to false 
        if(currentTimeInSeconds > targetTime) { 
            print("DONE")
            timerIsOn = false;
        }
    } else { 
        // If timer is off, say off.
        print("timer off") 
        // text('Timer is OFF! ', 10, 250);
    }
}




// function fliesLeftAfterTimer(fly) {

//     if(fly.totalFlies === 0 && timerIsOn === true) {
//         state = `win`;
//     }
// }

function noMoreFlies(fly) {

    if(fly.totalFlies > 0 && timerIsOn === false) {
        state = `lose`;
        console.log ('currently losing')
        
    }
    else if (fly.totalFlies === 0 && timerIsOn) {
        state = `win`;
        console.log('currently winning')
    }
}





function flySmaller(fly) {
    if (currentTimeInSeconds === timerAmount *1/3) {
        fly.size = 30;
        fly.speed = 3;
        
    }
    if (currentTimeInSeconds === timerAmount *2/3) {
        fly.size = 10;
        fly.speed = 4;
    }
}



// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFly(fly) {
    // Choose whether to change direction
    let change = random(0, 1);
    if (change < 0.05) {
        fly.vx = random(-fly.speed, fly.speed);
        fly.vy = random(-fly.speed, fly.speed);
  }

    
    // Move the fish
    fly.x = fly.x + fly.vx;
    fly.y = fly.y + fly.vy;

    // Constrain the fish to the canvas
    fly.x = constrain(fly.x, 0, width);
    fly.y = constrain(fly.y, 0, height);

    
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFly(fly) {

    imageMode(CENTER);
    image(flyImage,fly.x,fly.y,fly.size,fly.size);

  

}


function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

function displayUser() {

    imageMode(CENTER);
    // noCursor();
    image(sprayImage,user.x,user.y,user.width,user.height);
}

// mousePressed() checks whether a fish in the school was clicked
// and removes it if so
function mousePressed() {
    if (state === `simulation`) {
    // Use a for loop to examine every fish in the school one by one
    for (let i = 0; i < flies.length; i++) {
      // Store the current fish in the fish variable
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
}
function keyPressed() {
    
    if (keyCode === ENTER && state === `title`) {
        state = `simulation`; 
        // targetTime = currentTimeInSeconds + timerAmount;
        targetTime = timerAmount;
        timerIsOn = true;
    }

}

// text('Timer is on!  It is set  for: ' +timerAmount +' seconds', 10, 250);
