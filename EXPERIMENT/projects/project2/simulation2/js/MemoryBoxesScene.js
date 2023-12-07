class MemoryBoxesScene {
    constructor() {
        this.numBoxes = 4;
this.boxes = [];
this.memoryData = [
{
  scene: Memory1,
  fill: color(245, 66, 221)
},
{
  scene: Memory2,
  fill: color(194, 245, 66)
},
{
  scene: Memory3,
  fill: color(245, 123, 66)
},
{
  scene: Memory4,
  fill: color(56, 232, 229)
}
]; // The scenes each memory box should lead to
for (let i = 0; i < this.numBoxes; i++) {
  let x = random(0, width);
  let y = random(0, height);
  let size = 100;
  let memoryBoxes = new MemoryBoxes(x, y, size, this.memoryData[i].scene, this.memoryData[i].fill); // We pass through the SCENE this memory box leads to
  memoryBoxes.setUpBox();
  this.boxes.push(memoryBoxes);
}
        // this.numBoxes = 4;
        // this.boxes = [];
        // this.scenes = [Memory1, Memory2, Memory3, Memory4]; // The scenes each memory box should lead to
        // for (let i = 0; i < this.numBoxes; i++) {
        //     let x = random(0, width);
        //     let y = random(0, height);
        //     let size = 100;
        //     let memoryBoxes = new MemoryBoxes(x, y, size, this.scenes[i]); // We pass through the SCENE this memory box leads to
        //     memoryBoxes.setUpBox();
        //     this.boxes.push(memoryBoxes);
        // }
    }

    draw() {
        background(memoryImage);

        for (let i = 0; i < this.boxes.length; i++) {
            let memoryBoxes = this.boxes[i];
            memoryBoxes.move();
            memoryBoxes.display();
            memoryBoxes.offScreen();
            memoryBoxes.instruction()
            console.log(`moved`)
        }
    }

    mousePressed() {
        // Loop through every flower in the garden
        for (let i = 0; i < this.boxes.length; i++) {
            // Get the current flower in the loop
            let memoryBoxes = this.boxes[i];
            // Call the flower's mousePressed() method
            memoryBoxes.mousePressed();
        }
    }
}