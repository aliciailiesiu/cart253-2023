class MemoryBoxesScene {
    constructor() {
        this.numBoxes = 4;
this.boxes = [];
this.memoryData = [
{
  scene: Memory1,
  fill: color(255, 100, 100)
},
{
  scene: Memory2,
  fill: color(255, 255, 255)
},
{
  scene: Memory3,
  fill: color(255, 100, 100)
},
{
  scene: Memory4,
  fill: color(255, 100, 100)
}
]; // The scenes each memory box should lead to
for (let i = 0; i < this.numBoxes; i++) {
  let x = random(0, width);
  let y = random(0, height);
  let size = 100;
  let memoryBoxes = new MemoryBoxes(x, y, size, this.memoryData[i].scene, this.memoryData[i].fill); // We pass through the SCENE this memory box leads to
  memoryBoxes.setUpBox();
  this.boxes.push(memoryBoxes);
  