import Overworld from "./classes/Overworld.js";
import GameObject from "./classes/GameObject.js";

const overworld = new Overworld({
    canvas: document.querySelector(".game-canvas")});
overworld.init();