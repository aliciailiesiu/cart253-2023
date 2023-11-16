"use strict";

let barkSFX;

function preload() {
  barkSFX = loadSound(`assets/sounds/bark.wav`);
}

function setup() {
  createCanvas(600, 600);
  userStartAudio()
}

function draw() {
  // Just to be cute, let's also change the background color
  // based on whether the dog bark is currently playing
  if (barkSFX.isPlaying()) {
    background(255);
  }
  else {
    background(0);
  }
}

function mousePressed() {
  barkSFX.play();
}