/**
 * Sewing simulation
 * Alicia Iliesiu
 * 
 * This sewing simulation starts with the title, when any key or any mouse is pressed the simulation starts by asking the user to chose what the sewing project is, choices are between a shirt, a jacket and pants. After selecting his choice, the user needs to chose what color fabric he wants, between pink,blue,green or purple. The next step is to get all the tools needed for the sewing project such as some scissors, a ruler, a pencil and sewing pins. The user needs to go get each item spread out on the screen by using the arrows on the keyboard. Once everything is gathered, we can now start sewing, user will be able to sew some stitches by making him in control of the sewing machine. Once the project is done the user will be able to see the final result yay!! 
 */

"use strict";

//background color or strokeweight purposes
let pinkColor = {
    fill: {
        red: 237,
        green: 135,
        blue: 222,
        },
}

//background color
let blackColor = 0;

//title variable
let title = {
    size: 50
}

//instruction variable
let instructionTitle = {
    size: 30,
    height: 60
}

//the garment choice text display variable
let clothingChoice = {
    height: 250
}

//pants variable
let pants = {
    width: 100,
    height: 125
}

//jacket variable
let jacket = {
    width: 80,
    height: 105
}

//shirt variable
let shirt = {
    width: 100,
    height: 100
}

//pink color fabric
let pinkFabric = {
    x: 0,
    y: 0,
    size: 120,
    radius: 60,
    fill: {
    red: 230,
    green: 174,
    blue: 209
    },
    strokeWeight:20
}

//blue color fabric
let blueFabric = {
    x: 0,
    y: 0,
    size: 120,
    radius: 60,
    fill: {
    red: 119,
    green: 137,
    blue: 168
    },
    strokeWeight: 20
}

//purple color fabric
let purpleFabric = {
    x:0,
    y: 0,
    size: 120,
    radius: 60,
    fill: {
    red: 217,
    green: 173,
    blue: 240
    },
    strokeWeight: 20
}

//green color fabric
let greenFabric = {
    x: 0,
    y: 0,
    size: 120,
    radius: 60,
    fill: {
    red: 173,
    green: 194,
    blue: 105,
    },
    strokeWeight: 20
}

//arrows in state `toolGrab`
let arrows = {
    x: 0,
    y: 0,
    size: 60
}

//instruction on how to move designerUser
let arrowsText = {
    size: 20,
    width: 0,
    height: 0
}

//size of the tools
let tools = {
    size: 100
}

//scissors variable
let scissors = {
    x:undefined,
    y:undefined
}

//pins variable
let pins = {
    x:undefined,
    y:undefined
}

//ruler variable
let ruler = {
    x:undefined,
    y:undefined
}

//bobbin variable
let bobbin = {
    x:undefined,
    y:undefined
}

//hanger variable
let hanger = {
    x:undefined,
    y:undefined
}

//machine variable
let machine = {
    x:undefined,
    y:undefined,
}

//ball variable
let ball = {
    x:undefined,
    y:undefined
}

//needle variable
let needle = {
    x:undefined,
    y:undefined
}

//designer variable
let designerUser = {
    x: 0,
    y: 0,
    control: 5,
    speed: 10,
    vx: 0,
    vy: 0,
    size: 90
}

//sewing fabric used for state `sewingSimulation`
let sewingFabric = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    fill: 255
}

//sewing foot going down on fabric
let sewingFoot = {
    x:undefined,
    y: 10,
    control: 10,
    width: 20,
    height: 40
}

//sewing foot going right on fabric
let sewingFootRight = {
    x: undefined,
    y: undefined,
    control: 10,
    width: 20,
    height: 40
}

//caution text in state `sewingSimulation` when user uses wrong arrows to sew
let cautionText = {
    fill: {
        red:255,
        green:0,
        blue:0
    },
    stroke: {
        red:255,
        green:0,
        blue:0
    },
    size: 40
}

//moving arrow to help user know in what direction to sew
let downArrow = {
    x: undefined,
    y: undefined,
    vy:0,
    speed:2
    
}

////moving arrow to help user know in what direction to sew
let rightArrow = {
    x: undefined,
    y: undefined,
    vx:0,
    speed:2
    
}

let coloredRectangle = {
    width:550,
    height:600
}

let endText = {
    size: 25
}

let bungeeShadeFont;//title style font

let music;//background music

let click;//click sound effect when user chooses somehting

let toolclick;// tool clicking sound when touching a tool

let pantsImage;//pants choice of garment at the beginning made by me on illustrator 

let jacketImage; //jacket choice of garment at the beginning made by me on illustrator 

let shirtImage; //shirt choice of garment at the beginning made by me on illustrator 

let scissorsImage; //scissors image 

let scissorsON = true; //the image is on the screen

let pinsON = true; //the image is on the screen

let rulerON = true; //the image is on the screen

let bobbinON = true; //the image is on the screen

let hangerON = true; //the image is on the screen

let machineON = true; //the image is on the screen

let ballON = true; //the image is on the screen

let needleON = true; //the image is on the screen

let pinsImage; //pins image 

let rulerImage; //ruler image

let bobbinImage; //bobbin image

let hangerImage; //hanger image

let machineImage; //sewing machine image

let ballImage; //ball image

let needleImage; //needle image

let designerImage;// designer image 

let arrowsImage; //arrow image

let downArrowImage;// down arrow facing image

let rightArrowImage;//right arrow facing image

let sewingFootImage = true;//sewing foot image when going down

let sewingFootRightImage; //sewing foot image when going right

let pantsFinalImage; //final pants with no filling

let jacketFinalImage; //final jacket with no filling

let shirtFinalImage; //final shirt with no filling

let downSewing = true; //sewing down is true at beginning of state `sewingSimulation`

let NotrightSewing = true; //sewing right is false at beginning of state `sewingSimulation`

let choicePants = false; //only becomes true if user chooses to sew the pants

let choiceJacket = false; //only becomes true if user chooses to sew the jacket

let choiceShirt = false //only becomes true if user chooses to sew the Shirt

let choicePink = false; //only becomes true if user chooses the color pink for the fabric

let choiceBlue = false; //only becomes true if user chooses the color blue for the fabric

let choicePurple = false; //only becomes true if user chooses the color purple for the fabric

let choiceGreen = false; //only becomes true if user chooses the color green for the fabric

// let loadingTwo = false;


let state = `start` //possible state = garmentChoice, choicePants,choiceJacket, choiceShirt ,colorChoice,  toolGrab, sewingSimulation, loading, finalResult

//used this to be able to see what is the actual width and height of the canvas
//source is http://thenewcode.com/1181/Window-Window-Measuring-Screen-Sizes-with-JavaScript
let windowX = document.documentElement.clientWidth,
windowY = document.documentElement.clientHeight;

//using preload to load images, sounds and fonts
function preload() {
    font();
    sounds();
    garmentImage();
    toolsImage();
    sewingSimulationImage();
    finalGarmentImage();    
}

function font() {
    //text font
    bungeeShadeFont = loadFont(`assets/fonts/BungeeShade.ttf`);
}

function sounds() {
    //background music
    music = loadSound(`assets/sounds/backgroundMusic.mp3`);
    //click sound used in state -> title, garmentChoice
    click = loadSound(`assets/sounds/click.wav`);
    //tool sound used in state -> toolGrab
    toolclick = loadSound(`assets/sounds/toolclick.wav`);
}

function garmentImage() {
    //images used in state-> garmentChoice, choicePants,choiceJacket, choiceShirt
    pantsImage = loadImage(`assets/images/pants.png`);
    jacketImage = loadImage(`assets/images/jacket.png`);
    shirtImage = loadImage(`assets/images/shirt.png`);
}

function toolsImage() {
    //images used in state-> toolGrab
    scissorsImage = loadImage(`assets/images/scissors.png`);
    pinsImage = loadImage(`assets/images/pins.png`);
    rulerImage = loadImage(`assets/images/ruler.png`);
    bobbinImage = loadImage(`assets/images/bobbin.png`);
    hangerImage = loadImage(`assets/images/hanger.png`);
    machineImage = loadImage(`assets/images/machine.png`);
    ballImage = loadImage(`assets/images/ball.png`);
    needleImage = loadImage(`assets/images/needle.png`);
    designerImage = loadImage(`assets/images/designer.png`);
    arrowsImage = loadImage(`assets/images/arrows.png`);
}

function sewingSimulationImage() {
     //images used in state-> sewingMachine
     sewingFootImage = loadImage(`assets/images/sewingFoot.png`);
     sewingFootRightImage = loadImage(`assets/images/sewingFootRight.png`);
     downArrowImage = loadImage(`assets/images/downArrow.png`);
     rightArrowImage = loadImage(`assets/images/rightArrow.png`);
}

function finalGarmentImage() {
    //images used in state-> finalResult
    pantsFinalImage = loadImage(`assets/images/pantsFinal.png`);
    jacketFinalImage = loadImage(`assets/images/jacketFinal.png`);
    shirtFinalImage = loadImage(`assets/images/shirtFinal.png`);
}

//using setup to set up what I want at the beginning of the program
function setup() {
    createCanvas(windowWidth,windowHeight);

    setupPinkFabric();
    setupBlueFabric();
    setupPurpleFabric();
    setupGreenFabric();
    setupDesigner();
    setupArrows();
    setupTools();
    setupSewingFabric();
    setupSewingFoot();
    setupSewingFootRight();
    setupDownArrow();
    setupRightArrow();    
}

function setupPinkFabric() {
    //making the x and the y be the same on any size screen so it is always centered
    //pink circle
    pinkFabric.x = width/5;
    pinkFabric.y = height/2;
}

function setupBlueFabric() {
    //making the x and the y be the same on any size screen so it is always centered
    //blue circle
    blueFabric.x = width * 2/5;
    blueFabric.y = height/2;
}

function setupPurpleFabric() {
    //making the x and the y be the same on any size screen so it is always centered
    //purple circle
    purpleFabric.x = width * 3/5;
    purpleFabric.y = height/2;
}

function setupGreenFabric() {
    //making the x and the y be the same on any size screen so it is always centered
    //green circle
    greenFabric.x = width * 4/5;
    greenFabric.y = height/2;
}

function setupDesigner() {
    //making the designer we will be using in state `toolGrab` move 
    designerUser.vx = designerUser.vx + designerUser.speed
    designerUser.vy = designerUser.vy + designerUser.speed

    //making sure the position of x and y works on any screen, its also the starting point of the user designer
    designerUser.x = width * 3/20;
    designerUser.y = height/2;
}

function setupArrows() {
    //making the x and the y be the same on any size screen so it is always centered
    //4 arrows instruction
    arrows.x = width *  3/20;
    arrows.y = height * 17/25;
    //4 arrows instructions width and height
    arrowsText.width = width * 3/50;
    arrowsText.height = height * 17/25;
}

function setupTools() {
    //making sure the position of x and y works on any screen
    //scissors image 
    scissors.x = width * 1/2;
    scissors.y = height/2;

    //making sure the position of x and y works on any screen
    //pins image 
    pins.x = width/4;
    pins.y = height/4;

    //making sure the position of x and y works on any screen
    //ruler image 
    ruler.x = width * 19/25;
    ruler.y = height/2;

    //making sure the position of x and y works on any screen
    //bobbin image 
    bobbin.x = width * 23/25;
    bobbin.y = height * 23/25;

    //making sure the position of x and y works on any screen
    //hanger image 
    hanger.x = width * 3/50;
    hanger.y = height * 9/10;

    //making sure the position of x and y works on any screen
    //machine image
    machine.x = width * 1/12;
    machine.y = height/7;

    //making sure the position of x and y works on any screen
    //ball image
    ball.x = width * 22/25;
    ball.y = height/8;

    //making sure the position of x and y works on any screen
    //needle image
    needle.x = width/3;
    needle.y = height * 21/25;
}

function setupSewingFabric() {
    //making sure the position of x and y works on any screen
    //sewing fabric x & y
    sewingFabric.x = width * 1/5;
    sewingFabric.y = sewingFabric.y;
    //sewing fabric width & height
    sewingFabric.width = width * 4/5;
    sewingFabric.height = height * 22/25;
}

function setupSewingFoot() {
    //making sure the position of x and y works on any screen
    //facing down sewing foot image
    sewingFoot.x = width * 1/4;
    sewingFoot.y = sewingFoot.y;
}

function setupSewingFootRight() {
    //making sure the position of x and y works on any screen
    //facing right sewing foot image
    sewingFootRight.x = width * 1/4;
    sewingFootRight.y = height * 20/25;
}

function setupDownArrow() {
    //making the down arrow we will be using in state `sewingSimulation` move only up and down
    downArrow.vy = downArrow.vy + downArrow.speed

    //making sure the position of x and y works on any screen
    //arrow facing down image
    downArrow.x = width * 3/10;
    downArrow.y = height/6;
}

function setupRightArrow() {
    //making the right arrow we will be using in state `sewingSimulation` move only from left to right
    rightArrow.vx = rightArrow.vx + rightArrow.speed

    //making sure the position of x and y works on any screen
    //arrow facing the right image
    rightArrow.x = width * 3/10;
    rightArrow.y = height * 3/5;
}

//this is where all the states for the program will run 
function draw() {
    //if the current state is start which it is then we must display the title of the simulation
    if (state === `start`) {
       start();
    }
    else if (state === `garmentChoice`) {
        garmentChoice();
    }
    else if (state === `pantsChoice`) {
        pantsChoice();
    }
    else if (state === `jacketChoice`) {
        jacketChoice();
    }
    else if (state === `shirtChoice`) {
        shirtChoice();
    }
    else if (state === `colorChoice`) {
        colorChoice();
    }
    else if (state === `toolGrab`) {
        toolGrab();
    }
    else if (state === `sewingSimulation`) {
       sewingSimulation();
    }
    else if (state === `loading`) {
        loading();
    }
    else if (state === `finalResult`) {
        finalResult();
    }
}

function start() {
    background(blackColor);

    titleDisplay();
    titleInstruction();   
}

function titleDisplay() {
    //title display
    push();
    textFont(bungeeShadeFont);
    fill(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
    textAlign(CENTER,CENTER);
    textSize(title.size);
    text(`Welcome to my sewing simulation`,width/2,height/2);
    pop();
}

function titleInstruction() {
    //instruction display
    push();
    textFont(bungeeShadeFont);
    fill(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
    textAlign(CENTER,CENTER);
    textSize(instructionTitle.size);
    text(`Press enter to start`,width/2,height/2 + instructionTitle.height);
    pop();
}

function garmentChoice() {
    background(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);//new background color

        garmentInstruction();
        garmentDisplay();
        userChoosesGarment();
    }

function garmentInstruction() {
    //garment choice text
    push();
    textFont(bungeeShadeFont);
    fill(blackColor);
    textAlign(CENTER,CENTER);
    textSize(instructionTitle.size);
    text(`Choose the garment you wish to sew!`,width/2,height/10);
    pop();
}

function garmentDisplay() {
     //images of the garments in black and white
     imageMode(CENTER);
     image(pantsImage,width * 1/4, height/2);
     image(jacketImage,width * 1/2, height/2);
     image(shirtImage,width * 3/4, height/2);
}

function userChoosesGarment() {
    
    //text for the user to be able to choose which garment he wants
    //pants choice text
    textFont(bungeeShadeFont);
    fill(blackColor);
    stroke(blackColor);
    textAlign(CENTER,CENTER);
    textSize(instructionTitle.size);

    //pants choice text
    text(`press p`,width * 1/4,height/2 + clothingChoice.height);
        
    //jacket choice text
    text(`press j`,width * 1/2,height/2 + clothingChoice.height);

    //shirt choice text
    text(`press s`,width * 3/4,height/2 + clothingChoice.height); 
}

function pantsChoice() {
    background(blackColor);

    displayPants();

    //state changes when user makes a selection
    state = `colorChoice`;

    //the boolean becomes true when user chooses the pants
    choicePants = true;
}

function displayPants() {
    imageMode(CENTER);
    image(pantsImage,width * 19/20,height/8,pants.width,pants.height);//if the user presses p and chooses the pants they will be put at the top corner right of the screen
}

function jacketChoice() {
    background(blackColor);

        displayJacket();

        //state changes when user makes a selection
        state = `colorChoice`;

        //the boolean becomes true when user chooses the jacket
        choiceJacket = true;
}

function displayJacket() {
    imageMode(CENTER);
    image(jacketImage,width * 19/20, height/8 ,jacket.width,jacket.height);//if the user presses j and chooses the jacket it will be put at the top corner right of the screen
}

function shirtChoice() {
    background(blackColor);

    displayShirt();

    //state changes when user makes a selection
    state = `colorChoice`;

    //the boolean becomes true when user chooses the shirt
    choiceShirt = true;
}

function displayShirt() {
    imageMode(CENTER);
    image(shirtImage,width * 19/20, height/8 ,shirt.width,shirt.height);//if the user presses s and chooses the shirt it will be put at the top corner right of the screen
}

function colorChoice() {
    colorInstruction();
    overPink();
    notOverPink();
    overBlue();
    notOverBlue();
    overPurple();
    notOverPurple();
    overGreen();
    notOverGreen();
}

function colorInstruction() {
    //color choice text
    textFont(bungeeShadeFont);
    fill(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
    textAlign(CENTER,CENTER);
    textSize(instructionTitle.size);
    text(`Pick a color for your fabric!`,width/2,height/6);
}

function overPink() {
    //if the mouse goes over the pink fabric circle it will make the strokeweight pink
    let dPink = dist(mouseX,mouseY,pinkFabric.x,pinkFabric.y);
    if (dPink < pinkFabric.radius) {
        console.log("OVER PINK")
        //display of pink fabric with strokeweight
        push();
        ellipseMode(CENTER);
        stroke(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
        strokeWeight(pinkFabric.strokeWeight);
        fill(pinkFabric.fill.red,pinkFabric.fill.green,pinkFabric.fill.blue);
        ellipse(pinkFabric.x,pinkFabric.y,pinkFabric.size);
        pop();
    }
}

function notOverPink() {
    //if the mouse is not over the pink fabric circle the pink strokeweight disappears
    let dPink = dist(mouseX,mouseY,pinkFabric.x,pinkFabric.y);
    if (dPink > pinkFabric.radius) {
        //display of pink fabric with NO strokeweight
        push();
        ellipseMode(CENTER);
        stroke(pinkFabric.fill.red,pinkFabric.fill.green,pinkFabric.fill.blue);
        strokeWeight(pinkFabric.strokeWeight);
        fill(pinkFabric.fill.red,pinkFabric.fill.green,pinkFabric.fill.blue);
        ellipse(pinkFabric.x,pinkFabric.y,pinkFabric.size);
        pop();
    }
}

function overBlue() {
    //if the mouse goes over the blue fabric circle it will make the strokeweight pink
    let dBlue = dist(mouseX,mouseY,blueFabric.x,blueFabric.y);
    if (dBlue < blueFabric.radius) {
        console.log("OVER BLUE")
        //display of blue fabric with strokeweight
        push();
        ellipseMode(CENTER);
        stroke(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
        strokeWeight(blueFabric.strokeWeight);
        fill(blueFabric.fill.red,blueFabric.fill.green,blueFabric.fill.blue);
        ellipse(blueFabric.x,blueFabric.y,blueFabric.size);
        pop();
    }
}

function notOverBlue() {
    //if the mouse is not over the blue fabric circle the pink strokeweight disappears
    let dBlue = dist(mouseX,mouseY,blueFabric.x,blueFabric.y);
    if (dBlue > blueFabric.radius) {
        //display of blue fabric with NO strokeweight
        push();
        ellipseMode(CENTER);
        stroke(blueFabric.fill.red,blueFabric.fill.green,blueFabric.fill.blue);
        strokeWeight(blueFabric.strokeWeight);
        fill(blueFabric.fill.red,blueFabric.fill.green,blueFabric.fill.blue);
        ellipse(blueFabric.x,blueFabric.y,blueFabric.size);
        pop();
    }
}

function overPurple() {
    //if the mouse goes over the purple fabric circle it will make the strokeweight pink
    let dPurple = dist(mouseX,mouseY,purpleFabric.x,purpleFabric.y);
    if (dPurple < purpleFabric.radius) {
        console.log("OVER PURPLE")
        //display of purple fabric with strokeweight
        push();
        ellipseMode(CENTER);
        stroke(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
        strokeWeight(purpleFabric.strokeWeight);
        fill(purpleFabric.fill.red,purpleFabric.fill.green,purpleFabric.fill.blue);
        ellipse(purpleFabric.x,purpleFabric.y,purpleFabric.size);
        pop();
    }
}

function notOverPurple() {
    //if the mouse is not over the purple fabric circle the pink strokeweight disappears
    let dPurple = dist(mouseX,mouseY,purpleFabric.x,purpleFabric.y);
    if (dPurple > purpleFabric.radius) {
        //display of  fabric with NO strokeweight
        push();
        ellipseMode(CENTER);
        stroke(purpleFabric.fill.red,purpleFabric.fill.green,purpleFabric.fill.blue);
        strokeWeight(purpleFabric.strokeWeight);
        fill(purpleFabric.fill.red,purpleFabric.fill.green,purpleFabric.fill.blue);
        ellipse(purpleFabric.x,purpleFabric.y,purpleFabric.size);
        pop();
    }
}

function overGreen() {
    //if the mouse goes over the green fabric circle it will make the strokeweight pink
    let dGreen = dist(mouseX,mouseY,greenFabric.x,greenFabric.y);
    if (dGreen < greenFabric.radius) {
        console.log("OVER GREEN")
        //display of green fabric with strokeweight
        push();
        ellipseMode(CENTER);
        stroke(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
        strokeWeight(greenFabric.strokeWeight);
        fill(greenFabric.fill.red,greenFabric.fill.green,greenFabric.fill.blue);
        ellipse(greenFabric.x,greenFabric.y,greenFabric.size);
        pop();
    }
}

function notOverGreen() {
    //if the mouse is not over the green fabric circle the pink strokeweight disappears
    let dGreen = dist(mouseX,mouseY,greenFabric.x,greenFabric.y);
    if (dGreen > greenFabric.radius) {
        //display of  fabric with NO strokeweight
        push();
        ellipseMode(CENTER);
        stroke(greenFabric.fill.red,greenFabric.fill.green,greenFabric.fill.blue);
        strokeWeight(greenFabric.strokeWeight);
        fill(greenFabric.fill.red,greenFabric.fill.green,greenFabric.fill.blue);
        ellipse(greenFabric.x,greenFabric.y,greenFabric.size);
        pop();
    }
}

function toolGrab() {
    background(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);//new background color
        
    toolGrabTitle();
    arrowsDisplay();
    toolGrabInstruction();
    scissorsDisplay();
    pinsDisplay();
    rulerDisplay();
    bobbinDisplay();
    hangerDisplay();
    machineDisplay();
    ballDisplay();
    needleDisplay();
    noToolsDisplayed();
    designerDisplay();
    designerMoves();
    designerOffScreen();   
}


function toolGrabTitle() {
    //instruction text
    textFont(bungeeShadeFont);
    fill(blackColor);
    stroke(blackColor);
    textAlign(CENTER,CENTER);
    textSize(instructionTitle.size);
    text(`Grab your tools!`,width/2,height/6);
}

function arrowsDisplay() {
    //display of arrows
    imageMode(CENTER);
    image(arrowsImage,arrows.x,arrows.y,arrows.size,arrows.size);
}

function toolGrabInstruction() {
     //instruction text for arrows
     textFont(bungeeShadeFont);
     textAlign(CORNER,CORNER)
     fill(blackColor);
     stroke(blackColor);
     textSize(arrowsText.size);
     text(`use                            to move`,arrowsText.width,arrowsText.height);
}

function scissorsDisplay() {
    //the boolean starts out true so the image is displayed
    if (scissorsON) {
        image(scissorsImage,scissors.x,scissors.y,tools.size,tools.size);
    }
    //if the designer touches the image it disappears
    let distanceScissors = dist(designerUser.x,designerUser.y,scissors.x,scissors.y);
    if (distanceScissors < designerUser.size/2 + tools.size/2) {
        console.log ("on scissors")
        toolclick.play();
        scissorsON = false;
    }
}

function pinsDisplay() {
    //the boolean starts out true so the image is displayed
    if (pinsON) {
        image(pinsImage,pins.x,pins.y,tools.size,tools.size);
    }
    //if the designer touches the image it disappears
    let distancePins = dist(designerUser.x,designerUser.y,pins.x,pins.y);
    if (distancePins < designerUser.size/2 + tools.size/2) {
        console.log ("on pins")
        toolclick.play();
        pinsON = false;
    }
}

function rulerDisplay() {
    //the boolean starts out true so the image is displayed
    if (rulerON) {
        image(rulerImage,ruler.x,ruler.y,tools.size,tools.size);
    }
    //if the designer touches the image it disappears
    let distanceRuler = dist(designerUser.x,designerUser.y,ruler.x,ruler.y);
    if (distanceRuler < designerUser.size/2 + tools.size/2) {
        console.log ("on ruler")
        toolclick.play();
        rulerON = false;
    }
}

function bobbinDisplay() {
    //the boolean starts out true so the image is displayed
    if (bobbinON) {
        image(bobbinImage,bobbin.x,bobbin.y,tools.size,tools.size);
    }
    //if the designer touches the image it disappears
    let distancebobbin = dist(designerUser.x,designerUser.y,bobbin.x,bobbin.y);
    if (distancebobbin < designerUser.size/2 + tools.size/2) {
        console.log ("on bobbin")
        toolclick.play();
        bobbinON = false;
    }
}

function hangerDisplay() {
     //the boolean starts out true so the image is displayed
     if (hangerON) {
        image(hangerImage,hanger.x,hanger.y,tools.size,tools.size);
    }
    //if the designer touches the image it disappears
    let distancehanger = dist(designerUser.x,designerUser.y,hanger.x,hanger.y);
    if (distancehanger < designerUser.size/2 + tools.size/2) {
        console.log ("on hanger")
        toolclick.play();
        hangerON = false;
    }
}

function machineDisplay() {
    //the boolean starts out true so the image is displayed
    if (machineON) {
        image(machineImage,machine.x,machine.y,tools.size,tools.size);
    }
    //if the designer touches the image it disappears
    let distancemachine = dist(designerUser.x,designerUser.y,machine.x,machine.y);
    if (distancemachine < designerUser.size/2 + tools.size/2) {
        console.log ("on machine")
        toolclick.play();
        machineON = false;
    }
}

function ballDisplay() {
     //the boolean starts out true so the image is displayed
     if (ballON) {
        image(ballImage,ball.x,ball.y,tools.size,tools.size);
    }
    //if the designer touches the image it disappears
    let distanceball = dist(designerUser.x,designerUser.y,ball.x,ball.y);
    if (distanceball < designerUser.size/2 + tools.size/2) {
        console.log ("on ball")
        toolclick.play();
        ballON = false;
    }
}

function needleDisplay() {
     //the boolean starts out true so the image is displayed
     if (needleON) {
        image(needleImage,needle.x,needle.y,tools.size,tools.size);
    }
    //if the designer touches the image it disappears
    let distanceneedle = dist(designerUser.x,designerUser.y,needle.x,needle.y);
    if (distanceneedle < designerUser.size/2 + tools.size/2) {
        console.log ("on needle")
        toolclick.play();
        needleON = false;
    }
}

function noToolsDisplayed() {
    //if there are no more tools to grab the simulation changes to the sewing part of the simulation
    if (scissorsON === false && pinsON === false && rulerON === false &&  bobbinON === false && hangerON === false && machineON === false && ballON === false && needleON === false) {
        state = `sewingSimulation`
    }
}

function designerDisplay() {
    //display of designer user
    push();
    noCursor();
    imageMode(CENTER);
    image(designerImage,designerUser.x,designerUser.y,designerUser.size,designerUser.size);
    pop();
}

function designerMoves() {
     //making designer interactive
    //designer goes down
    if (keyCode === DOWN_ARROW && state === `toolGrab`) { 
        console.log ("down arrow");
        designerUser.y = designerUser.y + designerUser.control;
    }
    //designer goes up
    if(keyCode === UP_ARROW && state === `toolGrab`) {
        console.log ("up arrow");
        designerUser.y = designerUser.y - designerUser.control;
     }
    //designer goes left
    if(keyCode === LEFT_ARROW && state === `toolGrab`) { 
        console.log ("left arrow"); 
        designerUser.x = designerUser.x - designerUser.control;
    }
    //designer goes right
    if(keyCode === RIGHT_ARROW && state === `toolGrab`) {
         console.log ("right arrow");
         designerUser.x = designerUser.x + designerUser.control;
    }
}

function designerOffScreen() {
    //making sure the designer controlled by user stays on the screen
    if (designerUser.x > width) {
        designerUser.x = 0
    }
    else if (designerUser.x < 0) {
        designerUser.x = width
    }

    if (designerUser.y > height) {
        designerUser.y = 0
    }
    else if (designerUser.y < 0) {
        designerUser.y = height
    }
}

function sewingSimulation() {
    background(blackColor);//new background color

    pinkRect();
    blueRect();
    purpleRect();
    greenRect();
    simulationInstruction();
    downArrowReset();
    rightArrowReset();
    displayDownArrow();
    displayRightArrow();
    stitches();
    cautionMessage();
    sewingFeet();
    sewingFootOffScreen();    
}

function pinkRect() {
    //if user chose pink for the fabric in the color choice it will be displayed in that color
    if (choicePink) {
        push();
        rectMode(CORNER);
        fill(pinkFabric.fill.red,pinkFabric.fill.green,pinkFabric.fill.blue);
        noStroke();
        rect(sewingFabric.x,sewingFabric.y,sewingFabric.width,sewingFabric.height);
        pop();
    }
}

function blueRect() {
    //if user chose blue for the fabric in the color choice it will be displayed in that color
    if (choiceBlue) {
        push();
        rectMode(CORNER);
        fill(blueFabric.fill.red,blueFabric.fill.green,blueFabric.fill.blue);
        noStroke();
        rect(sewingFabric.x,sewingFabric.y,sewingFabric.width,sewingFabric.height);
        pop();
    }
}

function purpleRect() {
    //if user chose purple for the fabric in the color choice it will be displayed in that color
    if (choicePurple) {
        push();
        rectMode(CORNER);
        fill(purpleFabric.fill.red,purpleFabric.fill.green,purpleFabric.fill.blue);
        noStroke();
        rect(sewingFabric.x,sewingFabric.y,sewingFabric.width,sewingFabric.height);
        pop();
    }
}

function greenRect() {
    //if user chose green for the fabric in the color choice it will be displayed in that color
    if (choiceGreen) {
        push();
        rectMode(CORNER);
        fill(greenFabric.fill.red,greenFabric.fill.green,greenFabric.fill.blue);
        noStroke();
        rect(sewingFabric.x,sewingFabric.y,sewingFabric.width,sewingFabric.height);
        pop();
    }
}

function simulationInstruction() {
    //sewing machine simulation text
    push();
    textFont(bungeeShadeFont);
    stroke(blackColor);
    fill(blackColor);
    textAlign(CENTER,CENTER);
    textSize(instructionTitle.size);
    text(`start sewing!`,width/2,height/6);
    pop();
}

function downArrowReset() {
    //when the arrow moves and gets to the middle it resets
    downArrow.y = downArrow.y + downArrow.vy 
    if (downArrow.y > height/2) {
        downArrow.y = 0
    }
}

function rightArrowReset() {
    //when the arrow moves and gets to the middle it resets
    rightArrow.x = rightArrow.x + rightArrow.vx 
    if (rightArrow.x > width/2) {
        rightArrow.x = width * 3/10
    }
}

function displayDownArrow() {
    //display of the down arrow
    push();
    imageMode(CENTER);
    image(downArrowImage,downArrow.x,downArrow.y);
    pop();

}

function displayRightArrow() {
    //display of the right arrow
    push();
    imageMode(CORNER);
    image(rightArrowImage,rightArrow.x,rightArrow.y);
    pop();

}

function stitches() {
        //setting vertical line dash that follows sewing foot
        push();
        stroke(0);
        strokeWeight(2);
        noFill();
        setLineDash([12, 12])
        line(width * 1/4,10,sewingFoot.x,sewingFoot.y);
        pop();
 
    if (NotrightSewing === false) {
        //setting horizontal line dash when sewing foot has reached the end of the vertical line and that follows sewing foot
        push();
        stroke(0);
        strokeWeight(2);
        noFill();
        setLineDash([12, 12])
        line(width * 1/4,height * 20/25,sewingFootRight.x,sewingFootRight.y);
        pop();
    }
}

function cautionMessage() {
    //caution message when user click up arrow
    if(keyCode === UP_ARROW && state === `sewingSimulation`) {
        console.log ("up");
        push();
        textFont(bungeeShadeFont);
        fill(cautionText.fill.red,cautionText.fill.green,cautionText.fill.blue);
        stroke(cautionText.stroke.red,cautionText.stroke.green,cautionText.stroke.blue);
        textAlign(CENTER,CENTER);
        textSize(cautionText.size);
        text(`PAY ATTENTION YOU ARE NOT SEWING STRAIGHT!`,width/2,height/2);
        pop();
    }

    //caution message when user click left arrow
    if(keyCode === LEFT_ARROW && state === `sewingSimulation`) {
        console.log ("left");
        push();
        textFont(bungeeShadeFont);
        fill(cautionText.fill.red,cautionText.fill.green,cautionText.fill.blue);
        stroke(cautionText.stroke.red,cautionText.stroke.green,cautionText.stroke.blue);
        textAlign(CENTER,CENTER);
        textSize(cautionText.size);
        text(`PAY ATTENTION YOU ARE NOT SEWING STRAIGHT!`,width/2,height/2);
        pop();
    }

    //caution message when user click right arrow and the user is not yet done sewing the line down
    if(keyCode === RIGHT_ARROW && state === `sewingSimulation` && NotrightSewing === true) {
        console.log ("right");
        push();
        textFont(bungeeShadeFont);
        fill(cautionText.fill.red,cautionText.fill.green,cautionText.fill.blue);
        stroke(cautionText.stroke.red,cautionText.stroke.green,cautionText.stroke.blue);
        textAlign(CENTER,CENTER);
        textSize(cautionText.size);
        text(`PAY ATTENTION YOU ARE NOT SEWING STRAIGHT!`,width/2,height/2);
        pop();
    }

    //when the sewing foot faces the right it can no longer use the down key
    if(keyCode === DOWN_ARROW && state === `sewingSimulation` && sewingFoot.y > height * 20/25) {
        console.log ("down");
        push();
        textFont(bungeeShadeFont);
        fill(cautionText.fill.red,cautionText.fill.green,cautionText.fill.blue);
        stroke(cautionText.stroke.red,cautionText.stroke.green,cautionText.stroke.blue);
        textAlign(CENTER,CENTER);
        textSize(cautionText.size);
        text(`PAY ATTENTION YOU ARE NOT SEWING STRAIGHT!`,width/2,height/2);
        pop();

        downSewing = false;   
    }
}

function sewingFeet() {
    
    //the boolean starts true so the image of the sewing foot facing down is displayed
    if (sewingFootImage) {
        imageMode(CENTER);
        image(sewingFootImage,sewingFoot.x,sewingFoot.y,sewingFoot.width,sewingFoot.height)
    }

    //when the sewing foot reaches almost the end of the fabric the boolean becomes false and makes sewing foot image disappear and makes another one appear but rotated to the right
    if (sewingFoot.y > height * 20/25) {
        console.log("rotate");
        push();
        angleMode(DEGREES);
        translate(sewingFootRight.x,sewingFootRight.y);
        rotate(270);
        imageMode(CENTER);
        image(sewingFootRightImage,0,0,sewingFootRight.width,sewingFootRight.height);
        pop();

        sewingFootImage = false;
    }
}

function sewingFootOffScreen() {
    //when the sewing foot goes off the screen the state changes 
    if (sewingFootRight.x > width) {
        state = `loading`
    } 
}

function loading() {
    background(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);//new background color)

    loadingInstruction();
    rectangleDisplay();


        // setTimeout(loadingTwo,5000);


        // // function loadingTwo() {
        // rectMode(CENTER);
        // fill(blackColor);
        // rect(width/3,height/2,80,60)
        // // console.log(`rect appeared`)
        // // }

        // rectMode(CENTER);
        // fill(blackColor);
        // rect(530,height/2,80,60)

        // rectMode(CENTER);
        // fill(blackColor);
        // rect(width/2,height/2,80,60) 
}

function loadingInstruction() {
    //loading text
    textFont(bungeeShadeFont);
    fill(blackColor);
    stroke(blackColor);
    textAlign(CENTER,CENTER);
    textSize(instructionTitle.size);
    text(`LOADING...`,width/2,height/3);

    textFont(bungeeShadeFont);
    fill(blackColor);
    stroke(blackColor);
    textAlign(CENTER,CENTER);
    textSize(instructionTitle.size);
    text(`doubleClick to reveal your hard work!`,width/2,height/6);
}

function rectangleDisplay() {
    //display of rectangles
    rectMode(CORNER);
    fill(blackColor);
    rect(width/4,height/2,700,60);
}

function finalResult() {
    background(blackColor);//new background color
       
    finalColor();
    finalGarment();
    endMessage(); 
}

function finalColor() {
     //pink fabric displayed based on user choice with chosen garment 
     if (choicePink) {
        push();
        rectMode(CENTER);
        fill(pinkFabric.fill.red,pinkFabric.fill.green,pinkFabric.fill.blue);
        noStroke();
        rect(width/2,height/2,coloredRectangle.width,coloredRectangle.height);
        pop();
    }
    //blue fabric displayed based on user choice with chosen garment 
    else if (choiceBlue) {
        push();
        rectMode(CENTER);
        fill(blueFabric.fill.red,blueFabric.fill.green,blueFabric.fill.blue);
        noStroke();
        rect(width/2,height/2,coloredRectangle.width,coloredRectangle.height);
        pop();
    }
    //purple fabric displayed based on user choice with chosen garment
    else if (choicePurple) {
        push();
        rectMode(CENTER);
        fill(purpleFabric.fill.red,purpleFabric.fill.green,purpleFabric.fill.blue);
        noStroke();
        rect(width/2,height/2,coloredRectangle.width,coloredRectangle.height);
        pop();
    }
    //green fabric displayed based on user choice with chosen garment
    else if (choiceGreen) {
        push();
        rectMode(CENTER);
        fill(greenFabric.fill.red,greenFabric.fill.green,greenFabric.fill.blue);
        noStroke();
        rect(width/2,height/2,coloredRectangle.width,coloredRectangle.height);
        pop();
    }
}

function finalGarment() {
    //if the pants were chosen they will be displayed in the chosen color
    if (choicePants) {
        image(pantsFinalImage,width/2,height/2)
    }
    //if the jacket was chosen it will be displayed in the chosen color
    else if (choiceJacket) {
        image(jacketFinalImage,width/2,height/2)
    }
    //if the shirt was chosen it will be displayed in the chosen color
    else if (choiceShirt) {
        image(shirtFinalImage,width/2,height/2)
    }
}

function endMessage() {
    console.log("message in")
    textFont(bungeeShadeFont);
    fill(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
    stroke(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
    textAlign(CENTER,CENTER);
    textSize(endText.size);
    text(`wow you are now
         a true designer!`,width/8,height/6);

    textFont(bungeeShadeFont);
    fill(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
    stroke(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
    textAlign(CENTER,CENTER);
    textSize(25);
    text(`beautiful
           piece!`,width * 7/8,height * 3/4);

    textFont(bungeeShadeFont);
    fill(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
    stroke(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
    textAlign(CENTER,CENTER);
    textSize(endText.size);
    text(`You should be 
          very proud!`,width/8,height * 3/4);

    textFont(bungeeShadeFont);
    fill(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
    stroke(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
    textAlign(CENTER,CENTER);
    textSize(endText.size);
    text(`astonishing work!`,width * 7/8,height/6);
}


function doubleClicked() {

    if (state === `loading`) {
        state = `finalResult`
    }
    // if (state === `loading`) {
    //     console.log ("doubleclicked")
    //     rectMode(CENTER);
    //     fill(blackColor);
    //     rect(width/3,height/2,80,60)

    //     loadingTwo = true
    // }

    // if (state === `loading` && loadingTwo === true) {
    //     rectMode(CENTER);
    //     fill(blackColor);
    //     rect(530,height/2,80,60)

        
    // }
}

//function made to set up the characters for the dash lines
function setLineDash(list) {
    drawingContext.setLineDash(list);
}
   
//function used for the colorchoice
function mousePressed() {
    pressedPink();
    pressedBlue();
    pressedPurple();
    pressedGreen();   
}

function pressedPink() {
    //if mouse is pressed on the pink circle fabric then the state changes
    let dPink = dist(mouseX,mouseY,pinkFabric.x,pinkFabric.y);
    if (dPink < pinkFabric.radius && state === `colorChoice`) {

        //click sound effect
        click.play();

        //state is now toolGrab bc user chose pink fabric
        state = `toolGrab`;

        //boolean is now true bc user chose pink
        choicePink = true;
    }
}

function pressedBlue() {
    //if mouse is pressed on the blue circle fabric then the state changes
    let dBlue = dist(mouseX,mouseY,blueFabric.x,blueFabric.y);
    if (dBlue < blueFabric.radius && state === `colorChoice`) {
        
        //click sound effect
        click.play();

        //state is now toolGrab bc user chose blue fabric
        state = `toolGrab`;

        //boolean is now true bc user chose blue
        choiceBlue = true;   
    }
}

function pressedPurple() {
    //if mouse is pressed on the purple circle fabric then the state changes
    let dPurple = dist(mouseX,mouseY,purpleFabric.x,purpleFabric.y);
    if (dPurple < purpleFabric.radius && state === `colorChoice`) {
    
        //click sound effect
        click.play();

        //state is now toolGrab bc user chose purple fabric
        state = `toolGrab`;

        //boolean is now true bc user chose purple
        choicePurple = true;
    }
}

function pressedGreen() {
    //if mouse is pressed on the green circle fabric then the state changes
    let dGreen = dist(mouseX,mouseY,greenFabric.x,greenFabric.y);
    if (dGreen < greenFabric.radius && state === `colorChoice`) {
       
        //click sound effect
        click.play();

        //state is now toolGrab bc user chose green fabric
        state = `toolGrab`;

        //boolean is now true bc user chose green
        choiceGreen = true;
    }
}

//used to select the garment choice
function keyPressed() {
    startSimulation();
    garmentKeyChoice();
    stitchesDirection();   
}

function startSimulation() {
     //starting the simulation only if you press enter AND the current state is start
     if (keyCode === ENTER && state === `start`)  {
        state = `garmentChoice`;
        tryMusic();//make music play on loop
    } 
}

function garmentKeyChoice() {
     //when user presses the p key for the pants the state changes and there is sound effect
     if (keyCode === 80) {
        state = `pantsChoice`;
        click.play();
    }//when user presses j key for the jacket the state changes and there is sound effect
    else if (keyCode === 74) {
        state = `jacketChoice`;
        click.play();
    }//when user presses s key for the shirt the state changes and there is sound effect
    else if ( keyCode === 83) {
        state = `shirtChoice`;
        click.play();
    }   
}

function stitchesDirection() {
    //what makes the sewing happen and go down, put in keypressed to make user have to repeat the action of pressing
    if (keyCode === DOWN_ARROW && state === `sewingSimulation` && downSewing === true) { 
        console.log ("down");
        sewingFoot.y = sewingFoot.y + sewingFoot.control; 
    }
    //what makes the sewing happen and go right, put in keypressed to make user have to repeat the action of pressing
    if(keyCode === RIGHT_ARROW && state === `sewingSimulation` && sewingFoot.y > height * 20/25) {
        console.log ("right");
        sewingFootRight.x = sewingFootRight.x + sewingFootRight.control;
    
        NotrightSewing = false    
    }
}

//function used for playing the music on loop
function tryMusic() {
    //play music if this is the first interaction
    if (!music.isPlaying()) {
        music.loop();
    }    
}

