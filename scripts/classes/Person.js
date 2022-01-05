import GameObject from "./GameObject.js";

export default class Person extends GameObject {
    constructor(config) {
        super(config);
        this.movementProgressRemaining = 0;

        this.isPlayerControlled = config.isPlayerControlled ?? false;

        this.directionUpdate = {
            "up": ["y", -1],
            "down": ["y", 1],
            "left": ["x", -1],
            "right": ["x", 1],
        }
    }

    update(state) {
        this.updatePosition();

        if (this.isPlayerControlled && this.movementProgressRemaining === 0 && state.key) {
            this.direction = state.key;
            this.movementProgressRemaining = 16;
        }
    }

    updatePosition() {
        if (this.movementProgressRemaining>0) {
            const [coordinate, change] = this.directionUpdate[this.direction];
            this[coordinate] += change;
            this.movementProgressRemaining -= 1;
        }
    }
}