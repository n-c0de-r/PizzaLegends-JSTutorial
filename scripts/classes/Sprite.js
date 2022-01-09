export default class Sprite {
    constructor(config) {
        this.image = new Image();
        this.image.src = config.src;
        this.image.onload = () => {
            this.isLoaded = true;
        };

        this.shadow = new Image();
        this.hasShadow = true;
        if (this.hasShadow) {
            this.shadow.src = "/images/characters/shadow.png";
        };

        this.shadow.onload = () => {
            this.shadowIsLoaded = true;
        };

        // Reference a game object
        this.gameObject = config.gameObject;

        //Config animations
        this.animations = config.animations ?? {
            "idle-down":    [ [0, 0] ], //x,y positions in sprite sheet
            "idle-right":   [ [0, 1] ],
            "idle-up":      [ [0, 2] ],
            "idle-left":    [ [0, 3] ],
            "walk-down":    [ [1, 0], [2, 0], [3, 0], [0, 0] ],
            "walk-right":   [ [1, 1], [2, 1], [3, 1], [0, 1] ],
            "walk-up":      [ [1, 2], [2, 2], [3, 2], [0, 2] ],
            "walk-left":    [ [1, 3], [2, 3], [3, 3], [0, 3] ]
        };

        this.currentAnimation = "walk-left"; //config.currentAnimation ?? "idleDown";
        this.currentAnimationFrame = 0;

        this.animationFrameLimit = config.animationFrameLimit ?? 16;
        this.animationFrameProgress = config.animationFrameProgress; 
    };

    get frame() {
        return this.animations[this.currentAnimation][this.currentAnimationFrame];
    }

    setAnimation(key) {
        if(this.currentAnimation !== key) {
            this.currentAnimation = key;
            this.currentAnimationFrame = 0;
            this.animationFrameProgress = this.animationFrameLimit;
        }
    }

    updateAnimationProgress() {
        //Frame not done animating
        if (this.animationFrameProgress >0) {
            this.animationFrameProgress -= 1;
            return;
        }

        // Play next frame
        this.animationFrameProgress = this.animationFrameLimit;
        this.currentAnimationFrame += 1;

        if (!this.frame) { // Frames done
            this.currentAnimationFrame = 0;
        }
    }

    draw(ctx) {
        let x = this.gameObject.x - 8;
        let y = this.gameObject.y - 18;

        this.shadowIsLoaded && ctx.drawImage(this.shadow,x, y);

        const [frameX, frameY] = this.frame;

        this.isLoaded && ctx.drawImage(
            this.image,
            frameX*32, frameY*32, //Start crop position, x, y
            32, 32, //Size of frame, width, height);
            x, y, //Character position (16=tile size)
            32, 32 //Size of sprite
        );
        this.updateAnimationProgress();
    };
};