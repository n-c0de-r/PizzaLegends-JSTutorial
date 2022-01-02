export default class Overworld {
    constructor(config){
        this.canvas = config.canvas;
        this.ctx = this.canvas.getContext("2d");
    }

    init() {
        //Draw background room
        const image = new Image();
        image.onload = () => {
            this.ctx.drawImage(image, 0, 0);
        };
        image.src = "../../images/maps/DemoLower.png";

        const x = 5;
        const y = 6;

        //Draw character
        const shadow = new Image();
        shadow.onload = () => {
            this.ctx.drawImage(
                shadow,
                0, 0, //Start crop position, x, y
                32, 32, //Size of frame, width, height);
                x * 16-8, y* 16-18, //Character position (16=tile size)
                32, 32 //Size of sprite
            );
        };
        shadow.src = "../../images/characters/shadow.png";

        //Draw character
        const hero = new Image();
        hero.onload = () => {
            this.ctx.drawImage(
                hero,
                0, 0, //Start crop position, x, y
                32, 32, //Size of frame, width, height);
                x * 16-8, y* 16-18, //Character position (16=tile size)
                32, 32 //Size of sprite
            );
        };
        hero.src = "../../images/characters/people/hero.png";
    }
}