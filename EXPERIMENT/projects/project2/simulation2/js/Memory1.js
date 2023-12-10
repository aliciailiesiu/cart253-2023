class Memory1 {
    constructor() {
        this.x = 790;
        this.y = 186;
        this.size = 20;
        this.zoomedSize = 400;
        this.sizeOfText = 26;
        this.textMemory1 = [
            `(Tim is walking home from work)`,
            `(As he walks he notices something unusal)`,
            `"What is that??"`,
            `(Find and press on what Tim saw\n to see it more closely)`,
            `(Clue: Be Careful Of What you Whisper\n in the Forest, for Trees have Ears)`,
            ``, 
        ];
        this.endOfMemory1 = [
            ``,
            `"OMG what is this I need to go home\n and make an internet search"`,
            `(Press mouse to close memory 1)`,
        ];
        // We need a variable to store the current line we want to display
        // It should start at ZERO because that's the first index in the array
        this.currentLine = 0;
        this.currentLine2 = 0;
        this.state = `intro`;  
    }

    draw() {
        console.log("Memory 1");
        background(pathImage);

        if (this.state === `intro`) {
            console.log (`state intro`)
            this.textSetup();
            this.hiddenMedallion();
        }
        else if (this.state === `medallion`) {
            this.medallion();
            this.endText();
        }
        else if (this.state === `end`) {
            console.log (`state end`)
            state = new MemoryBoxesScene();
        }  
    }

    textSetup() {
        // Get the element in the array at the CURRENT index (starts at 0 and goes up)
        this.dialog = this.textMemory1[this.currentLine];
        // Display the string in that element on the canvas
        textSize(this.sizeOfText)
        text(this.dialog, width / 2.3, height * 7/8);
    }

    hiddenMedallion() {
        //medallion image
        push();
        imageMode(CENTER);
        image(medallionImage,this.x,this.y, this.size, this.size);
        pop();
    }

    medallion() {
        //medallion image zoomed
        push();
        this.size = this.zoomedSize;
        this.x = width/2;
        this.y = height/2;
        imageMode(CENTER);
        image(medallionImage,this.x,this.y, this.size, this.size);
        pop();   
    }

    endText() {
        // Get the element in the array at the CURRENT index (starts at 0 and goes up)
        this.endDialog = this.endOfMemory1[this.currentLine2];
        // Display the string in that element on the canvas
        textSize(this.sizeOfText);
        text(this.endDialog, width / 2, height * 8/9);
    }
        
    mousePressed() {
        this.lines();
        this.findMedallion();
        this.lines2();
    }
            
    lines() {
        if (this.state === `intro`) {
            // Go to the next line in the soliloquy
            this.currentLine = this.currentLine + 1;
            // Check if we've reached the LENGTH of the array
            // If we have, we've gone past the end because we started counting at 0
            if (this.currentLine === this.textMemory1.length) {
                // If we've gone past the end, go back one to the last real element
                this.currentLine = this.textMemory1.length - 1; 
            }
        }
    }
        
    findMedallion() {
        if (mouseX > this.x - this.size/2 && mouseX < this.x + this.size/2 && mouseY > this.y - this.size/2 && mouseY < this.y + this.size/2 && this.state === `intro`) {
            this.state = `medallion`;
        }
    }

    lines2() {
        if (this.state === `medallion`) {
            // Go to the next line in the soliloquy
            this.currentLine2 = this.currentLine2 + 1;
            // Check if we've reached the LENGTH of the array
            // If we have, we've gone past the end because we started counting at 0
            if (this.currentLine2 === this.endOfMemory1.length) {
                this.state = `end`
            }
        }
    }
}

