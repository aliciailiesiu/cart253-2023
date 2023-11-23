"use strict";

let sound1;
let sound2;
let sound3;
let sound4;
let sound5;
let sound6;

let playbackRate = 0.6;

function preload() {
    sound1 = loadSound('assets/sounds/1.mp3');
//     sound2 = loadSound('assets/sounds/2.mp3');
}

function setup() {
  createCanvas(600, 600);
  userStartAudio();

}

function draw() {
  background(0);
  sound1.rate(playbackRate);

}

function mousePressed() {
//   synth.play(`C4`, 1, 0, 1);
  sound1.play();
  
}


