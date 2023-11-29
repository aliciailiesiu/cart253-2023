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

//heartbeat sound
let heartbeatSound;
let shadowsFont;

let state = ``;

let boxes = [];
let numBoxes = 4;
 

"use strict";

function preload() {

//https://images.app.goo.gl/wLVu5LrwrwDGBfH29
forestImage = loadImage(`assets/images/forest.webp`);

//https://imgur.com/GCJRhiA
memoryImage = loadImage(`assets/images/memory.png`)

heartbeatSound = loadSound(`assets/sounds/heartbeat.wav`);

shadowsFont = loadFont(`assets/fonts/shadowsFont.ttf`);
}


function setup() {
    createCanvas(900, windowHeight);

    introduction = new Introduction();

    for(let i = 0; i < numBoxes; i++) {
        let x = random(0,width);
        let y = random(0,height);
        let size = 100;
        let memoryBoxes = new MemoryBoxes(x,y,size);
        boxes.push(memoryBoxes);
        memoryBoxes.setUpBox();
    }

   
    
    
  



      
   
}


function draw() {
    background(forestImage);
    introduction.textSetup();
   
    if ( state === `memoryBoxes`) {
    background(memoryImage);

    for (let i = 0; i < boxes.length; i++) {
        let memoryBoxes = boxes[i];
        memoryBoxes.move();
        memoryBoxes.display();
        memoryBoxes.offScreen();
        console.log(`moved`)
    }
    }
}
    



function mousePressed() {
    introduction.mousePressed();
}