class Memory3 {
    constructor() {
        this.playbackRate = 0.6;
        this.state = `voice1`
        // this.sounds = [
        //     voice1Sound,
        //     voice2Sound,
        //     voice3Sound,
        //     voice4Sound,
        //     voice5Sound,
        //     voice6Sound,
        // ];
        // this.currentSound = 0;
    }

    draw() {
        console.log("Memory 3");
        background(0);

        if (this.state === `voice1`) {
            voice1Sound.rate(this.playbackRate);

            if (!voice1Sound.isPlaying()) {
                this.state = `voice2`
            }
        }
        else if (this.state === `voice2`) {
            voice2Sound.rate(this.playbackRate);

            if (!voice2Sound.isPlaying()) {
                this.state = `voice3`
            }
        }
        else if (this.state === `voice3`) {
            voice3Sound.rate(this.playbackRate);

            if (!voice3Sound.isPlaying()) {
                this.state = `voice4`
            }
        }
        else if (this.state === `voice4`) {
            voice4Sound.rate(this.playbackRate);

            if (!voice4Sound.isPlaying()) {
                this.state = `voice5`
            }
        }
        else if (this.state === `voice5`) {
            voice5Sound.rate(this.playbackRate);

            if (!voice5Sound.isPlaying()) {
                this.state = `voice6`
            }
        }
        else if (this.state === `voice6`) {
            voice6Sound.rate(this.playbackRate);

            if (!voice2Sound.isPlaying()) {
                state = new MemoryBoxesScene();
            }
        }
        

        }
    

    mousePressed() {

    if (this.state === `voice1`) {
        voice1Sound.play();
    }
    else if (this.state === `voice2`) {
        voice2Sound.play();
    }
    else if (this.state === `voice3`) {
        voice3Sound.play();
    }
    else if (this.state === `voice4`) {
        voice4Sound.play();
    }
    else if (this.state === `voice5`) {
        voice5Sound.play();
    }
    else if (this.state === `voice6`) {
        voice6Sound.play();
    }
    //     this.currentSound = this.currentSound + 1;
    //     // Check if we've reached the LENGTH of the array
    //     // If we have, we've gone past the end because we started counting at 0
    //     // The LENGTH of our array is 8, but the final element is at index 7
    //     if (this.currentSound === this.sounds.length) {
    //         state = new MemoryBoxesScene();
    // }
}


// or (var i = 0; i < sounds.length; i++) {
//     /*
//         sounds[i] will reference each sound
//         as i counts through the array
//         0, 1, 2
//     */
//     if (this.sounds[i].isPlaying()) {
//         fill('gold');
//     } else {
//         fill('plum');
//     }
//     /*
//         we have to change the position of each ellipse
//         start at 100 and add 100 for each sound ia
//     */
//     ellipse(100 + i * 100, height / 2, 100);
// }
// }

// function keyTyped() {
// if (key == 'a') {
//     sounds[0].play();
// }
// if (key == 'b') {
//     sounds[1].play();
// }
// if (key == 'c') {
//     sounds[2].play();
// }
}