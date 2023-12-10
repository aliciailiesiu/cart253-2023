/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */


//background image forest
let forestImage;

//memory boxes background
let memoryImage;

let pathImage;

//heartbeat sound
let heartbeatSound;

let breakingInSound;

let punchSound;

let glassSmashSound;

// let voice1Sound;
// let voice2Sound;
// let voice3Sound;
// let voice4Sound;
// let voice5Sound;
// let voice6Sound;

let shadowsFont;
let robotoFont;

let medallionFrontImage;
let medallionBackImage;

let computerScreenImage;

let internetLogoImage;

let skullImage;

let basementImage;

let lampImage;

let state; // Will store the current class that handles the state


"use strict";

function preload() {

    //https://images.app.goo.gl/wLVu5LrwrwDGBfH29
    forestImage = loadImage(`assets/images/forest.webp`);

    //https://imgur.com/GCJRhiA
    memoryImage = loadImage(`assets/images/memory.png`);

    //https://images.app.goo.gl/dLeASzQm6Ffog7qU7 
    basementImage = loadImage(`assets/images/basement.jpg`);

    //made in illustrator
    lampImage = loadImage(`assets/images/lamp.png`);

    //https://pixabay.com/sound-effects/search/fist%20punch/
    heartbeatSound = loadSound(`assets/sounds/heartbeat.wav`);
    breakingInSound = loadSound(`assets/sounds/breakingIn.mp3`);
    punchSound = loadSound(`assets/sounds/punch.wav`);
    glassSmashSound = loadSound(`assets/sounds/glassSmash.mp3`);

    // voice1Sound = loadSound(`assets/sounds/voice1.mp3`);
    // voice2Sound = loadSound(`assets/sounds/voice2.mp3`);
    // voice3Sound = loadSound(`assets/sounds/voice3.mp3`);
    // voice4Sound = loadSound(`assets/sounds/voice4.mp3`);
    // voice5Sound = loadSound(`assets/sounds/voice5.mp3`);
    // voice6Sound = loadSound(`assets/sounds/voice6.mp3`);

    // voice1Sound.push(loadSound(`assets/sounds/voice1.mp3`));
    // voice2Sound.push(loadSound(`assets/sounds/voice2.mp3`));
    // voice3Sound.push(loadSound(`assets/sounds/voice3.mp3`));
    // voice4Sound.push(loadSound(`assets/sounds/voice4.mp3`));
    // voice5Sound.push(loadSound(`assets/sounds/voice5.mp3`));
    // voice6Sound.push(loadSound(`assets/sounds/voice6.mp3`));







    shadowsFont = loadFont(`assets/fonts/shadowsFont.ttf`);

    robotoFont = loadFont(`assets/fonts/robotoFont.ttf`);

    //https://pngtree.com/freebackground/photography-of-flower-path-in-the-park_1685433.html
    pathImage = loadImage(`assets/images/path.jpg`);

    //made them on illustrator
    medallionFrontImage = loadImage(`assets/images/medallion_front.png`);
    medallionBackImage = loadImage(`assets/images/medallion_back.png`);

    //https://images.app.goo.gl/Zghcsmx6P8MdioUq6
    computerScreenImage = loadImage(`assets/images/computerScreen.jpeg`);

    //made the logo on illustrator
    internetLogoImage = loadImage(`assets/images/internetLogo.png`);

    skullImage = loadImage(`assets/images/skull.png`);


}

function setup() {
    createCanvas(900, 550);
    state = new Introduction(); // We start in this state
    // memory1 = new Memory1();
    
}

function draw() {
    state.draw();
}

function mousePressed() {
    state.mousePressed();
}

// function mouseWheel() {
//     memory1.mouseWheel();
// }

