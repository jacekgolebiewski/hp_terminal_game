class Direction {
    static get N() {
        return new Direction(0, -1)
    }
    static get S() {
        return new Direction(0, 1);
    }
    static get W() {
        return new Direction(1, 0);
    }
    static get E() {
        return new Direction(-1, 0);
    }

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    same(dir){
        return this.x === dir.x && this.y === dir.y;
    }

}

module.exports = Direction;
