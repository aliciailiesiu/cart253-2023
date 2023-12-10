/**
 * the medalliom
 * Alicia Iliesiu
 * 
 * This is a mystery simulation where Tim wakes up in the middle of a forest he doesnt know, and by deep diving in his memories he will find out what actually happened to him!
 */

//font used all troughout the project
let shadowsFont;

//background image forest in introduction
let forestImage;

//memory boxes background
let memoryImage;

//images in memory 1
let pathImage;
let medallionImage;

//images in memory 2
let computerScreenImage;
let internetLogoImage;
let skullImage;

//images in memory 3
let basementImage;
let lampImage;

//sound in the introduction
let heartbeatSound;

//sounds in memory 2
let breakingInSound;
let glassSmashSound;

//sound in memory 3
let footstepsSound;

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
    lampImage = loadImage(`assets/images/lamp2.png`);

    //https://pngtree.com/freebackground/photography-of-flower-path-in-the-park_1685433.html
    pathImage = loadImage(`assets/images/path.jpg`);

    //made them on illustrator
    medallionImage = loadImage(`assets/images/medallion.png`);

    //https://images.app.goo.gl/Zghcsmx6P8MdioUq6
    computerScreenImage = loadImage(`assets/images/computerScreen.jpeg`);

    //made the logo on illustrator
    internetLogoImage = loadImage(`assets/images/internetLogo.png`);

    //https://images.app.goo.gl/B4MzQcSCevfkKrxB7
    skullImage = loadImage(`assets/images/skull.png`);

    //https://pixabay.com/sound-effects/search/fist%20punch/
    heartbeatSound = loadSound(`assets/sounds/heartbeat.wav`);
    breakingInSound = loadSound(`assets/sounds/breakingIn.mp3`);
    glassSmashSound = loadSound(`assets/sounds/glassSmash.mp3`);
    footstepsSound = loadSound(`assets/sounds/footsteps.mp3`);

    //https://fonts.google.com/
    shadowsFont = loadFont(`assets/fonts/shadowsFont.ttf`);
}

function setup() {
    createCanvas(900, 550);
    state = new Introduction(); // We start in this state
}

function draw() {
    state.draw();
}

function mousePressed() {
    state.mousePressed();
}

