import Person from "./Person.js";
import { withGrid } from "../utils.js";

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

    drawLowLayer(ctx, cameraPerson){
        ctx.drawImage(this.lowLayer, withGrid(10.5)-cameraPerson.x, withGrid(6)-cameraPerson.y);
    };

    drawMidLayer(ctx, cameraPerson){
        //ctx.drawImage(this.midLayer, withGrid(10.5)-cameraPerson.x, withGrid(6)-cameraPerson.y);
    };

    drawUpLayer(ctx, cameraPerson){
        ctx.drawImage(this.upLayer, withGrid(10.5)-cameraPerson.x, withGrid(6)-cameraPerson.y);
    };
};

window.GameMaps = {
    DemoRoom: {
        lowLayerSrc: "/images/maps/DemoLower.png",
        // midLayerSrc: "",
        upLayerSrc: "/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: withGrid(5),
                y: withGrid(6),
            }),
            npc1: new Person({
                isPlayerControlled: false,
                x:withGrid(7),
                y:withGrid(9),
                src: "/images/characters/people/npc1.png"    
            })
        }
    },
    Kitchen: {
        lowLayerSrc: "/images/maps/KitchenLower.png",
        // midLayerSrc: "",
        upLayerSrc: "/images/maps/KitchenUpper.png",
        // gameObjects: {
        //     hero: new GameObject({
        //         x: 3,
        //         y: 5,
        //     }),
        //     npca: new GameObject({
        //         x:7,
        //         y:6,
        //         src: "/images/characters/people/npc2.png"    
        //     }),
        //     npcb: new GameObject({
        //         x:10,
        //         y:8,
        //         src: "/images/characters/people/npc3.png"    
        //     })
        // }
    },
    // Street: {
    //     //
    // }
};