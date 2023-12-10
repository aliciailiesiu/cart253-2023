class Memory3 {
    constructor() {
        this.state = `intro`
        this.introText = [
            `"WHERE AM I"`,
            `"I can't believe someone just broke into my house"`,
            `"AND KIDNAPPED ME???"`,
            `"I can't see anything"`,
            `"OH I STILL HAVE MY PHONE I WILL CALL FOR HELP"`,
            `"Annnnnd No service of course......"`, 
            `"Ok at least I can use my phone's flashlight`
        ];
        this.currentLine = 0;
        this.playbackRate = 0.6;
        this.blackColor = 0;
        this.whiteColor = 255;
        this.redColor = {
            r:255,
            g:0,
            b:0
        };
        this.dialogSize = 25;
        this.checkBoxText = 20;
        this.objectText = 15;
        this.instructionText = 30;
        this.checkbox1 = createCheckbox();
        this.checkbox1.position(800,150);
        this.checkbox2 = createCheckbox();
        this.checkbox2.position(800,110);
        this.checkbox3 = createCheckbox();
        this.checkbox3.position(800,70);
    }

    draw() {
        console.log("Memory 3");

        if (this.state === `intro`) {
            background(this.blackColor);
            this.innerDialog();
        }
        else if (this.state === `flashlight`) {
            background(basementImage);
            this.lampDisplay();
            this.textDisplay();
            this.checkedBoxes();    
        }
        else if (this.state === `end`) {
            background(this.blackColor);

            footstepsSound.rate(this.playbackRate);

            this.instructions();
            this.dialogText();
        }
    }
        
    innerDialog() {
        this.dialog = this.introText[this.currentLine];
        // Display the string in that element on the canvas
        push();
        fill(this.whiteColor);
        text(this.dialog, width / 2, height / 2);
        pop();
    }

    lampDisplay() {
        push();
        imageMode(CENTER)
        image(lampImage,mouseX,mouseY)
        pop();
    }

    textDisplay() {
        //text next to object
        push();
        textAlign(CENTER);
        textSize(this.objectText);
        fill(this.blackColor);
        text(`Butcher knife`, 640, 280);
        text(`Journal`, 870, 250);
        text(`Box`, 260, 420);
        pop();

        //checkbox text
        push();
        textAlign(CORNER);
        textSize(this.checkBoxText);
        fill(this.whiteColor);
        text(`Butcher knife`, 640, 140);
        text(`Journal`, 640, 100);
        text(`Box`, 640, 60);
        pop();

        //instructions
        push();
        textAlign(CORNER);
        textSize(this.instructionText);
        fill(this.whiteColor);
        text(`Find the items listed and check\n them on the checkbox`, 100, 100);
        pop();
    }

    checkedBoxes() {
        if (this.checkbox1.checked() && this.checkbox2.checked() && this.checkbox3.checked()) {
            this.state = `end`;
        } 
    }

    instructions() {
        //instructions
        push();
        textAlign(CORNER);
        textSize(this.checkBoxText);
        fill(this.whiteColor);
        text(`"SOMEONE IS COMING AND I HEAR THEM TALKING"`, 50, 20);
        text(`Click anywhere to hear them too`, 50, 40);
        pop();
    }

    dialogText() {
        //stranger 1
        push();
        textAlign(CENTER);
        textSize(this.dialogSize);
        fill(this.whiteColor);
        text(`Stranger 1: "Ok wtf do we do with him now"`, width/2, 150);
        text(`Stranger 1: "I Don't know either, but killing him now \n will just make everything more complicated for us"`, width/2, 275);
        text(`Stranger 1: "Lets just bring him to the woods and leave him there \n he'll be lost and probably die before the day is over"`, width/2, 425);
        pop();

        //stranger 2
        push();
        textAlign(CENTER);
        textSize(this.dialogSize);
        fill(this.redColor.r, this.redColor.g, this.redColor.b);
        text(`Stranger 2: "I have yet to understand how he found out we existed"`, width/2, 200);
        text(`Stranger 2: "You're right, I dont feel like getting my \n hands dirty today anyway, it's Sunday!"`, width/2, 350);
        text(`Stranger 2: "Less work for us, let's go"`, width/2, 500);
        pop();
    }

    mousePressed() {
        this.lines();
        this.walking();
    }
        
    lines() {
        if (this.state === `intro`) {
            // Go to the next line in the soliloquy
            this.currentLine = this.currentLine + 1;
            // Check if we've reached the LENGTH of the array
            // If we have, we've gone past the end because we started counting at 0
            if (this.currentLine === this.introText.length) {
                this.state = `flashlight`;
            }
        }
    }

    walking() {
        if (this.state === `end` && !footstepsSound.isPlaying()) {
            footstepsSound.play();
        }
    }
}

    

