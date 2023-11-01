/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

// Our garden
let garden = {
    // An array to store the individual flowers
    flowers: [],
    // How many flowers in the garden
    numFlowers: 20,
    // The color of the grass (background)
    grassColor: {
      r: 120,
      g: 180,
      b: 120
    }
  };


/**
 * Description of preload
// */
// function preload() {
    
// }


/**
 * Description of setup
*/
function setup() {
    createCanvas(600, 600);

    // Create our flowers by counting up to the number of the flowers
    for (let i = 0; i < garden.numFlowers; i++) {
      // Create a new flower
      let flower = createFlower();
      // Add the flower to the array of flowers
      garden.flowers.push(flower);
    }
}

function createFlower() {
    // Create our object
    let flower = {
      // Position and size information
      x: random(0, width),
      y: random(0, height),
      size: 50,
      stemLength: 75,
      stemThickness: 10,
      petalThickness: 10,
      // Color information
      stemColor: {
        r: 50,
        g: 150,
        b: 50
      },
      petalColor: {
        r: 200,
        g: 50,
        b: 50
      },
      centreColor: {
        r: 50,
        g: 0,
        b: 0
      }
    };
    return flower;
  }





/**
 * Description of draw()
*/
// function draw() {
   
// }

// function mousePressed() {
  
// }