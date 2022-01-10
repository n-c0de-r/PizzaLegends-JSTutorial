import GameMap from "./GameMap.js";
import DirectionInput from "./Direction.js";

export default class Overworld {
    constructor(config){
        this.canvas = config.canvas;
        this.ctx = this.canvas.getContext("2d");
        this.map = null;
    };

    init() {
        this.map = new GameMap(window.GameMaps.DemoRoom);
        this.directionInput = new DirectionInput();
        this.directionInput.init();
        this.render();
    };
    
    render() {
        requestAnimationFrame(() => {
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            // set camera poerson to follow
            const cameraPerson = this.map.gameObjects.hero;
            
            // Update all Objects Positions
            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    key: this.directionInput.direction
                });
            });

            //Draw layers
            this.map.drawLowLayer(this.ctx, cameraPerson);
            // this.map.drawMidLayer(this.ctx);

            Object.values(this.map.gameObjects).forEach(object => {
                object.sprite.draw(this.ctx, cameraPerson);
            });

            this.map.drawUpLayer(this.ctx, cameraPerson);
            this.render();
        });
    };
};