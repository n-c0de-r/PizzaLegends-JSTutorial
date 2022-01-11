export function withGrid(num) {
    return num * 16;
}

export function asGridCoord (x, y) {
    return `${x*16},${y*16}`
}

export function nextPosition (initX, initY, direction) {
    let x = initX;
    let y = initY;
    const size = 16;

    if (direction === "right") {
        x += size;
    } else if (direction === "left") {
        x -= size;
    } else if (direction === "up") {
        y -= size;
    } else if (direction === "down") {
        y += size;
    }

    return {x,y};
}