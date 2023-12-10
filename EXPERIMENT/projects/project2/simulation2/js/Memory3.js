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
        this.invisibleEllipseSize = 60;
        this.butcherKnifeX = 640;
        this.butcherKnifeY = 260;
        this.journalX = 870;
        this.journalY = 230;
        this.boxX = 260;
        this.boxY = 420;
        this.checkbox1 = createCheckbox();
        this.checkbox1.position(800,100);
        this.checkbox2 = createCheckbox();
        this.checkbox2.position(800,90);
        this.checkbox3 = createCheckbox();
        this.checkbox3.position(800,80);
        
        
       
    }

    draw() {
        console.log("Memory 3");
        
        
        if (this.state === `intro`) {
            
           
    

            

            background(0);
            this.dialog = this.introText[this.currentLine];
            // Display the string in that element on the canvas
            push();
            fill(255)
            text(this.dialog, width / 2, height / 2);
            pop();
        

        }
        else if (this.state === `flashlight`) {
            
            

         

            background(basementImage);
            push();
            imageMode(CENTER)
            image(lampImage,mouseX,mouseY)
            pop();

        //invisible circle circling the butcher knife, the journal article and the box so something happens when user presses on these objects
        push();
        noFill();
        noStroke();
        ellipseMode(CENTER)
        ellipse(this.butcherKnifeX,this.butcherKnifeY,this.invisibleEllipseSize);
        ellipse(this.journalX, this.journalY, this.invisibleEllipseSize);
        ellipse(this.boxX, this.boxY, this.invisibleEllipseSize);
        pop();

        if (this.checkbox1.checked) {
            text(`DONE`,width/2,height/2)
        }
        
       
    }
}
        

    mousePressed() {

        if (this.state === `intro`) {
            // Go to the next line in the soliloquy
            this.currentLine = this.currentLine + 1;
            // Check if we've reached the LENGTH of the array
            // If we have, we've gone past the end because we started counting at 0
            // The LENGTH of our array is 8, but the final element is at index 7
            if (this.currentLine === this.introText.length) {
            // If we've gone past the end, go back one to the last real element
            this.state = `flashlight`;
    }
        if (this.state === `flashlight`) {

        }
        }
    
}


}