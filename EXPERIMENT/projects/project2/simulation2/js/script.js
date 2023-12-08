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

let shadowsFont;
let robotoFont;

let medallionFrontImage;
let medallionBackImage;

let computerScreenImage;

let internetLogoImage;

let skullImage;

let state; // Will store the current class that handles the state


"use strict";

function preload() {

    //https://images.app.goo.gl/wLVu5LrwrwDGBfH29
    forestImage = loadImage(`assets/images/forest.webp`);

    //https://imgur.com/GCJRhiA
    memoryImage = loadImage(`assets/images/memory.png`)

    https://pixabay.com/sound-effects/search/fist%20punch/
    heartbeatSound = loadSound(`assets/sounds/heartbeat.wav`);
    breakingInSound = loadSound(`assets/sounds/breakingIn.mp3`);
    punchSound = loadSound(`assets/sounds/punch.mp3`);
    glassSmashSound = loadSound(`assets/sounds/glassSmash.mp3`);


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

