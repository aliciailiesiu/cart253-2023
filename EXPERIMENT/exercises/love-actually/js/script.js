/**
 * Love actually activity , juliette is trying to get away from Romeo because he is wayyy to clingy. Romeo follows her everywhere and juliette is controled by the user and moves using the arrows. A magic potion is moving randomly around the screen and if juliette touches it, it makes her teleport in a random place in the canevas
 */

//lets make juliette!!
let juliette = {
    x: undefined,
    y: undefined,
    size: 40,
    speed:10,
    fill: {
        red:245,
        green:149,
        blue:194,
    },
    vx: 0,
    vy: 0,
    control: 1,
}

//lets make romeo!!
let romeo = {
    x: undefined,
    y: undefined,
    size: 60,
    speed: 1,
    fill: {
        red:255,
        green:0,
        blue:0,
    },
    vx: 0,
    vy: 0,
}

/**
 * here is the potion!!
*/
let potion = {
    x:undefined,
    y:undefined,
    vx:0,
    vy:0,
    fill:255,
    speed:10,
    size:100,
}

let bg = 0;

let state = `title` //other possible states = ending , caught, animation


function preload() {
}


/**
 * setting up the canvas 
*/
function setup() {
    createCanvas(800,800);

    setUpPotion();
    setUpRomeo();
    setUpJuliette();
    julietteCoordinate();
}

function setUpPotion() {
    //potion will be placed randomly on the canvas each time the program starts
    potion.x = random(0,width);
    potion.y = random(0,height);

    potion.vx = random(-potion.speed,potion.speed);
    potion.vy = random(-potion.speed,potion.speed);
}

function setUpRomeo() {
    //romeo will be placed randomly on the canvas each time the program starts
    romeo.x = random(0,width);
    romeo.y = random(0,height);

    romeo.vx = romeo.vx + romeo.speed
    romeo.vy = romeo.vy + romeo.speed
}

function setUpJuliette() {
    juliette.vx = juliette.vx + juliette.speed
    juliette.vy = juliette.vy + juliette.speed
}

function julietteCoordinate() {
    //juliette will be placed randomly on the canvas
    juliette.x = random(0,width);
    juliette.y = random(0,height);
}

function draw() {
    background(bg);

    if (state === `title`) {
        title();
    }
    else if (state === `ending` ) {
        ending();
    }
    else if (state === `caught`) {
        caught();
    }
    else if (state === `animation`) {
    animation();
    }
}

function title() {
    fill(255);
    textSize(30);
    textAlign(CENTER,CENTER);
    text(`Juliette anti Romeo`,width/2,height/2)
}

function ending() {
    fill(255);
    textSize(30);
    textAlign(CENTER,CENTER);
    text(`You lost youself in the woods and died alone`,width/2,height/2)
}

function caught() {
    fill(255);
        textSize(30);
        textAlign(CENTER,CENTER);
        text(`Romeo caught you!!!`,width/2,height/2);
}

function animation() {
    julietteMoves();
    romeoMoves();
    potionMoves();
    potionOffScreen();
    potionOverlap();
    romeoOverlap();
    julietteOffScreen();
    display();
}

function julietteMoves() {
    //making juliette interactive
    //juliette goes down
    if (keyCode === DOWN_ARROW) { 
        juliette.y = juliette.y + juliette.control
    }

    //juliette goes up
    if(keyCode === UP_ARROW) {
        juliette.y = juliette.y - juliette.control
    }
    //juliette goes left
    if(keyCode === LEFT_ARROW) {  
        juliette.x = juliette.x - juliette.control
    }
    //juliette goes right
    if(keyCode === RIGHT_ARROW) {
        juliette.x = juliette.x + juliette.control
    }
}

function romeoMoves() {
    //making romeo follow juliette
    //if juliette is to the left of romeo he will start going left
    if (juliette.x < romeo.x) {
        romeo.vx = -1
    }
    else {
        romeo.vx = 1 //if juliette is to the right of romeo he will start going right
    }

    //if juliette is higher than romeo he will start going up
    if (juliette.y < romeo.y) {
        romeo.vy = -1 
    }
    else {
        romeo.vy = 1 //if juliette is lower than romeo he will start going down
    }
    
    //making romeo move
    romeo.x = romeo.x + romeo.vx;
    romeo.y = romeo.y + romeo.vy;
}

function potionMoves() {
    //making potion move
    potion.x = potion.x + potion.vx;
    potion.y = potion.y + potion.vy;
}

function potionOffScreen() {
    
    //making sure the potion stays on the screen
    if (potion.x > width) {
        potion.x = 0
    }
    else if (potion.x < 0) {
        potion.x = width
    }

    if (potion.y > height) {
        potion.y = 0
    }
    else if (potion.y < 0) {
        potion.y = height
    }
}

function potionOverlap() {
    //calculate the distance from juliette and the potion
    let d = dist(juliette.x,juliette.y,potion.x,potion.y)
    //check if juliette overlaps the potion
    while ( d < juliette.size/2 + potion.size/2) {
        //if it does juliette will be teleported to a new random position
        julietteCoordinate();
        //recalculate the distance for the next time through the loop
        d = dist(juliette.x,juliette.y,potion.x,potion.y)
    }
    }

function romeoOverlap() {
    //calculate the distance from juliette and romeo
    let distanceLovers = dist(juliette.x,juliette.y,romeo.x,romeo.y)
    //check if juliette overlaps romeo
    if ( distanceLovers < juliette.size/2 + romeo.size/2) {
        state = `caught`  
    }
}

function julietteOffScreen() {
    //if juliette goes out on any border of the screen the simulation ends
    if (juliette.x > width || juliette.x < 0 || juliette.y > height || juliette.y < 0) {
        state = `ending`
    }
}

function display() {
    //displaying potion
    push();
    fill(potion.fill);
    ellipse(potion.x,potion.y,potion.size);
    pop();

    //displaying juliette
    push();
    fill(juliette.fill.red,juliette.fill.green,juliette.fill.blue);
    ellipse(juliette.x,juliette.y,juliette.size);
    pop();

    //displaying romeo
    push();
    fill(romeo.fill.red,romeo.fill.green,romeo.fill.blue);
    ellipse(romeo.x,romeo.y,romeo.size)
    pop();
}

function keyPressed() {
    //when any key is pressed the program check that the title is the current state before starting the animation
    if (state === `title`) {
        state = `animation`
    }
}

//i cant believe i actually made ittt in time yayyyyyy so happy!!!!!!!!
    





