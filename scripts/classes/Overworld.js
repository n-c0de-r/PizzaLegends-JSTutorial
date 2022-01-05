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
            //Draw layers
            this.map.drawLowLayer(this.ctx);
            // this.map.drawMidLayer(this.ctx);

            Object.values(this.map.gameObjects).forEach(object => {
                object.update({
                    key: this.directionInput.direction
                });
                object.sprite.draw(this.ctx);
            });

            this.map.drawUpLayer(this.ctx);
            this.render();
        });
    };
};