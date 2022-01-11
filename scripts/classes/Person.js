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
        if (this.movementProgressRemaining>0) {
            this.updatePosition();
        } else {
            // More cases for walking will come here

            // Case: Keyboard ready 
            if (this.isPlayerControlled && state.key) {
                this.startBehaviour(state, {
                    type: "walk",
                    direction: state.key
                });
             }
             this.updateSprite(state);
        }
    }

    startBehaviour(state, behavior) {
        // Set character direction to behavior 
        this.direction = behavior.direction;
        if(behavior.type === "walk") {
            // stop if space is not free
            if (state.map.isSpaceTaken(this.x, this.y, this.direction)) return;
            // walk
            state.map.moveWall(this.x, this.y, this.direction);
            this.movementProgressRemaining = 16;
        }
    }

    updatePosition() {
        const [coordinate, change] = this.directionUpdate[this.direction];
        this[coordinate] += change;
        this.movementProgressRemaining -= 1;
    }

    updateSprite() {
        if(this.movementProgressRemaining > 0 ) {
            this.sprite.setAnimation("walk-"+this.direction);
            return;
        }
        this.sprite.setAnimation("idle-"+this.direction);
    }
}