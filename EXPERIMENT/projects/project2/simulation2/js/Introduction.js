class Introduction {

  constructor() {

    this.introduction = [
      `PRESS MOUSE TROUGHOUT THE GAME`,
      `PUT YOUR VOLUME UP`,
      `GOOD LUCK`,
      `(You are Tim)`,
      `(You just woke up in a forest)`,
      `(You have no idea what happened to you)`,
      `"Where am I !!!"`,
      `"What happened to me!!!!"`,
      `"My head...someone must have hit me"`,
      `"I need to get out of here"`,
      `"Why can't I remember anything"`,
      `"Ok Tim calm down and think first"`,
      `"Think think think" `,
      `"I need to focus and dive into my memories"`
    ];
    // We need a variable to store the current line we want to display
    // It should start at ZERO because that's the first index in the array
    this.currentLine = 0;
    this.fill = 0;
    this.size = 32;
  }

  draw() {
    background(forestImage);
    this.textSetup();
  }

  textSetup() {
    textAlign(CENTER, CENTER);
    textFont(shadowsFont);
    textSize(this.size);
    fill(this.fill);
    // Get the element in the array at the CURRENT index (starts at 0 and goes up)
    this.dialog = this.introduction[this.currentLine];
    // Display the string in that element on the canvas
    text(this.dialog, width / 2, height / 2);
  }

  mousePressed() {
    this.trySound();
    this.lines();
  }

  trySound() {
    if (!heartbeatSound.isPlaying()) {
    heartbeatSound.setVolume(2);
    heartbeatSound.play();
    heartbeatSound.loop();
    }
  }

  lines() {
    // Go to the next line
    this.currentLine = this.currentLine + 1;
    // Check if we've reached the LENGTH of the array
    // If we have, we've gone past the end because we started counting at 0
    if (this.currentLine === this.introduction.length) {
      // If we've gone past the end, go back one to the last real element
      this.currentLine = this.introduction.length - 1;
      state = new MemoryBoxesScene(); // Treat this as a state
      heartbeatSound.pause();
    }
  }
}
