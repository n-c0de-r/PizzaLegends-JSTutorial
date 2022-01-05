export default class DirectionInput {
    constructor() {
        this.heldDirections = [];
        this.directionMap = {
            "ArrowUp": "up",
            "ArrowDown": "down",
            "ArrowLeft": "left",
            "ArrowRight": "right",

            "KeyW": "up",
            "KeyS": "down",
            "KeyA": "left",
            "KeyD": "right",
        }
    }

    get direction() {
        return this.heldDirections[0];
    }

    init () {
        document.addEventListener("keydown", e => {
            let dir = this.directionMap[e.code];
            let index = this.heldDirections.indexOf(dir);
            if (dir && index === -1) {
                this.heldDirections.push(dir);
            }
        });
        document.addEventListener("keyup", e => {
            let dir = this.directionMap[e.code];
            let index = this.heldDirections.indexOf(dir);
            if (index >= -1) {
                this.heldDirections.splice(index, 1);
            }
        })
    }
}