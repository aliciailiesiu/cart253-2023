class Memory2 {
    constructor() {
        this.computerSearch = [
            `(Tim ran back home after finding the medallion)`,
            `"Ok if I remember correctly....."`,
            `"The inscription on the back of the medallion said..."`,
            `"mmmh let me check"`,
            `"Heterai Deitxira Deviains"`,
        ]
        this.logoX = 405;
        this.logoY = 130;
        this.logoWidth = 80;
        this.logoHeight = 40;
        this.currentLine = 0;
        this.state = `computerScreen`;
        this.searchX = 540;
        this.searchY = 185;
        this.searchWidth = 190;
        this.searchHeight = 20;
        this.screenX = 239;
        this.screenY = 55;
        this.skullY = 175;
        this.skullSize = 300;
        this.screenWidth = 424;
        this.screenHeight = 240;
        this.instructionX = 450;
        this.instructionY = 217;
        this.redColor = {
            r:255,
            g:0,
            b:0,
        };
        this.input;
        this.button;
        this.message;
        this.input = createInput();
        this.input.position(560, 200);
        this.button = createButton("search");
        this.button.position(730, 200);
        this.button.mousePressed();
    }

    draw() {
        console.log("Memory 2");

        background(computerScreenImage);

        if (this.state === `computerScreen` ) {
            this.setUpInstructions();
            this.logoDisplay();
            this.invisibleBoxDisplay();
        }
        else if (this.state === `screenBug`) {
            //this removes HTML elements, like the search button and the search bar
            removeElements();

            this.redScreenDisplay();
            this.scaredText();
            this.noMoreSounds();   
        }
    }
           
    setUpInstructions() {
        // Get the element in the array at the CURRENT index (starts at 0 and goes up)
        this.dialog = this.computerSearch[this.currentLine];
        // Display the string in that element on the canvas
        textSize(20)
        text(this.dialog, width/2 , height * 9/20);

        push();
        noStroke();
        textAlign(CENTER);
        textSize(15);
        fill(this.redColor.r, this.redColor.g, this.redColor.b)
        text(`(Click on the search bar to write)`, this.instructionX, this.instructionY);
        pop();
    }
    
    logoDisplay() {
        push();
        image(internetLogoImage, this.logoX, this.logoY, this.logoWidth, this.logoHeight );
        pop();
    }

    invisibleBoxDisplay() {
        //invisible box that englobes the search box
        push();
        noFill();
        noStroke();
        rectMode(CORNER);
        rect(this.searchX, this.searchY, this.searchWidth, this.searchHeight);
        pop();
    }
        
    redScreenDisplay() {
        //red screen
        push();
        fill(this.redColor.r, this.redColor.g, this.redColor.b);
        noStroke();
        rectMode(CORNER);
        rect(this.screenX, this.screenY, this.screenWidth, this.screenHeight)

        //skull image
        push();
        imageMode(CENTER);
        image(skullImage, width/2, this.skullY, this.skullSize, this.skullSize);
        pop();
    }

    scaredText() {
        push();
        textAlign(CENTER);
        textSize(100);
        text(`"WTF IS THIS"`, width/2, height * 7/8);
        textSize(45);
        text(`"SOMEONE IS BREAKING INTO MY HOUSE"`, width/2, height * 3/4);
        pop();
    }

    noMoreSounds() {
        if (!breakingInSound.isPlaying() && !glassSmashSound.isPlaying()) {
            state = new MemoryBoxesScene();
        }
    }
    
    mousePressed() {
        this.lines();
        this.searchClick();    
    }
    
    lines() {
        // Go to the next line
        this.currentLine = this.currentLine + 1;
        // Check if we've reached the LENGTH of the array
        // If we have, we've gone past the end because we started counting at 0
        if (this.currentLine === this.computerSearch.length) {
            this.currentLine = this.computerSearch.length - 1;
        }
    }

    searchClick() {
        //when the search bar is clicked the hacking occurs and someone breaks in his house
        if( mouseX > this.searchX && mouseX < this.searchX + this.searchWidth && mouseY > this.searchY && mouseY <  this.searchY + this.searchHeight ) {
            this.state = `screenBug`;
            console.log(`screenbug`)
            breakingInSound.play();
            glassSmashSound.play();
        }
    } 
}
