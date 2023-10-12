/**
 * Sewing simulation
 * Alicia Iliesiu
 * 
 * This sewing simulation starts with the title, when any key or any mouse is pressed the simulation starts by asking the user to chose what the sewing project is, choices are between a shirt, a jacket and pants. After selecting his choice, the user needs to chose what color fabric he wants, between pink,blue,green or purple. The next step is to get all the tools needed for the sewing project such as some scissors, a ruler, a pencil and sewing pins. The user needs to go get each item spread out on the screen by using the arrows on the keyboard. Once everything is gathered, we can now start sewing, user will be able to sew some stitches by making him in control of the sewing machine. Once the project is done the user will be able to see the final result yay!! 
 */

"use strict";


let pinkColor = {
    fill: {
        red:237,
        green:135,
        blue:222,
        },
}

let blackColor = 0;

//title variable
let title = {
    size: 70
}

//instruction variable
let instructionTitle = {
    size: 50,
    height: 100
}

//the garment choice text display variable
let clothingChoice = {
    height:250
}

//pink color fabric
let pinkFabric = {
    x:300,
    y:450,
    size:200,
    radius:100,
    fill: {
    red:230,
    green:174,
    blue:209
    },
    strokeWeight:40
}

//blue color fabric
let blueFabric = {
    x:730,
    y:450,
    size:200,
    radius:100,
    fill: {
    red:119,
    green:137,
    blue:168
    },
    strokeWeight:40
}

//purple color fabric
let purpleFabric = {
    x:1160,
    y:450,
    size:200,
    radius:100,
    fill: {
    red:217,
    green:173,
    blue:240
    },
    strokeWeight:40
}

//green color fabric
let greenFabric = {
    x:1600,
    y:450,
    size:200,
    radius:100,
    fill: {
    red:173,
    green:194,
    blue:105,
    strokeWeight:40
    },
}

let bungeeShadeFont;//title style font

let music;//background music

let click;//click sound effect when user chooses somehting

let pants;//pants choice of garment at the beginning

let jacket; //jacket choice of garment at the beginning

let shirt; //shirt choice of garment at the beginning

let state = `title` //possible state = garmentChoice, choicePants,choiceJacket, choiceShirt ,colorChoice, toolGrab, sewingSimulation, finalResult

//let overPink = true;



//using preload to load images, sounds and fonts
function preload() {
    bungeeShadeFont = loadFont(`assets/fonts/BungeeShade.ttf`);

    music = loadSound(`assets/sounds/backgroundMusic.mp3`);
    click = loadSound(`assets/sounds/click.wav`);
   
    pants = loadImage(`assets/images/pants.png`);
    jacket = loadImage(`assets/images/jacket.png`);
    shirt = loadImage(`assets/images/shirt.png`);
}


/**
 * Description of setup
*/
function setup() {
createCanvas(windowWidth,windowHeight);
}


/**
 * Description of draw()
*/
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
        text(`Choose the garment you wish to sew!`,width/2,height/6);
        pop();

        //images of the garments in black and white
        imageMode(CENTER);
        image(pants,width * 1/4, height/2);
        image(jacket,width * 1/2, height/2);
        image(shirt,width * 3/4, height/2);

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
        image(pants,width - 50, height - 850 ,100,125);//if the user presses p and chooses the pants they will be put at the top corner right of the screen

        state = `colorChoice`;
    }
    else if (state === `jacketChoice`) {
        background(blackColor);

        imageMode(CENTER);
        image(jacket,width - 55, height - 850 ,80,105);//if the user presses j and chooses the jacket it will be put at the top corner right of the screen

        state = `colorChoice`;
    }
    else if (state === `shirtChoice`) {
        background(blackColor);

        imageMode(CENTER);
        image(shirt,width - 55, height - 850 ,100,100);//if the user presses s and chooses the shirt it will be put at the top corner right of the screen

        state = `colorChoice`;
    }
    
    if (state === `colorChoice`) {

        //color choice text
        textFont(bungeeShadeFont);
        fill(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
        textAlign(CENTER,CENTER);
        textSize(instructionTitle.size);
        text(`Pick a color for your fabric!`,width/2,height/6);
        
        //pink = strokeWeight = strokeWeight + pinkFabric.strokeWeight;
        //pink.mouseOver(choosePink);

        //if mouse goes over the pink fabric then a pink stroke will be seen on the circle
       // if (overPink === true) {
          //  stroke(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
            //strokeWeight(pinkFabric.strokeWeight);
       // }
        //else {
            //noStroke();
       // }//if mouse is not over the pink fabric circle nothing will happen


        //display of pink fabric
        push();
        ellipseMode(CENTER);
        noStroke();
        fill(pinkFabric.fill.red,pinkFabric.fill.green,pinkFabric.fill.blue);
        ellipse(pinkFabric.x,pinkFabric.y,pinkFabric.size);
        pop();
        
        //display of blue fabric
        push();
        ellipseMode(CENTER);
        noStroke();
        fill(blueFabric.fill.red,blueFabric.fill.green,blueFabric.fill.blue);
        ellipse(blueFabric.x,blueFabric.y,blueFabric.size);
        pop();

        //display of purple fabric
        push();
        ellipseMode(CENTER);
        noStroke();
        fill(purpleFabric.fill.red,purpleFabric.fill.green,purpleFabric.fill.blue);
        ellipse(purpleFabric.x,purpleFabric.y,purpleFabric.size);
        pop();

        //display of green fabric
        push();
        ellipseMode(CENTER);
        noStroke();
        fill(greenFabric.fill.red,greenFabric.fill.green,greenFabric.fill.blue);
        ellipse(greenFabric.x,greenFabric.y,greenFabric.size);
        pop();

       
         

       
        
        


    }
}

 
function mouseMoved() {
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
        console.log("NOT OVER PINK")
        //display of pink fabric with NO strokeweight
        push();
        ellipseMode(CENTER);
        stroke(pinkFabric.fill.red,pinkFabric.fill.green,pinkFabric.fill.blue);
        strokeWeight(pinkFabric.strokeWeight);
        fill(pinkFabric.fill.red,pinkFabric.fill.green,pinkFabric.fill.blue);
        ellipse(pinkFabric.x,pinkFabric.y,pinkFabric.size);
        pop();
    }

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
        console.log("NOT OVER BLUE")
        //display of blue fabric with NO strokeweight
        push();
        ellipseMode(CENTER);
        stroke(blueFabric.fill.red,blueFabric.fill.green,blueFabric.fill.blue);
        strokeWeight(blueFabric.strokeWeight);
        fill(blueFabric.fill.red,blueFabric.fill.green,blueFabric.fill.blue);
        ellipse(blueFabric.x,blueFabric.y,blueFabric.size);
        pop();
    }

    //if the mouse goes over the purple fabric circle it will make the strokeweight pink
    let dPurple = dist(mouseX,mouseY,purpleFabric.x,purpleFabric.y);
    if (dPurple < PurpleFabric.radius) {
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
        console.log("NOT OVER PURPLE")
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
    











//function mouseMoved() {
    //let d = dist(mouseX,mouseY,pinkFabric.x,pinkFabric.y);
    //if (d < pinkFabric.radius) {
        //console.log("OVER PINK")
        //display of pink fabric with strokeweight
        //push();
        //ellipseMode(CENTER);
        //stroke(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
        //strokeWeight(pinkFabric.strokeWeight);
        //fill(pinkFabric.fill.red,pinkFabric.fill.green,pinkFabric.fill.blue);
        //ellipse(pinkFabric.x,pinkFabric.y,pinkFabric.size);
       // pop();
    //}
//}




//function mouseMoved() {
    //let d = dist(mouseX,mouseY,pinkFabric.x,pinkFabric.y);
   // while (d < pinkFabric.radius) {
        //console.log("OVER PINK")
        //display of pink fabric with strokeweight
       // push();
       // ellipseMode(CENTER);
       // stroke(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
        //strokeWeight(pinkFabric.strokeWeight);
       // fill(pinkFabric.fill.red,pinkFabric.fill.green,pinkFabric.fill.blue);
        //ellipse(pinkFabric.x,pinkFabric.y,pinkFabric.size);
        //pop();

        //d = dist(mouseX,mouseY,pinkFabric.x,pinkFabric.y);

    //}
//}

//function mouseHover() {
    //is the mouse over the pink circle position
    ///if (mouseX > pinkFabric.x - pinkFabric.radius && mouseX < pinkFabric.x + pinkFabric.radius && mouseY > pinkFabric.y - pinkFabric.radius && mouseY < pinkFabric.y + pinkFabric.radius ) {
       // overPink = true;
    //} //if mouse goes over the pink fabric circle then overPink is true and will happen, the strokeweight of the circle will be pink and thicker
    //else {
       // overPink = false;
    //} //if mouse doesnt go over the pink fabric circle then overPink is false and nothing will happen
    
//}



//function choosePink() {
    
    //stroke(pinkColor.fill.red,pinkColor.fill.green,pinkColor.fill.blue);
    //strokeWeight = strokeWeight + pinkFabric.strokeWeight;
    //ellipse(pinkFabric.x,pinkFabric.y,pinkFabric.size);
//}

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

function tryMusic() {
    //play music if this is the first interaction
    if (!music.isPlaying()) {
        music.loop();
    }
}