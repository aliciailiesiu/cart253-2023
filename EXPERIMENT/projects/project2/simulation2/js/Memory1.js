class Memory1 {
    constructor() {
        this.x = 777;
        this.y = 186;
        this.size = 20;
        this.zoomedSize = 60;
        this.textMemory1 = [
            `(Tim is walking home from work)`,
            `(As he walks he notices something unusal)`,
            `What is that??`,
            `(Find and press on what Tim saw 
                to see it more closely)`,
            `(Clue: Be Careful Of What you Whisper 
                in the Forest, for Trees have Ears)`, 
        ];
        // We need a variable to store the current line we want to display
        // It should start at ZERO because that's the first index in the array
        this.currentLine = 0;
        // this.distanceMedallion = undefined;
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
            image(medallionFrontImage,this.x,this.y, this.size, this.size);
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

            // this.distanceMedallion = dist(mouseX, mouseY, this.x, this.y);
            if( mouseX === this.x && mouseY === this.y) {
                image(medallionFrontImage,width/2,height/2, this.zoomedSize, this.zoomedSize);
                console.log(`med touched`)
            }
            
           
        }
}


