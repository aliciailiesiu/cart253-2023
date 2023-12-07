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
        this.textMemory1 = [
            `(Tim is walking home from work)`,
            `(As he walks he notices something unusal)`,
            `What is that??`,
            `(Find and press on what Tim saw 
                to see it more closely)`,
            `(Clue: Be Careful Of What you Whisper 
                in the Forest, for Trees have Ears)`,
            ``, 

        ];
        // We need a variable to store the current line we want to display
        // It should start at ZERO because that's the first index in the array
        this.currentLine = 0;
        this.backOfMedallion = false;
    }

        textSetup() {
            // Get the element in the array at the CURRENT index (starts at 0 and goes up)
            this.dialog = this.textMemory1[this.currentLine];
            // Display the string in that element on the canvas
            textSize(26)
            text(this.dialog, width / 2.3, height * 7/8);
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
                this.medallionDisplayText();
            }

            if (this.medallionDisplayText && mouseIsPressed) {
                this.backOfMedallion = true
            }
            
            

            if ( this.backOfMedallion === true) {
                image(medallionBackImage,this.x, this.y ,this.size, this.size);
            } console.log(`backdisplay`)
            
        }

        medallionDisplayText() {
            textSize(26);
            text(`Press medallion to see the back`,389,180)
            console.log(`text`)
        }
        
}


