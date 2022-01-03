import GameObject from "./GameObject.js";

export default class Map {
    constructor(config) {
        this.gameObjects = config.gameObjects;

        this.lowLayer = new Image();
        this.lowLayer.src = config.lowLayerSrc ?? "";

        // this.midLayer = new Image();
        // this.midLayer.src = config.midLayerSrc ?? "";

        this.upLayer = new Image();
        this.upLayer.src = config.upLayerSrc ?? "";
    };

    drawLowLayer(ctx){
        ctx.drawImage(this.lowLayer, 0, 0);
    };

    drawMidLayer(ctx){
        //ctx.drawImage(this.midLayer, 0, 0);
    };

    drawUpLayer(ctx){
        ctx.drawImage(this.upLayer, 0, 0);
    };
};

window.GameMaps = {
    DemoRoom: {
        lowLayerSrc: "/images/maps/DemoLower.png",
        // midLayerSrc: "",
        upLayerSrc: "/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 5,
                y: 6,
            }),
            npc1: new GameObject({
                x:7,
                y:9,
                src: "/images/characters/people/npc1.png"    
            })
        }
    },
    Kitchen: {
        lowLayerSrc: "/images/maps/KitchenLower.png",
        // midLayerSrc: "",
        upLayerSrc: "/images/maps/KitchenUpper.png",
        gameObjects: {
            hero: new GameObject({
                x: 3,
                y: 5,
            }),
            npca: new GameObject({
                x:7,
                y:6,
                src: "/images/characters/people/npc2.png"    
            }),
            npcb: new GameObject({
                x:10,
                y:8,
                src: "/images/characters/people/npc3.png"    
            })
        }
    },
    // Street: {
    //     //
    // }
};