import Person from "./Person.js";
import * as util from "../utils.js";

export default class Map {
    constructor(config) {
        this.gameObjects = config.gameObjects;
        this.walls = config.walls ?? {};

        this.lowLayer = new Image();
        this.lowLayer.src = config.lowLayerSrc ?? "";

        // this.midLayer = new Image();
        // this.midLayer.src = config.midLayerSrc ?? "";

        this.upLayer = new Image();
        this.upLayer.src = config.upLayerSrc ?? "";
    };

    drawLowLayer(ctx, cameraPerson){
        ctx.drawImage(this.lowLayer, util.withGrid(10.5)-cameraPerson.x, util.withGrid(6)-cameraPerson.y);
    };

    drawMidLayer(ctx, cameraPerson){
        //ctx.drawImage(this.midLayer, withGrid(10.5)-cameraPerson.x, withGrid(6)-cameraPerson.y);
    };

    drawUpLayer(ctx, cameraPerson){
        ctx.drawImage(this.upLayer, util.withGrid(10.5)-cameraPerson.x, util.withGrid(6)-cameraPerson.y);
    };

    isSpaceTaken(currentX, currentY, direction) {
        const {x,y} = util.nextPosition(currentX, currentY, direction);
        return this.walls[`${x},${y}`] ?? false;
    };

    mountObjects() {
        Object.values(this.gameObjects).forEach(o => {
            // TODO: If this needs to mount
            o.mount(this);
        })
    }

    addWall(x, y) {
        this.walls[`${x},${y}`] = true;
    }

    deleteWall(x, y) {
        delete this.walls[`${x},${y}`];
    }

    moveWall(wasX, wasY, direction) {
        this.deleteWall(wasX, wasY);
        const {x,y} = util.nextPosition(wasX, wasY, direction);
        this.addWall(x,y);
    }
};

window.GameMaps = {
    DemoRoom: {
        lowLayerSrc: "/images/maps/DemoLower.png",
        // midLayerSrc: "",
        upLayerSrc: "/images/maps/DemoUpper.png",
        gameObjects: {
            hero: new Person({
                isPlayerControlled: true,
                x: util.withGrid(5),
                y: util.withGrid(6),
            }),
            npc1: new Person({
                isPlayerControlled: false,
                x: util.withGrid(7),
                y: util.withGrid(9),
                src: "/images/characters/people/npc1.png"    
            })
        },
        walls: {
            // Up Wall
            [util.asGridCoord(1,3)]:true,
            [util.asGridCoord(2,3)]:true,
            [util.asGridCoord(3,3)]:true,
            [util.asGridCoord(4,3)]:true,
            [util.asGridCoord(5,3)]:true,
            [util.asGridCoord(6,4)]:true,
            [util.asGridCoord(7,2)]:true,
            [util.asGridCoord(8,4)]:true,
            [util.asGridCoord(9,3)]:true,
            [util.asGridCoord(10,3)]:true,
            // Down Wall
            [util.asGridCoord(1,10)]:true,
            [util.asGridCoord(2,10)]:true,
            [util.asGridCoord(3,10)]:true,
            [util.asGridCoord(4,10)]:true,
            [util.asGridCoord(5,11)]:true,
            [util.asGridCoord(6,10)]:true,
            [util.asGridCoord(7,10)]:true,
            [util.asGridCoord(8,10)]:true,
            [util.asGridCoord(9,10)]:true,
            [util.asGridCoord(10,10)]:true,
            //Left Wall
            [util.asGridCoord(0,4)]:true,
            [util.asGridCoord(0,5)]:true,
            [util.asGridCoord(0,6)]:true,
            [util.asGridCoord(0,7)]:true,
            [util.asGridCoord(0,8)]:true,
            [util.asGridCoord(0,9)]:true,
            //Right Wall
            [util.asGridCoord(11,4)]:true,
            [util.asGridCoord(11,5)]:true,
            [util.asGridCoord(11,6)]:true,
            [util.asGridCoord(11,7)]:true,
            [util.asGridCoord(11,8)]:true,
            [util.asGridCoord(11,9)]:true,
            // Table
            [util.asGridCoord(7,6)]:true,
            [util.asGridCoord(8,6)]:true,
            [util.asGridCoord(7,7)]:true,
            [util.asGridCoord(8,7)]:true
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