class Direction {
    static N = new Direction(0, -1);
    static S = new Direction(0, 1);
    static W = new Direction(1, 0);
    static E = new Direction(-1, 0);

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

}

module.exports = Direction;
