class Memory2 {
    constructor() {
        this.input = this.input;
        this.button = this.button;
        this.message = this.message;
        this.name = this.name;
        this.i = this.i;
        
        
    }

    setup() {
        this.input = createInput();
        this.input.position(20, 30);
        this.button = createButton("search");
        this.button.position(160, 30);
        this.button.mousePressed();

        noStroke();
        text("Enter your name.", 20, 20);
    }

    draw() {
        console.log("Memory 2");

        background(computerScreenImage);
        this.setup();
        this.drawName();
        
        
        

        
        
    }

    mousePressed() {
    
}

   
drawName() {
  textSize(30);
  this.name = this.input.value();
  for ( this.i=0; this.i < 30; this.i++) {
    fill(random(255));
    text(this.name, random(width), random(height));
  }
}
}