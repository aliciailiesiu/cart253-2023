/* PDM Course: Sound Unit

Example of Tone.js PitchShift Effect

Code by Anthony T. Marasco [2018]
*/

// originally from Originally from https://codepen.io/lsuddem/pen/RJEYLr


let player;

let shifter;
let button;
let shiftSlider;
let rateSlider;
let windowSlider;
let presets = [];
let wetMix;

let baseURL = "https://s3-us-west-1.amazonaws.com/leesamples/samples/";

function preload() {

  /*Here is where we build our audio effect, and connect its output directly to the master output */
  shifter = new Tone.PitchShift(2).toMaster();
  shifter.windowSize = 0.03

 
  player = new Tone.Player("audio/1.mp3").connect(shifter);
 

  player.loop = true

  presets.push({
      shift: 0,
      rate: 1,
      window: 0.1
    }, {
      shift: 20,
      rate: 0.1,
      window: 0.01
    }, {
      shift: 20,
      rate: 0.02,
      window: 0.5
    }, {
      shift: 10,
      rate: 0.02,
      window: 0.01
    }

  )

}

function setup() {
  createCanvas(windowWidth, windowHeight);


  shiftSlider = createSlider(-120, 120, preset.shift, 1);
  shiftSlider.style("width", "200px");
  shiftSlider.position(width / 2 - 100, height / 2 + 70);

}

function draw() {
  /*Avoiding putting any sound triggering functions in draw() for this example
   */

  shifter.pitch = shiftSlider.value();
  
  background(143, 204, 124);

}

function play1() {
  player.start();

}