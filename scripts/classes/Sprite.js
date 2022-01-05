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
            idleDown: [
                [0, 0] //x,y positions in sprite sheet
            ]
        };

        this.currentAnimation = config.currentAnimation ?? "idleDown";
        this.currentAnimationFrame = 0;
    };

    draw(ctx) {
        let x = this.gameObject.x - 8;
        let y = this.gameObject.y - 18;

        this.shadowIsLoaded && ctx.drawImage(this.shadow,x, y);

        this.isLoaded && ctx.drawImage(
            this.image,
            0, 0, //Start crop position, x, y
            32, 32, //Size of frame, width, height);
            x, y, //Character position (16=tile size)
            32, 32 //Size of sprite
        );
    };
};