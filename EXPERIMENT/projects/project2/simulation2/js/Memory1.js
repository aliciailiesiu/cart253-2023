class Memory1 {
    constructor() {
        // this.frontX = 790;
        // this.frontY = 186;
        // this.backX = 395;
        // this.backY = 93;
        this.x = 790;
        this.y = 186;
        this.size = 20;
        this.x2 = 450;
        this.y2 = 275;
        this.zoomedSize = 400;
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
        this.endOfMemory1 = [
            `"OMG what is this I need to go home 
            and make an internet search"`,
            `(Press mouse to close memory 1)`
        ];
        // We need a variable to store the current line we want to display
        // It should start at ZERO because that's the first index in the array
        this.currentLine = 0;
        this.currentLine2 = 0;
        // this.backOfMedallion = false;
        this.ends = false;
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
            else if (this.state === `frontMedallion`) {
                console.log (`state front`)
                this.frontMedallion();
                this.turnMedallionText();
            }
            else if (this.state === `backMedallion`) {
                console.log (`state back`)
                this.backMedallion();
            }
            else if (this.state === `end`) {
                console.log (`state end`)
                this.endText();
            }  
        }

        textSetup() {
            // Get the element in the array at the CURRENT index (starts at 0 and goes up)
            this.dialog = this.textMemory1[this.currentLine];
            // Display the string in that element on the canvas
            textSize(26)
            text(this.dialog, width / 2.3, height * 7/8);
        }

        hiddenMedallion() {
            //medallion image
            push();
            imageMode(CENTER);
            image(medallionFrontImage,this.x,this.y, this.size, this.size);
            pop();
        }

        frontMedallion() {
            push();
            this.size = this.zoomedSize;
            this.x = width/2;
            this.y = height/2;
            imageMode(CENTER);
            image(medallionFrontImage,this.x,this.y, this.size, this.size);
            pop();   
        }

        backMedallion() {
            // //the medallion is seen from the back
            // if ( this.backOfMedallion === true) {
                push();
                imageMode(CENTER)
                image(medallionBackImage,this.x2, this.y2 ,this.zoomedSize, this.zoomedSize);
                pop(); 
            // } 
        }

        endText() {
            // Get the element in the array at the CURRENT index (starts at 0 and goes up)
            this.endDialog = this.endOfMemory1[this.currentLine2];
            // Display the string in that element on the canvas
            textSize(26)
            text(this.endDialog, width / 2, height * 7/8);
        }
        
        mousePressed() {

            if (this.state === `intro`) {
            // Go to the next line in the soliloquy
            this.currentLine = this.currentLine + 1;
            // Check if we've reached the LENGTH of the array
            // If we have, we've gone past the end because we started counting at 0
            // The LENGTH of our array is 8, but the final element is at index 7
                if (this.currentLine === this.textMemory1.length) {
                // If we've gone past the end, go back one to the last real element
                this.currentLine = this.textMemory1.length - 1;
                
            }
            }
            
            if (mouseX > this.x - this.size/2 && mouseX < this.x + this.size/2 && mouseY > this.y - this.size/2 && mouseY < this.y + this.size/2 ) {
                this.state = `frontMedallion`;
            }
            
            if (mouseX > this.x2 - this.zoomedSize/2 && mouseX < this.x2 + this.zoomedSize/2 && mouseY > this.y2 - this.size2/2 && mouseY < this.y2 + this.zoomedSize/2 ) {
                    // this.backOfMedallion = true;
                    this.state = `backMedallion`;

            }

           
            //         this.ends = true;
            // }
        
            // if (this.ends === true) {
            //    this.state = `end`;
            // }

            // if (this.state === `end`) {
            //     // Go to the next line in the soliloquy
            // this.currentLine2 = this.currentLine2 + 1;
            // // Check if we've reached the LENGTH of the array
            // // If we have, we've gone past the end because we started counting at 0
            // // The LENGTH of our array is 8, but the final element is at index 7
            // if (this.currentLine2 === this.endOfMemory1.length) {
            // // If we've gone past the end, go back one to the last real element
            // this.currentLine2 = this.endOfMemory1.length - 1;
            // state = new MemoryBoxesScene();

            // }
            // }

             

            

            


        
        }

        

        turnMedallionText() {
            textSize(26);
            text(`Press medallion to see the back`, width / 2, height * 7/8)
        }
        
       
        

    }

