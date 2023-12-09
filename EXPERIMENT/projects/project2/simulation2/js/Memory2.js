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
        // this.button = this.button;
        // this.x = 330;
        // this.y = 185;
        // this.width = 205;
        // this.height = 17;
        // this.fill = 255;
        // this.stroke = 0;
        // this.strokeWeight = 1;
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
        this.redColor = {
            r:255,
            g:0,
            b:0,
        };
        
        this.input;
        this.button;
        this.message;
        // this.name = "test";
        this.input = createInput();
        this.input.position(560, 200);
        this.button = createButton("search");
        this.button.position(730, 200);
        this.button.mousePressed();
        this.timeLimit = 5;
        this.countDown;
        this.currentTime;
        
        
        }

    
    draw() {
        console.log("Memory 2");

        background(computerScreenImage);

        if (this.state === `computerScreen` ) {
            // this.setupButton();
            this.setUpInstructions();

            // if (this.hack === false) {
            // this.input = createInput();
            // this.input.position(560, 200);
            // this.button = createButton("search");
            // this.button.position(730, 200);
            // this.button.mousePressed();
            // }

            
        
            push();
            noStroke();
            textAlign(CENTER);
            textSize(15);
            fill(this.redColor.r, this.redColor.g, this.redColor.b)
            text(`(Click on the search bar to write)`, 450, 217);
            pop();
        
        
        //search box rectangle
        // push();
        // fill(this.fill);
        // stroke(this.stroke);
        // strokeWeight(this.strokeWeight);
        // rectMode(CORNER);
        // rect(this.x, this.y, this.width, this.height);
        // pop();

            push();
            image(internetLogoImage, this.imageX, this.imageY,80,40);
            pop();
        
            // if (this.currentLine === this.computerSearch.length) {
            // this.search();
            // console.log(`search`)
            // }

            //invisible box that englobes the search box
            push();
            noFill();
            noStroke();
            rectMode(CORNER);
            rect(this.searchX, this.searchY, this.searchWidth, this.searchHeight);
            pop();
    
        
        }
        else if (this.state === `screenBug`) {

            // this.hack = true;
            removeElements();

            push();
            fill(this.redColor.r, this.redColor.g, this.redColor.b);
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
            textSize(45);
            text(`"SOMEONE IS BREAKING INTO MY HOUSE"`, width/2, height * 3/4);
            pop();

            // if (!punchSound.isPlaying) {
            //     state = new MemoryBoxesScene();
            // }
            if (!breakingInSound.isPlaying() && !glassSmashSound.isPlaying()) {
                // push();
                // textAlign(CENTER);
                // textSize(45);
                // text(`"SOMEONE IS BREAKING INTO MY HOUSE"`, width/2, height * 3/4);
                // pop();
                // this.state = `end`
                state = new MemoryBoxesScene();
            
        }
    }
            // if (this.state === `end`) {
            //     background(0)
            //     // push();
            //     // textAlign(CENTER);
            //     // fill(255)
            //     // textSize();
            //     // text(`(Someone broke into Tim's house)`, width/2, height/2);
            //     // pop();

            //     background(0)
            //     push();
            //     textAlign(CENTER);
            //     fill(255)
            //     textSize(45);
            //     text(`(click anywhere to hear what happens next)`, width/2, height * 3/4);
            //     textSize(30);
            //     text(`(Someone broke into Tim's house)`, width/2, height/2);
            //     pop();

            //     if (!punchSound.isPlaying()) {
            //         state = new MemoryBoxesScene();
            //     }

            // }
                
            // if (this.state === `end` && !punchSound.isPlaying) {
            //     state = new MemoryBoxesScene();
                // this.currentTime = int(millis()/ 1000);
                // this.countDown = this.timeLimit - this.currentTime;

                // if( this.countDown < 0) {
                //     this.countDown = 0  
                    
            // }

                // if (!punchSound.isPlaying && this.countDown === 0) {
                //     state = new MemoryBoxesScene();
                // }
        

            
                 
                
           
       

            

            

  



           
                
            
            
        
    }

    // setupButton() {
        
    //     this.input.position(560, 200);
        
    //     this.button.position(730, 200);
        
    // }
        // setupButton() {
        //     this.input = createInput();
        //     this.input.position(560, 200);
        //     this.button = createButton("search");
        //     this.button.position(730, 200);
        //     this.button.mousePressed();
            // setupButton() {
        //     // this.input = createInput();
        // //     this.input.position(20, 30);
        //     this.button = createButton("search");
        //     this.button.position(730, 200);
        //     console.log(`button`)
        //     this.button.mousePressed(this.drawName());
        //     this.input.alt.style(index, 1000);
    
        //     noStroke();
        //     text("Enter your name.", 20, 20);
        // }
    
        setUpInstructions() {
            // Get the element in the array at the CURRENT index (starts at 0 and goes up)
            this.dialog = this.computerSearch[this.currentLine];
            // Display the string in that element on the canvas
            textSize(20)
            text(this.dialog, width/2 , height * 9/20);
        }
    
    
    

    // search() {
    //     push();
    //     textAlign(CENTER);
    //     textSize(10);
    //     textFont(robotoFont);
    //     text(`Heterai Deitxira Deviains`, 387, 193 )
    //     pop();
    // }

    mousePressed() {
        // Go to the next line in the soliloquy
        this.currentLine = this.currentLine + 1;
        // Check if we've reached the LENGTH of the array
        // If we have, we've gone past the end because we started counting at 0
        // The LENGTH of our array is 8, but the final element is at index 7
        if (this.currentLine === this.computerSearch.length) {
            this.currentLine = this.computerSearch.length - 1;
        // If we've gone past the end, go back one to the last real element
        // this.search();
        }

        if( mouseX > this.searchX && mouseX < this.searchX + this.searchWidth && mouseY > this.searchY && mouseY <   this.searchY + this.searchHeight ) {
            this.state = `screenBug`;
            console.log(`screenbug`)
            breakingInSound.play();
            glassSmashSound.play();
        }

        // if (this.state === `end`) {
        //     punchSound.play();
        // }
            
        


  
        
        // if (this.timer === 0 && this.state === `end`) {
        //     punchSound.play();
        //     console.log(`timeroff`)
        //     }
       
        
    }


    // drawName() {
    //     textSize(30);
        // this.name = this.input.value();
        // for (let i=0; i < 30; i++) {
        //   fill(random(255));
        //   text(this.name, random(width), random(height));
        // }
    //   }
}
