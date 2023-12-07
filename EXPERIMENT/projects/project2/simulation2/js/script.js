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
let shadowsFont;

let medallionFrontImage;
let medallionBackImage;

let state; // Will store the current class that handles the state


"use strict";

function preload() {

    //https://images.app.goo.gl/wLVu5LrwrwDGBfH29
    forestImage = loadImage(`assets/images/forest.webp`);

    //https://imgur.com/GCJRhiA
    memoryImage = loadImage(`assets/images/memory.png`)

    heartbeatSound = loadSound(`assets/sounds/heartbeat.wav`);

    shadowsFont = loadFont(`assets/fonts/shadowsFont.ttf`);

    //https://pngtree.com/freebackground/photography-of-flower-path-in-the-park_1685433.html
    pathImage = loadImage(`assets/images/path.jpg`);

    medallionFrontImage = loadImage(`assets/images/medallion_front.png`);
    medallionBackImage = loadImage(`assets/images/medallion_back.png`);
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

