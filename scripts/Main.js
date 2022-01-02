import Overworld from "./classes/Overworld.js";

const overworld = new Overworld({
    canvas: document.querySelector(".game-canvas")});
overworld.init();