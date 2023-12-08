class Memory2 {
    constructor() {
        this.computerSearch = [
            `(Tim ran back home after finding the medallion)`,
            `"Ok if I remember correctly....."`,
            `"The inscription on the back of the medallion said..."`,
            `"mmmh let me check"`,
            `"Heterai Deitxira Deviains"`,
        ]
        // this.input = this.input;
        this.button = this.button;
        this.x = 330;
        this.y = 185;
        this.width = 205;
        this.height = 17;
        this.fill = 255;
        this.stroke = 0;
        this.strokeWeight = 1;
        this.imageX = 405;
        this.imageY = 130;
        this.currentLine = 0;
        this.state = `computerScreen`;
        this.searchX = 540;
        this.searchY = 185;
        this.searchWidth = 190;
        this.searchHeight = 20;
        this.screenX = 239;
        this.screenY = 55;
        this.screenWidth = 424;
        this.screenHeight = 240;
        this.screenColor = {
            r:255,
            g:0,
            b:0,
        };
        
        // this.message = this.message;
        // this.name = this.name;
        // this.i = this.i;
        // this.input.alt = this.input.alt  
    }

    
    draw() {
        console.log("Memory 2");

        background(computerScreenImage);

        if (this.state === `computerScreen`) {
        this.setupButton();
        this.setUpInstructions();
        // this.drawName(); 

        //search box rectangle
        push();
        fill(this.fill);
        stroke(this.stroke);
        strokeWeight(this.strokeWeight);
        rectMode(CORNER);
        rect(this.x, this.y, this.width, this.height);
        pop();

        push();
        image(internetLogoImage, this.imageX, this.imageY,80,40);
        pop();
        
            if (this.currentLine === this.computerSearch.length) {
            this.search();
            console.log(`search`)
            }

            push();
            noFill();
            noStroke();
            rectMode(CORNER);
            rect(this.searchX, this.searchY, this.searchWidth, this.searchHeight);
            pop();
    
        
        }
        else if (this.state === `screenBug`) {
            push();
            fill(this.screenColor.r, this.screenColor.g, this.screenColor.b);
            noStroke();
            rectMode(CORNER);
            rect(this.screenX, this.screenY, this.screenWidth, this.screenHeight)

            push();
            imageMode(CENTER)
            image(skullImage, width/2, 175, 300,300)
            pop();

            push();
            textAlign(CENTER);
            textSize(100);
            text(`"WTF IS THIS"`, width/2, height * 7/8);
            console.log(`text`)
            pop();

            if (!breakingInSound.isPlaying() && !glassSmashSound.isPlaying()) {
                push();
                textAlign(CENTER);
                textSize(45);
                text(`"SOMEONE JUST BROKE INTO MY HOUSE"`, width/2, height * 3/4);
                console.log(`text`)
                pop();
                
            }

            // if (!punchSound.isPlaying()) {
            //     state = new MemoryBoxesScene();
            // }

           
                
            

        }
    }
        
        setupButton() {
            // this.input = createInput();
        //     this.input.position(20, 30);
            this.button = createButton("search");
            this.button.position(730, 200);
            console.log(`button`)
        //     this.button.mousePressed(this.drawName());
        //     this.input.alt.style(index, 1000);
    
        //     noStroke();
        //     text("Enter your name.", 20, 20);
        }
    
        setUpInstructions() {
            // Get the element in the array at the CURRENT index (starts at 0 and goes up)
            this.dialog = this.computerSearch[this.currentLine];
            // Display the string in that element on the canvas
            textSize(20)
            text(this.dialog, width/2 , height * 9/20);
        }
    
    
    

    search() {
        push();
        textAlign(CENTER);
        textSize(10);
        textFont(robotoFont);
        text(`Heterai Deitxira Deviains`, 387, 193 )
        pop();
    }

    mousePressed() {
        // Go to the next line in the soliloquy
        this.currentLine = this.currentLine + 1;
        // Check if we've reached the LENGTH of the array
        // If we have, we've gone past the end because we started counting at 0
        // The LENGTH of our array is 8, but the final element is at index 7
        if (this.currentLine === this.computerSearch.length) {
        // If we've gone past the end, go back one to the last real element
        this.search();
        }

        if( mouseX > this.searchX && mouseX < this.searchX + this.searchWidth && mouseY > this.searchY && mouseY <   this.searchY + this.searchHeight ) {
            this.state = `screenBug`;
            console.log(`screenbug`)
            breakingInSound.play();
            glassSmashSound.play();
        }
        
        if(this.state === `end`) {
            punchSound.play();
        }
        
    }


    // drawName() {
    // textSize(30);
    // this.name = this.input.value();
    // for ( this.i=0; this.i < 30; this.i++) {
    // fill(random(255));
    // text(this.name, random(width), random(height));
    // }
    // }
}