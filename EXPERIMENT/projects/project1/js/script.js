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
    x: 500,
    y: 350,
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
    x: 780,
    y: 350,
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
    x: 1060,
    y: 350,
    size: 120,
    radius: 60,
    fill: {
    red: 173,
    green: 194,
    blue: 105,
    },
    strokeWeight: 20
}

//size of the tools
let tools = {
    size: 100
}

//scissors variable
let scissors = {
    x:0,
    y:0
}

//pins variable
let pins = {
    x:0,
    y:0
}

//ruler variable
let ruler = {
    x:0,
    y:0
}

//bobbin variable
let bobbin = {
    x:0,
    y:0
}

//hanger variable
let hanger = {
    x:0,
    y:0
}

//machine variable
let machine = {
    x:0,
    y:0
}

//ball variable
let ball = {
    x:0,
    y:0
}

//needle variable
let needle = {
    x:0,
    y:0
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

let bungeeShadeFont;//title style font

let music;//background music

let click;//click sound effect when user chooses somehting

let toolclick;// tool clicking sound when touching a tool

let pantsImage;//pants choice of garment at the beginning made by me on illustrator 

let jacketImage; //jacket choice of garment at the beginning made by me on illustrator 

let shirtImage; //shirt choice of garment at the beginning made by me on illustrator 

let scissorsImage; //scissors image 

let pinsImage; //pins image 

let rulerImage; //ruler image

let bobbinImage; //bobbin image

let hangerImage; //hanger image

let machineImage; //sewing machine image

let ballImage; //ball image

let needleImage; //needle image

let designerImage;// designer image 

let state = `title` //possible state = garmentChoice, choicePants,choiceJacket, choiceShirt ,colorChoice, toolGrab, sewingSimulation, finalResult

//used this to be able to see what is the actual width and height of the canvas
//source is http://thenewcode.com/1181/Window-Window-Measuring-Screen-Sizes-with-JavaScript
let windowX = document.documentElement.clientWidth,
windowY = document.documentElement.clientHeight;

//using preload to load images, sounds and fonts
function preload() {
    //text font
    bungeeShadeFont = loadFont(`assets/fonts/BungeeShade.ttf`);

    //background music
    music = loadSound(`assets/sounds/backgroundMusic.mp3`);
    //click sound used in state -> title, garmentChoice
    click = loadSound(`assets/sounds/click.wav`);
    //tool sound used in state -> toolGrab
    toolclick = loadSound(`assets/sounds/toolclick.wav`);
   
    //images used in state-> garmentChoice, choicePants,choiceJacket, choiceShirt
    pantsImage = loadImage(`assets/images/pants.png`);
    jacketImage = loadImage(`assets/images/jacket.png`);
    shirtImage = loadImage(`assets/images/shirt.png`);

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
}

//using setup to set up what I want at the beginning of the program
function setup() {
    createCanvas(windowWidth,windowHeight);

    //making the designer we will be using in state `toolGrab` move 
    designerUser.vx = designerUser.vx + designerUser.speed
    designerUser.vy = designerUser.vy + designerUser.speed

     //making sure the position of x and y works on any screen, its also the starting point of the user designer
     designerUser.x = designerUser.x;
     designerUser.y = height/2;
}

//this is where all the states for the program will run 
function draw() {
    //if the current state is the title then we must display the title of the simulation
    if (state === `title`) {
        background(blackColor);

        //title display
        push();
        textFont(bungeeShadeFont);
        fill(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
        textAlign(CENTER,CENTER);
        textSize(title.size);
        text(`Welcome to my sewing simulation`,width/2,height/2);
        pop();

        //instruction display
        push();
        textFont(bungeeShadeFont);
        fill(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
        textAlign(CENTER,CENTER);
        textSize(instructionTitle.size);
        text(`Press enter to start`,width/2,height/2 + instructionTitle.height);
        pop();
    }
    else if (state === `garmentChoice`) {
        background(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);//new background color

        //garment choice text
        push();
        textFont(bungeeShadeFont);
        fill(blackColor);
        textAlign(CENTER,CENTER);
        textSize(instructionTitle.size);
        text(`Choose the garment you wish to sew!`,width/2,height/10);
        pop();

        //images of the garments in black and white
        imageMode(CENTER);
        image(pantsImage,width * 1/4, height/2);
        image(jacketImage,width * 1/2, height/2);
        image(shirtImage,width * 3/4, height/2);

        //text for the user to be able to choose which garment he wants
        //pants choice text
        textFont(bungeeShadeFont);
        fill(blackColor);
        textAlign(CENTER,CENTER);
        textSize(instructionTitle.size);
        text(`press p`,width * 1/4,height/2 + clothingChoice.height);
        
        //jacket choice text
        text(`press j`,width * 1/2,height/2 + clothingChoice.height);

        //shirt choice text
        text(`press s`,width * 3/4,height/2 + clothingChoice.height);    
    }
    else if (state === `pantsChoice`) {
        background(blackColor);

        imageMode(CENTER);
        image(pantsImage,width * 19/20,height/8,pants.width,pants.height);//if the user presses p and chooses the pants they will be put at the top corner right of the screen

        state = `colorChoice`;
    }
    else if (state === `jacketChoice`) {
        background(blackColor);

        imageMode(CENTER);
        image(jacketImage,width * 19/20, height/8 ,jacket.width,jacket.height);//if the user presses j and chooses the jacket it will be put at the top corner right of the screen

        state = `colorChoice`;
    }
    else if (state === `shirtChoice`) {
        background(blackColor);

        imageMode(CENTER);
        image(shirtImage,width * 19/20, height/8 ,shirt.width,shirt.height);//if the user presses s and chooses the shirt it will be put at the top corner right of the screen

        state = `colorChoice`;
    }
    
    if (state === `colorChoice`) {

        //color choice text
        textFont(bungeeShadeFont);
        fill(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
        textAlign(CENTER,CENTER);
        textSize(instructionTitle.size);
        text(`Pick a color for your fabric!`,width/2,height/6);
    }
    else if( state === `toolGrab`) {
        background(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);//new background color
        
        //color choice text
        textFont(bungeeShadeFont);
        fill(blackColor);
        stroke(blackColor);
        textAlign(CENTER,CENTER);
        textSize(instructionTitle.size);
        text(`Grab your tools!`,width/2,height/6);

        //making sure the position of x and y works on any screen
        scissors.x = width * 1/2;
        scissors.y = height/2;

        //making sure the position of x and y works on any screen
        pins.x = width/4;
        pins.y = height/4;

        //making sure the position of x and y works on any screen
        ruler.x = width * 19/25;
        ruler.y = height/2;

        //making sure the position of x and y works on any screen
        bobbin.x = width * 23/25;
        bobbin.y = height * 23/25;

        //making sure the position of x and y works on any screen
        hanger.x = width * 3/50;
        hanger.y = height * 9/10;

        //making sure the position of x and y works on any screen
        machine.x = width * 1/12;
        machine.y = height/7;

        //making sure the position of x and y works on any screen
        ball.x = width * 22/25;
        ball.y = height/8;

        //making sure the position of x and y works on any screen
        needle.x = width/3;
        needle.y = height * 21/25;

        //display of all the tools images
        imageMode(CENTER);
        // image(scissorsImage,scissors.x,scissors.y,tools.size,tools.size);
        image(pinsImage,pins.x,pins.y,tools.size,tools.size);
        image(rulerImage,ruler.x,ruler.y,tools.size,tools.size);
        image(bobbinImage,bobbin.x,bobbin.y,tools.size,tools.size);
        image(hangerImage,hanger.x,hanger.y,tools.size,tools.size);
        image(machineImage,machine.x,machine.y,tools.size,tools.size);
        image(ballImage,ball.x,ball.y,tools.size,tools.size);
        image(needleImage,needle.x,needle.y,tools.size,tools.size);

        //display of designer user
        noCursor();
        imageMode(CENTER);
        image(designerImage,designerUser.x,designerUser.y,designerUser.size,designerUser.size);


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

    
    
    let scissorsON = true;
    scissorsON =  image(scissorsImage,scissors.x,scissors.y,tools.size,tools.size);



    let distanceScissors = dist(designerUser.x,designerUser.y,scissors.x,scissors.y);
    if (distanceScissors === 0) {

        toolclick.play()
        scissorsON = false;
    }

    let distancePins = dist(designerUser.x,designerUser.y,scissors.x,scissors.y);
    if (distancePins === 0) {

        toolclick.play()
    }



}

function mouseMoved() {

    //making the x and the y be the same on any size screen so it is always centered
    pinkFabric.x = width/5;
    pinkFabric.y = height/2;

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
    
    //if the mouse is not over the pink fabric circle the pink strokeweight disappears
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

    //making the x and the y be the same on any size screen so it is always centered
    blueFabric.x = width * 2/5;
    blueFabric.y = height/2;

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

    //if the mouse is not over the blue fabric circle the pink strokeweight disappears
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

    //making the x and the y be the same on any size screen so it is always centered
    purpleFabric.x = width * 3/5;
    purpleFabric.y = height/2;

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

    //if the mouse is not over the purple fabric circle the pink strokeweight disappears
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

    //making the x and the y be the same on any size screen so it is always centered
    greenFabric.x = width * 4/5;
    greenFabric.y = height/2;

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

     //if the mouse is not over the green fabric circle the pink strokeweight disappears
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

function mousePressed() {
    //if mouse is pressed on the pink circle fabric then the state changes
    let dPink = dist(mouseX,mouseY,pinkFabric.x,pinkFabric.y);
    if (dPink < pinkFabric.radius) {

        //click sound effect
        click.play();

        //state is now toolGrab bc user chose pink fabric
        state = `toolGrab`;
    }
        
    //if mouse is pressed on the blue circle fabric then the state changes
    let dBlue = dist(mouseX,mouseY,blueFabric.x,blueFabric.y);
    if (dBlue < blueFabric.radius) {
        
        //click sound effect
        click.play();

        //state is now toolGrab bc user chose blue fabric
        state = `toolGrab`;
    }
    
    //if mouse is pressed on the purple circle fabric then the state changes
    let dPurple = dist(mouseX,mouseY,purpleFabric.x,purpleFabric.y);
    if (dPurple < purpleFabric.radius) {
    
        //click sound effect
        click.play();

        //state is now toolGrab bc user chose purple fabric
        state = `toolGrab`;
    }

    //if mouse is pressed on the green circle fabric then the state changes
    let dGreen = dist(mouseX,mouseY,greenFabric.x,greenFabric.y);
    if (dGreen < greenFabric.radius) {
       
        //click sound effect
        click.play();

        //state is now toolGrab bc user chose green fabric
        state = `toolGrab`;
    }
}

function keyPressed() {
     //starting the simulation only if you press enter AND the current state is the title
     if (keyCode === ENTER && state === `title`)  {
        state = `garmentChoice`;
        tryMusic();//make music play on loop
    } 
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

//function used for playing the music on loop
function tryMusic() {
    //play music if this is the first interaction
    if (!music.isPlaying()) {
        music.loop();
    }
}





