class Memory1 {
    constructor() {
        // this.frontX = 790;
        // this.frontY = 186;
        // this.backX = 395;
        // this.backY = 93;
        this.x = 790;
        this.y = 186;
        this.size = 20;
        this.zoomedSize = 400;
        this.endOfMemory1 = [
            `"OMG what is this I need to go home 
            and make an internet search"`,
            `(Press mouse to close memory 1)`
        ];
        this.textMemory1 = [
            `(Tim is walking home from work)`,
            `(As he walks he notices something unusal)`,
            `"What is that??"`,
            `(Find and press on what Tim saw 
                to see it more closely)`,
            `(Clue: Be Careful Of What you Whisper 
                in the Forest, for Trees have Ears)`,
            ``, 

        ];
        
        // We need a variable to store the current line we want to display
        // It should start at ZERO because that's the first index in the array
        this.currentLine = 0;
        this.currentLine2 = 0;
        this.backOfMedallion = false;
        
        
    }

        textSetup() {
            // Get the element in the array at the CURRENT index (starts at 0 and goes up)
            this.dialog = this.textMemory1[this.currentLine];
            // Display the string in that element on the canvas
            textSize(26)
            text(this.dialog, width / 2.3, height * 7/8);
        }

        end() {
            // Get the element in the array at the CURRENT index (starts at 0 and goes up)
            this.endDialog = this.endOfMemory1[this.currentLine2];
            // Display the string in that element on the canvas
            textSize(26)
            text(this.endDialog, width / 2, height * 7/8);
        }
        
    

        draw() {
            console.log("Memory 1");
            background(pathImage);
            //medallion image
            push();
            imageMode(CENTER);
            image(medallionFrontImage,this.x,this.y, this.size, this.size);
            pop();
            this.textSetup();

           // the text that says to turn back the medallion only appears after the string of text is done and when the medallion is zoomed in
            if (this.backOfMedallion === false && this.currentLine === this.textMemory1.length - 1 && this.size === this.zoomedSize) {
                this.turnMedallionText();
            }

            //the medallion is seen from the back
            if ( this.backOfMedallion === true) {
                push();
                imageMode(CENTER)
                image(medallionBackImage,this.x, this.y ,this.size, this.size);
                pop();

                this.end();
            } 

            
        }

            
        

        mousePressed() {

            // Go to the next line in the soliloquy
            this.currentLine = this.currentLine + 1;
            // Check if we've reached the LENGTH of the array
            // If we have, we've gone past the end because we started counting at 0
            // The LENGTH of our array is 8, but the final element is at index 7
            if (this.currentLine === this.textMemory1.length) {
            // If we've gone past the end, go back one to the last real element
            this.currentLine = this.textMemory1.length - 1;

            }

             

            //if the mouse presses on the medallion it zooms in
            if (mouseX > this.x - this.size/2 && mouseX < this.x + this.size/2 && mouseY > this.y - this.size/2 && mouseY < this.y + this.size/2 ) {

                push();
                this.size = this.zoomedSize;
                this.x = width/2;
                this.y = height/2;
                pop();   
            }

            if (mouseX > this.x - this.size/2 && mouseX < this.x + this.size/2 && mouseY > this.y - this.size/2 && mouseY < this.y + this.size/2 ) {
                this.backOfMedallion = true;
            }


            // Go to the next line in the soliloquy
            this.currentLine2 = this.currentLine2 + 1;
            // Check if we've reached the LENGTH of the array
            // If we have, we've gone past the end because we started counting at 0
            // The LENGTH of our array is 8, but the final element is at index 7
            if (this.currentLine2 === this.endOfMemory1.length) {
            // If we've gone past the end, go back one to the last real element
            this.currentLine2 = this.endOfMemory1.length - 1;
            state = new MemoryBoxesScene();

            }
            
        }

        turnMedallionText() {
            textSize(26);
            text(`Press medallion to see the back`, width / 2, height * 7/8)
        }
        
       
        
}


